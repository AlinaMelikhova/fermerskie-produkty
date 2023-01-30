import React from "react";
import styled from "styled-components";

export const StyledTextInput = styled.input`
  display: block;
  box-sizing: border-box;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  background: ${(props) => props.theme.colorForLightBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

// Радиокнопка
function TextInput({
  minWidth,
  name, // имя
  onChange, // событие при изменении
  ...props
}) {
  return (
    <StyledTextInput
      $minWidth={minWidth}
      name={name}
      onChange={onChange}
      {...props}
      type="text"
    />
  );
}

export default TextInput;
