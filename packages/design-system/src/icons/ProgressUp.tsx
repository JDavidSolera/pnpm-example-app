 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProgressUp(
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
        d="M21.353 6.559v3.335a.573.573 0 0 1-.58.559.57.57 0 0 1-.58-.56v-1.7l-5.1 7.03a.579.579 0 0 1-.702.194L7.68 12.563 4.08 18.718A.572.572 0 0 1 3.58 19a.654.654 0 0 1-.288-.068.552.552 0 0 1-.227-.747c.005-.008.008-.015.013-.02l3.852-6.587a.583.583 0 0 1 .734-.237l6.756 2.87 5.15-7.088h-2.194a.57.57 0 0 1-.58-.559v-.003c0-.313.256-.561.58-.561h3.398a.57.57 0 0 1 .58.559Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProgressUp);
export default ForwardRef;
