 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPin(
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
        d="M18.761 9.756a.626.626 0 0 0-.38.185l-2.951 2.985a.639.639 0 0 0-.168.594c.394 1.73-.195 3.407-1.798 5.04l-3.966-4.007c-.012-.014-.017-.034-.031-.048-.015-.014-.034-.02-.049-.031L5.535 10.55l.028-.032c1.592-1.61 3.258-2.22 4.949-1.815a.615.615 0 0 0 .592-.17l2.952-2.986a.633.633 0 0 0 .181-.39c.06-.614.34-1.206.867-1.792l5.447 5.5c-.569.532-1.155.825-1.79.89Zm2.822-1.653-5.726-5.78a1.05 1.05 0 0 0-1.515 0c-.745.754-1.193 1.585-1.332 2.476l-2.558 2.59c-1.473-.257-3.569-.01-5.784 2.23l-.031.034a1.253 1.253 0 0 0-.366.894c0 .336.13.651.366.89l3.481 3.523-5.932 5.947a.646.646 0 0 0-.003.905.631.631 0 0 0 .896.003l5.934-5.95 3.558 3.603c.238.241.55.364.87.364.337 0 .68-.137.957-.419 1.788-1.81 2.519-3.767 2.168-5.824l2.56-2.593c.887-.15 1.72-.611 2.49-1.391.19-.19.295-.447.295-.72a1.113 1.113 0 0 0-.329-.782Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;
