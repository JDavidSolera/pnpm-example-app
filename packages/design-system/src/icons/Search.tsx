 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSearch(
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
        d="M2 9.901a7.99 7.99 0 0 0 7.99 7.99 7.936 7.936 0 0 0 5.234-1.952l5.802 5.801a.561.561 0 0 0 .402.169.572.572 0 0 0 .405-.976l-5.81-5.81A7.993 7.993 0 0 0 4.339 4.25a7.999 7.999 0 0 0-2.338 5.652Zm1.141 0a6.85 6.85 0 0 1 6.85-6.85 6.795 6.795 0 0 1 4.844 2.009 6.848 6.848 0 0 1 0 9.648 6.852 6.852 0 0 1-9.688.037A6.857 6.857 0 0 1 3.14 9.901Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
