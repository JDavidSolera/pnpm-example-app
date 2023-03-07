 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgExportBold(
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
        d="m11.454 16.761-5.811-5.82A.858.858 0 0 1 6.855 9.73l4.348 4.354V2.857a.858.858 0 0 1 1.716 0v11.226l4.274-4.28a.858.858 0 0 1 1.236 1.19c-.006.008-.015.014-.023.022l-5.737 5.746a.883.883 0 0 1-.606.25.866.866 0 0 1-.61-.25Zm9.69-.626c.472 0 .856.384.856.856v4.152a.857.857 0 0 1-.857.857H2.857A.857.857 0 0 1 2 21.143v-4.152a.859.859 0 0 1 1.716 0v3.296H20.29V16.99a.851.851 0 0 1 .853-.856Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgExportBold);
export default ForwardRef;
