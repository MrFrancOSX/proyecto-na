import { useState, useContext, FormEvent } from 'react';
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
  faSign
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import css from './index.module.scss';
import APIClientContext from '../APIClientContext';
// import { Container } from 'next/app';
const LoginData = () => {
  const apiClient = useContext(APIClientContext);
  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [emailField, passwordField] = event.currentTarget.elements;
    await apiClient.login({
      username: (emailField as HTMLInputElement).value,
      password: (passwordField as HTMLInputElement).value
    });
  };

  return (
    <>
      <section className={css.login}>
        <Container className={css.loginCard}>
          <Row className={css.loginCenter}>
            <Col>
              <div className={css.logo}>
                <img
                  src="/static/logo-real.png"
                  alt="Logotipo Inversiones La Cruz"
                />
              </div>
              <Form
                className={css.loginForm}
                autoComplete="off"
                onSubmit={login}
              >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Documento de Identidad: </Form.Label>
                  <Form.Control type="number" placeholder="Ejemplo: 07897463" />
                  <FontAwesomeIcon icon={faIdCard} />
                  <Form.Text>
                    No compartiremos tu informacion con alguien más
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Clave</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                  <FontAwesomeIcon className={css.fas} icon={faKey} />
                </Form.Group>
                <div className={css.send}>
                  <Button variant="primary" type="submit">
                    Ingresar{' '}
                    <FontAwesomeIcon
                      className={css.sendButton}
                      icon={faSignInAlt}
                    />
                  </Button>
                </div>
                <Form.Group>
                  <Row className={css.optionsBottom}>
                    <Col>
                      <a href="./crear-clave">Olvidé mi clave</a>
                    </Col>
                    <Col>
                      <a href="./crear-clave">No tengo clave</a>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LoginData;
