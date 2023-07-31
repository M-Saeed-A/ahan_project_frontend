export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    // const { data: redirects } = await useFetch(
    //   "http://127.0.0.1:8000/api/v1/redirects"
    // );
    const { data: redirects } = await useFetch(
      "https://api.saeedaminy.ir/api/v1/redirects"
    );

    const redirect = redirects.value.find((r) => r.request_url == to.fullPath);

    if (redirect) {
      console.log("yes");
      return navigateTo(redirect.destination_url, {
        redirectCode: redirect.status_code,
      });
    }
  } catch (e) {}
});
