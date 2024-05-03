<script lang="ts" setup></script>

<template>
  <section class="py-12 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="grid gap-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <span
                class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border"
              >
                <img
                  alt="@username"
                  class="aspect-square h-full w-full"
                  src="/src/assets/images.jpg"
                />
              </span>
              <div>
                <h3 class="text-lg font-bold text-[#333]">张姗姗</h3>
                <p class="text-[#666] text-sm">2024-05-4</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              >
                <svg
                  class="h-4 w-4 mr-1"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                点赞
              </button>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              >
                <svg
                  class="h-4 w-4 mr-1"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                评论
              </button>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-[#333] mb-4">
              我的陶瓷花瓶制作心得
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <img
                alt="DIY手工艺术品"
                class="rounded-lg"
                height="400"
                src="/src/assets/images12.jpg"
                style="aspect-ratio: 600 / 400; object-fit: cover"
                width="600"
              />
              <div class="text-[#666] leading-relaxed">
                <p style="text-indent: 2em">
                  在DIY陶瓷花瓶的过程中,我学到了很多新的技能。首先是掌握塑形的基本技巧,通过反复练习,我逐渐掌握了如何用双手塑造出理想的形状。
                </p>
                <p style="text-indent: 2em">
                  其次是对釉料的选择和应用,不同的釉料会产生不同的效果,我尝试了多种颜色和质地,最终选择了一种自己满意的。
                </p>
                <p style="text-indent: 2em">
                  最后是烧制过程,这需要对温度和时间的精准控制,我反复调整,终于烧制出了一件漂亮的作品。
                </p>
                <p style="text-indent: 2em">
                  整个过程虽然有些挑战,但最终完成作品的成就感是无法替代的。希望大家也能尽情发挥创意,创造出属于自己的独特作品。
                </p>
              </div>
            </div>
          </div>
          <div class="grid gap-4">
            <div class="bg-gray-100 rounded-lg p-4">
              <div class="flex items-center space-x-4">
                <span
                  class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border"
                >
                  <img
                    alt="@username"
                    class="aspect-square h-full w-full"
                    src="/src/assets/123.jpg"
                  />
                </span>
                <div>
                  <h4 class="text-base font-bold text-[#333]">李思思</h4>
                  <p class="text-[#666] text-sm">2024-05-4</p>
                </div>
              </div>
              <p class="text-[#666] leading-relaxed mt-2">
                这个陶瓷花瓶做得真漂亮,你的制作心得很详细,我也想尝试一下。
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4">
              <div class="flex items-center space-x-4">
                <span
                  class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border"
                >
                  <img
                    alt="@username"
                    class="aspect-square h-full w-full"
                    src="/src/assets/1.jpg"
                  />
                </span>
                <div>
                  <h4 class="text-base font-bold text-[#333]">王中王</h4>
                  <p class="text-[#666] text-sm">2024-05-4</p>
                </div>
              </div>
              <p class="text-[#666] leading-relaxed mt-2">
                你的陶瓷花瓶制作过程很详细,我从中学到了很多新的技能,谢谢分享!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
