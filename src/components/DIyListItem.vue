<script lang="ts" setup>
const color = {
  0: "rgb(42,129,164)",
  1: "rgb(77,182,79)",
  2: "rgb(42,129,164)",
  3: "rgb(77,182,79)",
};

type Item = {
  id: number;
  name: string;
  image: string;
  description: string;
  number: number;
  date: string;
  status: number;
};

defineProps<{ data: Item }>();
</script>

<template>
  <div
    data-orientation="horizontal"
    role="none"
    class="shrink-0 bg-gray-100 h-[1px] w-full my-4"
  ></div>
  <tr
    class="border-b transition-colors hover:bg-gray-200/50 data-[state=selected]:bg-muted"
  >
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div class="flex items-center space-x-4">
        <img
          :src="data.image ?? '/placeholder.svg'"
          alt="DIY手工艺术品"
          class="rounded-md"
          height="64"
          style="aspect-ratio: 64 / 64; object-fit: cover"
          width="64"
        />
        <div>
          <h3 class="text-lg font-bold text-[#333]">{{ data.name }}</h3>
          <p class="text-[#666]">{{ data.description }}</p>
        </div>
      </div>
    </td>
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {{ data.number }}
    </td>
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {{ data.date }}
    </td>
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div
        :style="{ color: color[data.status] }"
        class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        {{
          data.status === 0
            ? "制作中"
            : data.status === 1
              ? "待发货"
              : data.status === 2
                ? "待签收"
                : "已签收"
        }}
      </div>
    </td>
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <button
        style="border: 1px solid #c2c2c2"
        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
      >
        查看详情
      </button>
    </td>
  </tr>
</template>

<style scoped></style>
