<script lang="ts" setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <main
    class="py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 z-50"
      style="position: relative"
    >
      <div>
        <h2 class="text-2xl font-bold text-[#333] mb-4">三星堆文化简介</h2>
        <p
          class="text-[#666] leading-relaxed text-black"
          style="text-indent: 2em"
        >
          三星堆文化是中国古代文明的重要组成部分，距今约4,000多年。位于四川省广汉市境内的三星堆遗址是其代表性发现之一。这片遗址展示了古代中国社会的繁荣与发展。在这个时期，人们创造了许多精美的青铜器和玉器，体现了当时的工艺水平和审美观念。青铜器作为重要的礼仪和祭祀用品，见证了古代人们的宗教信仰和社会习俗。玉器的出现也反映了人们对自然和神秘力量的崇拜。三星堆遗址中的建筑和遗迹，如宫殿、城墙、祭祀台等，不仅是古代社会组织和政治权力的象征，也是对当时社会生活的重要见证。通过对三星堆文化的研究，我们可以更好地了解古代中国人民的生活方式、社会结构和文化传承。
        </p>
        <h2 class="text-2xl font-bold text-[#333] mt-8 mb-4">特色展品介绍</h2>
        <ul class="text-[#666] list-disc pl-6 space-y-2">
          <li>
            <a class="text-[#007bff] hover:underline" href="#"> 黄金面具 </a>
          </li>
          <li><a class="text-[#007bff] hover:underline" href="#"> 玉琮 </a></li>
          <li>
            <a class="text-[#007bff] hover:underline" href="#"> 青铜神兽 </a>
          </li>
          <li>
            <a class="text-[#007bff] hover:underline" href="#"> 金饰品 </a>
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <img
          alt="三星堆文化展品"
          class="rounded-md"
          height="200"
          src="/jmj.jpg"
          style="aspect-ratio: 300 / 200; object-fit: cover"
          width="300"
        /><img
          alt="三星堆文化展品"
          class="rounded-md"
          height="200"
          src="/yz.jpg"
          style="aspect-ratio: 300 / 200; object-fit: cover"
          width="300"
        /><img
          alt="三星堆文化展品"
          class="rounded-md"
          height="200"
          src="/qtss.jpg"
          style="aspect-ratio: 300 / 200; object-fit: cover"
          width="300"
        /><img
          alt="三星堆文化展品"
          class="rounded-md"
          height="200"
          src="/jsp.jpg"
          style="aspect-ratio: 300 / 200; object-fit: cover"
          width="300"
        />
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.mcontainer {
  position: relative;
  background-image: url("/bg.jpg");
  width: 100vw;
}

.mcontainer:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-width: 55vh 83vw 0 0; /* 上、右、下、左边框宽度 */
  border-color: white transparent transparent transparent; /* 边框颜色 */
}

.mcontainer:before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  border-width: 0 0 55vh 83vw; /* 上、右、下、左边框宽度 */
  border-color: transparent transparent white transparent; /* 边框颜色 */
}
</style>
