import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  height: ${(props) => props.theme.footerHeight};
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorForLightBackground};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
`;
