export function useGetProductImage(name) {
  const apiUrl = import.meta.env.VITE_STRAPI_URL;
  return new URL(apiUrl + `${name}`, import.meta.url).href;
}
