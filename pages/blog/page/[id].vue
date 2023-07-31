<script setup>
const route = useRoute();
const router = useRouter();

// import { onMounted } from "vue";

const {
  error,
  pending,
  data: articles,
} = await useFetch(
  `https://api.saeedaminy.ir/api/v1/articles?page=${route.params.id}`
);

const NextPage = () => {
  if (parseInt(route.params.id) < Math.ceil(articles.value.count / 12)) {
    router.push({
      name: "blog-page-id",
      params: { id: parseInt(route.params.id) + 1 },
    });
  }
};
const PreviousPage = () => {
  if (parseInt(route.params.id) > 2) {
    router.push({
      name: "blog-page-id",
      params: { id: parseInt(route.params.id) - 1 },
    });
  }
  if (parseInt(route.params.id) == 2) {
    router.push({ name: "blog" });
  }
};
</script>

<template>
  <section class="max-w-7xl xl:mx-auto mx-3 lg:mt-20">
    <div class="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        class="bg-white shadow-md p-3 rounded-lg hover:shadow-xl"
        v-for="item in articles.results"
        :key="item.id"
      >
        <div>
          <NuxtLink
            :to="{ name: 'blog-post', params: { post: item.slug } }"
            class="rounded-lg overflow-hidden lg:h-48 h-56 flex"
          >
            <nuxt-img
              :src="item.thumbnail"
              format="webp"
              :title="item.tag_title"
              :alt="item.tag_title"
              sizes="xs:500px sm:500px md:500px lg:500px xl:300px"
              loading="lazy"
            />
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink :to="{ name: 'blog-post', params: { post: item.slug } }">
            <h4
              class="xl:text-xl text-lg text- mt-6 text-gray-700 font-medium hover:text-sky-600 text-center"
            >
              {{ item.h1_title }}
            </h4>
          </NuxtLink>
          <span class="mx-auto"></span>
          <p class="text-xs text-gray-400 mt-4 leading-6">
            {{ item.short_description }}
          </p>
          <div
            class="bg-sky-50 rounded-xl flex items-center justify-between w-max py-1 px-2 mt-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-sky-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-xs text-sky-600 mr-2 font-medium">{{
              item.jpublished
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- start pagination -->
    <div class="mt-14">
      <div class="flex justify-center items-center">
        <button
          class="px-3 py-1 outline-none focus:outline-none bg-gray-50 rounded-full shadow-md ml-2 text-sky-700"
          @click="NextPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.3"
            stroke="currentColor"
            class="md:w-8 w-7 md:h-8 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        <button
          class="px-3 py-1 outline-none focus:outline-none bg-gray-50 rounded-full shadow-md text-sky-700 mr-2"
          @click="PreviousPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.3"
            stroke="currentColor"
            class="md:w-8 w-7 md:h-8 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- end pagination -->
  </section>
</template>



<style>
</style>