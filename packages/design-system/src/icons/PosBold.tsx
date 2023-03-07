 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPosBold(
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
        d="M19.4 7.4a.6.6 0 0 1 .6.6v7a.6.6 0 1 1-1.2 0V8a.6.6 0 0 1 .6-.6ZM15.1 21.4a.6.6 0 0 1-.6.6h-7a.6.6 0 1 1 0-1.2h7a.6.6 0 0 1 .6.6ZM7 2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7Zm1 3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8Zm-1 7.5a.6.6 0 0 1 .6-.6h2a.6.6 0 1 1 0 1.2h-2a.6.6 0 0 1-.6-.6Zm5.4-.6a.6.6 0 1 0 0 1.2h2a.6.6 0 1 0 0-1.2h-2ZM7 15a.6.6 0 0 1 .6-.6h2a.6.6 0 1 1 0 1.2h-2A.6.6 0 0 1 7 15Zm5.4-.6a.6.6 0 1 0 0 1.2h2a.6.6 0 1 0 0-1.2h-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPosBold);
export default ForwardRef;
