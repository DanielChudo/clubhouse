import { FC, useState } from 'react';
import { StepProps } from '../../../types';
import StepInfo from '../../stepInfo';
import s from './EnterNameStep.module.css';

const EnterNameStep: FC<StepProps> = ({ onNextStep }) => {
  const [fullname, setFullname] = useState('');

  return (
    <div id="step-block">
      <StepInfo
        icon="/static/man.png"
        alt="your name?"
        title="What's your fullname?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <div className="container">
        <input value={fullname} onChange={(e) => setFullname(e.target.value)} id={s.inputFullName} placeholder="Enter fullname" />
        <button onClick={onNextStep} disabled={!fullname}>
          Next
          <img src="/static/arrow.svg" />
        </button>
      </div>
    </div>
  );
}

export default EnterNameStep;
