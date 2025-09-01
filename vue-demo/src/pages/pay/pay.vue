<template>
  <div class="pay-demo">
    <h2>H5 微信支付 Demo</h2>
    <input
      type="number"
      v-model="amount"
      placeholder="输入金额（元）"
      class="input"
    />
    <button @click="startPay" class="btn">立即支付</button>

    <p v-if="orderNo">订单号: {{ orderNo }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { createH5Order } from "../../api/pay";

const amount = ref<number>(1);
const orderNo = ref<string>("");

async function startPay() {
  if (!amount.value || amount.value <= 0) {
    alert("请输入正确的金额");
    return;
  }

  try {
    const res = await createH5Order(amount.value, "测试订单");
    if (res.code === 0) {
      orderNo.value = res.data.orderNo;
      const h5Url = res.data.h5Url;
      // 跳转到微信支付页面
      window.location.href = h5Url;
    } else {
      alert("下单失败：" + JSON.stringify(res.message));
    }
  } catch (e: any) {
    alert("异常：" + e.message);
  }
}
</script>

<style scoped>
.pay-demo {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 8px;
}
.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn {
  padding: 10px 20px;
  background: #07c160;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background: #06ae56;
}
</style>
