<template>
  <section class="max-w-7xl xl:mx-auto mx-3 lg:mt-20">
    <div class="text-center mb-16 mt-4">
      <h1
        class="font-medium lg:text-4xl text-3xl text-gray-800 pb-2 border-b-2 border-sky-700 inline-block"
      >
        لیست قیمت انواع لوله
      </h1>
    </div>
    <div v-for="item in 4" :key="item" class="mb-24">
      <div class="mt-10">
        <NuxtLink
          to="/pipe"
          class="bg-white px-6 pt-2 text-xl md:text-2xl text-gray-700 rounded-t-xl flex justify-center items-center w-fit mx-auto group"
        >
          <span class="group-hover:text-sky-600"
            >لیست قیمت لوله درزدار گالوانیزه</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.6"
            stroke="currentColor"
            class="w-6 h-6 mr-2 group-hover:text-sky-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="bg-white shadow-md rounded-xl overflow-x-auto">
        <table class="min-w-full whitespace-nowrap overflow-hidden">
          <thead class="border-b-2 border-sky-700 ">
            <tr class="text-center text-gray-700 font-medium">
              <td class="px-5 py-4">نام محصول</td>
              <td class="px-5">سایز</td>
              <td class="px-5">ضخامت(mm)</td>
              <td class="px-5">برند</td>
              <td class="px-5">وضعیت</td>
              <td class="px-5">استاندارد</td>
              <td class="px-5">محل بارگیری</td>
              <td class="px-5">واحد</td>
              <td class="px-5">قیمت(ریال)</td>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center even:bg-gray-100 odd:bg-white hover:text-sky-500 text-gray-700 text-sm"
              v-for="item in 10"
              :key="item"
            >
              <td class="px-4 py-3">نبشی سایز 10</td>
              <td class="px-5">100*100</td>
              <td class="px-5">10</td>
              <td class="px-5">سپهرایرانیان</td>
              <td class="px-5">شاخه 6 متری</td>
              <td class="px-5">ST37</td>
              <td class="px-5">کارخانه</td>
              <td class="px-5">کیلوگرم</td>
              <td class="px-5">197,250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style>
</style>