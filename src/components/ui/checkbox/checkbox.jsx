import React from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "/src/components/styled";

const Label = styled.label`
  display: block;
`;

// Радиокнопка
function Checkbox({
  isChecked, // выбрано ли значение
  name, // имя
  onChange, // событие при изменении
  ...props
}) {
  return (
    <Label>
      <VisuallyHiddenInput
        checked={isChecked}
        name={name}
        onChange={onChange}
        {...props}
        type="checkbox"
      />
    </Label>
  );
}

export default Checkbox;
