import { useEffect } from 'react';
import { useLocation } from 'wouter';

const useScrollToTop = () => {
  const [pathname] = useLocation();
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element)
          element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
};

export default useScrollToTop;
