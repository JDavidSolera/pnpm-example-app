 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPos(
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
        d="M15 3.2H7A1.8 1.8 0 0 0 5.2 5v12A1.8 1.8 0 0 0 7 18.8h8a1.8 1.8 0 0 0 1.8-1.8V5A1.8 1.8 0 0 0 15 3.2ZM7 2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7ZM19.5 7.4a.6.6 0 0 1 .6.6v7a.6.6 0 1 1-1.2 0V8a.6.6 0 0 1 .6-.6ZM15.1 21.5a.6.6 0 0 1-.6.6h-7a.6.6 0 1 1 0-1.2h7a.6.6 0 0 1 .6.6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6H8v3h6V6ZM8 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8ZM6.9 12.5a.6.6 0 0 1 .6-.6h2a.6.6 0 1 1 0 1.2h-2a.6.6 0 0 1-.6-.6ZM11.9 12.5a.6.6 0 0 1 .6-.6h2a.6.6 0 1 1 0 1.2h-2a.6.6 0 0 1-.6-.6ZM6.9 15a.6.6 0 0 1 .6-.6h2a.6.6 0 1 1 0 1.2h-2a.6.6 0 0 1-.6-.6ZM11.9 15a.6.6 0 0 1 .6-.6h2a.6.6 0 1 1 0 1.2h-2a.6.6 0 0 1-.6-.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPos);
export default ForwardRef;
