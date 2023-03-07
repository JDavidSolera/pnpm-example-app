import styled from "styled-components";
import { layout, space } from "styled-system";
import { Swiper } from "swiper/react";
import type { SliderStyledProps } from "./SliderTypes";

const Container = styled(Swiper)<SliderStyledProps>`
  ${space}
  ${layout}

  .swiper-pagination {
    .swiper-pagination-bullet-active {
      background-color: #019AF1;
    }
  }
  
  &.designB {
    .swiper-pagination {
      .swiper-pagination-bullet {
        border: 1px solid ${(props) => props.theme.colors["gray-6"]};
        background-color: transparent;
        width: 11px;
        height: 11px;
      }
      .swiper-pagination-bullet-active {
        background-color: ${(props) => props.theme.colors["gray-4"]};
      }
    }
  }
  &.designC {
    padding-bottom: 30px;
    .swiper-pagination {
      .swiper-pagination-bullet {
        border: 1px solid ${(props) => props.theme.colors["gray-4"]};
        background-color: transparent;
      }
      .swiper-pagination-bullet-active {
        background-color: ${(props) => props.theme.colors["gray-4"]};
      }
    }
  }
  &.designD {
    padding-bottom: 42px;
    padding-left: 15px;
    padding-right: 15px;
    .swiper-pagination {
      .swiper-pagination-bullet {
        border: 1px solid transparent;
        background-color: #8c8c8c;
      }
      .swiper-pagination-bullet-active {
        background-color: ${(props) => props.theme.colors["gray-4"]};
      }
    }
  }
`;

const SliderStyled = {
  Container,
};

export default SliderStyled;
