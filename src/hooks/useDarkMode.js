import { useLocalStorage } from './useLocalStorage'
import {} from 'react'

export default function useDarkMode(enabled){
    const [value, setValue] = useLocalStorage(enabled)
    return[value,setValue]
}