import SliderCards from './index';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CardLeft from '../../images/card-left.png';
import CardCenter from '../../images/card-center.png';
import CardRight from '../../images/card-right.png';
configure({ adapter: new Adapter() });

describe('Component: slider-cards', () => {

  it('render correctly children elements when on screen mobile', () => {
    const wrapper = shallow(<SliderCards isDesktop={false} />);
    expect(
      wrapper.containsMatchingElement(<img src={CardLeft} width={268} height={401} />)
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<img src={CardCenter} width={268} height={401} />)
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<img src={CardRight} width={268} height={401} />)
    ).toEqual(true);
    expect(wrapper.find('#three-dot').length).toEqual(1);
    wrapper.unmount();
  });

  it('render correctly children elements when on screen desktop', () => {
    const wrapper = shallow(<SliderCards isDesktop={true} />);
    expect(
      wrapper.containsMatchingElement(<img src={CardLeft} width={470} height={650} />)
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<img src={CardCenter} width={470} height={650} />)
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<img src={CardRight} width={470} height={650} />)
    ).toEqual(true);
    expect(wrapper.find('#three-dot').length).toEqual(0);
    wrapper.unmount();
  });
});
