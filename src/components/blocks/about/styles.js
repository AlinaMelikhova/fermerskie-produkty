import styled from "styled-components";
import { Section } from "/src/components/styled";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 183px;
  padding-bottom: 183px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  align-items: center;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  margin-top: 24px;
`;
