const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL

export const PathFormatter = {
  getImagePath: (imagePath: string, placeholder = '') => {
    if (imagePath && imagePath.length > 0) return STORAGE_URL + imagePath

    return process.env.STATIC_ROOT + placeholder
  },
}
