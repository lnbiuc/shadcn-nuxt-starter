import type { Updater } from '@tanstack/vue-table'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createFetch } from '@vueuse/core'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}

export const useIVFetch = createFetch({
  options: {
    immediate: false,
    timeout: 3000,
    async beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        'content-type': 'application/json;charset=UTF-8',
      }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})
