import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeleteion, syncUserUpdation } from '@/config/inngest.js';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeleteion,
  ],
});
