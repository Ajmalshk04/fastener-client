// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://fastener-server.onrender.com",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// })

import path from "path"
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const baseUrl = env.VITE_APP_BASE_URL || 'http://localhost:5000';
  if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
    console.error(`Error: VITE_APP_BASE_URL must be a valid URL. Got: ${baseUrl}`);
    process.exit(1);
  }

  console.log(`Mode: ${mode}, Proxy target: ${baseUrl}`);

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      // port: 5174, // Fix the port to avoid random changes (5174 vs 5173)
      proxy: {
        '/api/v1': {
          target: baseUrl,
          changeOrigin: true,
          secure: mode === 'production', // Use HTTPS in production
          // No rewrite needed since backend expects /api/v1
        },
      },
    },
    define: {
      'import.meta.env.VITE_APP_BASE_URL': JSON.stringify(baseUrl), // Expose to client
    },
  };
});