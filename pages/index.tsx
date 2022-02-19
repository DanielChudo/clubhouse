import Head from 'next/head';
import { useState } from 'react';
import ChooseAvatarStep from '../components/steps/ChooseAvatarStep';
import EnterNameStep from '../components/steps/EnterNameStep';
import WelcomeStep from '../components/steps/WelcomeStep';

const stepsComponents = [WelcomeStep, EnterNameStep, ChooseAvatarStep];

function Home() {
  const [stepNumber, setStepNumber] = useState(2);
  const Step = stepsComponents[stepNumber];
  return (
    <>
      <Head>
        <title>Clubhouse: The Social Audio App</title>
      </Head>
      <Step />
    </>
  );
}

export default Home;
