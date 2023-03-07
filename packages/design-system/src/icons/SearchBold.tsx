 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSearchBold(
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
        d="M9.99 17.892A7.99 7.99 0 0 1 4.34 4.249a7.993 7.993 0 0 1 11.684 10.875l5.81 5.809a.572.572 0 0 1-.808.807l-5.802-5.801a7.936 7.936 0 0 1-5.233 1.953Zm4.817-3.082a6.852 6.852 0 0 1-9.66-.065A6.85 6.85 0 0 1 9.99 3.051a6.804 6.804 0 0 1 4.881 2.043 6.85 6.85 0 0 1 .031 9.62.616.616 0 0 0-.096.096Zm-.637-8.983a5.835 5.835 0 0 0-8.253 0 5.835 5.835 0 0 0 0 8.253 5.835 5.835 0 0 0 9.962-4.128 5.792 5.792 0 0 0-1.709-4.125Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSearchBold);
export default ForwardRef;
