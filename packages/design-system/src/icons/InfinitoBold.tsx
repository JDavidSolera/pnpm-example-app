 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgInfinitoBold(
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
        d="M18.391 15.574h-.015c-1.605-.006-4.3-1.967-5.567-3.074 1.27-1.11 3.972-3.077 5.58-3.077h.006c.937.003 1.66.268 2.145.79.486.523.729 1.294.729 2.293-.01 2.01-1.003 3.068-2.878 3.068Zm-13.165 0h-.015c-1.875 0-2.868-1.06-2.874-3.065-.003-1.002.243-1.773.729-2.293.485-.522 1.205-.787 2.145-.79h.006c1.61 0 4.313 1.967 5.58 3.077-1.267 1.104-3.963 3.065-5.57 3.07Zm16.26-6.363c-.734-.787-1.804-1.205-3.091-1.211h-.01c-2.231 0-5.367 2.471-6.584 3.553C10.584 10.471 7.451 8 5.214 8h-.01c-1.287.003-2.357.424-3.091 1.211C1.38 9.998.997 11.138 1 12.512 1.01 15.322 2.583 17 5.211 17h.019c2.231-.006 5.354-2.471 6.571-3.553 1.217 1.079 4.34 3.547 6.572 3.553h.018c2.632 0 4.205-1.675 4.212-4.488.003-1.374-.382-2.514-1.116-3.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgInfinitoBold);
export default ForwardRef;
