import type { UserConfigExport } from "@tarojs/cli";

export default {
  mini: {},
  h5: {
    devServer: {
      "/pdf": {
        target: "https://neptia-love.oss-cn-beijing.aliyuncs.com",
        changeOrigin: true,
        pathRewrite: { "^/pdf": "" },
      },
    },
  },
} satisfies UserConfigExport<"vite">;
