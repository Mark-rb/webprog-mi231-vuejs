import { createClient } from '@supabase/supabase-js'
 
  export const supabase = createClient('https://liukvslaiikpylheburl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpdWt2c2xhaWlrcHlsaGVidXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NjQ1MDQsImV4cCI6MjA1NDE0MDUwNH0.ATlD5sXtmwyStsb8TOiIlT1HELfltLOt14Uauz7X4CM')