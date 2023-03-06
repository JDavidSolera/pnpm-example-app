 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAnnulLight(
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
        d="M11.997 21.166c-2.837 0-5.017-.68-6.54-2.018l13.691-13.69c1.338 1.525 2.018 3.702 2.018 6.545 0 6.081-3.085 9.163-9.169 9.163Zm0-18.332c2.854 0 5.04.686 6.563 2.035L4.868 18.559C3.519 17.038 2.834 14.851 2.834 12c0-6.081 3.082-9.166 9.163-9.166Zm0-.834C5.68 2 2 5.19 2 12.003 2 18.816 5.68 22 11.997 22 18.315 22 22 18.816 22 12.003S18.315 2 11.997 2"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAnnulLight);
export default ForwardRef;
