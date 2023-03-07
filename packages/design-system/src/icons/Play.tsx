 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPlay(
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
        d="M4.653 19.535C6.348 21.171 8.819 22 11.996 22c3.177 0 5.647-.83 7.345-2.465 1.761-1.698 2.656-4.231 2.656-7.534 0-3.302-.892-5.838-2.655-7.536C17.642 2.829 15.171 2 11.995 2c-3.175 0-5.648.832-7.343 2.468C2.892 6.166 2 8.702 2 12.004c0 3.303.892 5.836 2.653 7.531Zm-1.547-7.53c0-5.905 2.991-8.897 8.89-8.897 5.9 0 8.896 2.995 8.896 8.896 0 5.899-2.995 8.89-8.896 8.89-5.899 0-8.89-2.991-8.89-8.89ZM8.9 16.317a.512.512 0 0 0 .248.066.51.51 0 0 0 .245-.066l6.768-3.91a.492.492 0 0 0 0-.854L9.393 7.648a.492.492 0 0 0-.74.427v7.816c0 .176.093.339.247.427Zm.741-1.285V8.93l5.286 3.052-5.286 3.051Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
