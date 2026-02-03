import React, { useState } from "react";
import { Uploader, Button, Loading } from "@nutui/nutui-react-taro";
import { Star } from "@nutui/icons-react-taro";

const Demo4 = () => {
  const uploadUrl = "http://192.168.0.100:8080/upload";
  const [fileList, setFileList] = useState<any[]>([
    {
      name: "文件2.png",
      url: "https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif",
      status: "success",
      message: "上传成功",
      type: "image",
      uid: "123",
    },
    {
      name: "文件2.png",
      url: "https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif",
      status: "error",
      message: "上传失败",
      type: "image",
      uid: "124",
      failIcon: <Star style={{ color: "white" }} />,
    },
  ]);
  const beforeXhrUpload = (taroUploadFile: any, options: any) => {
    // console.log(options);
    options.withCredentials = false;
    console.log("beforeXhrUpload");
    const uploadTask = taroUploadFile({
      url: options.url,
      filePath: options.taroFilePath,
      fileType: options.fileType,
      header: {
        // "Content-Type": "multipart/form-data",
        ...options.headers,
      },
      formData: options.formData,
      name: options.name,
      success(response: { errMsg: any; statusCode: number; data: string }) {
        console.log(response);
        if (options.xhrState === response.statusCode) {
          // options.onSuccess?.(response, options);
        } else {
          // options.onFailure?.(response, options);
        }
      },
      fail(e: any) {
        options.onFailure?.(e, options);
      },
    });
    options.onStart?.(options);
    uploadTask.progress(
      (res: {
        progress: any;
        totalBytesSent: any;
        totalBytesExpectedToSend: any;
      }) => {
        options.onProgress?.(res, options);
      },
    );
  };

  return (
    <Uploader
      url={uploadUrl}
      sourceType={["album"]}
      defaultValue={fileList}
      beforeXhrUpload={beforeXhrUpload}
      onChange={(e) => {
        console.log("onchange", e);
      }}
      onSuccess={(e) => {
        console.log("success");
      }}
      maxCount="10"
      multiple
      // previewType="picture" // 🔥 重点：图片预览模式
      previewType="list"
    >
      <Button type="success" size="small">
        上传文件
      </Button>
    </Uploader>
  );
};
export default Demo4;
