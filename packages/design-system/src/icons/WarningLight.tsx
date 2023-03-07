 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWarningLight(
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
        d="M12.441 21.16c2.046-.037 8.725-.808 8.725-9.134 0-3.606-1.232-6.207-3.665-7.732-1.987-1.247-4.229-1.429-5.103-1.452a29.997 29.997 0 0 0-.734-.008h-.185c-.868.008-3.096.156-5.054 1.389-2.385 1.5-3.591 4.106-3.591 7.746 0 3.645 1.22 6.258 3.628 7.777 1.975 1.244 4.22 1.409 5.094 1.42l.299.003c.205-.003.41-.003.586-.009ZM12.418 2.01c1.958.045 9.582.82 9.582 10.017 0 9.217-7.632 9.934-9.542 9.968a38.25 38.25 0 0 1-.603.006c-.105 0-.21 0-.313-.003C9.532 21.97 2 21.243 2 11.97 2 2.706 9.464 2.017 11.47 2h.194c.256 0 .524.003.754.009Zm-.42 13.335a.416.416 0 0 1-.416-.416V6.294a.416.416 0 0 1 .83 0v8.634c0 .23-.187.416-.415.416ZM12 16.405a.652.652 0 1 1 0 1.303.652.652 0 0 1 0-1.303Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgWarningLight);
export default ForwardRef;
