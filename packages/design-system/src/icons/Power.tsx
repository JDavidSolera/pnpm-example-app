 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPower(
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
        d="M12.09 22c-3.177 0-5.647-.83-7.345-2.465-1.76-1.698-2.653-4.231-2.653-7.535 0-3.301.893-5.837 2.653-7.538C6.443 2.83 8.913 2 12.09 2s5.647.83 7.348 2.465c1.762 1.7 2.655 4.234 2.655 7.538 0 3.301-.892 5.837-2.655 7.535-1.7 1.635-4.172 2.462-7.348 2.462Zm0-18.894c-5.9 0-8.892 2.994-8.892 8.897 0 5.9 2.992 8.89 8.891 8.89 5.903 0 8.897-2.99 8.897-8.89-.003-5.903-2.994-8.897-8.897-8.897Zm.08 15.081c-1.948 0-3.47-.515-4.522-1.53-1.092-1.052-1.646-2.616-1.646-4.64 0-1.683.384-3.05 1.143-4.069.748-1.003 1.848-1.657 3.267-1.939a.567.567 0 1 1 .222 1.115c-2.355.469-3.498 2.07-3.498 4.893 0 1.706.438 2.991 1.3 3.822.833.801 2.09 1.208 3.733 1.208 1.644 0 2.9-.407 3.733-1.211.862-.83 1.3-2.116 1.3-3.822 0-2.863-1.177-4.47-3.597-4.913a.569.569 0 1 1 .205-1.12c1.455.267 2.582.912 3.352 1.919.782 1.024 1.177 2.405 1.177 4.111 0 2.025-.554 3.589-1.649 4.64-1.052 1.021-2.573 1.536-4.52 1.536Zm-.598-9.25a.57.57 0 0 0 .568.57.57.57 0 0 0 .57-.57v-4.16a.57.57 0 0 0-.57-.568.57.57 0 0 0-.568.569v4.16Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPower);
export default ForwardRef;
