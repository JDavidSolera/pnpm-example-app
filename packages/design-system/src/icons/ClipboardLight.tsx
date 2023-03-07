 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClipboardLight(
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
        d="M19.172 20.85V4.632c0-.082-.268-.335-.64-.335H15.54c.011.1.028.196.031.298l.006.194-.003.094c-.046 1.323-1.264 1.6-3.08 1.6-1.812 0-3.03-.277-3.078-1.617v-.197l.005-.094c.003-.1.023-.185.037-.278H6.463c-.376 0-.64.256-.64.335V20.85c0 .114.278.336.64.336h12.066c.364 0 .643-.225.643-.336ZM12.496 2.814c-1.477 0-2.191.578-2.248 1.818l-.006.157c.014.398.031.876 2.257.876 2.225 0 2.242-.48 2.253-.83V4.7a2.705 2.705 0 0 0-.11-.706c-.257-.794-.957-1.181-2.146-1.181Zm6.033.669c.768 0 1.468.549 1.468 1.15V20.85c0 .623-.671 1.15-1.465 1.15H6.466C5.672 22 5 21.474 5 20.85V4.632c0-.6.7-1.15 1.466-1.15h3.201C10.091 2.522 11.064 2 12.496 2c1.744 0 2.501.751 2.826 1.483h3.207Zm-6.95 1.497a.412.412 0 0 1-.412-.407.41.41 0 0 1 .412-.407h1.83a.41.41 0 0 1 .413.407.41.41 0 0 1-.413.407h-1.83Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgClipboardLight);
export default ForwardRef;
