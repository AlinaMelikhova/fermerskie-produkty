import styled from "styled-components";

export const TabsList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const TabsButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 16px;
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlackForText};
  background: ${(props) =>
    props.active
      ? props.theme.colorForPositiveCardIcon
      : props.theme.colorGray};

  &:last-child {
    margin-right: 0;
  }
`;
