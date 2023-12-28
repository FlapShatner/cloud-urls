import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

export const addQuotesToUrls = (input: string) => {
  const urls = input.split(',')
  const quoted = urls.map((url) => `"${url}"`).join(',')
  return quoted
}

export const downloadQuotedUrls = (quotedUrls: string) => {
  const element = document.createElement('a')
  const file = new Blob([quotedUrls], { type: 'text/plain' })
  element.href = URL.createObjectURL(file)
  element.download = 'quotedUrls.txt'
  document.body.appendChild(element) // Required for this to work in FireFox
  element.click()
}
