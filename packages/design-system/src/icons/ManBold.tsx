 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgManBold(
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
        d="M17.783 14.077a1.544 1.544 0 0 1-1.096 1.887c-.41.114-.85.054-1.215-.17v4.666c0 .877-.629 1.54-1.463 1.54-.83 0-1.457-.663-1.457-1.54v-4.524h-.284v4.524c0 .88-.607 1.517-1.438 1.517-.836 0-1.468-.651-1.468-1.517v-4.667l-.04.026a1.546 1.546 0 0 1-1.18.142 1.54 1.54 0 0 1-1.09-1.88l1.172-4.278a.9.9 0 0 1 .048-.148c.29-1.315 1.483-2.265 2.846-2.265h2.604c1.363 0 2.553.948 2.843 2.26a.863.863 0 0 1 .06.19c0 .006 1.158 4.237 1.158 4.237Zm-5.615-7.04c-1.588 0-2.538-.942-2.538-2.516 0-.805.233-1.437.694-1.878.447-.427 1.067-.643 1.844-.643.78 0 1.4.216 1.844.64.461.441.697 1.073.697 1.879 0 1.576-.947 2.515-2.541 2.518Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgManBold);
export default ForwardRef;
