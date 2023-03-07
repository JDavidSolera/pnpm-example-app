 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClipboardBold(
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
        d="M14.397 4.214c-.08-.253-.322-1.019-1.896-1.019-1.698 0-1.955.851-1.989 1.594l-.005.353c.01.27.022.663 1.994.663 1.973 0 1.984-.39 1.992-.62v-.328a2.444 2.444 0 0 0-.096-.643Zm3.975-.76c.868 0 1.628.62 1.628 1.326v15.894c0 .72-.746 1.326-1.628 1.326H6.628C5.746 22 5 21.391 5 20.674V4.777c0-.705.763-1.326 1.628-1.326H9.63C10.108 2.524 11.096 2 12.501 2c1.714 0 2.508.72 2.875 1.454h2.996Zm-6.58 1.728a.56.56 0 0 1-.56-.558.56.56 0 0 1 .56-.558h1.415c.31 0 .564.25.564.558a.562.562 0 0 1-.564.558h-1.414Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgClipboardBold);
export default ForwardRef;
