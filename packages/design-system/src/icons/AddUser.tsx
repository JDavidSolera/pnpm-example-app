 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAddUser(
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
        d="M14.5 13.512c-1.334 0-2.374-.353-3.094-1.052-.746-.725-1.125-1.801-1.125-3.2 0-1.397.379-2.475 1.125-3.203C12.126 5.355 13.166 5 14.5 5c1.334 0 2.376.355 3.098 1.057.752.728 1.13 1.806 1.13 3.204 0 1.398-.38 2.474-1.132 3.2-.72.698-1.762 1.051-3.096 1.051Zm0-7.545c-1.075 0-1.891.264-2.426.786-.552.54-.833 1.383-.833 2.51 0 1.127.28 1.966.833 2.503.532.518 1.348.781 2.426.781s1.896-.263 2.434-.78c.554-.538.837-1.38.837-2.501-.002-2.22-1.073-3.299-3.271-3.299ZM21.52 22H7.48a.483.483 0 0 1-.48-.484v-1.414c0-1.355.418-2.508 1.21-3.34.864-.907 2.145-1.388 3.71-1.388h5.148c1.565 0 2.851.479 3.715 1.386.797.834 1.217 1.987 1.217 3.342v1.414a.483.483 0 0 1-.48.484Zm-13.56-.967h13.08v-.931c0-1.098-.329-2.022-.948-2.672-.691-.724-1.709-1.089-3.024-1.089H11.92c-1.315 0-2.33.365-3.017 1.089-.617.648-.943 1.571-.943 2.672v.93Z"
        fill="currentColor"
      />
      <path
        d="M5.5 2v7M2 5.5h7"
        stroke="currentColor"
        strokeWidth={0.9}
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAddUser);
export default ForwardRef;
