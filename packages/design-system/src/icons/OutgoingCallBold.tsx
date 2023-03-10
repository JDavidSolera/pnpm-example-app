 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgOutgoingCallBold(
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
        d="M21.749 15.49c.816.816 1.24 1.667 1.255 2.53.017.893-.405 1.795-1.247 2.68-.296.31-.709.607-.845.706-.009.006-.014.012-.017.012-.009.005-.017.01-.026.02-.572.395-1.297.591-2.137.591-.88 0-1.887-.216-2.977-.651-2.222-.885-4.652-2.61-7.029-4.986l-.005-.006-.074-.074c-.003 0-.003-.003-.006-.003-2.376-2.376-4.1-4.806-4.986-7.029-.848-2.125-.868-3.941-.06-5.114a.157.157 0 0 1 .02-.025 6.549 6.549 0 0 1 .717-.862c.868-.829 1.75-1.25 2.624-1.25h.054c.863.017 1.714.439 2.53 1.255.33.33.6.672.8 1.016.438.706.598 1.437.472 2.169-.125.731-.532 1.445-1.215 2.128a5.587 5.587 0 0 1-.504.45c-.065.12-.025.498.504 1.272.615.896 1.64 1.952 2.357 2.672l.085.085c.717.718 1.776 1.742 2.672 2.357.6.412.962.526 1.152.526a.22.22 0 0 0 .12-.025c.168-.208.273-.328.45-.504.683-.683 1.4-1.093 2.128-1.215.163-.029.322-.04.481-.04.57 0 1.136.174 1.688.515.347.2.689.467 1.019.8Zm-6.159-5.22-.964-1.072a.784.784 0 0 1 .116-1.153l2.561-2.254-.56-.623a.593.593 0 0 1-.131-.623.588.588 0 0 1 .524-.361l3.907-.305c.017-.003.037-.003.054-.003a.643.643 0 0 1 .634.791l-.825 3.85a.6.6 0 0 1-.424.473.636.636 0 0 1-.145.02.62.62 0 0 1-.458-.216l-.566-.63-2.573 2.212a.76.76 0 0 1-.526.21l-.066-.002a.774.774 0 0 1-.558-.313Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgOutgoingCallBold);
export default ForwardRef;
