<script lang="ts" setup>
</script>

<template>
  <section class="py-12 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-[#333] mb-4">DIY手工艺术品交流</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="grid gap-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <span class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                <img class="aspect-square h-full w-full" alt="@username" src="/images.jpg" />
              </span>
              <div>
                <h3 class="text-lg font-bold text-[#333]">张姗姗</h3>
                <p class="text-[#666] text-sm">2024-05-4</p>
              </div>
            </div>
            <button style="border: 1px solid #c2c2c2" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4 mr-1"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              发帖
            </button>
          </div>
          <div class="grid gap-4">
            <div class="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200" @click="$router.push('/shareDetail')">
              <h3 class="text-lg font-bold text-[#333] mb-2">我的陶瓷花瓶制作心得</h3>
              <p class="text-[#666] leading-relaxed"> 在DIY陶瓷花瓶的过程中,我学到了很多新的技能。首先是掌握塑形的基本技巧,通过反复练习,我逐渐掌握了如何用双手塑造出理想的形状。</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200" @click="$router.push('/shareDetail')">
              <h3 class="text-lg font-bold text-[#333] mb-2">木雕摆件制作分享</h3>
              <p class="text-[#666] leading-relaxed">在DIY木雕摆件的</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200" @click="$router.push('/shareDetail')">
              <h3 class="text-lg font-bold text-[#333] mb-2">编织挂饰制作心得</h3>
              <p class="text-[#666] leading-relaxed">在DIY编织挂</p>
            </div>
          </div>
          <div class="flex justify-center">
            <nav aria-label="pagination" class="mx-auto flex w-full justify-center" role="navigation">
              <ul class="flex flex-row items-center gap-1">
                <li class="">
                  <li class="">
                    <a
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
                        aria-label="Go to previous page"
                        href="#"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                      <span>上一页</span>
                    </a>
                  </li>
                </li>
                <li class="">
                  <li class="">
                    <a
                        style="background-color: rgba(159,159,159,0.7)"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                        href="#"
                    >
                      1
                    </a>
                  </li>
                </li>
                <li class="">
                  <li class="">
                    <a
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                        href="#"
                    >
                      2
                    </a>
                  </li>
                </li>
                <li class="">
                  <li class="">
                    <a
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                        href="#"
                    >
                      3
                    </a>
                  </li>
                </li>
                <li class="">
                  <span aria-hidden="true" class="flex h-9 w-9 items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    <span class="sr-only">更多</span>
                  </span>
                </li>
                <li class="">
                  <li class="">
                    <a
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
                        aria-label="Go to next page"
                        href="#"
                    >
                      <span>下一页</span>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </li>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
