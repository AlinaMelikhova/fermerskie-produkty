import styled from "styled-components";

const Label = styled.label`
  display: flex;
  font-size: 18px;
  color: ${(props) => props.theme.colorBlackForText};
  font-weight: 400;
  margin-bottom: ${(props) => props.$margin || 0}px;
`;

export default Label;
