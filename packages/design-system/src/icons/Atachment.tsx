 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAtachment(
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
        d="M11.579 22C8.67 22 7 20.412 7 17.64V5.204C7 3.17 8.227 2 10.364 2c2.137 0 3.363 1.167 3.363 3.204l.026 11.23c0 1.183-.771 1.918-2.012 1.918-1.24 0-2.012-.735-2.012-1.916V6.195c0-.345.293-.62.652-.62.361 0 .651.278.651.62v10.239c0 .503.18.671.706.671.53 0 .706-.168.706-.671l-.029-11.23c0-1.337-.654-1.96-2.057-1.96s-2.057.623-2.057 1.96V17.64c0 2.098 1.07 3.116 3.272 3.116 2.203 0 3.273-1.018 3.273-3.116l.011-11.5c0-.344.293-.62.652-.62.361 0 .651.28.651.623l-.01 11.5c.008 2.77-1.663 4.357-4.571 4.357Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAtachment);
export default ForwardRef;
