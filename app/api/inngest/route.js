import { serve } from "inngest/next";
import { inngest } from '@/config/inngest.js';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    
  ],
});
