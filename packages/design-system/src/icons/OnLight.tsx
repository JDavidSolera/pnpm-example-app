 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgOnLight(
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
        d="M12.415 2h-.924C2.458 2.083 2 10.332 2 12c0 1.668.458 9.883 9.559 10h.89C14.05 22 22 21.36 22 12s-7.982-9.949-9.585-10Zm0 19.166h-.833c-2.083 0-8.751-.765-8.751-9.166 0-8.4 6.668-9.166 8.668-9.166h.9c2.1.057 8.767.834 8.767 9.166s-6.665 9.166-8.725 9.166h-.026ZM8.91 8.141c-1.267 0-2.741.675-2.741 3.859 0 2.558.933 3.859 2.775 3.859 1.257 0 2.757-.675 2.757-3.86 0-3.184-1.534-3.858-2.791-3.858Zm0 6.801c-.834 0-1.825-.332-1.825-2.925s.976-2.951 1.825-2.951c.85 0 1.815.333 1.815 2.951s-.976 2.925-1.815 2.925Zm8.372-6.667h.304a.297.297 0 0 1 .29.307v6.844c0 .171-.136.308-.307.308h-.233a.308.308 0 0 1-.26-.143l-3.542-5.367v5.191a.317.317 0 0 1-.316.316h-.285a.315.315 0 0 1-.307-.316V8.582c0-.168.137-.307.307-.307h.225c.103 0 .2.048.26.134l3.58 5.373v-5.2c0-.159.124-.293.284-.307Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgOnLight);
export default ForwardRef;
