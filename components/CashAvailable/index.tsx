import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import AvailableCredit from '../AvailableCredit';
import SelectedCredit from '../SelectedCredit';
import CreditDetails from '../CreditDetails';
import { sum, includes, find, without } from 'lodash';
import css from './index.module.scss';

const availableCreditData = [
  { id: 'A000023318321128', depositAmount: 1450 },
  { id: 'A000023318321129', depositAmount: 1100 },
  { id: 'A000023318321130', depositAmount: 1790 }
];

const getCreditById = (id: string) => {
  return find(availableCreditData, credit => credit.id === id);
};

const CashAvailable = () => {
  const [selectedCreditData, setSelectedCreditData] = useState<string[]>([]);
  const [showCreditDetailsId, setCreditDetailsId] = useState<string>();
  const totalSelectedCredit = sum(
    selectedCreditData.map(id => {
      const credit = getCreditById(id);
      if (credit) {
        return credit.depositAmount;
      }
      throw new Error('Credit ID is invalid');
    })
  );
  const selectCredit = (id: string) => {
    if (!includes(selectedCreditData, id)) {
      setSelectedCreditData([...selectedCreditData, id]);
    }
  };

  const removeCredit = (id: string) => {
    setSelectedCreditData(without(selectedCreditData, id));
  };

  const showCreditDetails = (id: string) => {
    setCreditDetailsId(id);
  };

  return (
    <>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Opcion</th>
                <th>Credito</th>
                <th>Monto deposito S/</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {availableCreditData.map(({ id, depositAmount }) => (
                <AvailableCredit
                  id={id}
                  depositAmount={depositAmount}
                  onSelect={selectCredit}
                  onInfo={showCreditDetails}
                />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Opcion</th>
                <th>Credito</th>
                <th>Monto deposito S/</th>
              </tr>
            </thead>
            <tbody>
              {selectedCreditData.map(creditId => {
                const credit = getCreditById(creditId);
                if (!credit) {
                  throw new Error('??');
                }
                return (
                  <SelectedCredit
                    id={credit.id}
                    depositAmount={credit.depositAmount}
                    onRemove={removeCredit}
                  />
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 4, span: 2 }}>
          <p>Total a disponer:</p>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMoneyBillAlt} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              disabled
              value={`${totalSelectedCredit}`}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 4, span: 2 }}>
          <Button>
            Siguiente <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
      <CreditDetails
        show={showCreditDetailsId != null}
        onHide={() => setCreditDetailsId(undefined)}
        credit={{}}
      />
    </>
  );
};

export default CashAvailable;
