<script lang="ts" setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <section
    class="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-[#333] mb-4">黄金面具</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            alt="黄金面具"
            class="rounded-md"
            height="400"
            src="/jmj.jpg"
            style="aspect-ratio: 500 / 400; object-fit: cover"
            width="500"
          />
        </div>
        <div>
          <h3 class="text-2xl font-bold text-[#333] mb-4">文物简介</h3>
          <p class="text-[#666] leading-relaxed" style="margin-bottom: 10px">
            三星堆遗址祭祀区5号祭祀坑中出土的金器。经检测，其含金量约为85%，银含量约为13%至14%，还有其他杂质。
          </p>
          <h3 class="text-2xl font-bold text-[#333] mb-4">文物价值</h3>
          黄金面具的发现，则为古蜀文明中对于金器的崇拜，又增添了一大实证。
          <p class="text-[#666] leading-relaxed"></p>
          <h4 class="text-xl font-bold text-[#333] mt-8 mb-2">文物信息</h4>
          <div class="grid grid-cols-2 gap-4">
            <ul class="text-[#666] list-disc pl-6 space-y-2">
              <li><strong>中文名:</strong> 黄金面具</li>
              <li><strong>材质:</strong> 金</li>
              <li><strong>重量:</strong> 重约280克（ 含金量约为85%）</li>
              <li><strong>出土地:</strong> 三星堆遗址祭祀区5号祭祀坑</li>
            </ul>
            <ul class="text-[#666] list-disc pl-6 space-y-2">
              <li><strong>类别:</strong> 金器</li>
              <li><strong>尺寸:</strong> 长 23 cm, 宽 28 cm</li>
              <li><strong>出土时间:</strong>2021年1月</li>
            </ul>
          </div>

          <div class="mt-8">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#007bff] text-white px-4 py-2 rounded-md hover:bg-[#0056b3]"
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
