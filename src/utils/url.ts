export const getImageUrl = (name: string) => new URL(name, import.meta.url).href
