 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPasteBold(
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
        d="M3.292 14.772V3.53a.24.24 0 0 1 .239-.239h11.238c.13 0 .239.108.239.239v11.24a.24.24 0 0 1-.24.24H3.532a.237.237 0 0 1-.239-.24Zm17.223-7.08h-4.21V3.534c0-.845-.688-1.534-1.533-1.534H3.534C2.689 2 2 2.689 2 3.534v11.24c0 .846.689 1.534 1.534 1.534h4.155v4.21c0 .816.666 1.482 1.482 1.482h11.34c.817 0 1.483-.666 1.483-1.483V9.174a1.481 1.481 0 0 0-1.48-1.482Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPasteBold);
export default ForwardRef;
