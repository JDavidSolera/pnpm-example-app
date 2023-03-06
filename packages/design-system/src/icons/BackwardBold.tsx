 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBackwardBold(
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
        d="M19.344 4.465C17.647 2.83 15.176 2 11.997 2c-3.179 0-5.647.83-7.341 2.465C2.893 6.165 2 8.698 2 12c0 3.304.893 5.837 2.653 7.534C6.35 21.17 8.82 22 11.997 22s5.65-.83 7.347-2.465C21.107 17.838 22 15.302 22 12.001c0-3.3-.893-5.836-2.656-7.536Zm-1.66 10.254a.568.568 0 0 1-.859.49l-5.064-3.014a.573.573 0 0 1-.219-.24v2.759a.568.568 0 0 1-.858.489L5.62 12.189a.57.57 0 0 1-.003-.975l5.064-3.042a.568.568 0 0 1 .861.486v2.798c.049-.1.125-.18.216-.236l5.064-3.042a.568.568 0 0 1 .862.486v6.055Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBackwardBold);
export default ForwardRef;
