 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBackward(
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
        d="M11.997 22c-3.176 0-5.647-.83-7.344-2.465C2.893 17.837 2 15.304 2 12c0-3.301.893-5.837 2.653-7.538C6.35 2.83 8.82 2 11.997 2s5.647.83 7.347 2.465C21.107 6.165 22 8.7 22 12.003c0 3.301-.893 5.837-2.656 7.535-1.7 1.635-4.17 2.462-7.347 2.462Zm0-18.894c-5.9 0-8.89 2.994-8.89 8.897 0 5.9 2.99 8.89 8.89 8.89 5.903 0 8.897-2.99 8.897-8.89C20.89 6.1 17.9 3.106 11.997 3.106Zm-1 12.178a.557.557 0 0 1-.29-.08L5.641 12.19a.57.57 0 0 1-.278-.486c0-.199.105-.386.276-.489l5.064-3.042a.57.57 0 0 1 .861.486v2.674a.559.559 0 0 1 .134-.112l5.064-3.042a.57.57 0 0 1 .861.486v6.056c0 .205-.11.392-.287.495a.587.587 0 0 1-.282.074.557.557 0 0 1-.29-.08l-5.064-3.014a.578.578 0 0 1-.136-.114v2.633a.573.573 0 0 1-.569.57ZM7.04 11.7l3.387 2.018V9.666L7.04 11.699Zm9.446 2.021-3.39-2.016 3.39-2.036v4.052Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBackward);
export default ForwardRef;
