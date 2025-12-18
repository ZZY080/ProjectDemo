import { View, Text } from "@tarojs/components";
import "./index.scss";

import Taro from "@tarojs/taro";
// import demo from "../../assets/p.mp4";
export default function Index() {
  const goToPage = () => {
    Taro.navigateTo({
      url: "/pages/about/index",
    });
  };

  return (
    <View className="index-container">
      <View className="index-content">
        <Text className="desc" onClick={() => goToPage()}>
          open demo
        </Text>
      </View>
    </View>
  );
}
