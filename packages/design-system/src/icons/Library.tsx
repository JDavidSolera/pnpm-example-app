 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLibrary(
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
        d="M21.098 17.66c-3.768.11-6.787 1.14-8.25 1.747V6.99c3.179-1.559 6.834-1.672 8.25-1.646V17.66ZM3.298 5.344c1.416-.017 5.062.084 8.25 1.646v12.416a23.955 23.955 0 0 0-8.25-1.748V5.345ZM21.8 4.085c-.218-.017-5.24-.374-9.603 1.797-4.36-2.174-9.382-1.814-9.6-1.797A.643.643 0 0 0 2 4.727v13.568c0 .354.29.644.65.644 5.243 0 9.208 2.02 9.249 2.041.096.05.197.073.302.073.026 0 .05-.018.078-.02a.618.618 0 0 0 .259-.073c.34-.169 4.168-2.024 9.213-2.024.36 0 .65-.287.65-.644V4.724a.65.65 0 0 0-.6-.639Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLibrary);
export default ForwardRef;
