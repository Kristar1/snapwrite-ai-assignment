import { useState, useEffect } from "react";



function getSavedValue(key,initialValue ){
  var ls = require('local-storage');
   const savedValue = ls.get(key)
   if(savedValue) return savedValue
   if(initialValue instanceof Function)return initialValue()
   return initialValue
}
export default function useLocalstorage(key, initialValue){
 const [value, setValue] = useState(()=>{
   return getSavedValue(key,initialValue)
 })
 useEffect(()=>{
  localStorage.setItem(key, JSON.stringify(value))
 },[value, key])

 return [value, setValue]
 

}
