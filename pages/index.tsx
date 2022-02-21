import { FC, useState } from 'react';
import Head from 'next/head';
import ChooseAvatarStep from '../components/steps/ChooseAvatarStep';
import EnterNameStep from '../components/steps/EnterNameStep';
import WelcomeStep from '../components/steps/WelcomeStep';
import { StepProps } from '../types';

const stepsComponents = [WelcomeStep, EnterNameStep, ChooseAvatarStep];

const Home: FC = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const Step: FC<StepProps> = stepsComponents[stepNumber];

  return (
    <>
      <Head>
        <title>Clubhouse: The Social Audio App</title>
      </Head>
      <Step onNextStep={() => setStepNumber((prevStepNumber) => prevStepNumber + 1)}/>
    </>
  );
}

export default Home;
