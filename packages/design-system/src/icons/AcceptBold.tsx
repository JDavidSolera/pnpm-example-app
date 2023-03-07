 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAcceptBold(
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
        d="M19.529 4.94c-1.717-1.636-4.214-2.465-7.425-2.465-3.212 0-5.709.83-7.423 2.468C2.901 6.64 2 9.176 2 12.478c0 3.302.901 5.835 2.681 7.533 1.714 1.635 4.211 2.464 7.423 2.464 3.21 0 5.708-.829 7.425-2.464 1.78-1.698 2.684-4.23 2.684-7.533 0-3.302-.902-5.84-2.684-7.538ZM16.99 8.823l-5.933 7.852a.527.527 0 0 1-.415.21h-.008a.53.53 0 0 1-.415-.196l-2.713-3.376a.52.52 0 0 1 .083-.735.534.534 0 0 1 .743.083l2.287 2.843 5.521-7.31a.533.533 0 0 1 .74-.106.524.524 0 0 1 .11.735Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAcceptBold);
export default ForwardRef;
