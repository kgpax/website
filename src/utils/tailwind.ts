import { twMerge } from 'tailwind-merge'

export function tw(...classLists: (string | false | undefined | null)[]) {
  return twMerge(...classLists)
}
