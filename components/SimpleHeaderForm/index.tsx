import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
const SimpleHeaderForm = () => {
	return (
		<>
			<div className={css.headerClave}>
				<Container fluid={true}>
					<Row className={css.horizontal}>
						<Col>
							<div className={css.logoHorizontal}>
								<a href="./login">
									<img src="/static/logo-horizontal-a.png" alt="Logotipo Inversiones La Cruz" />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default SimpleHeaderForm;
