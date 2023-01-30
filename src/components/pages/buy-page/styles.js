import styled from "styled-components";
import Section from "/src/components/styled/section/section";

export const StyledSection = styled(Section)`
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  height: 768px;
  background-color: ${(props) => props.theme.colorGray};
`;
