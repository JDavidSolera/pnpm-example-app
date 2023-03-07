 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgListBold(
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
        d="M17.164 12.647H11.51a.615.615 0 0 1-.614-.611c0-.336.276-.612.614-.612h5.654c.338 0 .614.273.614.612a.615.615 0 0 1-.614.611Zm0 4.075H11.51a.615.615 0 0 1-.614-.612c0-.338.276-.612.614-.612h5.654c.338 0 .614.274.614.612a.617.617 0 0 1-.614.612Zm-5.734-9.39h5.651c.339 0 .615.273.615.612a.613.613 0 0 1-.615.612h-5.65a.615.615 0 0 1-.615-.612c0-.339.276-.612.614-.612Zm-2.768 5.52a.816.816 0 1 1-.001-1.629.816.816 0 0 1 .001 1.63Zm0 4.072a.816.816 0 0 1-.817-.814.816.816 0 0 1 1.634 0c0 .45-.365.814-.817.814ZM8.653 7.07a.82.82 0 0 1 .82.814c0 .45-.367.817-.82.814a.816.816 0 0 1-.816-.814c0-.45.367-.814.816-.814ZM18.587 2H6.414C5.674 2 5 2.768 5 3.613v16.768c0 .873.649 1.616 1.414 1.616l12.17.003c.765 0 1.414-.74 1.414-1.616V3.616C20 2.771 19.326 2 18.587 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgListBold);
export default ForwardRef;
