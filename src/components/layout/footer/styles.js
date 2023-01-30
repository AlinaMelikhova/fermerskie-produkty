import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  width: ${(props) => props.theme.pageWidth};
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colorForLightBackground};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span`
  width: 122px;
  height: 27px;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
  color: ${(props) => props.theme.colorBlackForText};
  max-width: 700px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
