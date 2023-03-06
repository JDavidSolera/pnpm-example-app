 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClose(
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
        d="m13.37 12 8.347-8.347a.967.967 0 1 0-1.369-1.37l-8.347 8.348-8.348-8.347a.967.967 0 0 0-1.37 1.369L10.632 12l-8.347 8.347a.967.967 0 1 0 1.369 1.366L12 13.367l8.347 8.347a.963.963 0 0 0 1.364.006l.005-.006a.964.964 0 0 0 0-1.366l-8.347-8.347Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgClose);
export default ForwardRef;
