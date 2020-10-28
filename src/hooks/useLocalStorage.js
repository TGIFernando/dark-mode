import { useState } from 'react'
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.gotItem(key)
        return item ? JSON.parse(item) : initialValue
    })
    return [storedValue]
}