 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSearchLight(
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
        d="M2 9.948a7.918 7.918 0 0 0 7.92 7.92 7.866 7.866 0 0 0 5.392-2.122l6.17 6.169a.284.284 0 0 0 .203.085.284.284 0 0 0 .198-.486l-6.17-6.167a7.915 7.915 0 0 0-.195-11.06 7.924 7.924 0 0 0-11.2.062A7.928 7.928 0 0 0 2 9.948Zm.568 0A7.35 7.35 0 0 1 9.92 2.599a7.296 7.296 0 0 1 5.195 2.154c2.872 2.868 2.87 7.521 0 10.393a7.346 7.346 0 0 1-10.393 0 7.36 7.36 0 0 1-2.153-5.198Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSearchLight);
export default ForwardRef;
