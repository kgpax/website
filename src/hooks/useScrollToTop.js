import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element)
          element.scrollIntoView({ behavior: 'smooth', block: 'end' });
        else window.scrollTo(0, 0);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
};

export default useScrollToTop;
