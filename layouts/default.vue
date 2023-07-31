<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";

let isMenu = ref(false);
const scY = ref();
// const scTimer = ref();

const menuItem = reactive([
  {
    title: "لوله",
    subtitles: [
      "لوله مانیسمان",
      "لوله درزدار",
      "لوله گالوانیزه",
      "لوله گلخانه",
      "لوله داربست",
      "لوله اسپیرال",
      "لوله استیل",
      "لوله مبلی",
    ],
    isDropMenu: false,
  },
  {
    title: "تیرآهن",
    subtitles: ["تیرآهن", "تیرآهن هاش"],
    isDropMenu: false,
  },
  {
    title: "ورق",
    subtitles: [
      "ورق سیاه",
      "ورق گالوانیزه",
      "ورق روغنی",
      "ورق رنگی",
      "ورق آلیاژی",
      "لوله اسپیرال",
      "ورق آجدار",
      "ورق استیل",
    ],
    isDropMenu: false,
  },
  {
    title: "نبشی و ناودانی",
    subtitles: ["نبشی", "ناودانی"],
    isDropMenu: false,
  },
  {
    title: "میلگرد و توری",
    subtitles: ["میلگرد آجدار", "میلگرد ساده", "توری حصاری", "توری پرسی"],
    isDropMenu: false,
  },
  {
    title: "پروفیل",
    subtitles: ["پروفیل استیل"],
    isDropMenu: false,
  },
  {
    title: "اتصالات",
    subtitles: [
      "اتصالات بنکن",
      "اتصالات گالوانیزه توپی برزیل TUPY",
      "اتصالات ایران اتصال",
      "اتصالات پلی اتیلن پیچی",
      "فلنج گلودار",
    ],
    isDropMenu: false,
  },
  {
    title: "شیرآلات",
    subtitles: [
      "شیرآلات میراب",
      "سیم ایتالیا",
      "کیز ایران",
      "لرزه گیر لاستیکی",
    ],
    isDropMenu: false,
  },
]);

const eventListener = (event) => {
  if (!event.target.closest(".side_menu, .hamburger_menu")) {
    isMenu.value = false;
  }
};

