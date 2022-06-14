import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 15px 0 0 15px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.6);
  margin: 1rem;
  border-right: none;
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  &::placeholder {
    color: #000;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 200;
  }
  &:focus {
    outline: 0.5px solid rgba(255, 255, 255, 0.6);
  }
`;

function SearchField({ onChange, value }) {
  return (
    <Input placeholder={value} value={value} onChange={onChange} />
  );
}

export default SearchField;

SearchField.propTypes = {
  onChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
