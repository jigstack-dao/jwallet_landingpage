import Footer from './index';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Component: footer', () => {
  it('render correctly children elements', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toMatch(/Jwallet © 2022/);
    expect(wrapper.text()).toMatch(/All Rights Reserved./);
    expect(wrapper.text()).toMatch(/Privacy Notice/);
    expect(wrapper.text()).toMatch(/Cookie Policy/);
    expect(wrapper.text()).toMatch(/Terms of Service/);
    wrapper.unmount();
  });
});
