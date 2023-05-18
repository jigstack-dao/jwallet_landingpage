import ButtonGetJwallet from './index';
import ChromeIcon from '../icons/chrome';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Component: button-get-jwallet', () => {
  it('render correctly children elements', () => {
    const wrapper = shallow(<ButtonGetJwallet />);
    expect(wrapper.containsMatchingElement(<ChromeIcon />)).toEqual(true);
    expect(wrapper.text()).toMatch(/Join Chrome Betatest/);
    wrapper.unmount();
  });
});
