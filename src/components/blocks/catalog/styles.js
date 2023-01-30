import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const StyledSlide = styled.div`
  height: 288px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.colorForLightBackground};
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

export const SlideImg = styled.div`
  min-width: 248px;
  height: 248px;
  background-color: orange;
  margin-right: ${(props) => props.theme.indent};
`;

export const SlideInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
