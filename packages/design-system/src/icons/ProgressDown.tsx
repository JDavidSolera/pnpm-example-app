 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProgressDown(
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
        d="m21.757 14.816-.43 3.495a.79.79 0 0 1-.79.689h-3.504a.79.79 0 0 1-.796-.782c0-.43.36-.781.796-.781h1.89l-5.005-6.977-6.82 2.939a.821.821 0 0 1-1.02-.335L2.102 6.172a.78.78 0 0 1 .295-1.065l.009-.006a.803.803 0 0 1 1.082.295l3.625 6.28L13.87 8.77a.803.803 0 0 1 .973.265l5.137 7.173.191-1.58a.807.807 0 0 1 .892-.69c.43.048.742.44.694.87v.008Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProgressDown);
export default ForwardRef;
