-- ==========================================================
-- Enable Row Level Security
-- ==========================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- ==========================================================
-- Public Access Policies
-- ==========================================================

CREATE POLICY public_read_approved_properties
ON properties
FOR SELECT
USING (status = 'approved');

CREATE POLICY public_read_active_sponsors
ON sponsors
FOR SELECT
USING (active_status = TRUE);

-- ==========================================================
-- Property Owner Policies
-- ==========================================================

CREATE POLICY owner_select_properties
ON properties
FOR SELECT
USING (owner_id = auth.uid());

CREATE POLICY owner_insert_properties
ON properties
FOR INSERT
WITH CHECK (owner_id = auth.uid());

CREATE POLICY owner_update_properties
ON properties
FOR UPDATE
USING (
    owner_id = auth.uid()
    AND status IN ('draft','rejected')
);

CREATE POLICY owner_delete_properties
ON properties
FOR DELETE
USING (owner_id = auth.uid());

-- ==========================================================
-- Inquiry Policies
-- ==========================================================

CREATE POLICY public_insert_inquiries
ON inquiries
FOR INSERT
WITH CHECK (TRUE);

-- ==========================================================
-- Administrator Policy
-- ==========================================================

CREATE POLICY admin_full_access
ON properties
FOR ALL
USING (TRUE)
WITH CHECK (TRUE);