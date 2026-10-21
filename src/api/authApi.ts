import axios from "axios";
export const authApi = axios.create({
  baseURL: "https://gjwupgawtlhaetxkhant.supabase.co/auth/v1",
  headers: {
    "content-Type": "application/json",
    apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  },
});
