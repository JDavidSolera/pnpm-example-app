 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCancelBold(
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
        d="M16.875 15.995a.625.625 0 1 1-.885.886l-3.996-3.996-3.984 3.984a.62.62 0 0 1-.44.182.625.625 0 0 1-.441-1.067L11.111 12 7.128 8.016a.622.622 0 0 1 0-.882.622.622 0 0 1 .882 0l3.984 3.984L15.99 7.12a.625.625 0 1 1 .885.885L12.877 12l3.998 3.995ZM11.997 2C5.68 2 2 5.19 2 12.003 2 18.816 5.68 22 11.997 22 18.315 22 22 18.816 22 12.003S18.315 2 11.997 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCancelBold);
export default ForwardRef;
