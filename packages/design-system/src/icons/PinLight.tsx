 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPinLight(
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
        d="M19.01 9.928a.422.422 0 0 0-.26.125L15.72 13.1a.44.44 0 0 0-.114.407c.424 1.844-.202 3.625-1.915 5.353a.202.202 0 0 1-.148.062.212.212 0 0 1-.148-.062l-4.087-4.118c-.006-.008-.008-.017-.014-.025-.009-.009-.017-.012-.026-.018L5.25 10.657a.2.2 0 0 1 .006-.285l.031-.03c1.69-1.705 3.47-2.351 5.285-1.913a.43.43 0 0 0 .404-.114l3.028-3.05a.444.444 0 0 0 .125-.265c.07-.745.435-1.454 1.115-2.108l5.89 5.918c-.662.663-1.376 1.039-2.125 1.119Zm2.72-1.75-5.877-5.905a.913.913 0 0 0-.64-.273c-.216 0-.418.083-.609.273-.751.754-1.192 1.588-1.318 2.479L10.53 7.526c-1.457-.276-3.591-.08-5.857 2.2l.305.307-.339-.276a1.075 1.075 0 0 0-.003 1.514l3.728 3.753-6.235 6.232a.435.435 0 0 0-.002.614c.167.17.438.174.609.006l.002-.003 6.244-6.232 3.805 3.833c.202.205.472.319.757.319.284 0 .552-.114.81-.373 1.819-1.827 2.539-3.799 2.143-5.867l2.758-2.775c.89-.133 1.727-.589 2.507-1.371A.83.83 0 0 0 22 8.824c0-.245-.1-.476-.27-.646Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPinLight);
export default ForwardRef;
