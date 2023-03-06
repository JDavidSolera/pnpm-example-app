 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCopy(
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
        d="M11.785 16.311 3.438 12.02l1.59-.827 6.103 3.14a1.418 1.418 0 0 0 1.299.006l6.224-3.146 1.623.83-8.492 4.288Zm8.492-1.039-8.492 4.292-8.347-4.292 1.59-.824 6.103 3.137a1.418 1.418 0 0 0 1.299.006l6.224-3.146 1.623.827ZM11.785 4.436l8.492 4.328-8.492 4.295-8.347-4.295 8.347-4.328Zm9.924 7.586c0-.542-.302-1.036-.785-1.282l-.686-.35.68-.343a1.438 1.438 0 0 0 .003-2.562L12.43 3.156A1.44 1.44 0 0 0 11.779 3a1.41 1.41 0 0 0-.659.162L2.774 7.49a1.436 1.436 0 0 0 .005 2.551l.679.35-.684.354A1.433 1.433 0 0 0 2 12.022c0 .54.3 1.029.78 1.274l.678.35-.684.355a1.436 1.436 0 0 0 .005 2.55l8.347 4.293c.205.106.429.156.653.156.222 0 .443-.05.645-.154l8.492-4.291a1.438 1.438 0 0 0 .003-2.562l-.687-.35.681-.347c.49-.24.796-.734.796-1.274Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;
