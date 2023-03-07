 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPlayBold(
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
        d="M19.339 4.464C17.641 2.83 15.171 2 11.994 2c-3.176 0-5.646.83-7.342 2.467C2.892 6.165 2 8.701 2 12.003c0 3.302.892 5.835 2.652 7.533C6.348 21.17 8.818 22 11.994 22c3.177 0 5.647-.83 7.345-2.464 1.76-1.698 2.655-4.231 2.655-7.533 0-3.302-.891-5.84-2.655-7.539Zm-3.18 7.94-6.766 3.907a.494.494 0 0 1-.74-.428V8.068a.494.494 0 0 1 .74-.427l6.767 3.906a.494.494 0 0 1 .179.675.48.48 0 0 1-.18.183Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPlayBold);
export default ForwardRef;
