import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import React, { FC } from 'react';
import './style.scss';

const widgetConfig: WidgetConfig = {
  integrator: 'jwallet',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px'
  },
  variant: 'expandable',
  // appearance: 'dark'
};

const LifiWidget: FC = () => {
  return (
    <div className='lifi-wrapper'>
      <LiFiWidget config={widgetConfig} />
    </div>
  );
};

export default LifiWidget;
