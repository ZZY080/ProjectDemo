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
  return (
    <View style={{ height: "100vh" }}>
      <Text onClick={() => goToPage()} style={{ color: "red" }}>
        百度
      </Text>
      <Text>sadasdnsadskdklsdkl</Text>
    </View>
  );
};

export default AboutPage;
