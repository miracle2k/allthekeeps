import {useEffect, useRef} from "react";


export const useInterval = (callback: any, delay: number|null) => {
  const savedCallback = useRef<any>();

  useEffect(
      () => {
        savedCallback.current = callback;
      },
      [callback]
  );

  useEffect(
      () => {
        const handler = (...args: any) => savedCallback.current?.(...args);

        if (delay !== null) {
          const id = setInterval(handler, delay);
          return () => clearInterval(id);
        }
      },
      [delay]
  );
};