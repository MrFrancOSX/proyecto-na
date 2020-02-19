import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SimpleHeaderForm from '../SimpleHeaderForm';
import CreateFirstForm from '../CreateFirstForm';
import CreateSecondForm from '../CreateSecondForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faKey,
	faIdCard,
	faSign,
	faHashtag,
	faPhoneAlt,
	faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import css from './index.module.scss';
// import { Container } from 'next/app';
const CreateUser = () => {
	return (
		<>
			<section className={css.generacionClave}>
				<SimpleHeaderForm></SimpleHeaderForm>

				<div className={css.leftSide}>
					<div className={css.bodyClave}>
						<Container>
							<Row>
								<Col className="text-center">
									<div className={css.titleArea}>
										<h2>
											Crear Clave
										</h2>
									</div>
								</Col>
							</Row>
							<div className="stepsCreateUser">

								<Row>
									<Col>
										<div className={css.box}>
											<CreateFirstForm></CreateFirstForm>
											<CreateSecondForm></CreateSecondForm>
										</div>

										{/* <Form className={css.formPrincipal} autoComplete="off" action="/">
											<div className={css.box}>
												<Form.Group controlId="dni">
													<Form.Label>DNI/Carnet de extranjería: </Form.Label>
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
														<a href="./"> (Click aquí para ver ejemplo)</a>
													</Form.Text>
												</Form.Group>

												<Form.Group controlId="numeroCelular">
													<Form.Label>Celular: </Form.Label>
													<Form.Control type="number" placeholder="Ejemplo: 07897463" />
													<FontAwesomeIcon icon={faPhoneAlt} />
												</Form.Group>
												
												<div className={css.buttonContainer}>
													<div className={css.send}>
														<Button variant="primary" type="submit">
															Siguiente <FontAwesomeIcon className={css.sendButton} icon={faArrowRight} />
														</Button>
													</div>
												</div>

												<Form.Group>
													<Row className={css.optionsBottom}>
														<Col>
															<a href="./crear-clave">
																Volver al inicio
												</a>
														</Col>
														<Col>
															<a href="./crear-clave">
																Olvidé mi clave
												</a>
														</Col>
													</Row>
												</Form.Group>
											</div>
										</Form> */}
									</Col>
								</Row>


							</div>

						</Container>
					</div>
				</div>
			</section>
		</>
	);
};

export default CreateUser;
