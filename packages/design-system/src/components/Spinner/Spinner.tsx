import SpinnerStyled from "./SpinnerStyled";
import { SpinnerProps } from "./SpinnerTypes";

function Spinner({ ...props }: SpinnerProps) {
  return <SpinnerStyled {...props} />;
}

export default Spinner;
