export interface IStepProps {
  onNextStep: () => void;
}

export interface IRoomCardProps {
  id: string;
  title: string;
  listeners: string[];
  listenersCount: number;
  speakersAvatars: string[];
  speakersCount: number;
}
