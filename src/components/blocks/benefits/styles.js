import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: relative;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0;
  padding: 0;
  margin-top: 64px;
  margin-bottom: 64px;
  font-size: 0;
  line-height: 0;
  text-align: center;
`;

export const StyledListItem = styled(Li)`
  display: inline-block;
  font-size: 18px;
  line-height: 150%;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
`;
