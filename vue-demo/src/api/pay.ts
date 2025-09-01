import axios from "axios";

// 这里假设后端服务跑在 http://192.168.0.101:8080
const request = axios.create({
  baseURL: "http://demo.neptia.cn/api",
  //   baseURL: "http://192.168.2.8:8000",
  timeout: 5000,
});

// 下单 H5
export async function createH5Order(total: number, desc: string) {
  const { data } = await request.post("/pay/h5", {
    total,
    desc,
  });
  return data;
}
