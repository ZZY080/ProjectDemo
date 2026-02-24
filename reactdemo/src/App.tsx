import React from "react";
import { Flex, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100%)",
  maxWidth: "calc(50% - 8px)",
};

const App: React.FC = () => {
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("file:", file);
    if (!file) return;
    const tempUrl = URL.createObjectURL(file);
    console.log(tempUrl);

    try {
      const formData = new FormData();
      formData.append("file", file); // 后端字段名

      const res = await fetch("http://192.168.2.6:8080/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("upload result:", data);
      alert("上传成功");
    } catch (err) {
      console.error(err);
      alert("上传失败");
    } finally {
      e.target.value = ""; // 允许重复选择同一文件
    }
  };
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
            Sider
          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
        <input type="file" onChange={onChange} multiple />
      </Layout>
    </Flex>
  );
};

export default App;
