import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const suffix = (title && ` - ${title}`) || '';
    window.document.title = `kevinpaxton.com${suffix}`;
  }, [title]);
};

export default usePageTitle;
