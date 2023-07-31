<script setup>
const route = useRoute();

const fullnameComment = ref("");
const emailComment = ref("");
const bodyComment = ref("");
const showCommentError = ref("");

const { data: article, error: articleError } = await useFetch(
  `https://api.saeedaminy.ir/api/v1/articles/${route.params.post}`
);
if (articleError.value) {
  throw createError({
    statusCode: 404,
    message: "صفحه مورد نظر یافت نشد",
    fatal: true,
  });
}

const { data: lastarticles } = await useFetch(
  "https://api.saeedaminy.ir/api/v1/lastarticles"
);

const { data: comments, refresh: refreshcomments } = await useFetch(
  "https://api.saeedaminy.ir/api/v1/comments"
);

const handleCommentSubmit = async () => {
  const { error: commenterror } = await useFetch(
    "https://api.saeedaminy.ir/api/v1/comments/",
    {
      // headers: { "Content-type": "application/json","Accept": "application/json", },
      method: "POST",
      body: {
        article: article.value.id,
        fullname: fullnameComment.value,
        email: emailComment.value,
        body: bodyComment.value,
      },
    }
  );
  if (commenterror.value) {
    showCommentError.value =
      "ارسال درخواست با مشکل مواجه شد. لطفا دوباره امتحان کنید";
  } else {
    fullnameComment.value = "";
    emailComment.value = "";
    bodyComment.value = "";
    refreshcomments();
  }
};
</script>


<template>
  <div>
    <Head>
      <Title>{{ article.tag_title }}</Title>
      <Meta
        name="description"
        :content="article.meta_description"
        v-if="article.meta_description"
      />
      <Meta
        property="og:title"
        :content="article.og_title"
        v-if="article.og_title"
      />
      <Meta
        property="og:type"
        :content="article.og_type"
        v-if="article.og_type"
      />
      <Meta
        property="og:description"
        :content="article.og_desc"
        v-if="article.og_desc"
      />
      <Meta
        property="og:image"
        :content="article.og_image"
        v-if="article.og_image"
      />
      <Meta property="og:url" :content="article.og_url" v-if="article.og_url" />
      <Link rel="canonical" :href="article.canonical_url" v-if="article.canonical_url" />
    </Head>
  </div>
  <section class="max-w-7xl xl:mx-auto mx-3 lg:mt-20 flex flex-col lg:flex-row">
    <div class="lg:w-3/4 w-full">
      <!-- start article section -->
      <div class="bg-white shadow-md rounded-lg px-4 py-6">
        <div class="md:flex md:mb-5">
          <div class="rounded-xl overflow-hidden md:w-1/4">
            <nuxt-img
              :src="article.thumbnail"
              format="webp"
              sizes="xs:600px sm:600px md:250px"
              loading="lazy"
            />
          </div>

          <div class="flex flex-col lg:w-3/4">
            <div class="flex items-center my-6">
              <div
                class="bg-red-100 rounded-md flex items-center justify-between w-max px-2 py-2 text-xs font-medium mr-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span class="text-red-600 mr-1">
                  {{ `${article.author.fname} ${article.author.lname}` }}</span
                >
              </div>
              <div
                class="bg-sky-100 rounded-md flex items-center justify-between w-max px-2 py-2 text-xs font-medium mr-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-sky-500"
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
                  article.jpublished
                }}</span>
              </div>
            </div>
            <h1
              class="lg:text-3xl text-2xl mb-5 text-gray-800 font-medium leading-10 mr-5"
            >
              {{ article.h1_title }}
            </h1>
          </div>
        </div>
        <article>
          <div class="text-gray-600 leading-10" v-html="article.body">
          </div>
        </article>
      </div>
      <!-- end article section -->

      <!-- start comment section -->
      <div class="bg-white px-4 py-6 shadow-md rounded-xl lg:mx-0 mt-10">
        <form
          @submit.prevent="handleCommentSubmit"
          class="flex flex-col pb-10 border-b-2 border-color"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="flex flex-col space-y-2">
              <label for="name" class="text-gray-700">نام و نام خانوادگی</label>
              <input
                v-model="fullnameComment"
                id="name"
                type="text"
                placeholder="نام و نام خانوادگی خود را وارد نمایید"
                class="border outline-none focus:outline-none px-4 py-2 text-gray-500 border-b-2 focus:border-b-sky-600 rounded custom-focus-border-color"
                required
              />
            </div>
            <div class="flex flex-col space-y-2 mt-3 md:mt-0">
              <label for="email" class="text-gray-700"
                >ایمیل
                <span class="text-xs font-medium text-gray-500"
                  >(اختیاری)</span
                ></label
              >
              <input
                v-model="emailComment"
                id="email"
                type="email"
                placeholder=" ایمیل خود را وارد کنید"
                class="border outline-none focus:outline-none px-4 py-2 text-gray-500 border-b-2 focus:border-b-sky-600 rounded"
              />
            </div>
          </div>

          <div class="mt-10 flex flex-col space-y-4">
            <label for="textarea" class="text-gray-700">متن پیام</label>
            <textarea
              v-model="bodyComment"
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="متن پیام خود را وارد کنید"
              class="border w-full outline-none focus:outline-none px-4 py-2 text-gray-500 border-b-2 focus:border-b-sky-600 rounded"
              style="resize: none"
              required
            ></textarea>
            <div>
              <button
                type="submit"
                class="text-white px-5 py-1 rounded-xl inline-block bg-sky-600"
              >
                ارسال
              </button>
            </div>
            <span class="text-red-600 pr-5" v-if="showCommentError">{{
              showCommentError
            }}</span>
          </div>
        </form>

        <!-- show comments -->

        <div class="flex flex-col">
          <div
            class="flex flex-col border px-4 py-6 mt-8 rounded-lg"
            v-for="comment in comments"
            :key="comment.id"
          >
            <div class="flex flex-col">
              <div class="border-b pb-6">
                <p class="text-lg text-gray-700 font-medium">
                  {{ comment.fullname }}
                </p>
                <p class="text-gray-500 text-sm mt-2 mr-1">
                  {{ comment.jpublished }}
                </p>
              </div>
              <div class="mt-6">
                <p class="text-gray-700 leading-9">
                  {{ comment.body }}
                </p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <!-- end comment section -->
    </div>
    <aside
      class="lg:w-1/4 mr-2 border px-2 py-6 rounded-lg h-fit mt-10 lg:mt-0"
    >
      <div>
        <div>
          <h3 class="text-2xl font-medium text-gray-700 pr-2">آخرین مقالات</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-4">
          <div
            class="bg-white flex rounded-lg overflow-hidden shadow hover:shadow-md"
            v-for="item in lastarticles"
            :key="item.id"
          >
            <div class="w-1/3">
              <NuxtLink to="/">
                <nuxt-img
                  :src="item.thumbnail"
                  format="webp"
                  sizes="sm:200px md:100px"
                  loading="lazy"
                />
              </NuxtLink>
            </div>
            <div class="w-2/3 flex items-center py-3 pl-1">
              <NuxtLink
                to="/"
                class="pr-2 text-sm md:text-xs font-medium text-gray-600 md:leading-6 leading-6 hover:text-sky-600"
              >
                {{ item.h1_title }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <NuxtLink
            :to="{ name: 'blog' }"
            class="border px-5 py-2 border-sky-600 rounded text-sky-600 font-medium text-sm cursor-pointer hover:bg-sky-600 hover:text-white"
            >مشاهده همه مقالات</NuxtLink
          >
        </div>
      </div>
    </aside>
  </section>
</template>



<style>
</style>