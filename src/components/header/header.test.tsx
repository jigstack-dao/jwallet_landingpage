import Header from './index';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import JwalletLogo from '../icons/jwallet-logo';
import ButtonGetJwallet from '../button-get-jwallet';
import JigstackLogoIcon from '../icons/jgstack-logo';
configure({ adapter: new Adapter() });

describe('Component: header', () => {
  it('render correctly children elements', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<JwalletLogo />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<ButtonGetJwallet />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<JigstackLogoIcon />)).toEqual(true);
    wrapper.unmount();
  });
});
