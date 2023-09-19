export const isValidUrl = (url: string): true | string => {
  try {
    new URL(url)
    return true
  } catch {
    return 'The value must be a valid url'
  }
} 