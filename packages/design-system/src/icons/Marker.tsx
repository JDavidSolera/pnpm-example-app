 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMarker(
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
        d="M12.249 16.673c.386 0 .767.145 1.057.438l3.601 3.606c.032.02.117-.012.16-.035a.203.203 0 0 0 .119-.19V3.502c0-.116-.091-.21-.208-.213H7.497a.208.208 0 0 0-.21.208v16.995c0 .114.074.17.119.19a.196.196 0 0 0 .222-.02l3.556-3.554a1.528 1.528 0 0 1 1.065-.435ZM16.973 22c-.321 0-.64-.105-.91-.313l-3.666-3.663a.213.213 0 0 0-.307.006l-3.616 3.603c-.517.404-1.122.464-1.639.208A1.495 1.495 0 0 1 6 20.49V3.504A1.5 1.5 0 0 1 7.497 2h9.481c.824 0 1.497.674 1.497 1.505v16.987c0 .577-.32 1.092-.838 1.349-.213.108-.437.159-.664.159Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMarker);
export default ForwardRef;
