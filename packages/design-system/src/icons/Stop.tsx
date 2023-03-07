 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStop(
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
        d="M6.977 9.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5Zm2.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.745 19.535C6.443 21.17 8.913 22 12.09 22s5.647-.827 7.348-2.462c1.762-1.698 2.655-4.234 2.655-7.535 0-3.304-.892-5.838-2.655-7.538C17.737 2.83 15.265 2 12.089 2s-5.646.83-7.344 2.462C2.985 6.162 2.092 8.7 2.092 12c0 3.304.893 5.837 2.653 7.535Zm-1.547-7.532c0-5.903 2.992-8.897 8.891-8.897 5.903 0 8.894 2.994 8.897 8.897 0 5.9-2.994 8.89-8.897 8.89-5.9 0-8.89-2.99-8.89-8.89Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgStop);
export default ForwardRef;
