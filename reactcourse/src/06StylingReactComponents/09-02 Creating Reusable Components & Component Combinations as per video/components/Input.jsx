/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $isValid }) => ($isValid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $isValid }) => ($isValid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $isValid }) => ($isValid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $isValid }) => ($isValid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function CustomInput({ label, isValid, htmlFor, ...props }) {
  return (
    <p>
      <Label $isValid={isValid} htmlFor={htmlFor}>
        {label}
      </Label>
      <Input $isValid={isValid} {...props} />
    </p>
  );
}
