 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAccept(
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
        d="M4.666 20.06c1.703 1.636 4.186 2.465 7.378 2.465 3.193 0 5.676-.83 7.382-2.465 1.77-1.698 2.669-4.231 2.669-7.534 0-3.302-.896-5.838-2.669-7.537-1.706-1.635-4.189-2.464-7.381-2.464-3.19 0-5.676.832-7.38 2.467C2.897 6.69 2 9.226 2 12.53c0 3.302.896 5.835 2.666 7.53ZM3.11 12.529c0-5.904 3.006-8.896 8.933-8.896 5.93 0 8.94 2.995 8.94 8.896 0 5.898-3.01 8.89-8.94 8.89-5.927 0-8.933-2.992-8.933-8.89Zm7.06 4.214c.101.126.253.197.413.197h.012a.523.523 0 0 0 .412-.211L16.9 8.876a.521.521 0 0 0-.106-.732.527.527 0 0 0-.736.105l-5.49 7.312-2.273-2.844a.529.529 0 0 0-.738-.083.523.523 0 0 0-.083.736l2.697 3.373Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAccept);
export default ForwardRef;
