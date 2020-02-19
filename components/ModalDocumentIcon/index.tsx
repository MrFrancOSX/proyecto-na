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
	faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import css from './index.module.scss';
// import { Container } from 'next/app';


const ModalDocumentIcon = () => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{/* <Button className="modalText" variant="primary" onClick={handleShow}>
				Launch demo modal
      		</Button> */}

			<Button className="modalIcon" onClick={handleShow}>
				<FontAwesomeIcon className={css.iconButton} icon={faQuestionCircle} />
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Dígito de verificación
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img src="/static/items/dni-2.png" />
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

export default ModalDocumentIcon;
