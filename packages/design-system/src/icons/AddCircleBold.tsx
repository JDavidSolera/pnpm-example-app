 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAddCircleBold(
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
        d="M16.985 12.596h-4.363v4.375a.626.626 0 1 1-1.252 0v-4.375H7.015a.626.626 0 0 1 0-1.252h4.355V7.032a.626.626 0 1 1 1.252 0v4.315h4.363c.344 0 .626.279.626.626a.627.627 0 0 1-.626.623ZM12.42 2.011A32.196 32.196 0 0 0 11.65 2h-.179C9.462 2.017 2 2.706 2 11.97 2 21.246 9.534 21.971 11.543 22c.106.003.216.003.325.003.207 0 .412-.003.589-.006 1.91-.034 9.543-.751 9.543-9.967.003-9.199-7.622-9.973-9.58-10.019Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAddCircleBold);
export default ForwardRef;
