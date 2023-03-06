 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgImageBold(
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
        d="M19.971 14.027a.636.636 0 0 0-.117-.885l-3.298-2.547a.62.62 0 0 0-.768.008l-3.77 3.025-.912-.868a.619.619 0 0 0-.828-.025l-5.361 4.51a.637.637 0 0 0-.08.891.617.617 0 0 0 .88.083l4.937-4.152 3.432 3.264a.62.62 0 0 0 .882-.026.638.638 0 0 0-.025-.893l-2.001-1.904 3.247-2.607 2.911 2.248a.62.62 0 0 0 .871-.122ZM6.974 7.117c-1.263 0-2.29 1.039-2.29 2.314 0 1.278 1.027 2.314 2.29 2.314 1.264 0 2.291-1.04 2.291-2.314 0-1.275-1.027-2.314-2.29-2.314ZM20.554 5c.755 0 1.443.592 1.443 1.244v12.512c0 .652-.689 1.244-1.443 1.244H3.44C2.672 20 2 19.417 2 18.756l.003-12.512C2.003 5.58 2.677 5 3.443 5h17.111Zm-13.58 5.484a1.048 1.048 0 0 1-1.041-1.05c0-.58.467-1.05 1.041-1.05a1.051 1.051 0 0 1 0 2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgImageBold);
export default ForwardRef;
