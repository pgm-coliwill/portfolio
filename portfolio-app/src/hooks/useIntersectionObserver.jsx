import { useEffect, useState } from "react";

export const useIntersectionObserver = (options) => {
  const [observerEntry, setObserverEntry] = useState(null);
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (node) {
      const observer = new IntersectionObserver(([entry]) => {
        setObserverEntry(entry);
      }, options);

      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    }
  }, [node, options]);

  return [setNode, observerEntry];
};
