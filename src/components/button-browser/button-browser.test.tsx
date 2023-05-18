import ChromeIcon from '../icons/chrome';
import ButtonBrowser from './index';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Component: button-browser', () => {
  it('render correctly children elements', () => {
    const text = 'Chrome';
    const link = 'example/link';
    const wrapper = shallow(<ButtonBrowser text={text} icon={<ChromeIcon />} to={link} />);
    expect(wrapper.contains(<ChromeIcon />)).toEqual(true);
    expect(wrapper.find('a').prop('href')).toEqual(link);
    expect(wrapper.text()).toMatch(/Chrome/);
    wrapper.unmount();
  });
});
