import Main from './index';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ButtonBrowserGroup from '../button-browser-group';
import SliderCards from '../slider-cards';
configure({ adapter: new Adapter() });

describe('Component: main', () => {
  it('render correctly children elements', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.containsMatchingElement(<SliderCards isDesktop={false} />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<ButtonBrowserGroup isDesktop={false} />)).toEqual(true);
    expect(wrapper.text()).toMatch(/What is Jwallet?/);
    expect(wrapper.find('.social-networks-item')).toHaveLength(6);
    wrapper.unmount();
  });
});
