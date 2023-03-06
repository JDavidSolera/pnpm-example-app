 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDeleteBold(
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
        d="M16.985 12.595H7.015a.626.626 0 1 1 0-1.252h4.605c.185.002.009.002.356.002h5.009c.344 0 .626.28.626.627a.627.627 0 0 1-.626.623ZM12.42 2.01A32.196 32.196 0 0 0 11.65 2h-.179C9.462 2.017 2 2.706 2 11.969c0 9.274 7.534 10 9.543 10.028.106.003.216.003.325.003.207 0 .412-.003.589-.006 1.91-.034 9.543-.751 9.543-9.966.003-9.197-7.622-9.971-9.58-10.017Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgDeleteBold);
export default ForwardRef;
