import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Pagination, Thumbs } from "swiper";
import S from "./SliderStyled";
import type { SliderProps } from "./SliderTypes";

function Slider({ options, children, ...rest }: SliderProps) {
  return (
    <S.Container
      {...options}
      {...rest}
      pagination={{ clickable: true }}
      modules={[Pagination, Thumbs]}
    >
      {children}
    </S.Container>
  );
}

export default Slider;
