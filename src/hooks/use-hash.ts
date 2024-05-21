import { useCallback, useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);
  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
    // TODO: Why the dependency is required?
  }, [hashChangeHandler])

  const updateHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]);

  return [hash, updateHash];
}