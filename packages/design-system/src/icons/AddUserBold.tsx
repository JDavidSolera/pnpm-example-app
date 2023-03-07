 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAddUserBold(
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
        d="M14.5 13.512c-1.334 0-2.374-.353-3.094-1.052-.746-.725-1.125-1.801-1.125-3.2 0-1.397.379-2.475 1.125-3.203C12.126 5.355 13.166 5 14.5 5c1.334 0 2.376.355 3.098 1.057.752.728 1.13 1.806 1.13 3.204 0 1.398-.38 2.474-1.132 3.2-.72.698-1.762 1.051-3.096 1.051ZM21.52 22H7.48a.483.483 0 0 1-.48-.484v-1.414c0-1.355.418-2.508 1.21-3.34.864-.907 2.145-1.388 3.71-1.388h5.148c1.565 0 2.851.479 3.715 1.386.797.834 1.217 1.987 1.217 3.342v1.414a.483.483 0 0 1-.48.484Z"
        fill="currentColor"
      />
      <path
        d="M5.5 2v7M2 5.5h7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAddUserBold);
export default ForwardRef;
