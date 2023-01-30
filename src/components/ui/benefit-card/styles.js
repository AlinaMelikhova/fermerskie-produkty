import styled from "styled-components";

export const Benefit = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  box-sizing: border-box;
`;

export const BenefitIcon = styled.span`
  display: block;
  padding: 2px 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  box-sizing: border-box;
  max-width: max-content;
  background-color: ${(props) => (props.isNegative ? "#f75531" : "#88aa4d")};
  margin-bottom: auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 0;
  padding-left: 76px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
`;
