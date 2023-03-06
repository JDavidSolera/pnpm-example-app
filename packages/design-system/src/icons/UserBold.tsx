 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgUserBold(
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
        d="M11.89 11.609c-1.581 0-2.813-.416-3.667-1.238-.884-.853-1.334-2.12-1.334-3.764 0-1.644.45-2.913 1.334-3.77.854-.824 2.086-1.243 3.667-1.243 1.582 0 2.817.419 3.673 1.244.89.856 1.34 2.125 1.34 3.77 0 1.644-.452 2.91-1.342 3.763-.854.822-2.089 1.238-3.67 1.238Zm8.322 9.985H3.569A.57.57 0 0 1 3 21.025v-1.664c0-1.593.495-2.95 1.434-3.929C5.458 14.365 6.977 13.8 8.832 13.8h6.103c1.854 0 3.38.564 4.403 1.63.945.982 1.443 2.339 1.443 3.932v1.664a.57.57 0 0 1-.57.57Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgUserBold);
export default ForwardRef;
