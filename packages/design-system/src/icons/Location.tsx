 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLocation(
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
        d="M12.072 3.224c-3.77 0-5.854 2.111-5.865 5.947-.012 3.41 4.046 9.226 5.848 11.315 1.639-1.912 5.893-7.706 5.905-11.278.011-3.847-2.07-5.97-5.86-5.984h-.028ZM12.058 22a.601.601 0 0 1-.427-.18C10.279 20.45 4.986 13.535 5 9.169 5.014 4.678 7.658 2 12.072 2h.031c4.434.014 7.075 2.71 7.06 7.211-.011 4.684-5.848 11.767-6.679 12.61a.606.606 0 0 1-.427.179Zm.025-14.698c-.97 0-1.446.48-1.446 1.465 0 .988.473 1.469 1.446 1.469s1.446-.481 1.446-1.466c0-.987-.476-1.465-1.446-1.468Zm0 4.16c-1.636 0-2.652-1.033-2.652-2.692 0-1.659 1.016-2.692 2.652-2.692 1.636 0 2.652 1.033 2.652 2.692 0 1.66-1.016 2.692-2.652 2.692Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;
