import styled, { css } from "styled-components";
import Title from "/src/components/ui/title/title";
import TextInput from "/src/components/ui/text-input/text-input";

export const BuyWrapper = styled.div`
  display: block;
  padding: 0;
  margin-right: 20px;
  width: 350px;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  display: block;
  margin-bottom: ${(props) => `${props.$bottom || 0}px`};
  padding-top: 24px;
  padding-bottom: 12px;
  padding-left: ${(props) => props.theme.indent};
  padding-right: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.colorForLightBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const StyleTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const FormItem = styled.div`
  padding: 16px 0;
`;

export const CheckboxMark = styled.span`
  display: block;
  height: 24px;
  width: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: auto;
  cursor: pointer;
  ${(props) =>
    props.$isChecked
      ? css`
          background-color: ${props.theme.colorForButton};
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorGray};
          color: ${props.theme.colorBlackForText};
        `}
`;

export const StyleTextInput = styled(TextInput)`
  padding: 16px;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 150%;
`;

export const Price = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 32px;
`;
