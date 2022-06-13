import { useCallback, useState } from "react";

const useCount = (defaultValue) => {
  const [count, setCount] = useState(defaultValue);

  const decrement = useCallback(
    () => setCount((currentCount) => currentCount - 1),
    []
  );

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  return { count, decrement, increment };
};

export default useCount;
