<<<<<<< Updated upstream
import { FC, useEffect } from "react";
import { Text, View } from "@tarojs/components";
import { useDidShow } from "@tarojs/taro";

const AboutPage: FC = () => {
  const goToPage = () => {
    window.open("http://www.baidu.com", "_self");
  };
  useDidShow(() => {
    console.log("useDidShow");
  });
  useEffect(() => {
    console.log("useEffect");
  }, []);
=======
import React from "react";
import { Uploader, Cell } from "@nutui/nutui-react-taro";
import { Dongdong } from "@nutui/icons-react-taro";
// utils/upload.ts
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

const Demo1 = () => {
  const uploadUrl = "https://my-json-server.typicode.com/linrufeng/demo/posts";
  const onStart = () => {
    console.log("start触发");
  };
  const beforeUpload = async (files: File[]) => {
    console.log("beforeUpload");
    const allowedTypes = ["image/png"];
    const filteredFiles = Array.from(files).filter((file) =>
      allowedTypes.includes(file.type),
    );
    return filteredFiles;
  };
  const uploadSingleFile = async (
    fileType: "image" | "video" | "file" = "image",
  ) => {
    try {
      // 根据类型选择文件
      let tempFilePath = "";
      if (fileType === "image") {
        const res = await Taro.chooseImage({ count: 1 });
        tempFilePath = res.tempFilePaths[0];
      } else if (fileType === "video") {
        const res = await Taro.chooseVideo({ sourceType: ["album", "camera"] });
        tempFilePath = res.tempFilePath;
      } else {
        const res = await Taro.chooseMessageFile({
          count: 1,
          type: "file",
        });
        tempFilePath = res.tempFiles[0].path;
      }

      // 上传文件
      const uploadRes = await Taro.uploadFile({
        url: `/${fileType}`,
        filePath: tempFilePath,
        name: "file",
        header: {
          Authorization: `Bearer ${Taro.getStorageSync("token")}`,
        },
      });

      if (uploadRes.statusCode === 200) {
        const data = JSON.parse(uploadRes.data);
        return data;
      }
      throw new Error("上传失败");
    } catch (error) {
      console.error("上传失败:", error);
    }
  };

>>>>>>> Stashed changes
  return (
    <Cell style={{ flexWrap: "wrap" }}>
      <Uploader
        url={uploadUrl}
        onStart={onStart}
        beforeUpload={beforeUpload}
        style={{
          marginInlineEnd: "10px",
          marginBottom: "10px",
        }}
      />
      <Uploader
        url={uploadUrl}
        uploadLabel="商品主图"
        onStart={onStart}
        style={{ marginInlineEnd: "10px" }}
      />
      {/* <Uploader url={uploadUrl} uploadIcon={<Dongdong />} onStart={onStart} /> */}
      <View onClick={() => uploadSingleFile("image")}>upload</View>
    </Cell>
  );
};
<<<<<<< Updated upstream

export default AboutPage;
=======
export default Demo1;
>>>>>>> Stashed changes
