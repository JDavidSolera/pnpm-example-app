 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAtachmentLight(
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
        d="M11.585 22C8.63 22 7 20.52 7 17.828V5.335C7 3.184 8.303 2 10.671 2c2.365 0 3.668 1.184 3.668 3.338v10.82c0 1.582-.996 2.492-2.737 2.492-1.742 0-2.738-.907-2.738-2.492V7.034c0-.23.205-.415.458-.415s.455.187.455.415v9.124c0 1.132.581 1.659 1.822 1.659 1.243 0 1.821-.527 1.821-1.66V5.339c0-1.685-.902-2.504-2.755-2.504-1.852 0-2.754.82-2.754 2.504v12.493c0 2.214 1.235 3.338 3.668 3.338s3.668-1.124 3.668-3.338l-.011-10.803c0-.23.204-.415.455-.415h.003c.253 0 .458.185.458.415l.014 10.806C16.17 20.52 14.538 22 11.584 22Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAtachmentLight);
export default ForwardRef;
