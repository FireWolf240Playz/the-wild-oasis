import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fxbsiptetbgpysnxkedi.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4YnNpcHRldGJncHlzbnhrZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MTYxMzMsImV4cCI6MjAzMDM5MjEzM30.s-wsrSzIRcF_SiJG_zWbne1cJG9gcwRlziBypeTTgPE`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
