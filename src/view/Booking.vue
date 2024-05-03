<script lang="ts" setup></script>

<template>
  <section
    class="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-[#333] mb-4">三星堆导游全景图</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          alt="三星堆旅游图"
          class="rounded-md shadow-2xl"
          height="400"
          src="/src/assets/lxt.webp"
          style="aspect-ratio: 600 / 400; object-fit: cover"
          width="600"
        />
        <div>
          <h2 class="text-2xl font-bold text-[#333] mb-4">预约参观</h2>
          <form class="space-y-4">
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
                for="name"
              >
                姓名 </label
              ><input
                id="name"
                class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"
                placeholder="请输入您的姓名"
                type="text"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
                for="id"
              >
                身份证号 </label
              ><input
                id="id"
                class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"
                placeholder="请输入您的身份证号"
                type="text"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
                for="date"
              >
                参观日期 </label
              ><input
                id="date"
                class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"
                type="date"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
                for="visitors"
              >
                参观人数 </label
              ><input
                id="visitors"
                class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-[#ccc] rounded-md px-3 py-2 w-full"
                min="1"
                placeholder="请输入参观人数"
                type="number"
              />
            </div>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34]"
              type="submit"
            >
              预约
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
