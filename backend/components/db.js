const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'postgresql://postgres.ufxjgdplumapkpmxtaat';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmeGpnZHBsdW1hcGtwbXh0YWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwMjcyNDEsImV4cCI6MjAzNjYwMzI0MX0.BZfh_KBPtXyDFJ2BzXyRbAazz-f1BhzfKcqA0spVXv8';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
