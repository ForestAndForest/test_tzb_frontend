<script lang="ts" setup></script>

<template>
  <div class="container1">
    <div class="payment-container">
      <div class="close">
        <svg
          class="icon"
          height="16"
          viewBox="0 0 1024 1024"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M143.616 47.104l830.08 830.08c26.24 26.24 26.24 69.888 0 96.128-26.24 26.24-69.888 26.24-96.128 0L47.488 143.232c-17.536-26.24-17.536-69.888 0-96.128 26.24-26.24 69.888-26.24 96.128 0z m0 0"
            fill="#515151"
            p-id="11739"
          ></path>
          <path
            d="M982.528 143.232L152.32 973.312c-26.24 26.24-69.888 26.24-96.128 0-26.24-26.24-26.24-69.888 0-96.128L886.4 47.104c26.24-26.24 69.888-26.24 96.128 0 17.408 26.24 17.408 69.888 0 96.128z m0 0"
            fill="#515151"
            p-id="11740"
          ></path>
        </svg>
      </div>
      <h2 style="font-weight: bold; font-size: 1.6em">
        请使用微信/支付宝扫码支付
      </h2>
      <h3 style="font-size: 1.1em; margin: 5px 0">
        订单号:2f8a3eabf3c094b5c8e1538fbde667dc
      </h3>
      <div style="margin: 20px auto; width: max-content">
        <img src="../assets/qr.png" />
      </div>
      <div
        style="
          margin: 10px auto;
          width: max-content;
          font-size: 2em;
          color: #d55656;
        "
      >
        ¥ 163.93
      </div>
      <button id="confirmPayment" class="payment-button">我已完成支付</button>
    </div>
  </div>
</template>

<style scoped>
.container1 {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(68, 68, 68, 0.6);
  z-index: 999999;
}

.payment-container {
  max-width: 600px;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  position: relative;
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
}

.payment-option label {
  margin-right: 10px;
}

.payment-option img {
  max-width: 100px;
  height: auto;
  margin-right: 10px;
}

.payment-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
