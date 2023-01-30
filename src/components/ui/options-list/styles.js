import styled from "styled-components";
import { Ul, Li } from "/src/components/styled/index";

export const InfoText = styled.p`
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  padding: 0;
  margin-bottom: 14px;
`;

export const PriceWeight = styled.p`
  display: inline-block;
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  padding: 4px 8px;
  max-width: max-content;
  background-color: ${(props) => props.theme.colorForDarkBackground};
`;

export const CharacteristicsList = styled(Ul)`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const CharacteristicsItem = styled(Li)`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 21px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CharacteristicsPoint = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;

export const CharacteristicsPointDescription = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;
