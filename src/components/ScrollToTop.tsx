import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position when route changes
    const scrollToTop = () => {
      // Check if smooth scrolling is supported
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
    };

    // Small delay to ensure DOM is ready and animations can start
    const timer = setTimeout(scrollToTop, 150);

    // Cleanup timer on unmount or pathname change
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
