import { FC } from "react";
import { View } from "@tarojs/components";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";
import demo from "../../assets/1.pdf";

const PDFPage: FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <View style={{ height: "100vh" }}>
      {/* <Worker workerUrl={workerSrc}>
        <Viewer fileUrl={demo} plugins={[defaultLayoutPluginInstance]} />
      </Worker> */}
      <iframe
        src={"https://neptia-love.oss-cn-beijing.aliyuncs.com/1.pdf"}
        style={{ height: "100vh", width: "100vh" }}
      ></iframe>
    </View>
  );
};

export default PDFPage;
