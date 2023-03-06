 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLocationLight(
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
        d="M12.058 20.974c1.577-1.776 6.27-8.005 6.281-11.825.012-4.061-2.202-6.304-6.235-6.315h-.032c-4.015 0-6.232 2.228-6.244 6.281-.011 3.854 4.66 10.086 6.23 11.86ZM12.104 2c4.437.014 7.078 2.687 7.064 7.152-.015 4.346-5.434 11.333-6.817 12.725a.41.41 0 0 1-.58.005l-.006-.006C10.382 20.49 4.985 13.502 5 9.11 5.014 4.655 7.658 2 12.072 2h.032Zm-.02 8.407c1.107 0 1.693-.589 1.693-1.705 0-1.115-.586-1.704-1.693-1.704-1.107 0-1.697.589-1.697 1.704 0 1.116.587 1.705 1.697 1.705Zm0-4.243c1.58 0 2.521.95 2.521 2.538 0 1.588-.942 2.539-2.521 2.539-1.58 0-2.522-.95-2.522-2.539 0-1.588.942-2.538 2.522-2.538Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLocationLight);
export default ForwardRef;
