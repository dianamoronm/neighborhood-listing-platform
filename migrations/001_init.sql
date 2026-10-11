-- ============================================================================
-- PostgreSQL 13+ DDL: Profiles, Properties, Sponsors & Inquiries
-- ============================================================================

-- Native in PostgreSQL 13+; pgcrypto fallback for older environments
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. ENUM Type for User Roles
CREATE TYPE user_role AS ENUM ('admin', 'owner', 'user');

-- 2. PROFILES Table
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. PROPERTIES Table
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    approved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. SPONSORS Table
CREATE TABLE sponsors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    website VARCHAR(500),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 5. PROPERTY_SPONSORS (Many-to-Many Association Table)
CREATE TABLE property_sponsors (
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    sponsor_id UUID NOT NULL REFERENCES sponsors(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (property_id, sponsor_id)
);

-- 6. INQUIRIES Table
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- Foreign Key & Query Performance Indexes
-- (PostgreSQL does NOT automatically index foreign key columns)
-- ============================================================================

CREATE INDEX idx_properties_owner_id ON properties(owner_id);
CREATE INDEX idx_properties_city_state ON properties(city, state);
CREATE INDEX idx_properties_approved ON properties(approved);

CREATE INDEX idx_property_sponsors_sponsor_id ON property_sponsors(sponsor_id);

CREATE INDEX idx_inquiries_property_id ON inquiries(property_id);
CREATE INDEX idx_inquiries_sender_id ON inquiries(sender_id);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at DESC);