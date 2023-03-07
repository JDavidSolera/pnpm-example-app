 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgForwardLight(
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
        d="M12.003 21.163c-6.082 0-9.166-3.082-9.166-9.16 0-6.084 3.082-9.166 9.166-9.166 6.078 0 9.16 3.082 9.16 9.166 0 6.078-3.082 9.16-9.16 9.16Zm0-19.163C5.46 2 2 5.458 2 12.003 2 18.543 5.458 22 12.003 22 18.543 22 22 18.542 22 12.003 22 5.458 18.542 2 12.003 2Zm1.431 12.018V9.35l3.902 2.344-3.902 2.323Zm-.626-5.772a.412.412 0 0 0-.21.365v6.144c0 .23.185.418.415.418h.003c.074 0 .148-.02.213-.057l5.137-3.06a.417.417 0 0 0 0-.716l-5.134-3.088a.426.426 0 0 0-.424-.006ZM7.29 14.023V9.356l3.902 2.345-3.902 2.322Zm-.623-5.77a.42.42 0 0 0-.213.363v6.144c0 .23.185.419.415.419h.003c.074 0 .148-.02.213-.057l5.137-3.06a.417.417 0 0 0 0-.716L7.088 8.258a.414.414 0 0 0-.421-.006Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgForwardLight);
export default ForwardRef;
