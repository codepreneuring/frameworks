import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    server: {
        proxy: {
            "/auth": "http://localhost:8888",
            "/api": "http://localhost:8888",
            "/socket.io": {
                target: "ws://localhost:8888",
                ws: true,
            },
        },
    },
    esbuild: {
        drop: ["console", "debugger"],
    },
});
