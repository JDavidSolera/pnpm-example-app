 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSend(
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
        d="M1.5 2.825a1.328 1.328 0 0 1 1.921-1.187l18.342 9.124c.252.126.463.33.593.59a1.332 1.332 0 0 1-.588 1.785l-.001.001-18.307 9.22h-.001a1.33 1.33 0 0 1-1.897-1.456v-.001l1.842-8.968-1.872-8.82a1.234 1.234 0 0 1-.032-.288Zm2.033.912 1.741 8.187-1.714 8.334 16.492-8.306-16.52-8.215Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSend);
export default ForwardRef;
