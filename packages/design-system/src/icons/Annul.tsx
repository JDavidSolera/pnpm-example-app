 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAnnul(
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
        d="M11.997 20.75c-2.638 0-4.664-.58-6.101-1.744L19.003 5.9c1.167 1.437 1.748 3.466 1.748 6.107 0 5.882-2.866 8.745-8.754 8.745Zm0-17.5c2.652 0 4.684.586 6.124 1.76L5.011 18.125c-1.175-1.44-1.762-3.472-1.762-6.121 0-5.89 2.863-8.754 8.748-8.754Zm0-1.25C5.68 2 2 5.19 2 12.003 2 18.816 5.68 22 11.997 22 18.315 22 22 18.816 22 12.003S18.315 2 11.997 2"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAnnul);
export default ForwardRef;
