 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPinBold(
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
        d="m21.67 8.103-5.75-5.78a1.058 1.058 0 0 0-1.523 0c-.748.754-1.198 1.585-1.337 2.476l-2.57 2.59c-1.48-.257-3.585-.01-5.81 2.23l-.032.034a1.25 1.25 0 0 0-.367.894c0 .336.131.651.367.89l3.497 3.523-5.958 5.947a.644.644 0 0 0-.003.905.635.635 0 0 0 .9.003l5.96-5.95 3.574 3.603c.24.241.553.364.874.364.339 0 .683-.137.962-.419 1.795-1.81 2.53-3.767 2.177-5.824l2.572-2.593c.89-.15 1.727-.611 2.501-1.391.19-.19.296-.447.296-.72a1.11 1.11 0 0 0-.33-.782Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPinBold);
export default ForwardRef;
