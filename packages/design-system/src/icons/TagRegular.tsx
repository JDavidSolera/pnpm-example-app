 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTagRegular(
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
        d="M20.333 12.148c.153-.154.257-.333.28-.484l-.008-.188.008-7.92a.273.273 0 0 0-.274-.273h-8.092c-.11.026-.297.134-.447.288l-8.23 8.273c-.294.295-.316.603-.282.654l8.159 8.202c.056.042.37.01.656-.28l8.23-8.272Zm1.556-8.589-.005 7.9.005.214c0 .028-.005.122-.008.15-.08.47-.303.903-.643 1.233l-8.232 8.272c-.439.442-.98.672-1.477.672-.374 0-.722-.128-.985-.393l-8.16-8.201c-.316-.319-.446-.791-.356-1.295.08-.421.303-.84.637-1.175l8.232-8.273c.34-.341.753-.57 1.17-.646.02-.006.11-.014.127-.014L20.338 2c.855 0 1.549.7 1.551 1.56Zm-4.095 4.295c.631-.635.626-1.258-.017-1.907-.325-.327-.645-.492-.962-.492-.311 0-.623.16-.934.472-.63.635-.625 1.258.017 1.907.643.649 1.262.657 1.896.02Zm-2.818-2.832c1.134-1.141 2.555-1.135 3.701.02 1.15 1.155 1.155 2.581.02 3.722-.566.57-1.2.854-1.837.854-.645 0-1.287-.29-1.865-.87-1.149-1.156-1.157-2.585-.02-3.726Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTagRegular);
export default ForwardRef;
