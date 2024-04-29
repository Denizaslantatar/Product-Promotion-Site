import {fileURLToPath, URL} from "node:url";
import viteCompression from "vite-plugin-compression";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import path from "path";
/* eslint-disable */
const GenerateAndCopyHtaccess = async () => {
    console.log("Generating .htaccess");
    const htaccess = `RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]`;
    fs.writeFileSync(path.join(__dirname, "dist", ".htaccess"), htaccess);
    console.log("Copied .htaccess to dist");
};

const GenerateHtaccess = async () => {
    return {
        name: "after-build",
        apply: "build",
        async closeBundle() {
            await GenerateAndCopyHtaccess();
        },
    };
};
export default defineConfig(async () => ({
    plugins: [vue(), viteCompression(), await GenerateHtaccess()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
            },
        },
        devSourcemap: true,
    },

    server: {
        port: 1212,
    },
}));
