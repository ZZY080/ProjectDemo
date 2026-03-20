import React, { useEffect } from "react";
import { useDidShow, useDidHide } from "@tarojs/taro";

// 尝试加载 pages 目录下的所有 tsx 文件
let pageModules: any = null;
try {
  // const a = require.context("./pages", true, /\.(tsx|ts|js|jsx)$/);
  // const a = require.context(
  //   "./pages",
  //   true,
  //   /^(?!.*\.config\.(ts|js)$).*\.(tsx|ts|jsx|js)$/,
  // );
  const a = require.context("./", true, /\.(png|jpg|jpeg|gif|svg)$/);

  pageModules = a.keys();
  console.log("加载的页面模块:", pageModules);
} catch (error) {
  console.error("加载页面模块时出错:", error);
  pageModules = [];
}

// 全局样式
import "./app.scss";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.log("App 组件已挂载，页面模块:", pageModules);
  }, []);

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
}

export default App;
