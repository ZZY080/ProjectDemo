import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to={"/auth"} />,
    },
    //   鉴权页面
    {
      path: "/auth",
      element: <AuthPage />,
    },
    // 主页
    {
      path: "/home",
      element: <HomePage />,
      children: [
        //  home user页
        {
          path: "/home",
          element: <Navigate to={"/home/user"} />,
        },
        {
          path: "user",
          element: <UserManage />,
        },
        {
          path: "category",
          element: <CategoryManage />,
        },
        {
          path: "commodity",
          element: <CommodityManage />,
        },

        {
          path: "article",
          element: <ArticleManage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enables future flag for relative paths in splats
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
