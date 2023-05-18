import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';
import CardLeft from '../../images/card-left.png';
import CardCenter from '../../images/card-center.png';
import CardRight from '../../images/card-right.png';

const SliderCards: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const settings = {
    accessibility: true,
    focusOnSelect: true,
    className: 'configSlider',
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current: number) => {
      setCurrentSlide(current);
    }
  };

  if (isDesktop) {
    return (
      <div className='card-list'>
        <div className='item'>
          <img src={CardLeft} width={470} height={650} />
        </div>
        <div className='item'>
          <img src={CardCenter} width={470} height={650} />
        </div>
        <div className='item'>
          <img src={CardRight} width={470} height={650} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Slider {...settings} arrows={false} initialSlide={1}>
        <div>
          <img src={CardLeft} width={268} height={401} />
        </div>
        <div>
          <img src={CardCenter} width={268} height={401} />
        </div>
        <div>
          <img src={CardRight} width={268} height={401} />
        </div>
      </Slider>
      <div id='three-dot'>
        {[0, 1, 2].map((dot) => (
          <div key={dot} className={`item ${currentSlide == dot && 'active'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
