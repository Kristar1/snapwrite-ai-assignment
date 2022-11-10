import { useState, useEffect } from "react";

function getSavedValue(key: any, initialValue: any) {

  var ls = require('local-storage');
  const savedValue = ls.get(key)
  if (savedValue) return savedValue
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}
export default function useLocalstorage(key: any, initialValue: any) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]


}
