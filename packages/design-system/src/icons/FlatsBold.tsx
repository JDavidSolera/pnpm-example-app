 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFlatsBold(
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
        d="M17.028 7.567a.163.163 0 0 1-.006-.232l3.2-3.194c.311-.4.363-.945.137-1.399A1.33 1.33 0 0 0 19.16 2H4.34C3.599 2 3 2.597 3 3.33v18.085c0 .322.263.585.588.585a.587.587 0 0 0 .588-.585V12.91h14.982c.513 0 .973-.286 1.198-.743.229-.46.175-.993-.185-1.453.003 0-3.143-3.148-3.143-3.148Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFlatsBold);
export default ForwardRef;
