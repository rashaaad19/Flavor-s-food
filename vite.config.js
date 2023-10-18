import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Flavor-s-food/", // Adjust this path based on your GitHub Pages URL
  plugins: [react()],
});
