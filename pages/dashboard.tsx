import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Step, { IStepState } from '../components/Step';
import CashAvailable from '../components/CashAvailable';
import BankAccount from '../components/BankAccount';
import ReviewCash from '../components/ReviewCash';

const steps = ['Total a disponer', 'Banco y cuenta', 'Paso final'];

const Dashboard = () => {
  const [currentStep, setStep] = useState(0);
  const calculateState = (step: number) => {
    let state: IStepState;
    if (step < currentStep) {
      state = IStepState.DONE;
    } else if (step === currentStep) {
      state = IStepState.PROGRESS;
    } else {
      state = IStepState.WAITING;
    }

    return state;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>OBTÉN TU CRÉDITO EN 3 SIMPLES PASOS</h1>
        </Col>
      </Row>
      <Row>
        {steps.map((stepName, index) => (
          <Col>
            <Step
              key={index}
              name={stepName}
              position={index + 1}
              state={calculateState(index)}
            />
          </Col>
        ))}
      </Row>
      {currentStep === 0 && <CashAvailable />}
      {currentStep === 1 && <BankAccount />}
      {currentStep === 2 && <ReviewCash />}
    </Container>
  );
};

export default Dashboard;
