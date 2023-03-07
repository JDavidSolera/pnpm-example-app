 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgOn(
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
        d="M12.418 20.773c1.961-.037 8.358-.774 8.358-8.745 0-7.97-6.428-8.745-8.397-8.79a17.479 17.479 0 0 0-.868-.009c-1.944.017-8.284.7-8.284 8.745 0 8.06 6.394 8.777 8.355 8.805.279.003.586 0 .836-.006Zm-.011-18.762c1.6.037 9.593.7 9.593 10.015 0 9.32-7.962 9.94-9.559 9.968-.17.003-.364.006-.56.006-.109 0-.214 0-.32-.003C9.966 21.974 2 21.383 2 11.97c0-1.65.458-9.89 9.496-9.969.302 0 .635.006.91.011ZM8.548 15.073c.828 0 1.676-.327 1.676-2.763 0-2.464-.896-2.78-1.676-2.78-.834 0-1.685.33-1.685 2.78 0 2.436.851 2.763 1.685 2.763Zm0-6.653c1.278 0 2.806.674 2.806 3.89 0 3.207-1.525 3.882-2.806 3.882-1.283 0-2.814-.672-2.814-3.882 0-3.216 1.53-3.89 2.814-3.89Zm8.475.128c.225 0 .407.182.407.407v6.69a.407.407 0 0 1-.407.407h-.225a.412.412 0 0 1-.341-.182L13.171 10.9v4.746a.407.407 0 0 1-.407.407h-.273a.407.407 0 0 1-.407-.407v-6.69c0-.225.182-.407.407-.407h.217c.136 0 .264.068.341.182l3.293 4.975v-4.75c0-.225.182-.407.407-.407h.273Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgOn);
export default ForwardRef;
