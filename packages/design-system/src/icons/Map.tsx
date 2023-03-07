 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMap(
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
        d="m20.728 19.863-3.27-.538V3.392l3.27.538v15.933ZM3.28 3.933l3.466-.547v15.936l-3.466.55V3.931Zm9.36.674 3.539-1.101v15.893L12.642 20.5V4.607Zm-4.619-1.09 3.345 1.084v15.885L8.022 19.4V3.517Zm13.449-.76-4.549-.748c-.014-.003-.03.002-.045.002C16.857 2.01 16.84 2 16.82 2c-.043 0-.08.014-.12.023-.022.005-.048-.003-.07.005l-4.623 1.438L7.581 2.03c-.025-.008-.048 0-.074-.005C7.465 2.017 7.427 2 7.382 2c-.02 0-.037.009-.054.011-.014.003-.028-.005-.046-.002l-4.744.748A.64.64 0 0 0 2 3.39v17.225a.638.638 0 0 0 .74.629l4.594-.726 4.474 1.452a.66.66 0 0 0 .387.002l4.67-1.454 4.398.726a.656.656 0 0 0 .518-.142.64.64 0 0 0 .225-.487V3.386a.639.639 0 0 0-.535-.629Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMap);
export default ForwardRef;
