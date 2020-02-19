import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalDocumentIcon from '../ModalDocumentIcon';
import ModalDocumentText from '../ModalDocumentText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faKey,
	faIdCard,
	faSign,
	faHashtag,
	faPhoneAlt,
	faArrowRight,
	faPortrait
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import css from './index.module.scss';
// import { Container } from 'next/app';
const ForgotPasswordFirstForm = () => {
	return (
		<>


			<Form className={css.formPrincipal} autoComplete="off" action="/">


				<Form.Group controlId="tipoDoc">
					<Form.Label>Selecciona el tipo de documento:</Form.Label>
					<Form.Control as="select">
						<option defaultValue="1">Documento de Identidad (DNI)</option>
						<option value="3">Carnet de extranjería</option>
					</Form.Control>
					<FontAwesomeIcon icon={faPortrait} />
				</Form.Group>


				<Form.Group controlId="dni">
					<Form.Label>Número de documento: </Form.Label>
					<Form.Control type="number" placeholder="Ejemplo: 07897463" />
					<FontAwesomeIcon icon={faIdCard} />
				</Form.Group>

				<Form.Group controlId="digitoChequeo">
					<Form.Label>Dígito de chequeo: </Form.Label>
					<Form.Control type="number" placeholder="" />
					<FontAwesomeIcon icon={faHashtag} />
					<Form.Text className="text-muted">
						Es el dígito en la parte superior derecha de tu dni
						<br></br>
						<ModalDocumentIcon></ModalDocumentIcon>
						<ModalDocumentText></ModalDocumentText>
					</Form.Text>
				</Form.Group>



				<div className={css.buttonContainer}>
					<div className={css.send}>
						<Button variant="primary" type="submit">
							Siguiente <FontAwesomeIcon className={css.iconButton} icon={faArrowRight} />
						</Button>
					</div>
				</div>

				<Form.Group>
					<Row className={css.optionsBottom}>
						<Col>
							<a href="./login">
								Volver al inicio
							</a>
						</Col>
						<Col>
							<a href="./crear-clave">
								No tengo clave
							</a>
						</Col>
					</Row>
				</Form.Group>

			</Form>

		</>
	);
};

export default ForgotPasswordFirstForm;
