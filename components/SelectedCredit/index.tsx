import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface ISelectedCreditProps {
  id: string;
  depositAmount: number;
  onRemove: (id: string) => void;
}

const SelectedCredit: React.FC<ISelectedCreditProps> = ({
  id,
  depositAmount,
  onRemove
}) => (
  <tr>
    <td>
      <Button onClick={() => onRemove(id)}>
        <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
      </Button>
    </td>
    <td>{id}</td>
    <td>{depositAmount}</td>
  </tr>
);

export default SelectedCredit;
