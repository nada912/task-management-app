const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fhpfamkxhayisbszpqrg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZocGZhbWt4aGF5aXNic3pwcXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNjIwNTMsImV4cCI6MjAzNjczODA1M30.9Ng7zBoWNF-ZevVBvsTIPcd0eXjZ3_d1yXMc535Ei58';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
