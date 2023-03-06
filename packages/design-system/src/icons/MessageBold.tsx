 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMessageBold(
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
        d="M19.312 3.7H5.743A2.74 2.74 0 0 0 3 6.428v9.365c0 1.343.897 2.433 2.123 2.678v2.281c0 .495.468.946.979.946a.996.996 0 0 0 .83-.435l2.141-2.74h10.239a2.737 2.737 0 0 0 2.74-2.73V6.426a2.736 2.736 0 0 0-2.74-2.727Zm-1 5.858H6.73a.545.545 0 0 1-.544-.544c0-.299.245-.544.544-.544H18.31c.3 0 .544.245.544.544a.545.545 0 0 1-.544.544Zm-3.712 4.24H6.73a.545.545 0 0 1-.544-.543c0-.299.245-.544.544-.544h7.87c.3 0 .544.245.544.544a.545.545 0 0 1-.544.544Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMessageBold);
export default ForwardRef;
