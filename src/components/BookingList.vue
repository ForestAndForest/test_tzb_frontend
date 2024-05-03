<script setup lang="ts">
import BookingListItem from "./BookingListItem.vue";
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
              预约日期
            </th>
            <th
              class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
            >
              参观人数
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
          <BookingListItem />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
