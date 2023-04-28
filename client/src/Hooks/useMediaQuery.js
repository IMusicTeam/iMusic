import { useState, useEffect } from 'react';

/**
 * You can use any @media property
 * @param {*} query
 * @returns
 */

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [matches, query]);

  return matches;
};

// Usage example: const isDesktop = useMediaQuery('(min-width: 960px)');
