export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export * from './icon'
export * from './safe'
export * from './placeholder'

// Truncate username
export const fomUsrn = (text: string): string => {
  if (text.length >= 42) {
    return `${text.substring(0, 6)}...${text.substring(text.length - 6)}`
  }

  return text
}
