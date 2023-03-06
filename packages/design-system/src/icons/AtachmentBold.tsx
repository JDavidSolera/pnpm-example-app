 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAtachmentBold(
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
        d="M15.335 5.446a.82.82 0 0 0-.83.811l-.012 11.267c0 1.943-.928 2.848-2.914 2.848-1.99 0-2.917-.905-2.917-2.848V5.34c0-1.204.524-1.716 1.756-1.716s1.756.512 1.756 1.719l.025 11.537c0 .378-.08.455-.466.455-.388 0-.464-.077-.464-.455V6.31a.825.825 0 0 0-.831-.814.822.822 0 0 0-.831.811v10.57c0 1.283.814 2.08 2.128 2.08 1.312 0 2.129-.797 2.129-2.08L13.838 5.34C13.836 3.249 12.558 2 10.418 2 8.278 2 7 3.25 7 5.34v12.184C7 20.366 8.668 22 11.579 22c2.908 0 4.576-1.63 4.576-4.474l.011-11.266a.823.823 0 0 0-.83-.814Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAtachmentBold);
export default ForwardRef;
