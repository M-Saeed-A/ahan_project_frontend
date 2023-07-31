<script setup>
</script>

<template>
  <section class="max-w-7xl xl:mx-auto mx-3 lg:mt-20">
    <div
      class="bg-white lg:p-10 p-5 flex flex-col-reverse lg:flex-row md:flex-row rounded-3xl shadow-md"
    >
      <div
        class="lg:w-2/3 md:w-[55%] flex flex-col justify-center items-start md:pl-5 mt-10"
      >
        <h1 class="lg:text-4xl text-3xl text-gray-800 mt-4 font-medium ">
          ورق گالوانیزه
        </h1>
        <p
          class="mt-5 text-gray-500 leading-8 text-sm lg:text-base lg:leading-8"
        >
          ورق گالوانیزه در دسته ورق های نورد سرد است که روی اندود شده و خاصیت ضد
          زنگ دارد. انواع کارخانه های داخلی و خارجی اعم از هفت الماس، شهرکرد ،
          کاشان ، مبارکه ، سمنان ، تاراز ، شهریار و چین تولید کننده این ورق
          هستند و معمولا از ضخامت ۰.۳ تا ۶ میل به صورت رول و شیت در ابعاد ۱*۲ و
          ۱.۲۵*۲.۵ قابلیت تامین دارند ، ورق گالوانیزه به صورت کیلوگرم از انبار
          یا کارخانه تامین می شود.
        </p>
      </div>

      <div class="lg:w-1/3 md:w-[45%]">
        <div class="md:h-full rounded-3xl overflow-hidden">
          <nuxt-img src="/lole-manisman.jpg" format="webp" sizes="sm:500px md:500px lg:400px" loading="lazy" />
        </div>
      </div>
    </div>
    <div class="mt-20 p-1">
      <h3 class="text-3xl font-medium text-right text-gray-900">
        جدول قیمت ورق گالوانیزه
      </h3>
        <div class="bg-white mt-7 shadow-md rounded-xl  overflow-x-auto">
        <table class="min-w-full whitespace-nowrap overflow-hidden">
          <thead class="border-b-2 border-sky-700">
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
            <tr class="text-center even:bg-gray-100 odd:bg-white hover:text-sky-500  text-gray-700 text-sm" v-for="item in 10" :key="item">
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
  <!-- <nuxt-img src="/lole-manisman.jpg" format="webp"  style="width: 700px; height: auto;" /> -->

</template>



<style>
</style>