 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgImportBold(
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
        d="M6.252 9.532a.855.855 0 0 1-.607-1.462l5.809-5.82a.86.86 0 0 1 1.212 0l5.74 5.746a.858.858 0 0 1-1.19 1.235c-.008-.006-.014-.015-.023-.023l-4.277-4.28v11.227a.859.859 0 0 1-1.716 0V4.928L6.855 9.279a.849.849 0 0 1-.603.253Zm14.891 6.603c.473 0 .857.384.857.856v4.152a.857.857 0 0 1-.857.857H2.857A.857.857 0 0 1 2 21.143v-4.152a.859.859 0 0 1 1.716 0v3.296H20.29V16.99a.853.853 0 0 1 .853-.856Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgImportBold);
export default ForwardRef;
