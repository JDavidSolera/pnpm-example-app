 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgNews(
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
        d="M15.424 18.961a.895.895 0 0 0 .795-.141.97.97 0 0 0 .385-.779V6.961a.97.97 0 0 0-.388-.781.885.885 0 0 0-.792-.141L3.044 9.766A.53.53 0 0 0 2 9.886v5.227a.53.53 0 0 0 1.045.12l3.175.957-.183.582a.813.813 0 0 0 .532 1.017l2.244.704a.773.773 0 0 0 .618-.055.793.793 0 0 0 .399-.477l.197-.625 5.397 1.625Zm.122-1.066L3.092 14.143v-3.286l12.454-3.749v10.787Zm2.69-5.625c0 .3.241.54.54.54h2.162a.54.54 0 1 0 0-1.08h-2.161a.54.54 0 0 0-.54.54ZM8.88 17.385l-1.73-.543.07-.222 1.729.543-.07.222Zm10.969.798a.539.539 0 0 0 .765 0 .542.542 0 0 0 0-.765l-1.491-1.49a.542.542 0 0 0-.765.764l1.49 1.49Zm-1.521-9.595a.54.54 0 0 0 .765 0l1.529-1.53a.542.542 0 0 0-.765-.764l-1.53 1.529a.542.542 0 0 0 0 .765Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgNews);
export default ForwardRef;
