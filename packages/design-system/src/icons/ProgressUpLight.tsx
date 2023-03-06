 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProgressUpLight(
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
        d="M21.353 6.384V9.81a.39.39 0 0 1-.394.384.386.386 0 0 1-.395-.379V7.478l-5.567 7.72a.41.41 0 0 1-.48.13l-7.02-3.008-3.756 6.487a.416.416 0 0 1-.543.146.386.386 0 0 1-.149-.525l3.933-6.787a.398.398 0 0 1 .507-.162l7.043 3.019 5.576-7.728H17.48a.396.396 0 0 1-.394-.386A.39.39 0 0 1 17.48 6h3.479c.214 0 .394.167.394.384Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProgressUpLight);
export default ForwardRef;
