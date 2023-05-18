import useWindowSize, { WIDTH_SIZE_DESKTOP } from './useWindowSize';
import { renderHook } from '@testing-library/react-hooks';

describe('Hooks: useWindowSize', () => {
  const resizeWindow = (w: number, h: number) => {
    window.innerWidth = w;
    window.innerHeight = h;
    window.dispatchEvent(new Event('resize'));
  };

  it('isDesktop is false', () => {
    resizeWindow(1000, 300);
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.isDesktop).toBe(false);
  });

  it('isDesktop is true', () => {
    resizeWindow(WIDTH_SIZE_DESKTOP, 300);
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.isDesktop).toBe(true);
  });
});
