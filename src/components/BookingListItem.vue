<script lang="ts" setup></script>

<template>
  <div
    data-orientation="horizontal"
    role="none"
    class="shrink-0 bg-gray-100 h-[1px] w-full my-4"
  ></div>
  <tr
    class="border-b transition-colors hover:bg-gray-200/50 data-[state=selected]:bg-gray-200"
  >
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      2024-05-02
    </td>
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div
        class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        style="background-color: rgb(40, 167, 69); color: #fcfcfc"
      >
        已确认
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
