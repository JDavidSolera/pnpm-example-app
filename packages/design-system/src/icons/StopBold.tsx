 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStopBold(
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
        d="M11.994 2c3.18 0 5.65.83 7.348 2.465C21.104 6.165 22 8.7 22 12c0 3.301-.893 5.837-2.656 7.534C17.647 21.17 15.174 22 11.997 22c-3.176 0-5.647-.83-7.344-2.465C2.893 17.838 2 15.305 2 12.001c0-3.303.893-5.836 2.653-7.536C6.347 2.83 8.815 2 11.994 2ZM7 9.5A2.5 2.5 0 0 1 9.5 7h5A2.5 2.5 0 0 1 17 9.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 14.5v-5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgStopBold);
export default ForwardRef;
