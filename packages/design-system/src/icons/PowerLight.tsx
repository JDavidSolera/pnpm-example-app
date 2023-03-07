 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPowerLight(
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
        d="M11.999 22C5.459 22 2 18.544 2 12.001 2 5.46 5.456 2 11.999 2c3.191 0 5.665.826 7.356 2.457C21.11 6.148 22 8.687 22 12 22.003 18.541 18.544 22 11.999 22Zm0-19.43c-6.255 0-9.43 3.174-9.43 9.431 0 6.255 3.172 9.43 9.43 9.43 6.26 0 9.432-3.172 9.432-9.43.002-6.26-3.172-9.432-9.432-9.432ZM12 18.141c-1.953 0-3.473-.51-4.512-1.511-1.08-1.042-1.629-2.6-1.629-4.63 0-1.69.382-3.06 1.133-4.07.738-.989 1.823-1.632 3.232-1.911a.285.285 0 0 1 .336.225.285.285 0 0 1-.225.336c-2.591.515-3.906 2.34-3.906 5.423 0 3.698 1.873 5.572 5.571 5.572 3.699 0 5.575-1.874 5.575-5.572 0-3.123-1.353-4.956-4.015-5.443a.284.284 0 0 1 .103-.558c1.443.265 2.56.9 3.317 1.89.774 1.014 1.167 2.397 1.167 4.114 0 2.03-.55 3.587-1.629 4.63-1.044.996-2.565 1.505-4.518 1.505Zm-.284-9.224c0 .157.128.285.284.285a.286.286 0 0 0 .285-.285V4.753a.286.286 0 0 0-.284-.285.286.286 0 0 0-.285.285v4.165Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPowerLight);
export default ForwardRef;
