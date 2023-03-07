 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClipboard(
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
        d="M18.372 20.802c.236 0 .407-.128.433-.174L18.796 4.78c0 .015-.196-.13-.424-.13h-2.689c.003.028.008.053.011.085l.003.08.003.116-.003.108c-.051 1.534-1.568 1.75-3.196 1.75-1.627 0-3.141-.216-3.198-1.775V4.93l.003-.128.005-.102c0-.02.006-.035.009-.054H6.628c-.22 0-.404.133-.436.187l.012 15.837c.017.003.188.13.424.13h11.744Zm-5.87-17.604c-1.7 0-1.956.85-1.99 1.594l-.005.142c.01.273.022.663 1.994.663 1.973 0 1.984-.39 1.992-.623v-.12a2.422 2.422 0 0 0-.1-.637c-.079-.253-.318-1.019-1.892-1.019Zm5.87.256c.868 0 1.628.62 1.628 1.326v15.894c0 .72-.746 1.326-1.628 1.326H6.628C5.746 22 5 21.391 5 20.674V4.777c0-.705.763-1.326 1.628-1.326H9.63C10.108 2.524 11.096 2 12.501 2c1.714 0 2.508.72 2.875 1.454h2.996Zm-6.58 1.728a.56.56 0 0 1-.56-.558.56.56 0 0 1 .56-.558h1.415c.31 0 .564.25.564.558a.562.562 0 0 1-.564.558h-1.414Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgClipboard);
export default ForwardRef;
