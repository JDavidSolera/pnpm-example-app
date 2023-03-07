 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCloseBold(
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
        d="m22.149 1.846.003.003a1.14 1.14 0 0 1-.006 1.645L13.654 12l8.491 8.505.007.006a1.14 1.14 0 0 1 .002 1.638l-.003.003a1.14 1.14 0 0 1-1.645-.006L12 13.654l-8.506 8.492a1.128 1.128 0 0 1-.825.35 1.132 1.132 0 0 1-.816-.34l-.005-.005a1.14 1.14 0 0 1 .006-1.645L10.346 12 1.855 3.495l-.007-.006a1.14 1.14 0 0 1-.002-1.638l.003-.003a1.14 1.14 0 0 1 1.645.006L12 10.346l8.505-8.491.006-.007a1.14 1.14 0 0 1 1.638-.002Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCloseBold);
export default ForwardRef;
