 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCloseLight(
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
        d="m12.948 12 8.85-8.864a.64.64 0 0 0 .028-.905c-.008-.012-.02-.02-.028-.029a.64.64 0 0 0-.905-.028c-.012.008-.02.02-.029.028L12 11.052l-8.864-8.85a.64.64 0 0 0-.905-.028c-.012.008-.02.02-.029.028a.64.64 0 0 0-.028.905c.008.012.02.02.028.029L11.052 12l-8.85 8.864a.64.64 0 0 0-.028.905c.008.012.02.02.028.029.123.128.29.202.467.199a.628.628 0 0 0 .467-.2L12 12.948l8.864 8.85a.64.64 0 0 0 .905.03c.012-.01.02-.02.029-.03a.64.64 0 0 0 .028-.904c-.008-.012-.02-.02-.028-.029L12.948 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCloseLight);
export default ForwardRef;
