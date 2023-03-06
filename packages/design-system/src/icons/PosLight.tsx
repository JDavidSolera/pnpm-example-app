 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPosLight(
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
        d="M15 2.7H7A2.3 2.3 0 0 0 4.7 5v12A2.3 2.3 0 0 0 7 19.3h8a2.3 2.3 0 0 0 2.3-2.3V5A2.3 2.3 0 0 0 15 2.7ZM7 2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7ZM19.5 7.65a.35.35 0 0 1 .35.35v7a.35.35 0 1 1-.7 0V8a.35.35 0 0 1 .35-.35ZM14.85 21.5a.35.35 0 0 1-.35.35h-7a.35.35 0 1 1 0-.7h7a.35.35 0 0 1 .35.35Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5.7H8a.3.3 0 0 0-.3.3v3a.3.3 0 0 0 .3.3h6a.3.3 0 0 0 .3-.3V6a.3.3 0 0 0-.3-.3ZM8 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8ZM7.15 12.5a.35.35 0 0 1 .35-.35h2a.35.35 0 1 1 0 .7h-2a.35.35 0 0 1-.35-.35ZM12.15 12.5a.35.35 0 0 1 .35-.35h2a.35.35 0 1 1 0 .7h-2a.35.35 0 0 1-.35-.35ZM7.15 15a.35.35 0 0 1 .35-.35h2a.35.35 0 1 1 0 .7h-2a.35.35 0 0 1-.35-.35ZM12.15 15a.35.35 0 0 1 .35-.35h2a.35.35 0 1 1 0 .7h-2a.35.35 0 0 1-.35-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPosLight);
export default ForwardRef;
