 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMarkerBold(
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
        d="M18.475 3.306v17.38c0 .503-.275.956-.732 1.177a1.43 1.43 0 0 1-.585.137c-.284 0-.568-.094-.801-.273l-3.783-3.728a.47.47 0 0 0-.653 0l-3.749 3.694c-.448.341-.974.392-1.43.17A1.303 1.303 0 0 1 6 20.685V3.306C6 2.589 6.594 2 7.318 2h9.837c.735 0 1.32.589 1.32 1.306Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMarkerBold);
export default ForwardRef;
