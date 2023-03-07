 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAddCircleLight(
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
        d="M16.983 11.553a.416.416 0 0 1 0 .831h-4.57v4.582a.416.416 0 0 1-.831 0v-4.579H7.017a.416.416 0 0 1 0-.83h4.562V7.03a.416.416 0 0 1 .83 0v4.522h4.574ZM12.44 21.16c2.046-.037 8.725-.808 8.725-9.134 0-3.606-1.235-6.21-3.665-7.732-1.987-1.247-4.229-1.432-5.103-1.452a29.289 29.289 0 0 0-.725-.008h-.19c-.869.008-3.097.156-5.052 1.389-2.39 1.5-3.597 4.106-3.597 7.746 0 3.642 1.218 6.26 3.628 7.777 1.975 1.244 4.218 1.406 5.091 1.42.1.003.2.003.299.003.205-.003.41-.003.59-.009ZM12.415 2.01c1.958.045 9.585.82 9.585 10.017 0 9.217-7.632 9.931-9.542 9.968-.182.003-.395.006-.606.006-.102 0-.208 0-.31-.003C9.532 21.97 2 21.243 2 11.97 2 2.706 9.464 2.017 11.47 2h.2c.256 0 .518.003.745.009Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAddCircleLight);
export default ForwardRef;
