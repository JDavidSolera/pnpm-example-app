 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgImageLight(
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
        d="M21.166 17.756V5.246c0-.136-.276-.4-.609-.4H3.443c-.336 0-.606.241-.606.4L2.834 17.76c0 .16.273.401.609.401H20.56c.33-.002.606-.267.606-.404ZM20.557 4C21.314 4 22 4.592 22 5.244v12.512c0 .65-.689 1.244-1.443 1.244H3.44c-.766.003-1.44-.58-1.44-1.244l.003-12.512C2.003 4.58 2.677 4 3.446 4h17.111ZM6.977 7.17c-.688 0-1.25.566-1.25 1.26 0 .698.562 1.262 1.25 1.262.689 0 1.25-.567 1.25-1.261 0-.695-.561-1.26-1.25-1.26Zm0 3.367a2.096 2.096 0 0 1-2.083-2.103c0-1.159.934-2.103 2.083-2.103 1.15 0 2.083.944 2.083 2.103a2.096 2.096 0 0 1-2.083 2.103Zm9.457-.777 3.298 2.547c.182.142.219.407.08.592a.413.413 0 0 1-.58.08l-.004-.003-3.042-2.348-3.563 2.863 2.177 2.071c.168.16.177.427.017.595a.413.413 0 0 1-.583.023l-.006-.006-3.563-3.39-5.08 4.27a.412.412 0 0 1-.583-.052L5 17a.422.422 0 0 1 .054-.591l5.362-4.511a.413.413 0 0 1 .552.017l1.041.99 3.913-3.139a.415.415 0 0 1 .513-.005Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgImageLight);
export default ForwardRef;
