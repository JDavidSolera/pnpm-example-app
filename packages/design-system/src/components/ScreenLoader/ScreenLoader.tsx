import { Text } from "../Text";
import S from "./ScreenLoaderStyled";
import { ScreenLoaderProps } from "./ScreenLoaderTypes";

const ScreenLoader = ({ loader, text }: ScreenLoaderProps) => {
  return (
    <S.Wrapper>
      <S.Box>
        {loader}
        <Text color="primary" $size="Body2">
          {text}
        </Text>
      </S.Box>
    </S.Wrapper>
  );
};

export default ScreenLoader;
