<script lang="ts" setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import IconBuy from "../components/IconBuy.vue";
import Pay from "./Pay.vue";
</script>

<template>
  <Pay />
  <Header />
  <section
    class="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-2xl font-bold text-[#333] mb-4">DIY手工艺术品展示</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white rounded-md shadow-md overflow-hidden">
            <img
              alt="DIY手工艺术品"
              class="w-full h-48 object-cover rounded-2xl"
              height="200"
              src="/tchp.jpeg"
              style="aspect-ratio: 300 / 200; object-fit: cover"
              width="300"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-[#333] mb-2">陶瓷花瓶</h3>
              <span style="color: #d55656; font-weight: bold">¥ 21.99</span>
              <p class="text-[#666] leading-relaxed">
                精美的陶瓷花瓶,手工制作,独一无二。
              </p>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34] mt-4"
              >
                <IconBuy />
                <span style="margin-left: 10px">加入购入车</span>
              </button>
            </div>
          </div>
          <div class="bg-white rounded-md shadow-md overflow-hidden">
            <img
              alt="DIY手工艺术品"
              class="w-full h-48 object-cover rounded-2xl"
              height="200"
              src="/md.webp"
              style="aspect-ratio: 300 / 200; object-fit: cover"
              width="300"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-[#333] mb-2">木雕摆件</h3>
              <span style="color: #d55656; font-weight: bold">¥ 49.99</span>
              <p class="text-[#666] leading-relaxed">
                精美的木雕摆件,手工制作,独一无二。
              </p>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34] mt-4"
              >
                <IconBuy />
                <span style="margin-left: 10px">加入购入车</span>
              </button>
            </div>
          </div>
          <div class="bg-white rounded-md shadow-md overflow-hidden">
            <img
              alt="DIY手工艺术品"
              class="w-full h-48 object-cover rounded-2xl"
              height="200"
              src="/gj.webp"
              style="aspect-ratio: 300 / 200; object-fit: cover"
              width="300"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-[#333] mb-2">编织挂饰</h3>
              <span style="color: #d55656; font-weight: bold">¥ 19.99</span>
              <p class="text-[#666] leading-relaxed">
                精美的编织挂饰,手工制作,独一无二。
              </p>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34] mt-4"
              >
                <IconBuy />
                <span style="margin-left: 10px">加入购入车</span>
              </button>
            </div>
          </div>
          <div class="bg-white rounded-md shadow-md overflow-hidden">
            <img
              alt="DIY手工艺术品"
              class="w-full h-48 object-cover rounded-2xl"
              height="200"
              src="/zsp.webp"
              style="aspect-ratio: 300 / 200; object-fit: cover"
              width="300"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-[#333] mb-2">纸艺装饰品</h3>
              <span style="color: #d55656; font-weight: bold">¥ 10.99</span>
              <p class="text-[#666] leading-relaxed">
                精美的纸艺装饰品,手工制作,独一无二。
              </p>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34] mt-4"
              >
                <IconBuy />
                <span style="margin-left: 10px">加入购入车</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-[#333] mb-4">预约购买</h2>
        <form class="space-y-4">
          <div>
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
              for="product"
            >
              已选择商品:
            </label>
          </div>
          <div>
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
              for="quantity"
            >
              联系电话 </label
            ><input
              id="quantity"
              class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"
              min="1"
              placeholder="请输入您的手机号码"
              type="number"
            />
          </div>
          <div>
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
              for="date"
            >
              预约日期 </label
            ><input
              id="date"
              class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"
              type="date"
            />
          </div>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34]"
            type="submit"
          >
            预约购买
          </button>
        </form>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.rounded-2xl {
  border-radius: 8px;
}
</style>
