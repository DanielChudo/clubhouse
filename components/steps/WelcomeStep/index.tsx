import React, { FC } from 'react';
import { IStepProps } from '../../../types';
import s from './WelcomeStep.module.css';

const WelcomeStep: FC<IStepProps> = ({ onNextStep }) => {
  return (
    <div id="step-block">
      <div className="container">
        <div id={s.welcomeBlock}>
          <img
            src="/static/wave-hand.png"
            alt="wave-hand"
            width={40}
            height={40}
          />
          <h3>Welcome to Clubhouse!</h3>
        </div>
        <p>
          We&apos;re working hard to get Clubhouse ready for everyone!
          <br />
          While we wrap up the finishing youches, we&apos;re adding
          <br />
          gradually to make sure nothing breaks :)
        </p>
        <button id={s.loginButton} onClick={onNextStep} type="button">
          Get your username
          <img src="/static/arrow.svg" alt="next" />
        </button>
        <span>Have an invite text? Sign in</span>
      </div>
    </div>
  );
};

export default WelcomeStep;
