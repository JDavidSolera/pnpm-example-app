 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgListWithBulletLight(
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
        d="M5.435 7.536a.582.582 0 0 1-.59-.575.593.593 0 0 1 .59-.576H21.41c.324 0 .589.256.589.576a.584.584 0 0 1-.59.575H5.436Zm-2.47.391a.965.965 0 1 1 0-1.929.965.965 0 0 1 0 1.93ZM21.41 11.74c.324 0 .589.256.589.575 0 .32-.265.576-.59.576H5.436a.582.582 0 0 1-.59-.576c0-.319.265-.575.59-.575H21.41ZM2.965 13.278a.965.965 0 1 1 0-1.93.965.965 0 0 1 0 1.93Zm18.446 3.815a.6.6 0 0 1 .415.166.562.562 0 0 1 .174.406.584.584 0 0 1-.59.575H5.436a.593.593 0 0 1-.59-.575c0-.316.265-.575.59-.575H21.41v.003ZM2.965 18.632a.965.965 0 1 1 0-1.93.965.965 0 0 1 0 1.93Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgListWithBulletLight);
export default ForwardRef;
