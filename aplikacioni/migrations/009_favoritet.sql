
CREATE TABLE IF NOT EXISTS favoritet (
  user_id TEXT NOT NULL REFERENCES profilet(github_id) ON DELETE CASCADE,
  udhetim_id TEXT NOT NULL REFERENCES udhetimet(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT favoritet_user_udhetim_unique UNIQUE (user_id, udhetim_id)
);

CREATE INDEX IF NOT EXISTS idx_favoritet_user_id
ON favoritet(user_id);
