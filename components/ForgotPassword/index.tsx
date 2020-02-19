import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SimpleHeaderForm from '../SimpleHeaderForm';
import ForgotPasswordFirstForm from '../ForgotPasswordFirstForm';
import ForgotPasswordSecondForm from '../ForgotPasswordSecondForm';
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
const ForgotPassword = () => {
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
											Cambio de Clave
										</h2>
									</div>
								</Col>
							</Row>
							<div className="stepsCreateUser">
								<Row>
									<Col>
										<div className={css.box}>
											<ForgotPasswordFirstForm></ForgotPasswordFirstForm>
											<ForgotPasswordSecondForm></ForgotPasswordSecondForm>
										</div>
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

export default ForgotPassword;
