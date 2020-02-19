import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import css from './index.module.scss';

interface IAvailableCreditProps {
  id: string;
  depositAmount: number;
  onSelect: (id: string) => void;
  onInfo: (id: string) => void;
}

const AvailableCredit: React.FC<IAvailableCreditProps> = ({
  id,
  depositAmount,
  onSelect,
  onInfo
}) => (
  <tr>
    <td>
      <Button onClick={() => onSelect(id)}>
        <FontAwesomeIcon icon={faCheckCircle} /> Seleccionar
      </Button>
    </td>
    <td>{id}</td>
    <td>{depositAmount}</td>
    <td>
      <Button onClick={() => onInfo(id)}>
        <FontAwesomeIcon icon={faInfo} />
      </Button>
    </td>
  </tr>
);
export default AvailableCredit;
