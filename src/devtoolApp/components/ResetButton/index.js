import React from 'react';
import { ResetButtonWrapper } from './styles';

const reloadWindow = () => window.location.reload(true);

const ResetButton = ({ bgColor, color }) => (
  <ResetButtonWrapper bgColor={bgColor} onClick={reloadWindow}>
    <div>Reset the app in case something stuck</div>
    <svg viewBox={'0 0 100 100'} xmlSpace={'preserve'}>
      <g>
        <g>
          <g>
            <path
              d="M68.7,37.1l25,0.1l-4.1-24.6l-3.4,4l-4,4.7l-4.4-4.2c-8-7.7-18.6-12-29.7-12h-0.2C36.4,5,25.6,9.5,17.5,17.6
				C12.1,23,8.2,29.7,6.3,37.1h11c1.6-4.5,4.2-8.6,7.7-12c6.2-6.2,14.4-9.6,23.1-9.6c8.7,0,16.9,3.4,23.1,9.6l0,0
				c0.2,0.2,0.3,0.3,0.5,0.5l0.1,0.1l3.6,3.8l-3.4,3.9L68.7,37.1z M83,58.9c-1.6,4.5-4.2,8.6-7.7,12.1c-6.2,6.2-14.4,9.6-23.1,9.6
				c-8.7,0-16.9-3.4-23.1-9.6c-0.2-0.2-0.4-0.4-0.6-0.6L25,66.7l3.4-4l3.1-3.7l-25-0.1l4.1,24.6l3.4-4l4-4.7l4.4,4.2
				c8.1,7.7,18.6,12,29.7,12h0.2c11.5,0,22.3-4.5,30.4-12.6C88.2,73,92.1,66.3,94,58.9H83z"
              fill={color}
            />
            <path d="M92.6,0.7C92.6,0.7,92.6,0.7,92.6,0.7c0.1,0,0.2,0,0.3,0C92.8,0.7,92.7,0.7,92.6,0.7z" fill={color} />
          </g>
        </g>
      </g>
    </svg>
  </ResetButtonWrapper>
);

export default ResetButton;