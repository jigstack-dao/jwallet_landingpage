import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ButtonBrowserGroup from '.';
import MultiDotRightDesktopIcon from '../icons/multi-dot-right-desktop';
import MultiDotRight from '../icons/multi-dot-right';
import MultiDotLeft from '../icons/multi-dot-left';
import MultiDotLeftDesktopIcon from '../icons/multi-dot-left-desktop';
import { render, screen } from '@testing-library/react';
configure({ adapter: new Adapter() });

describe('Component: button-group-browser', () => {
  it('render correctly children elements when on screen mobile', () => {
    const wrapper = shallow(<ButtonBrowserGroup isDesktop={false} />);
    expect(
      wrapper.containsMatchingElement([<MultiDotRight key={0} />, <MultiDotLeft key={1} />])
    ).toEqual(true);
    wrapper.unmount();
  });

  it('render correctly children elements when on screen desktop', () => {
    const wrapper = shallow(<ButtonBrowserGroup isDesktop={true} />);
    expect(
      wrapper.containsMatchingElement([
        <MultiDotRightDesktopIcon key={0} />,
        <MultiDotLeftDesktopIcon key={1} />
      ])
    ).toEqual(true);
    wrapper.unmount();
  });

  it('render anchor link correctly when on screen mobile', () => {
    render(<ButtonBrowserGroup isDesktop={false} />);
    expect(screen.getByText('Get Jwallet for Chrome').closest('a')).toHaveAttribute(
      'href',
      process.env.REACT_APP_CHROME_MOBILE_LINK
    );
    expect(screen.getByText('Get Jwallet for Brave').closest('a')).toHaveAttribute(
      'href',
      process.env.REACT_APP_BRAVE_MOBILE_LINK
    );
    expect(screen.getByText('Get Jwallet for Firefox').closest('a')).toHaveAttribute(
      'href',
      process.env.REACT_APP_FIREFOX_MOBILE_LINK
    );
  });

  it('render anchor link correctly when on screen desktop', () => {
    render(<ButtonBrowserGroup isDesktop={true} />);
    expect(screen.getByText('Get Jwallet for Chrome').closest('a')).toHaveAttribute(
      'href',
      process.env.REACT_APP_CHROME_DESKTOP_LINK
    );
    expect(screen.getByText('Get Jwallet for Brave').closest('a')).toHaveAttribute(
      'href',
      process.env.REACT_APP_BRAVE_DESKTOP_LINK
    );
    expect(screen.getByText('Get Jwallet for Firefox').closest('a')).toHaveAttribute(
      'href',
      process.env.REACT_APP_FIREFOX_DESKTOP_LINK
    );
  });
});
