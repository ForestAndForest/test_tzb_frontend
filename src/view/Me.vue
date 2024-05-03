<script lang="ts" setup>
import BookingList from "../components/BookingList.vue";
import DiyList from "../components/DiyList.vue";
</script>

<template>
  <main style="background-color: #fafafa">
    <section class="py-12 px-4 md:px-8 lg:px-12">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold text-[#333] mb-4">个人信息</h2>
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center space-x-4">
              <span
                class="relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full"
                ><img
                  alt="@username"
                  class="aspect-square h-full w-full"
                  src="/src/assets/images.jpg"
              /></span>
              <div>
                <h3 class="text-xl font-bold text-[#333]">张姗姗</h3>
                <p class="text-[#666]">zhangsan@gmail.com</p>
              </div>
            </div>
            <div
              class="shrink-0 bg-gray-100 h-[1px] w-full my-4"
              data-orientation="horizontal"
              role="none"
            ></div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h4 class="text-[#666] font-medium mb-1">手机号</h4>
                <p class="text-[#333] font-bold">13812345678</p>
              </div>
              <div>
                <h4 class="text-[#666] font-medium mb-1">注册时间</h4>
                <p class="text-[#333] font-bold">2023-05-01</p>
              </div>
              <div>
                <h4 class="text-[#666] font-medium mb-1">会员等级</h4>
                <p class="text-[#333] font-bold">VIP</p>
              </div>
              <div>
                <h4 class="text-[#666] font-medium mb-1">积分数量</h4>
                <p class="text-[#333] font-bold">1000</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-[#333] mb-4">我的预约</h2>
          <BookingList />
        </div>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 lg:px-12">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-[#333] mb-4">
          我购买的DIY手工艺术品
        </h2>
        <DiyList />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
