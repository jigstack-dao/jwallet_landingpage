import { useEffect, useState } from 'react';

//unit px
export const WIDTH_SIZE_DESKTOP = 1440;

export default function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= WIDTH_SIZE_DESKTOP);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= WIDTH_SIZE_DESKTOP);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isDesktop };
}
