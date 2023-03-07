 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgImport(
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
        d="M11.646 2.175a.76.76 0 0 1 .188-.128.555.555 0 0 1 .447 0c.071.034.14.077.2.128l5.881 5.882a.593.593 0 0 1-.837.836l-4.88-4.883v12.27a.59.59 0 0 1-1.178 0V4.01L6.493 9a.593.593 0 0 1-.836-.837l5.99-5.987Zm9.764 14.376a.59.59 0 0 1 .589.589v4.271a.59.59 0 0 1-.59.589H2.59A.59.59 0 0 1 2 21.411V17.14a.59.59 0 0 1 1.178 0v3.682h17.645V17.14c0-.328.262-.59.587-.59Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgImport);
export default ForwardRef;
