import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd());
//   return {
//     plugins: [vue()],
//     resolve: {
//       alias: {
//         "@": fileURLToPath(new URL("./src", import.meta.url)),
//       },
//     },
//     server: {
//       proxy: {
//         "^/api": {
//           target: env.VITE_PORT,
//           changeOrigin: true,
//           secure: false,
//           withCredentials: true,
//           rewrite: (path) => path.replace(/^\/api/, ``),
//         },
//       },
//       port: 4000,
//     },
//   };
// });
