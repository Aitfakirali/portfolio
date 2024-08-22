import React from 'react';

import { Container } from './Container';

export const ContainerDefault = () => {
  return <Container className='h-56 bg-gray-200' />;
};

export const ContainerFluid = () => {
  return <Container layout='fluid' className='h-56 bg-gray-200' />;
};

export const ContainerFull = () => {
  return <Container layout='full' className='h-56 bg-gray-200' />;
};

// eslint-disable-next-line
export default {
  title: 'Primitives/Container',
};
