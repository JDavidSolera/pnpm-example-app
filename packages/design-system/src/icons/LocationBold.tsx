 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLocationBold(
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
        d="M12.105 2c4.436.014 7.073 2.686 7.062 7.153-.014 4.348-5.432 11.33-6.817 12.725a.414.414 0 0 1-.587 0C10.383 20.489 4.99 13.5 5 9.11c.006-2.206.657-4.02 1.884-5.247C8.1 2.644 9.894 2 12.07 2h.034Zm2.56 6.7c0-1.59-.95-2.537-2.537-2.537-1.588 0-2.538.95-2.538 2.538 0 1.59.95 2.538 2.538 2.538 1.59 0 2.538-.948 2.538-2.538Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLocationBold);
export default ForwardRef;
