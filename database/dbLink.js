import { createClient } from "@supabase/supabase-js";
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_ANON_KEY;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(supabaseUrl, supabaseKey);