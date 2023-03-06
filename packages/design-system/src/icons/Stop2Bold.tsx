 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStop2Bold(
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
        d="m17.042 12-.102-7.374c0-.808-.408-1.414-1.224-1.414-.816 0-1.326.606-1.326 1.414V12c0 .101-.102.202-.102.202-.102 0-.204-.101-.204-.202V3.414c0-.808-.51-1.414-1.326-1.414-.816 0-1.427.606-1.427 1.414V12c0 .101-.102.101-.204.101-.103 0-.103-.101-.205-.101V5.131c0-.808-.408-1.414-1.223-1.414-.816 0-1.428.606-1.428 1.414V12S5.313 9.172 4.293 9.98c-.714.606.102 2.02.102 2.02l1.938 4.444S7.557 22 13.778 22C20 22 20 15.131 20 15.131V7.253c0-.809-.612-1.415-1.428-1.415s-1.326.606-1.326 1.415V12c0 .101-.102.101-.102.202-.102-.101-.102-.202-.102-.202Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgStop2Bold);
export default ForwardRef;