const handleScroll = (event) => {
  scY.value = window.scrollY;
};
onMounted(() => {
  document.addEventListener("click", eventListener);
  document.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  document.removeEventListener("click", eventListener);
});

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<template>
  <header>
    <div class="max-w-7xl xl:mx-auto mt-4 mx-3">
      <!-- start top menu -->
      <div class="bg-white rounded-2xl lg:shadow-lg shadow-md">
        <div class="p-4">
          <div class="flex items-center justify-between lg:justify-center">
            <div class="hamburger_menu mr-3 flex lg:hidden">
              <button @click="isMenu = !isMenu">
                <svg
                  v-show="!isMenu"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  v-show="isMenu"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="">
              <NuxtLink class="cursor-pointer" :to="{ name: 'index' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="156"
                  height="66"
                  class=""
                >
                  <path
                    style="opacity: 0.893"
                    fill="#222f65"
                    d="M129.5-.5h4c.869 2.217 1.202 4.55 1 7a116.8 116.8 0 0 1 21 1v4a107.108 107.108 0 0 0-9 8.5c-8.66.5-17.327.666-26 .5a72.368 72.368 0 0 1 .5-12c3.038-2.87 5.871-5.87 8.5-9Z"
                  />
                  <path
                    style="opacity: 0.952"
                    fill="#fe8300"
                    d="M63.5 31.5c-.703 6.233-1.37 12.566-2 19-18.336.167-36.67 0-55-.5a57.141 57.141 0 0 1-7-5.5v-10a107.22 107.22 0 0 0 9-8.5 8.434 8.434 0 0 1 4-.5 4.932 4.932 0 0 0 .5 3c4-5.333 8.667-10 14-14 2.203 2.169 3.037 4.835 2.5 8 6.01-.166 12.01 0 18 .5 3.465.966 5.798 3.132 7 6.5a17.754 17.754 0 0 1 6-4c2.475 1.177 3.475 3.177 3 6Z"
                  />
                  <path
                    style="opacity: 0.831"
                    fill="#252f64"
                    d="M69.5 14.5c5.56 1.456 7.06 4.789 4.5 10-6.908 3.005-9.908.671-9-7 1.409-1.281 2.909-2.281 4.5-3Z"
                  />
                  <path
                    style="opacity: 0.94"
                    fill="#222f65"
                    d="M87.5 50.5a52.417 52.417 0 0 1 1 13c-1 .333-1.667 1-2 2h-15c-4.406-2.395-6.739-6.062-7-11v-5a60.94 60.94 0 0 1 .5-11 203.99 203.99 0 0 1 24-24c2.092 2.873 3.092 6.207 3 10 3.085-3.593 6.585-6.593 10.5-9a4.94 4.94 0 0 1 2.5 1c.495 1.973.662 3.973.5 6 6.784-.42 13.45.08 20 1.5a17.843 17.843 0 0 1 4.5 5.5c.896 5.45.563 10.782-1 16-1.637 2.31-3.804 3.81-6.5 4.5-11.662.5-23.329.666-35 .5Zm13-15c1.837.14 2.17.806 1 2-.798-.457-1.131-1.124-1-2Zm15 0c1.837.14 2.17.806 1 2-.798-.457-1.131-1.124-1-2Zm-28 15-6-1.5 5.5-5.5c.497 2.31.663 4.643.5 7Z"
                  />
                  <path
                    style="opacity: 0.881"
                    fill="#222f65"
                    d="M131.5 22.5h14c.166 6.342 0 12.675-.5 19-3.085 3.593-6.585 6.593-10.5 9a4.94 4.94 0 0 1-2.5-1c-.5-8.994-.666-17.994-.5-27Z"
                  />
                  <path
                    style="opacity: 0.031"
                    fill="#bc6925"
                    d="M63.5 31.5c-.323 6.19.01 12.19 1 18v5c-.522-1.72-1.522-3.053-3-4 .63-6.434 1.297-12.767 2-19Z"
                  />
                  <path
                    style="opacity: 0.804"
                    fill="#fe8300"
                    d="M60.5 65.5h-6c-1.333-2.667-2.667-2.667-4 0h-6c-4.337-9.328-1.67-12.328 8-9 5.464-3.389 9.13-2.055 11 4a18.659 18.659 0 0 1-3 5Z"
                  />
                  <path
                    style="opacity: 0.727"
                    fill="#fe8300"
                    d="M103.5 65.5h-4c-.667-1.333-1.333-1.333-2 0h-4c.16-4.184 1.827-7.517 5-10a4.94 4.94 0 0 1 2.5 1 45.792 45.792 0 0 1 2.5 9Z"
                  />
                  <path
                    style="opacity: 0.698"
                    fill="#fe8400"
                    d="M113.5 65.5h-4c-.333-4-.667-4-1 0h-4v-10h4c.333 4 .667 4 1 0h4v10Z"
                  />
                  <path
                    style="opacity: 0.71"
                    fill="#fe8400"
                    d="M124.5 65.5h-4c-.667-1.333-1.333-1.333-2 0h-4a45.792 45.792 0 0 1 2.5-9c1.667-1.333 3.333-1.333 5 0a45.792 45.792 0 0 1 2.5 9Z"
                  />
                  <path
                    style="opacity: 0.738"
                    fill="#fe8400"
                    d="M134.5 65.5h-4c-.333-2.667-.667-2.667-1 0h-4v-10c3 1.333 6 1.333 9 0v10Z"
                  />
                  <path
                    style="opacity: 0.678"
                    fill="#fe8400"
                    d="M145.5 65.5h-4a76.923 76.923 0 0 0-1-10h5v10Z"
                  />
                  <path
                    style="opacity: 0.576"
                    fill="#885637"
                    d="M88.5 63.5v2h-2c.333-1 1-1.667 2-2Z"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- end top menu -->

      <!-- start bottom menu -->
      <div
        class="lg:bg-gray-300 mx-9 px-2 py-5 lg:py-0 lg:px:0 rounded-b-3xl text-gray-700"
      >
        <nav>
          <ul
            class="side_menu flex flex-col lg:flex-row lg:items-center lg:justify-around lg:static lg:w-auto lg:h-auto lg:bg-transparent fixed top-0 right-0 bg-white h-full w-1/2 transition-transform duration-300 overflow-y-auto lg:overflow-y-visible lg:translate-x-0 z-50"
            :class="{ 'translate-x-full': !isMenu }"
          >
            <li
              class="lg:text-center lg:border-0 border-b"
              v-for="item in menuItem"
              :key="item"
            >
              <div class="relative">
                <div class="flex flex-col cursor-pointer lg:menu-item group">
                  <!-- start Main Menu -->
                  <button
                    class="flex p-3 items-center justify-between lg:bg-transparent outline-none focus:outline-none"
                    @click="item.isDropMenu = !item.isDropMenu"
                    :class="{ 'bg-gray-100': item.isDropMenu }"
                  >
                    <span
                      class="text-gray-700 hover:text-gray-500 font-medium px-1"
                      :class="{ 'text-sky-600': item.isDropMenu }"
                      >{{ item.title }}</span
                    >
                    <div class="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4 transition-all duration-300 thick-svg lg:rotate-0"
                        :class="{
                          'rotate-180': item.isDropMenu,
                          'rotate-90': !item.isDropMenu,
                        }"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                  <!-- end Main Menu -->
                  <!-- start absolute menu -->
                  <div
                    class="lg:absolute lg:bg-white lg:right-0 lg:top-10 lg:w-56 lg:rounded-md lg:shadow-md lg:translate-y-3 lg:invisible lg:opacity-0 lg:block hover:visible lg:menu-item-absolute transition-all duration-100 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
                    :class="{ hidden: !item.isDropMenu }"
                  >
                    <ul class="flex flex-col justify-center text-sm">
                      <li
                        class="cursor-pointer text-gray-600 lg:text-gray-500 lg:font-medium hover:text-sky-600 py-4 px-6 border-t first:border-t-2 first:border-t-[#0284c7] lg:border-0 lg:first:border-t-0 lg:hover:scale-110 transition-transform"
                        v-for="subtitle in item.subtitles"
                        :key="subtitle"
                      >
                        <NuxtLink>{{ subtitle }}</NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <!-- end absolute menu -->
                </div>
              </div>
            </li>

            <li
              class="lg:text-center text-gray-700 hover:text-gray-500 font-medium cursor-pointer p-4"
            >
              <NuxtLink :to="{ name: 'blog' }">وبلاگ</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <!-- end bottom menu -->
    </div>
  </header>
  <slot />

  <div
    class="w-full h-full fixed top-0 right-0 bg-[#3341554d] z-30 lg:hidden"
    :class="{ hidden: !isMenu }"
  ></div>

  <footer class="bg-white mx-auto mt-20 px-12 border py-6">
    <!-- https://www.instagram.com/m_saeed_.a/ -->
    <p class="text-md text-gray-600">تمامی حقوق این وبسایت محفوظ است.</p>
    <p class="text-md text-gray-600 mt-2">
      میتوانید پیشنهادات و انتقادات خود را با
      <a
        class="inline-block text-sky-600"
        href="https://www.instagram.com/m_saeed_.a/"
        target="_blank"
        >طراح</a
      >
      در میان بگذارید.
    </p>
  </footer>

  <button
    class="fixed bottom-0 right-0 m-6 p-2 md:p-3 bg-sky-800 text-white shadow-xl rounded-full transition-all duration-300"
    @click="goTop"
    :class="{ 'invisible opacity-0': !Boolean(scY > 300) }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      class="w-7 h-7 md:w-8 md:h-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  </button>
</template>



<style>
</style>