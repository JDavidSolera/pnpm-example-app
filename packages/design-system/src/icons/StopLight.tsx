 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStopLight(
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
        d="M7 9.5A2.5 2.5 0 0 1 9.5 7h5A2.5 2.5 0 0 1 17 9.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 14.5v-5Zm2.5-1.875h5c1.036 0 1.875.84 1.875 1.875v5c0 1.036-.84 1.875-1.875 1.875h-5A1.875 1.875 0 0 1 7.625 14.5v-5c0-1.036.84-1.875 1.875-1.875Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.001C2 18.544 5.46 22 11.999 22c6.545 0 10.004-3.46 10.001-9.999 0-3.313-.891-5.853-2.645-7.544C17.665 2.826 15.19 2 12 2 5.456 2 2 5.46 2 12.001Zm.57 0c0-6.257 3.174-9.432 9.429-9.432 6.26 0 9.434 3.172 9.432 9.432 0 6.258-3.172 9.43-9.432 9.43-6.258 0-9.43-3.175-9.43-9.43Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgStopLight);
export default ForwardRef;
