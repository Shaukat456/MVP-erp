import exp from "constants";
import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Create state variable to store
  // localStorage value in state

  useEffect(() => {
    console.log("page loaded");
  }, []);
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        // Perform localStorage action
        const item = localStorage.getItem("key");
        const value = localStorage.getItem(key);
        // If value is already present in
        // localStorage then return it

        // Else set default value in
        // localStorage and then return it
        if (value) {
          return JSON.parse(value);
        } else {
          localStorage.setItem(key, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (error) {
        if (localStorage) {
          localStorage.setItem(key, JSON.stringify(defaultValue));
        }
        return defaultValue;
      }
    }
  });

  // this method update our localStorage and our state
  const setLocalStorageStateValue = (valueOrFn) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      const fn = valueOrFn;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };
  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
