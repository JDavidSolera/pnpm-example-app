 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDiscountBold(
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
        d="M15.993 7.797a.584.584 0 0 0-.922-.717l-7.055 9.07a.582.582 0 0 0 .458.941.58.58 0 0 0 .461-.225l7.058-9.07Zm-1.634 8.765c1.062 0 1.682-.535 1.682-1.682 0-1.147-.62-1.682-1.682-1.682-1.061 0-1.682.535-1.682 1.682 0 1.147.618 1.682 1.682 1.682ZM9.641 7.563c-1.064 0-1.682.538-1.682 1.682s.618 1.682 1.682 1.682c1.061 0 1.682-.538 1.682-1.682 0-1.147-.62-1.682-1.682-1.682ZM11.997 2C18.315 2 22 5.19 22 12.003 22 18.816 18.315 22 11.997 22 5.68 22 2 18.816 2 12.003S5.68 2 11.997 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgDiscountBold);
export default ForwardRef;
