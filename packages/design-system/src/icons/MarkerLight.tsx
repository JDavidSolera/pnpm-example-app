 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMarkerLight(
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
        d="M17.725 20.693a.446.446 0 0 1-.26.407c-.161.08-.345.06-.442-.008l-3.774-3.694a1.345 1.345 0 0 0-.94-.38c-.339 0-.683.126-.944.38l-3.75 3.66a.466.466 0 0 1-.485.045.443.443 0 0 1-.258-.407V3.306c0-.25.206-.452.461-.452h9.934c.255 0 .461.202.461.452v17.387h-.003ZM17.264 2H7.33C6.596 2 6 2.586 6 3.304v17.39c0 .5.284.95.743 1.172.458.222.995.17 1.442-.17l3.791-3.692a.477.477 0 0 1 .66-.006l3.82 3.731a1.341 1.341 0 0 0 1.401.134c.46-.222.743-.672.743-1.173V3.3c-.006-.714-.602-1.3-1.336-1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMarkerLight);
export default ForwardRef;
