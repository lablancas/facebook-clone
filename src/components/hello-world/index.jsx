import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHome = styled.div`
  color: blue;
`;

const HelloWorld = ({ title }) => <StyledHome>{title}</StyledHome>;

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
