 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTarjetaDeDbitoBold(
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
        d="M20.26 17.763H3.506a.23.23 0 0 1-.234-.228v-4.123h17.223v4.123a.234.234 0 0 1-.233.228ZM3.506 6.237H20.26a.23.23 0 0 1 .233.228v1.927H3.271V6.465a.23.23 0 0 1 .234-.228ZM21.768 9.01c0-.03-.014-.056-.017-.084v-2.46c0-.81-.669-1.466-1.49-1.466H3.505C2.68 5 2.01 5.655 2.01 6.465v2.498C2.008 8.98 2 8.993 2 9.01v3.783c0 .017.008.031.011.048v4.694c0 .807.67 1.465 1.494 1.465H20.26c.821 0 1.49-.658 1.49-1.465v-4.66c.003-.028.017-.054.017-.085V9.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTarjetaDeDbitoBold);
export default ForwardRef;
