 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClock(
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
        d="M11.997 20.75c5.89 0 8.754-2.862 8.754-8.747 0-5.89-2.863-8.754-8.754-8.754-5.885 0-8.748 2.863-8.748 8.754 0 5.885 2.863 8.748 8.748 8.748Zm0-18.75C18.315 2 22 5.19 22 12.003 22 18.816 18.315 22 11.997 22 5.68 22 2 18.816 2 12.003S5.68 2 11.997 2Zm.63 10.017 2.893 2.897a.622.622 0 0 1 .032.882.622.622 0 0 1-.883.032l-.031-.032-3.08-3.079a.624.624 0 0 1-.181-.441V8.11a.626.626 0 0 1 1.252 0l-.003 3.907Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
