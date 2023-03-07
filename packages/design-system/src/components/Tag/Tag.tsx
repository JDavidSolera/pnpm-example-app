import S from "./TagStyled";
import type { TagProps } from "./TagTypes";

function Tag({ children }: TagProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default Tag;
