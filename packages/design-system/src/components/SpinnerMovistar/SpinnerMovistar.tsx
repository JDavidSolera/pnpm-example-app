import { Movistar } from "../../icons";
import S from "./SpinnerMovistarStyled";
import { SpinnerMovistarProps } from "./SpinnerMovistarTypes";

function SpinnerMovistar({ $duration = 3 }: SpinnerMovistarProps) {
  return (
    <S.Wrapper>
      <S.Svg width="95px" height="95px">
        <S.Circle
          cx="47.5"
          cy="47.5"
          r="45.5"
          strokeLinecap="round"
          $duration={$duration}
        />
      </S.Svg>
      <S.Icon>
        <Movistar style={{ fontSize: 42 }} />
      </S.Icon>
    </S.Wrapper>
  );
}

export default SpinnerMovistar;
