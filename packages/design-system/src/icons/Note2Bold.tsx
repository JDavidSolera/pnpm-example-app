 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgNote2Bold(
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
        d="M17.295 7.748 13.158 3.68v1.81c0 .663.216 1.238.629 1.64.41.4.998.622 1.69.622h1.818v-.003Zm1.44-.284a.88.88 0 0 1 .265.629V20.6c0 .762-.643 1.4-1.409 1.4H5.401C4.65 22 4 21.343 4 20.6V3.4C4 2.672 4.669 2 5.4 2h7.425c.233 0 .45.088.612.253l5.298 5.21Zm-3.318 6.019a730.8 730.8 0 0 1-4.525 4.095l-2.02.703.66-1.998c.396-.353 4.317-3.876 4.573-4.135.242-.245.498-.296.686-.279a.98.98 0 0 1 .91.968.9.9 0 0 1-.284.646Zm.854-2.203c-.74-.754-2.069-.959-3.02 0-.025.023-.088.08-.184.18H7.005a.613.613 0 0 0-.603.614c0 .344.273.615.603.615h4.71c-.37.327-.774.697-1.207 1.081H7.005c-.33 0-.603.27-.603.615 0 .335.273.614.603.614H9.14l-.435.393a1.165 1.165 0 0 0-.307.467l-.071.213h-1.32c-.331 0-.604.27-.604.615 0 .336.273.615.603.615h.92l-.291.893c-.023.057-.031.123-.04.18h-.589a.613.613 0 0 0-.603.614c0 .336.273.615.603.615h1.488c.018 0 .032 0 .049-.009.023.009.057.009.088.009.105 0 .216-.017.33-.049l2.297-.776a.952.952 0 0 0 .37-.214l.07-.065c1.964-1.77 4.35-3.925 4.565-4.135.419-.416.646-.942.646-1.523 0-.572-.233-1.152-.637-1.562Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgNote2Bold);
export default ForwardRef;
