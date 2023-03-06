 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStatusBold(
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.03 5c-1.087 0-1.969.88-1.972 1.966 0 .475.177.908.461 1.246l-2.43 4.063a1.9 1.9 0 0 0-.455-.057c-.572 0-1.084.25-1.442.64L9.998 11.02c.003-.054.017-.105.017-.162a1.971 1.971 0 0 0-3.943 0c0 .484.19.94.503 1.295l-2.24 3.952a1.949 1.949 0 0 0-.363-.037c-1.087 0-1.97.88-1.972 1.966a1.974 1.974 0 0 0 3.946 0c0-.5-.193-.95-.503-1.297l2.245-3.958c.116.023.236.045.355.045.572 0 1.084-.25 1.446-.64l4.19 1.835c-.002.054-.016.106-.016.162 0 1.087.882 1.972 1.968 1.972a1.972 1.972 0 0 0 1.972-1.969v-.002c0-.464-.168-.885-.438-1.221l2.436-4.077c.136.031.278.05.426.05 1.087 0 1.966-.878 1.97-1.965A1.965 1.965 0 0 0 20.03 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgStatusBold);
export default ForwardRef;
