-- ==========================================================
-- Practical Persistence Evaluation
-- Sponsor-Backed Property Listing & Inquiry Subsystem
-- ==========================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==========================================================
-- PROFILES
-- ==========================================================

CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY,
    role TEXT NOT NULL CHECK (
        role IN ('admin','property_owner','sponsor','public')
    ),
    created_at TIMESTAMPTZ NOT NULL
        DEFAULT timezone('utc'::text, now())
);

-- ==========================================================
-- SPONSORS
-- ==========================================================

CREATE TABLE IF NOT EXISTS sponsors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL CHECK (char_length(name) >= 2),
    tier TEXT NOT NULL CHECK (
        tier IN ('gold','silver','bronze')
    ),
    active_status BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL
        DEFAULT timezone('utc'::text, now())
);

-- ==========================================================
-- PROPERTIES
-- ==========================================================

CREATE TABLE IF NOT EXISTS properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    owner_id UUID NOT NULL
        REFERENCES profiles(id)
        ON DELETE RESTRICT,

    address TEXT NOT NULL,

    price NUMERIC(12,2)
        NOT NULL
        CHECK (price >= 0),

    bedrooms INTEGER
        NOT NULL
        CHECK (bedrooms >= 0),

    bathrooms NUMERIC(3,1)
        NOT NULL
        CHECK (bathrooms >= 0),

    square_feet INTEGER
        NOT NULL
        CHECK (square_feet > 0),

    status TEXT NOT NULL
        DEFAULT 'draft'
        CHECK (
            status IN (
                'draft',
                'pending',
                'approved',
                'rejected'
            )
        ),

    created_at TIMESTAMPTZ NOT NULL
        DEFAULT timezone('utc'::text, now())
);

-- ==========================================================
-- PROPERTY_SPONSORS
-- ==========================================================

CREATE TABLE IF NOT EXISTS property_sponsors (
    property_id UUID
        REFERENCES properties(id)
        ON DELETE CASCADE,

    sponsor_id UUID
        REFERENCES sponsors(id)
        ON DELETE CASCADE,

    PRIMARY KEY (property_id, sponsor_id)
);

-- ==========================================================
-- INQUIRIES
-- ==========================================================

CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    property_id UUID NOT NULL
        REFERENCES properties(id)
        ON DELETE CASCADE,

    inquirer_email TEXT NOT NULL
        CHECK (
            inquirer_email ~*
            '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
        ),

    message TEXT NOT NULL
        CHECK (char_length(message) >= 10),

    created_at TIMESTAMPTZ NOT NULL
        DEFAULT timezone('utc'::text, now())
);