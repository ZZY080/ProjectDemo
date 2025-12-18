import type { UserConfigExport } from "@tarojs/cli";
const path = require("path");
export default {
  mini: {},
  h5: {
    devServer: {
      host: "0.0.0.0", // 必须
      port: 10086,
      https: false, // ngrok 自带 HTTPS，可不需要本地自签
      allowedHosts: "all", // ✅ 允许任意 host，解决 ngrok 动态域名报错
      proxy: {
        "/pdf": {
          target: "https://neptia-love.oss-cn-beijing.aliyuncs.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pdf/, ""),
        },
      },
    },
  },
} satisfies UserConfigExport<"vite">;
