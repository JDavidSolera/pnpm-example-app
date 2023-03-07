 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgUser2Light(
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
        d="M5.334 19.805c1.539 1.778 3.912 2.7 7.166 2.7 3.254 0 5.629-.921 7.17-2.7.538-.62.834-1.409.834-2.224v-.606a1.853 1.853 0 0 0-1.866-1.842H6.37c-1.03 0-1.865.825-1.865 1.842v.608c0 .815.294 1.602.83 2.222Zm.406-.342a2.873 2.873 0 0 1-.703-1.88v-.608c0-.726.597-1.315 1.332-1.315h12.27c.735 0 1.332.588 1.332 1.315v.605c0 .69-.25 1.359-.705 1.883-1.477 1.703-3.752 2.515-6.766 2.515-3.014 0-5.287-.813-6.76-2.515ZM17.3 7.243c0-2.617-2.149-4.739-4.8-4.739-2.65 0-4.8 2.122-4.8 4.738 0 2.617 2.15 4.738 4.8 4.738 2.651 0 4.8-2.121 4.8-4.738Zm-9.066 0c0-2.327 1.91-4.212 4.266-4.212 2.357 0 4.267 1.885 4.267 4.211 0 2.326-1.91 4.212-4.267 4.212-2.356 0-4.266-1.886-4.266-4.212Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgUser2Light);
export default ForwardRef;
