import cx from 'classnames';
import css from './index.module.scss';

export enum IStepState {
  DONE = 'done',
  PROGRESS = 'progress',
  WAITING = 'waiting'
}

interface IStepProps {
  name: string;
  position: number;
  state: IStepState;
}

const Step: React.FC<IStepProps> = ({ name, state, position }) => (
  <div
    className={cx(css.step, {
      [css.done]: state === IStepState.DONE,
      [css.progress]: state === IStepState.PROGRESS,
      [css.waiting]: state === IStepState.WAITING
    })}
  >
    {position} {name}
  </div>
);
export default Step;
