// ==================== CONFIGURATION ====================
// REPLACE THESE WITH YOUR ACTUAL KEYS
const SUPABASE_URL = "https://cuhmiqvzhcusxzelxxpg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1aG1pcXZ6aGN1c3h6ZWx4eHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxOTA4NTYsImV4cCI6MjA3OTc2Njg1Nn0.JMZ7fL-4A3XJEiZV4kp_TlZwwf_A6V42T_GgZHFs2W8";
const YOCO_PUBLIC_KEY = "pk_live_87123875V4lebnV243d4";

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);