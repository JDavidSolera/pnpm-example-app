 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAnnulBold(
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
        d="M11.997 20.332c-2.427 0-4.297-.49-5.649-1.485L18.818 6.38c1.01 1.357 1.514 3.224 1.514 5.623 0 5.683-2.649 8.33-8.335 8.33Zm0-16.664c2.413 0 4.289.506 5.646 1.528L5.167 17.672c-1.007-1.352-1.5-3.23-1.5-5.67 0-5.685 2.647-8.334 8.33-8.334Zm0-1.668C5.68 2 2 5.19 2 12.003 2 18.816 5.68 22 11.997 22 18.315 22 22 18.816 22 12.003S18.315 2 11.997 2"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAnnulBold);
export default ForwardRef;
