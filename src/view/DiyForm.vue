<script lang="ts" setup></script>

<template>
  <section class="py-12 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-[#333] mb-4">预约DIY手工艺术品</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <form class="grid gap-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666] font-medium mb-1"
                for="name"
              >
                姓名 </label
              ><input
                style="background-color: #f1f1f1"
                id="name"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="请输入您的姓名"
              />
            </div>
            <div>
              <label
                class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666] font-medium mb-1"
                for="phone"
              >
                手机号 </label
              ><input
                style="background-color: #f1f1f1"
                id="phone"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="请输入您的手机号"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666] font-medium mb-1"
                for="date"
              >
                预约日期
              </label>
              <button
                style="background-color: #f1f1f1"
                aria-controls="radix-:ra:"
                aria-expanded="false"
                aria-haspopup="dialog"
                class="inline-flex items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-left font-normal"
                data-state="closed"
                type="button"
              >
                <svg
                  class="mr-1 h-4 w-4 -translate-x-1"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect height="18" rx="2" width="18" x="3" y="4"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
                选择预约日期
              </button>
            </div>
            <div>
              <label
                class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666] font-medium mb-1"
                for="time"
              >
                预约时间
              </label>
              <button
                style="background-color: #f1f1f1"
                aria-autocomplete="none"
                aria-controls="radix-:rb:"
                aria-expanded="false"
                class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                data-state="closed"
                dir="ltr"
                role="combobox"
                type="button"
              >
                <span style="pointer-events: none">10:00</span>
                <svg
                  aria-hidden="true"
                  class="h-4 w-4 opacity-50"
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
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <select
                aria-hidden="true"
                style="
                  position: absolute;
                  border: 0px;
                  width: 1px;
                  height: 1px;
                  padding: 0px;
                  margin: -1px;
                  overflow: hidden;
                  clip: rect(0px, 0px, 0px, 0px);
                  white-space: nowrap;
                  overflow-wrap: normal;
                "
                tabindex="-1"
              >
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666] font-medium mb-1"
                for="participants"
              >
                参加人数
              </label>
              <button
                style="background-color: #f1f1f1"
                aria-autocomplete="none"
                aria-controls="radix-:rl:"
                aria-expanded="false"
                class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                data-state="closed"
                dir="ltr"
                role="combobox"
                type="button"
              >
                <span style="pointer-events: none">1 人</span>
                <svg
                  aria-hidden="true"
                  class="h-4 w-4 opacity-50"
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
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <select
                aria-hidden="true"
                style="
                  position: absolute;
                  border: 0px;
                  width: 1px;
                  height: 1px;
                  padding: 0px;
                  margin: -1px;
                  overflow: hidden;
                  clip: rect(0px, 0px, 0px, 0px);
                  white-space: nowrap;
                  overflow-wrap: normal;
                "
                tabindex="-1"
              >
                <option value="1">1 人</option>
                <option value="2">2 人</option>
                <option value="3">3 人</option>
                <option value="4">4 人</option>
                <option value="5">5 人</option>
              </select>
            </div>
            <div>
              <label
                class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666] font-medium mb-1"
                for="diy"
              >
                DIY项目
              </label>
              <button
                style="background-color: #f1f1f1"
                aria-autocomplete="none"
                aria-controls="radix-:rr:"
                aria-expanded="false"
                class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                data-state="closed"
                dir="ltr"
                role="combobox"
                type="button"
              >
                <span style="pointer-events: none">陶瓷花瓶</span>
                <svg
                  aria-hidden="true"
                  class="h-4 w-4 opacity-50"
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
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <select
                aria-hidden="true"
                style="
                  position: absolute;
                  border: 0px;
                  width: 1px;
                  height: 1px;
                  padding: 0px;
                  margin: -1px;
                  overflow: hidden;
                  clip: rect(0px, 0px, 0px, 0px);
                  white-space: nowrap;
                  overflow-wrap: normal;
                "
                tabindex="-1"
              >
                <option value="陶瓷花瓶">陶瓷花瓶</option>
                <option value="木雕摆件">木雕摆件</option>
                <option value="编织挂饰">编织挂饰</option>
                <option value="其他">其他</option>
              </select>
            </div>
          </div>
          <div>
            <label
              class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666] font-medium mb-1"
              for="note"
            >
              备注 </label
            ><textarea
              style="background-color: #f1f1f1"
              id="note"
              class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
              placeholder="请输入您的备注信息"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-green-400 text-white font-bold inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
              type="submit"
            >
              提交预约
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
