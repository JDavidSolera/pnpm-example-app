 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgImage(
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
        d="M20.384 17.773c.196 0 .372-.148.395-.21l-.003-12.146a.564.564 0 0 0-.39-.185H3.617c-.213 0-.37.134-.392.194v12.162c.014.046.173.185.392.185h16.768Zm0-13.773C21.229 4 22 4.674 22 5.414v12.172c0 .74-.771 1.414-1.616 1.414H3.616C2.74 19 2 18.351 2 17.586V5.414C2 4.65 2.74 4 3.616 4h16.768ZM7.08 7.495a1.022 1.022 0 0 0 0 2.043 1.022 1.022 0 0 0 0-2.043Zm0 3.272a2.251 2.251 0 0 1 0-4.502 2.249 2.249 0 0 1 2.242 2.251 2.249 2.249 0 0 1-2.242 2.251Zm9.388-1.121 3.23 2.479a.619.619 0 0 1 .114.862.612.612 0 0 1-.86.114l-2.851-2.189-3.182 2.536 1.964 1.852c.245.231.259.62.025.869a.607.607 0 0 1-.865.025l-3.36-3.173-4.836 4.038a.608.608 0 0 1-.862-.08.616.616 0 0 1 .08-.865l5.25-4.385a.61.61 0 0 1 .811.026l.894.842 3.694-2.945a.615.615 0 0 1 .754-.006Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
