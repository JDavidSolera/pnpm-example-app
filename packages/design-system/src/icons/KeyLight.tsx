 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgKeyLight(
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
        d="M5.637 13.268c.51 0 .709-.215.709-.768s-.2-.768-.709-.768c-.51 0-.709.215-.709.768s.2.768.709.768Zm0-2.459c.973 0 1.557.634 1.557 1.691s-.58 1.688-1.557 1.688c-.973 0-1.557-.634-1.557-1.688 0-1.057.584-1.688 1.557-1.69Zm13.973 3.043 1.346-1.392-1.557-1.577H9.513a.424.424 0 0 1-.387-.273c-.467-1.138-1.443-1.69-2.98-1.69-2.22 0-3.298 1.17-3.298 3.577 0 2.41 1.079 3.58 3.298 3.58 1.452 0 2.405-.466 2.832-1.385.043-.09.142-.366.142-.366a.425.425 0 0 1 .396-.292H14.3l1.016-1.586a.415.415 0 0 1 .338-.197c.14-.025.265.062.348.178l.896 1.26.703-1.223a.404.404 0 0 1 .657-.083c-.003.003 1.352 1.47 1.352 1.47Zm2.254-1.73a.485.485 0 0 1 .02.652l-.017.018-1.972 2.041a.402.402 0 0 1-.592-.01l-1.27-1.373-.742 1.294a.42.42 0 0 1-.339.215.373.373 0 0 1-.356-.178l-.916-1.288-.814 1.27a.415.415 0 0 1-.347.196H9.798l-.063.15C9.163 16.346 7.922 17 6.146 17 3.471 17 2 15.402 2 12.5S3.471 8 6.146 8c2.138 0 3.15 1.011 3.629 1.964h9.792a.42.42 0 0 1 .29.123l2.007 2.035Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgKeyLight);
export default ForwardRef;
