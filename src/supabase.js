import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://fjoffxdkcartnrafkoyf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqb2ZmeGRrY2FydG5yYWZrb3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzNjIwOTAsImV4cCI6MTk5NDkzODA5MH0.9seihFXoZf1QoxcHMSnGvmAcN9Us9YT5aFPWRIvNy98"
);
export default supabase;
