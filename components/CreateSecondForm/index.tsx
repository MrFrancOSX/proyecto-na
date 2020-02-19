import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalSms from '../ModalSms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faKey,
	faIdCard,
	faSign,
	faHashtag,
	faPhoneAlt,
	faArrowRight,
	faSms,
	faLongArrowAltLeft,
	faCheck
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import css from './index.module.scss';
// import { Container } from 'next/app';
const CreateSecondForm = () => {
	return (
		<>
			<Form className={css.formPrincipal} autoComplete="off" action="/">

				<Form.Group controlId="sms">
					<Form.Label>Código SMS: </Form.Label>
					<Form.Control type="number" placeholder="Ejemplo: 07897463" />
					<FontAwesomeIcon icon={faSms} />
					<Form.Text className="text-muted">
						Escribe el código SMS que te hemos enviamos
													<br></br>
						<ModalSms></ModalSms>
					</Form.Text>
				</Form.Group>




				<Form.Group controlId="contrasena">
					<Form.Label>Clave:</Form.Label>
					<Form.Control type="password" placeholder="Contraseña" />
					<FontAwesomeIcon className={css.fas} icon={faKey} />
				</Form.Group>

				<Form.Group controlId="reContrasena">
					<Form.Label>Nueva Clave:</Form.Label>
					<Form.Control type="password" placeholder="Contraseña" />
					<FontAwesomeIcon className={css.fas} icon={faKey} />
				</Form.Group>




				<div className={css.buttonContainer}>
					<div className={css.send}>
						<a href="/">
							<Button variant="primary" type="submit">
								Registrar <FontAwesomeIcon className={css.iconButton} icon={faCheck} />
							</Button>
						</a>
						<a href="/">
							<Button variant="primary" className="negative">
								<FontAwesomeIcon className={css.iconButton} icon={faLongArrowAltLeft} /> Atrás
							</Button>
						</a>
					</div>
				</div>
			</Form>

		</>
	);
};

export default CreateSecondForm;
