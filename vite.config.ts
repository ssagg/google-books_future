import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, "src/index.ts"),
  //     name: "myLib",
  //     fileName: "myLib",
  //   },
  //   rollupOptions: {
  //     external: [/^node:\w+/], // <-- ignores all 'node:*'
  //   },
  // },
  server: {
    // open: true,
    host: true,
    strictPort: true,
    port: 8080, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true,
    },
  },
});
