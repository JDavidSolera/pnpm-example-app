 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgForwardBold(
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
        d="M2 11.894C2 5.42 5.458 2 12.003 2 18.543 2 22 5.42 22 11.894c0 6.469-3.458 9.889-9.997 9.889C5.458 21.783 2 18.363 2 11.894ZM6.832 8.09a.562.562 0 0 0-.563.562v5.99a.561.561 0 0 0 .852.48l5.01-3.008a.572.572 0 0 0 .213-.234v2.767a.561.561 0 0 0 .852.48l5.01-3.008a.563.563 0 0 0-.003-.965l-5.01-2.98a.562.562 0 0 0-.85.484v2.727a.567.567 0 0 0-.215-.236l-5.01-2.98a.571.571 0 0 0-.286-.08Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgForwardBold);
export default ForwardRef;
