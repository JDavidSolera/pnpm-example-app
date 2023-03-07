 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPause(
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
        d="M4.653 19.538c1.696 1.636 4.167 2.465 7.344 2.465 3.178 0 5.648-.83 7.347-2.465C21.105 17.839 22 15.306 22 12.003s-.892-5.84-2.656-7.538C17.645 2.83 15.174 2 11.997 2c-3.175 0-5.648.832-7.344 2.468C2.892 6.166 2 8.703 2 12.006s.892 5.836 2.653 7.532Zm-1.547-7.532c0-5.905 2.992-8.897 8.891-8.897 5.902 0 8.897 2.995 8.897 8.897 0 5.899-2.995 8.891-8.897 8.891-5.899 0-8.891-2.992-8.891-8.891Zm5.545 3.887c0 .313.257.57.57.57.314 0 .57-.257.57-.57v-7.78a.572.572 0 0 0-.57-.57.572.572 0 0 0-.57.57v7.78Zm5.558 0c0 .313.256.57.57.57.313 0 .57-.257.57-.57v-7.78a.572.572 0 0 0-.57-.57.572.572 0 0 0-.57.57v7.78Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;
