import StepsInfo from '../../stepsInfo';
import s from './EnterNameStep.module.css';

function EnterNameStep() {
  return (
    <div id="step-block">
      <StepsInfo
        icon="/static/man.png"
        alt="your name?"
        title="What's your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <div className="container">
        <input id={s.inputFullName} placeholder="Enter full name" />
        <button>
          Next
          <img src="/static/arrow.svg" />
        </button>
      </div>
    </div>
  );
}

export default EnterNameStep;
