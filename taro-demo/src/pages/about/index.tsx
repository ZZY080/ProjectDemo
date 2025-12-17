import { FC } from "react";
import { Text, View } from "@tarojs/components";

const PDFPage: FC = () => {
  const goToPage = () => {
    window.open("http://www.baidu.com");
  };
  return (
    <View style={{ height: "100vh" }}>
      <Text onClick={() => goToPage()} style={{ color: "red" }}>
        百度
      </Text>
      <Text>sadasdnsadskdklsdkl</Text>
    </View>
  );
};

export default PDFPage;
