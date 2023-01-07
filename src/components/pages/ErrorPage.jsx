import React from 'react';
import {Container, ErrorMessage, ErrorMessageTitle} from '../styles/ErrorPage'



const ErrorPage = () => {
  return (
    <Container>
      <ErrorMessageTitle>Error</ErrorMessageTitle>
      <ErrorMessage>Currency rates server is unavailable</ErrorMessage>
    </Container>
  )
}

export default ErrorPage;