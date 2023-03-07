import S from "./ModalStyled";
import { ModalProps } from "./ModalTypes";

function Modal({ children, type, ...props }: ModalProps) {
  return (
    <S.Overlay>
      <S.Wrapper {...props}>{children}</S.Wrapper>
    </S.Overlay>
  );
}

export default Modal;
