 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPowerBold(
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
        d="M19.59 4.465C17.878 2.83 15.384 2 12.177 2c-3.208 0-5.698.83-7.408 2.465C2.993 6.165 2.092 8.698 2.092 12c0 3.304.901 5.837 2.677 7.534C6.482 21.17 8.975 22 12.18 22c3.205 0 5.701-.83 7.414-2.465 1.779-1.697 2.68-4.233 2.68-7.534 0-3.3-.904-5.836-2.683-7.536Zm-7.932.313a.573.573 0 0 1 1.147 0v4.159a.573.573 0 0 1-1.147 0v-4.16Zm5.164 11.88c-1.062 1.015-2.597 1.527-4.565 1.527-1.968 0-3.5-.515-4.562-1.53-1.101-1.052-1.66-2.615-1.66-4.64 0-1.682.387-3.05 1.153-4.068.757-1.003 1.865-1.657 3.296-1.938a.568.568 0 1 1 .224 1.114c-2.376.469-3.529 2.07-3.529 4.893 0 1.705.442 2.99 1.311 3.82.84.802 2.109 1.209 3.767 1.209 1.659 0 2.927-.407 3.767-1.209.87-.83 1.311-2.117 1.311-3.82 0-2.863-1.187-4.47-3.629-4.913a.569.569 0 1 1 .207-1.12c1.469.267 2.605.913 3.382 1.919.79 1.023 1.188 2.405 1.188 4.11.003 2.03-.557 3.591-1.661 4.646Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPowerBold);
export default ForwardRef;
