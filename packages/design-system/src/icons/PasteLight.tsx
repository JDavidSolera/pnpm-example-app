 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPasteLight(
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
        d="M21.169 20.73a.443.443 0 0 1-.441.442H9.107a.44.44 0 0 1-.438-.441v-4.38a.41.41 0 0 0-.046-.183h6.273c.703 0 1.272-.569 1.272-1.272V8.643c.04.014.083.023.125.026h4.438c.241 0 .44.196.44.44v11.622h-.002ZM2.834 14.897V3.272a.44.44 0 0 1 .438-.44h11.624c.242 0 .441.195.441.44v11.621a.443.443 0 0 1-.441.441H3.272a.439.439 0 0 1-.438-.438ZM20.73 7.835h-4.438a.467.467 0 0 0-.125.025V3.272C16.168 2.57 15.6 2 14.896 2H3.272C2.57 2 2 2.572 2 3.272v11.621c0 .703.57 1.272 1.272 1.272H7.88a.41.41 0 0 0-.045.183v4.38c0 .703.569 1.272 1.272 1.272H20.73c.703 0 1.272-.57 1.272-1.272V9.107c0-.703-.57-1.272-1.272-1.272Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPasteLight);
export default ForwardRef;
