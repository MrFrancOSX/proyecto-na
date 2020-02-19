import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface ICreditDetailsProps {
  show: boolean;
  onHide: () => void;
  credit?: object;
}

const CreditDetails: React.FC<ICreditDetailsProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Calculos realizados</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button>
          Entendido <FontAwesomeIcon icon={faCheck} />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreditDetails;
