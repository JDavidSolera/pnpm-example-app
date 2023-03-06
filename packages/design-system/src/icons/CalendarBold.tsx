 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCalendarBold(
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
        d="M19.488 3.5H4.516A2.691 2.691 0 0 0 1.83 6.186v11.628A2.691 2.691 0 0 0 4.516 20.5h14.888a2.775 2.775 0 0 0 2.77-2.77V6.186A2.691 2.691 0 0 0 19.488 3.5Zm-2.946 1.52c.501 0 .84.34.84.844a.84.84 0 0 1-.226.606.83.83 0 0 1-.614.238.835.835 0 0 1-.615-.238c-.108-.107-.227-.296-.227-.606 0-.505.34-.844.842-.844Zm-9.065 0c.502 0 .842.34.842.844a.84.84 0 0 1-.227.606.83.83 0 0 1-.615.238.83.83 0 0 1-.615-.238.84.84 0 0 1-.226-.606c0-.505.34-.844.841-.844Zm6.469 12.08h-3.922a.961.961 0 0 1-.035-.287c0-.377.099-.629.36-.942l1.195-1.456c.684-.827.972-1.233.972-1.743 0-.262-.082-.459-.244-.595-.189-.163-.493-.235-.934-.235a7.293 7.293 0 0 0-1.204.116v-.951c.47-.11.949-.169 1.43-.172.882 0 1.465.198 1.842.575.287.287.441.684.441 1.195 0 .765-.342 1.348-1.314 2.41l-1.07 1.169h2.483v.917Zm6.868-8.5H3.19c-.287 0-.522-.19-.522-.421 0-.232.235-.421.522-.421h17.621c.287 0 .522.189.522.42 0 .233-.232.421-.519.421Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCalendarBold);
export default ForwardRef;
