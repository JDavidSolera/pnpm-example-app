import { ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import { SwiperOptions } from "swiper";

export type SliderStyledProps = LayoutProps &
  SpaceProps;

export type SliderProps = SliderStyledProps & {
  options: SwiperOptions;
  children: ReactNode;
};
