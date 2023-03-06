 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWarningBold(
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
        d="M12.052 17.828a.714.714 0 1 1-.002-1.428.714.714 0 0 1 .002 1.428Zm-.63-11.537c0-.344.281-.626.63-.626.35 0 .63.28.63.626v8.634c0 .345-.28.627-.63.627a.626.626 0 0 1-.63-.627V6.291Zm1.054-4.28A32.282 32.282 0 0 0 11.709 2h-.186C9.503 2.017 2 2.706 2 11.966c0 9.274 7.574 10.003 9.595 10.031a38.653 38.653 0 0 0 .921-.003c1.92-.034 9.594-.751 9.594-9.968 0-9.195-7.665-9.97-9.634-10.015Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgWarningBold);
export default ForwardRef;
