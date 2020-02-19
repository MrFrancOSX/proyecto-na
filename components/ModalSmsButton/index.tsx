import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faKey,
	faIdCard,
	faSign,
	faHashtag,
	faPhoneAlt,
	faArrowRight,
	faCheck,
	faQuestionCircle,
	faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import css from './index.module.scss';
// import { Container } from 'next/app';


const ModalSmsButton = () => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{/* <Button className="modalText" variant="primary" onClick={handleShow}>
				Launch demo modal
      		</Button> */}

			<Button variant="primary" className="modalButtonSmall negative" onClick={handleShow}>
				Volver a enviar SMS <FontAwesomeIcon className={css.iconButton} icon={faMobileAlt} />
			</Button>


			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Dígito de Verificación
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						El <strong>SMS</strong> (Mensaje de Texto) con el código de verificación, fue correctamente enviado.
					</p>
				</Modal.Body>
				<Modal.Footer>
					{/* <Button variant="secondary" onClick={handleClose}>
						Close
          			</Button> */}
					<Button variant="primary" onClick={handleClose}>
						Entendido <FontAwesomeIcon className={css.iconButton} icon={faCheck} />
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalSmsButton;
