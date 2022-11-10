// require() only in webpack
export function useGetImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
