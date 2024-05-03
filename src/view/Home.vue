<script lang="ts" setup>
import IconForward from "../components/IconForward.vue";
import HomeCard from "../components/HomeCard.vue";

import JMJ from "../assets/jmj.jpg";
import QTSS from "../assets/qtss.jpg";
import YZ from "../assets/yz.jpg";
import JZ from "../assets/jz.webp";

import TCHP from "../assets/tchp.jpeg";
import GJ from "../assets/gj.webp";
import MD from "../assets/md.webp";
import JZZ from "../assets/zsp.webp";

//特色展品列表
const cards = [
  {
    id: 0,
    title: "黄金面具",
    description:
      "三星堆遗址祭祀区5号祭祀坑中出土的金器。经检测，其含金量约为85%，银含量约为13%至14%，还有其他杂质。",
    image: JMJ,
    imageAlt: "黄金面具",
  },
  {
    id: 1,
    title: "青铜神兽",
    description:
      "青铜神兽，出土于三星堆遗址祭祀区三号坑坑底，临近西壁。长28.5厘米、高26.4厘米、宽23厘米。整件器物呈昂首挺胸、四肢蹲伏于地的走兽形象，后肢缺失，双耳、尾部等处残损。神兽头顶有一角，“臣”字眼，扁长圆形阔口，短颈，躯干修长，挺胸，塌腰，四肢外张，蹄足，尾部上翘后弯，体表有云雷纹条带装饰，整体形态健壮有力。",
    image: QTSS,
    imageAlt: "青铜神兽",
  },
  {
    id: 2,
    title: "玉琮",
    description: "三星堆文化玉琮为三星堆文化文物，现收藏于北京中藏会馆。",
    image: YZ,
    imageAlt: "玉琮",
  },
  {
    id: 3,
    title: "金杖",
    description:
      "金杖是用金条捶打成金皮后，再包卷在木杖上；出土时木杖已炭化，仅存金皮，金皮内还残留有炭化的木渣。",
    image: JZ,
    imageAlt: "金杖",
  },
];

//DIY手工艺术品列表
const cards1 = [
  {
    id: 0,
    title: "陶瓷花瓶",
    description: "精美的陶瓷花瓶,手工制作,独一无二。",
    image: TCHP,
    imageAlt: "陶瓷花瓶",
  },
  {
    id: 1,
    title: "挂件",
    description: "精美的挂件,手工制作,独一无二。",
    image: GJ,
    imageAlt: "挂件",
  },
  {
    id: 2,
    title: "剪纸",
    description: "精美的剪纸,手工制作,独一无二。",
    image: JZZ,
    imageAlt: "剪纸",
  },
  {
    id: 3,
    title: "木雕",
    description: "精美的木雕,手工制作,独一无二。",
    image: MD,
    imageAlt: "木雕",
  },
];
</script>

<template>
  <main
    class="py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 mt-16 z-50"
      style="position: relative"
    >
      <div class="header">
        <h2 class="text-5xl font-bold text-[#333] mb-4">三星堆文化简介</h2>
        <p
          class="leading-relaxed text-2xl"
          style="text-indent: 2em; color: #692e17"
        >
          三星堆文化是中国古代文明的重要组成部分，距今约4,000多年。位于四川省广汉市境内的三星堆遗址是其代表性发现之一。这片遗址展示了古代中国社会的繁荣与发展。在这个时期，人们创造了许多精美的青铜器和玉器，体现了当时的工艺水平和审美观念。青铜器作为重要的礼仪和祭祀用品，见证了古代人们的宗教信仰和社会习俗。玉器的出现也反映了人们对自然和神秘力量的崇拜。三星堆遗址中的建筑和遗迹，如宫殿、城墙、祭祀台等，不仅是古代社会组织和政治权力的象征，也是对当时社会生活的重要见证。通过对三星堆文化的研究，我们可以更好地了解古代中国人民的生活方式、社会结构和文化传承。
        </p>
      </div>
      <!--        特色展品-->
      <div>
        <div
          class="text-2xl font-bold text-[#333] mt-8 mb-4 title1 flex justify-between"
        >
          <span> 特色展品介绍 </span>
          <div
            class="flex items-center gap-1"
            style="color: #007bff; font-size: 0.8em"
          >
            查看所有
            <IconForward :size="17" color="#007bff" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <HomeCard
          v-for="data in cards"
          :data="data"
          @click="$router.push('/detail')"
        />
      </div>
      <!--DIY手工艺术品展示-->
      <div>
        <div
          class="text-2xl font-bold text-[#333] mt-8 mb-4 title1 flex justify-between"
        >
          <span> DIY手工艺术品展示 </span>
          <div
            class="flex items-center gap-1"
            style="color: #007bff; font-size: 0.8em"
          >
            查看所有
            <IconForward :size="17" color="#007bff" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <HomeCard
          v-for="data in cards1"
          :data="data"
          @click="$router.push('/diyDetail')"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.header {
  background-image: url("/src/assets/EAXpisNzx9.jpg");
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 1180px;
  height: 590px;
  margin: 0 auto;
  padding: 60px 40px 40px 380px;
}

.title1 {
  padding: 10px;
  border: 1px solid #9f9f9f;
  border-left: 5px solid #882e08;
  color: #c45124;
}
</style>
