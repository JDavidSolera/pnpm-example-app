 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPlayLight(
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
        d="M2 12.001C2 18.544 5.46 22 11.999 22c6.545 0 10.004-3.46 10.001-9.999 0-3.313-.891-5.853-2.645-7.544C17.665 2.826 15.19 2 12 2 5.456 2 2 5.46 2 12.001Zm.57 0c0-6.257 3.174-9.432 9.429-9.432 6.26 0 9.434 3.172 9.432 9.432 0 6.258-3.172 9.43-9.432 9.43-6.258 0-9.43-3.175-9.43-9.43Zm6.206 4.362a.264.264 0 0 0 .262 0l7.248-4.185a.264.264 0 0 0 0-.456L9.041 7.54a.264.264 0 0 0-.396.228v8.367c0 .094.048.18.131.228Zm.396-.686v-7.45l6.451 3.726-6.451 3.724Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPlayLight);
export default ForwardRef;
