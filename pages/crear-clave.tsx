import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Added
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import css from './index.module.scss';
import CreateUser from '../components/CreateUser';


const CrearClave = () => {
	return (
		<CreateUser></CreateUser>
	);
};

export default CrearClave;
