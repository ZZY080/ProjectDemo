import { Dongdong, Star } from "@nutui/icons-react-taro";
import { Button, Cell, FileItem, Uploader } from "@nutui/nutui-react-taro";
import { useState } from "react";

const Demo1 = () => {
  const uploadUrl = "http://192.168.2.6:8080/upload";
  const [fileList, setFileList] = useState<any[]>([
    {
      name: "文件2.png",
      url: "https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif",
      status: "success",
      message: "上传成功",
      type: "image",
      uid: "123",
    },
    // {
    //   name: "文件3.png",
    //   url: "https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif",
    //   status: "error",
    //   message: "上传失败",
    //   type: "image",
    //   uid: "124",
    //   failIcon: <Star style={{ color: "white" }} />,
    // },
  ]);
  const onOversize = (files: Taro.chooseImage.ImageFile[]) => {
    console.log("oversize触发文件大小不能超过50kb", files);
  };

  const beforeXhrUpload = (taroUploadFile: any, options: any) => {
    console.log("options", options);
    options.withCredentials = false;
    console.log("beforeXhrUpload");
    const uploadTask = taroUploadFile({
      url: options.url,
      filePath: options.taroFilePath,
      fileType: options.fileType,
      header: {
        ...options.headers,
      },
      formData: options.formData,
      name: options.name,
      success(response: { errMsg: any; statusCode: number; data: string }) {
        if (options.xhrState === response.statusCode) {
          // 假设服务器返回 { url: string, message: string }
          const resData = JSON.parse(response.data || "{}");
          const fileItem: FileItem = {
            name: options.name,
            url: resData.fileInfo.fileUrl || "",
            status: response.statusCode === 200 ? "success" : "error",
            message:
              resData.fileInfo.message ||
              (response.statusCode === 200 ? "上传成功" : "上传失败"),
            type: "image", // 可以根据文件类型动态设置
            uid: options.uid || String(Date.now()),
            failIcon:
              response.statusCode === 200 ? undefined : (
                <Star style={{ color: "white" }} />
              ),
          };
          console.log("fileItem:", fileItem);
          // 通知 Uploader 更新状态
          options.onSuccess?.(fileItem, options);
        } else {
          options.onFailure?.(response, options);
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

  const onChange = (fileList: FileItem[]) => {
    console.log("onChang:", fileList);
    // 只保留成功状态的文件
    const successFiles = fileList.filter((f) => f.status === "success");
    setFileList(successFiles);
    console.log("成功文件列表:", successFiles);
  };
  const onSuccess = (e) => {
    console.log("onSuccess:", e);
  };

  const onFileItemClick = (file: FileItem, index: number) => {
    console.log("onFileItemClick:", JSON.stringify(file), "----", index);
  };

  return (
    <Uploader
      url={uploadUrl}
      sourceType={["album"]}
      // value={fileList}
      defaultValue={fileList}
      beforeXhrUpload={beforeXhrUpload}
      maxFileSize={1024 * 100000}
      onOversize={onOversize}
      onChange={onChange}
      onSuccess={onSuccess}
      multiple={false}
      maxCount={10}
      previewType="list"
      onFileItemClick={onFileItemClick}
    >
      <Button type="success" size="small">
        上传文件
      </Button>
    </Uploader>
  );
};

export default Demo1;
