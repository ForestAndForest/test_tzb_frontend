<script lang="ts" setup>
import IconBuy from "../components/IconBuy.vue";
</script>

<template>
  <Pay />
  <section
    class="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div class="container mx-auto">
      <div
        class="text-2xl font-bold text-[#333] mb-4 px12 py-2"
        style="
          padding: 10px;
          border: 1px solid #d2d2d2;
          border-left: 5px solid #083588;
          color: #2457c4;
        "
      >
        DIY手工艺术品
        <span style="color: #d55656"> 成品展示售卖 </span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white rounded-md shadow-md overflow-hidden">
          <img
            alt="DIY手工艺术品"
            class="w-full h-48 object-cover rounded-2xl"
            height="200"
            src="/src/assets/tchp.jpeg"
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
            src="/src/assets/md.webp"
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
            src="/src/assets/gj.webp"
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
            src="/src/assets/zsp.webp"
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
        <div class="bg-white rounded-md shadow-md overflow-hidden">
          <img
            alt="DIY手工艺术品"
            class="w-full h-48 object-cover rounded-2xl"
            height="200"
            src="/src/assets/tchp.jpeg"
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
            src="/src/assets/md.webp"
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
            src="/src/assets/gj.webp"
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
            src="/src/assets/zsp.webp"
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
      <div
        class="text-2xl font-bold text-[#333] mb-4 px12 py-2 mt-3"
        style="
          padding: 10px;
          border: 1px solid #d2d2d2;
          border-left: 5px solid #083588;
          color: #2457c4;
        "
      >
        DIY手工艺术品 线下制作流程
      </div>
      <section class="py-12 px-4 md:px-8 lg:px-12">
        <div class="container mx-auto">
          <div class="bg-white rounded-lg shadow-md p-6" data-id="127">
            <div
              class="relative before:absolute before:inset-y-0 before:w-px before:bg-gray-500/20 pl-6 before:left-0 grid gap-10"
              data-id="128"
            >
              <div class="grid gap-1 text-sm relative" data-id="129">
                <div
                  class="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"
                  data-id="130"
                ></div>
                <div class="font-medium" data-id="131">预约DIY体验</div>
                <div class="text-gray-500 dark:text-gray-400" data-id="132">
                  通过预约系统选择心仪的DIY项目和时间。
                </div>
              </div>
              <div class="grid gap-1 text-sm relative" data-id="133">
                <div
                  class="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"
                  data-id="134"
                ></div>
                <div class="font-medium" data-id="135">DIY制作</div>
                <div class="text-gray-500 dark:text-gray-400" data-id="136">
                  在专业指导下,亲手创作属于自己的手工艺术品。
                </div>
              </div>
              <div class="grid gap-1 text-sm relative" data-id="137">
                <div
                  class="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"
                  data-id="138"
                ></div>
                <div class="font-medium" data-id="139">作品完成</div>
                <div class="text-gray-500 dark:text-gray-400" data-id="140">
                  制作完成后,可以带回自己心爱的DIY作品。
                </div>
              </div>
              <div class="grid gap-1 text-sm relative" data-id="141">
                <div
                  class="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"
                  data-id="142"
                ></div>
                <div class="font-medium" data-id="143">分享交流</div>
                <div class="text-gray-500 dark:text-gray-400" data-id="144">
                  在个人中心分享自己的DIY作品,与其他用户交流心得。
                </div>
              </div>
            </div>
          </div>
          <div
            @click="$router.push('/diyForm')"
            style="border-radius: 10px"
            class="text-2xl font-bold mb-4 px12 py-2 mt-3 bg-blue-400 flex justify-center items-center text-white cursor-pointer"
          >
            预约线下DIY体验
          </div>
        </div>
      </section>

      <!--      <div>-->
      <!--        <h2 class="text-2xl font-bold text-[#333] mb-4">线上购买</h2>-->
      <!--        <form class="space-y-4">-->
      <!--          <div>-->
      <!--            <label-->
      <!--              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"-->
      <!--              for="product"-->
      <!--            >-->
      <!--              已选择商品:-->
      <!--            </label>-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <label-->
      <!--              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"-->
      <!--              for="quantity"-->
      <!--            >-->
      <!--              联系电话 </label-->
      <!--            ><input-->
      <!--              id="quantity"-->
      <!--              class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"-->
      <!--              min="1"-->
      <!--              placeholder="请输入您的手机号码"-->
      <!--              type="number"-->
      <!--            />-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <label-->
      <!--              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"-->
      <!--              for="date"-->
      <!--            >-->
      <!--              预约日期 </label-->
      <!--            ><input-->
      <!--              id="date"-->
      <!--              class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"-->
      <!--              type="date"-->
      <!--            />-->
      <!--          </div>-->
      <!--          <button-->
      <!--            class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34]"-->
      <!--            type="submit"-->
      <!--          >-->
      <!--            立即购买-->
      <!--          </button>-->
      <!--        </form>-->
      <!--      </div>-->
    </div>
  </section>
</template>

<style scoped>
.rounded-2xl {
  border-radius: 8px;
}
</style>
