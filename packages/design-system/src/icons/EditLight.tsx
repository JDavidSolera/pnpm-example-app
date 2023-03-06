 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgEditLight(
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
        d="M21.785 4.787a2.907 2.907 0 0 0-.802-1.974 2.84 2.84 0 0 0-1.828-.811 2.704 2.704 0 0 0-2.024.81l-.546.504H6.191C3.61 3.293 2.005 4.822 2.005 7.27v10.796a3.762 3.762 0 0 0 1.08 2.834 4.279 4.279 0 0 0 3.12 1.093h9.307a4.297 4.297 0 0 0 3.131-1.093 3.765 3.765 0 0 0 1.084-2.834V7.88l1.244-1.176a2.736 2.736 0 0 0 .814-1.918ZM18.55 18.062a2.676 2.676 0 0 1-.72 1.986 3.233 3.233 0 0 1-2.329.763h-9.31a3.221 3.221 0 0 1-2.328-.763 2.681 2.681 0 0 1-.698-1.986V7.27c0-1.739 1.08-2.8 3.037-2.8h9.1l-4.536 4.046a1.365 1.365 0 0 0-.35.53l-1.069 3.232c-.155.438-.042.925.29 1.246.222.236.53.367.85.365.127.017.256.017.383 0l3.212-1.07c.155-.054.296-.137.42-.248 0 0 2.221-1.975 4.037-3.62l.011 9.112Zm-8.144-5.41 1.083-3.255c1.735-1.516 6.155-5.443 6.47-5.748.282-.299.673-.47 1.081-.47h.07a1.602 1.602 0 0 1 1.512 1.6 1.547 1.547 0 0 1-.464 1.093c-.35.33-5.608 5.033-6.436 5.773l-3.212 1.07c0-.003-.104-.062-.104-.062Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgEditLight);
export default ForwardRef;
