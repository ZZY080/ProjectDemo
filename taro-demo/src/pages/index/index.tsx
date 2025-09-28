import { View, Text } from "@tarojs/components";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { Overlay } from "@nutui/nutui-react";
import { X } from "lucide-react";
// import demo from "../../assets/p.mp4";
export default function Index() {
  const [visible, setVisible] = useState(true);
  const [muted, setMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleToggleShow = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  // 监听播放进度
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // 视频加载完成，获取总时长
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      console.log(videoRef.current.duration);
      setDuration(videoRef.current.duration);
    }
  };
  //
  // useEffect(() => {
  //   let timer: NodeJS.Timer;
  //   if (videoRef.current) {
  //     // 初始暂停
  //     videoRef.current.pause();

  //     timer = setInterval(() => {
  //       if (videoRef.current) {
  //         const next = videoRef.current.currentTime + 0.8;
  //         if (next <= videoRef.current.duration) {
  //           videoRef.current.currentTime = next;
  //           setCurrentTime(next);
  //         } else {
  //           clearInterval(timer);
  //         }
  //       }
  //     }, 500);
  //   }

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <View className="index-container">
      <View className="index-content">
        <View className="preview-video-wrapper">
          <Overlay
            className="preview-video-main"
            visible={visible}
            closeOnOverlayClick={false}
          >
            {/* 头部 */}
            <View className="header">
              <X color="white" className="closed" size={10} />
              <Text className="title">视频</Text>
            </View>
            {/* 内容 */}
            {/* <View className="content">
              <video
                className="video"
                ref={videoRef}
                muted={muted}
                autoPlay
                src={demo}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              ></video>
            </View> */}
            {/* 底部 */}
            <View className="bottom">
              <Text className="word">{currentTime}</Text>
              <Text className="word">{duration}</Text>
            </View>
          </Overlay>
        </View>
      </View>
    </View>
  );
}
