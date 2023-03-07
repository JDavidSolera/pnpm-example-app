 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStatusLight(
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
        d="M20.215 7.746a.952.952 0 0 1 0-1.903.95.95 0 0 1 .948.952.95.95 0 0 1-.948.95Zm-4.498 7.443a.952.952 0 0 1 0-1.904.952.952 0 0 1 0 1.903ZM7.949 11.76a.947.947 0 0 1-.947-.947v-.006a.95.95 0 0 1 .947-.95.947.947 0 0 1 .945.95.95.95 0 0 1-.945.953Zm-4.165 7.4a.95.95 0 0 1 0-1.9.951.951 0 0 1 0 1.9ZM20.212 5a1.79 1.79 0 0 0-1.78 1.792c0 .493.198.94.52 1.267l-2.663 4.49a1.654 1.654 0 0 0-.575-.103c-.578 0-1.084.282-1.411.708l-4.61-2.034c.02-.102.032-.208.032-.313 0-.987-.8-1.79-1.781-1.79a1.788 1.788 0 0 0-1.212 3.096l-2.464 4.382a1.753 1.753 0 0 0-.487-.077C2.8 16.418 2 17.22 2 18.208 2 19.194 2.8 20 3.781 20a1.789 1.789 0 0 0 1.212-3.093l2.464-4.379c.16.046.322.072.49.072a1.77 1.77 0 0 0 1.408-.709l4.61 2.034c-.02.103-.032.208-.032.313 0 .988.8 1.793 1.781 1.793a1.787 1.787 0 0 0 1.28-3.027l2.675-4.516c.173.057.353.094.543.094.985 0 1.781-.802 1.781-1.79A1.786 1.786 0 0 0 20.213 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgStatusLight);
export default ForwardRef;
