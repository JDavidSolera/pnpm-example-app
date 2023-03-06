 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDiscount(
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
        d="M14.36 15.395c.463 0 .517-.054.517-.515 0-.458-.057-.515-.518-.515-.464 0-.515.051-.515.515 0 .46.051.515.515.515Zm0-2.197c1.06 0 1.684.538 1.684 1.685s-.62 1.682-1.685 1.682c-1.061 0-1.682-.535-1.682-1.682 0-1.15.618-1.685 1.682-1.685ZM9.64 8.73c-.463 0-.514.051-.514.515 0 .461.051.515.515.515s.515-.05.515-.515c0-.458-.057-.515-.515-.515Zm0 2.197c-1.063 0-1.681-.538-1.681-1.682 0-1.147.62-1.684 1.682-1.684 1.061 0 1.685.537 1.685 1.684 0 1.147-.624 1.682-1.685 1.682Zm5.43-3.847a.58.58 0 0 1 .814-.106l.003.003a.58.58 0 0 1 .103.817l-7.052 9.072a.584.584 0 1 1-.922-.717l7.055-9.07Zm-3.073 13.67c5.888 0 8.754-2.862 8.754-8.747 0-5.89-2.863-8.754-8.754-8.754-5.885 0-8.748 2.863-8.748 8.754 0 5.885 2.863 8.748 8.748 8.748Zm0-18.75C18.315 2 22 5.19 22 12.003 22 18.816 18.315 22 11.997 22 5.68 22 2 18.816 2 12.003S5.68 2 11.997 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgDiscount);
export default ForwardRef;
