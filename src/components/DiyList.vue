<script lang="ts" setup>
import DIyListItem from "./DIyListItem.vue";

import TCHP from "../assets/tchp.jpeg";

const list = [
  {
    id: 0,
    name: "陶瓷花瓶",
    description: "独一无二的陶瓷花瓶",
    number: 1,
    date: "2024-5-4",
    status: 0,
    image: TCHP,
  },
];
</script>

<template>
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
              商品名称
            </th>
            <th
              class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
            >
              数量
            </th>
            <th
              class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
            >
              预约日期
            </th>
            <th
              class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
            >
              状态
            </th>
            <th
              class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
            >
              操作
            </th>
          </tr>
        </thead>
        <tbody class="[&amp;_tr:last-child]:border-0">
          <DIyListItem v-for="data in list" :data="data" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
