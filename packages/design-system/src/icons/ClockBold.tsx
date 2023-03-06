 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClockBold(
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
        d="M15.52 15.796a.627.627 0 0 1-.882 0l-3.08-3.076a.626.626 0 0 1-.181-.444V8.11a.626.626 0 0 1 1.252 0v3.907l2.897 2.894a.63.63 0 0 1-.006.885ZM11.997 2C5.68 2 2 5.19 2 12.003 2 18.816 5.68 22 11.997 22 18.315 22 22 18.816 22 12.003S18.315 2 11.997 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgClockBold);
export default ForwardRef;
