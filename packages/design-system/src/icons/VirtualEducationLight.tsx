 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgVirtualEducationLight(
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
        d="M11.043 17.643c-.95.173-2.297.546-3.31 1.36a.42.42 0 0 1-.53 0c-1.013-.814-2.36-1.19-3.31-1.36a.231.231 0 0 1-.189-.227v-2.022l3.287 1.487c.27.122.577.122.847 0l3.397-1.539v2.07a.24.24 0 0 1-.192.231ZM1.89 13.482c0-.06.034-.112.088-.14l5.373-2.434a.149.149 0 0 1 .124 0l5.375 2.434a.146.146 0 0 1 .088.14.143.143 0 0 1-.088.14l-5.375 2.434a.142.142 0 0 1-.121 0L1.977 13.62a.149.149 0 0 1-.088-.14Zm2.586-6.453c0-.725.167-1.263.495-1.606.337-.352.89-.53 1.633-.53l12.669-.007c.747 0 1.296.18 1.633.531.328.34.494.88.494 1.603v6.055c0 .729-.166 1.275-.497 1.621-.34.361-.89.543-1.63.543l-7.151.003v-.306l1.09-.495a1.05 1.05 0 0 0 .616-.968c0-.422-.237-.792-.616-.965l-5.376-2.435a1.03 1.03 0 0 0-.847 0l-2.513 1.139V7.029Zm17.413 9.968h-9.767v-.862l7.15-.006c.987 0 1.75-.274 2.259-.81.492-.52.74-1.273.74-2.238V7.023c0-.962-.248-1.712-.743-2.225C21.017 4.27 20.258 4 19.272 4l-12.669.006c-.986 0-1.745.267-2.255.795-.495.513-.744 1.26-.744 2.225v4.586l-1.988.902c-.38.176-.616.543-.616.968 0 .425.237.792.616.965l1.199.543v2.426c0 .552.389 1.02.92 1.116.85.155 2.045.486 2.917 1.181a1.301 1.301 0 0 0 1.63 0c.867-.698 2.066-1.029 2.916-1.18.364-.064.647-.31.798-.632h9.89c.245 0 .442-.2.442-.452a.443.443 0 0 0-.44-.452Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgVirtualEducationLight);
export default ForwardRef;
