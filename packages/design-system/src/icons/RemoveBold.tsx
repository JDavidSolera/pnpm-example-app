 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgRemoveBold(
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
        d="M15.556 6.176h-7.12v-1.84c0-.43.093-.74.281-.914.236-.216.577-.196.637-.193l5.27-.003c.303 0 .523.074.67.23.24.254.27.7.262.891v1.83Zm-.862 11.044a.61.61 0 1 1-1.223 0v-6.258a.61.61 0 1 1 1.223 0v6.259Zm-4.173 0a.61.61 0 1 1-1.224 0v-6.258a.61.61 0 1 1 1.224 0v6.259ZM21.383 6.177h-4.606v-1.79c.008-.107.054-1.075-.586-1.76-.265-.285-.751-.623-1.568-.623l-5.209.005c-.088-.014-.88-.07-1.508.501-.458.416-.691 1.03-.691 1.827v1.84H2.612a.61.61 0 1 0 0 1.224H4.09l.003 11.26c-.003.057-.085 1.42.828 2.395.583.623 1.414.942 2.466.942h9.184c.006 0 .028.003.065.003.296 0 1.48-.054 2.347-.885.612-.586.922-1.402.922-2.426V7.399h1.48a.613.613 0 0 0 .611-.611.617.617 0 0 0-.614-.612Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgRemoveBold);
export default ForwardRef;
