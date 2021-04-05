import { useState, Dispatch, SetStateAction } from 'react'
import { useDebounce } from 'use-debounce'

export interface InputState<T> {
  input: T
  delayed: T
}

export interface TableInputProps<T> {
  defaultValue: T
  delay?: number
}

export function useTableInput<T>({
  defaultValue,
  delay = 0,
}: TableInputProps<T>): [InputState<T>, Dispatch<SetStateAction<T>>] {
  const [input, setInput] = useState<T>(defaultValue)
  const [delayed] = useDebounce(input, delay)
  return [{ input, delayed }, setInput]
}
