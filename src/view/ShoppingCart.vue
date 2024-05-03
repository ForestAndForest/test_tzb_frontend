<script lang="ts" setup></script>

<template>
  <section class="py-12 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-[#333] mb-4">购物车</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
              <tr
                class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <th
                  class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                >
                  商品
                </th>
                <th
                  class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                >
                  数量
                </th>
                <th
                  class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                >
                  单价
                </th>
                <th
                  class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                >
                  总价
                </th>
                <th
                  class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                >
                  操作
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <tr
                class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center space-x-4">
                    <img
                      alt="DIY手工艺术品"
                      class="rounded-md"
                      height="64"
                      src="/tchp.jpeg"
                      style="aspect-ratio: 64 / 64; object-fit: cover"
                      width="64"
                    />
                    <div>
                      <h3 class="text-lg font-bold text-[#333]">陶瓷花瓶</h3>
                      <p class="text-[#666]">精美的陶瓷花瓶</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  ¥21.99
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  ¥43.98
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  >
                    删除
                  </button>
                </td>
              </tr>
              <tr
                class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center space-x-4">
                    <img
                      alt="DIY手工艺术品"
                      class="rounded-md"
                      height="64"
                      src="/md.webp"
                      style="aspect-ratio: 64 / 64; object-fit: cover"
                      width="64"
                    />
                    <div>
                      <h3 class="text-lg font-bold text-[#333]">木雕摆件</h3>
                      <p class="text-[#666]">精美的木雕摆件</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  1
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  ¥49.99
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  ¥99.98
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  >
                    删除
                  </button>
                </td>
              </tr>
              <tr
                class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center space-x-4">
                    <img
                      alt="DIY手工艺术品"
                      class="rounded-md"
                      height="64"
                      src="/gj.webp"
                      style="aspect-ratio: 64 / 64; object-fit: cover"
                      width="64"
                    />
                    <div>
                      <h3 class="text-lg font-bold text-[#333]">编织挂饰</h3>
                      <p class="text-[#666]">精美的编织挂饰</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  3
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  ¥19.99
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  ¥59.97
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  >
                    删除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="shrink-0 bg-gray-100 h-[1px] w-full my-6"
          data-orientation="horizontal"
          role="none"
        ></div>
        <div class="flex justify-between items-center space-x-4">
          <div>
            <div class="text-sm text-[#666]">共6件商品</div>
            <div class="font-bold text-[#333] text-3xl">
              总计: ¥203.93 - <span style="color: #d55656">¥40</span>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
              style="
                padding: 10px;
                background-color: #00b638;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                font-weight: bold;
                color: white;
              "
            >
              <svg
                class="icon"
                height="26"
                viewBox="0 0 1024 1024"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M146.645333 596.010667a21.717333 21.717333 0 0 1-8.789333-7.061334L68.224 493.866667a21.824 21.824 0 1 1 35.2-25.792l27.690667 37.802666C139.2 284.032 321.6 106.666667 545.408 106.666667 774.4 106.666667 960 292.266667 960 521.237333s-185.6 414.592-414.570667 414.592c-147.882667 0-282.24-78.08-356.48-202.837333a21.824 21.824 0 1 1 37.482667-22.314667 370.688 370.688 0 0 0 318.997333 181.504c204.864 0 370.922667-166.08 370.922667-370.944 0-204.864-166.058667-370.922667-370.922667-370.922666-204.864 0-370.944 166.058667-370.944 370.922666 0 17.621333 1.216 35.072 3.626667 52.266667a21.824 21.824 0 0 1-31.466667 22.506667z m420.586667-74.773334v65.472h152.746667a21.824 21.824 0 0 1 0 43.626667h-152.746667v130.922667a21.824 21.824 0 1 1-43.626667 0v-130.922667h-152.746666a21.824 21.824 0 0 1 0-43.626667h152.746666v-65.472h-152.746666a21.824 21.824 0 0 1 0-43.626666h140.202666l-151.936-124.992a21.824 21.824 0 1 1 27.712-33.706667l159.637334 131.306667L706.133333 318.933333a21.824 21.824 0 1 1 27.733334 33.706667l-151.957334 124.970667h138.090667a21.824 21.824 0 0 1 0 43.626666h-152.746667z"
                  fill="#fff"
                ></path>
              </svg>
              支付
            </button>
          </div>
        </div>
        <div
          class="shrink-0 bg-gray-300 h-[1px] w-full my-6"
          data-orientation="horizontal"
          role="none"
        ></div>
        <div class="text-gray-500">
          当前积分:4300
          <p>1.积分抵消比例为100 : 1</p>
          <p>2.积分最多可抵消总金额20%,不足1元向下取整</p>
        </div>
        <div class="flex items-center space-x-4">
          使用积分
          <input type="checkbox" class="w-4 h-4" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
