 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPostpagoBold(
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
        d="M20.774 7.986 18 5.212a.571.571 0 0 0-.401-.168h-.265c-.045-.953-.318-1.67-.828-2.188C15.935 2.282 15.116 2 14 2H7.343c-1.127 0-1.946.273-2.51.84C4.27 3.404 4 4.221 4 5.342v13.314c0 1.133.276 1.957.84 2.518.56.555 1.38.825 2.503.825H14c1.124 0 1.943-.27 2.504-.825.566-.56.839-1.386.839-2.518v-2.49h2.711c.532 0 .888-.358.888-.89v-6.89a.56.56 0 0 0-.168-.401Zm-1.49.116h-.291c-.396 0-.68-.082-.845-.25-.165-.168-.25-.45-.25-.845v-.29l1.385 1.385Zm-5.554 6.925V6.179h3.03v.825c0 1.42.813 2.234 2.233 2.234h.81v5.789a2120.3 2120.3 0 0 1-6.073 0Zm5.132-4.691c0 .236-.19.426-.427.426h-3.337a.426.426 0 1 1 0-.853h3.337c.236 0 .427.19.427.427Zm0 1.664c0 .236-.19.427-.427.427h-3.337a.426.426 0 1 1 0-.854h3.337c.236 0 .427.19.427.427Zm0 1.664c0 .236-.19.427-.427.427h-3.337a.426.426 0 1 1 0-.853h3.337c.236 0 .427.19.427.426Zm-8.19 5.966c-.348 0-.638-.108-.834-.31-.196-.202-.293-.478-.293-.822 0-.709.42-1.132 1.13-1.132.708 0 1.129.424 1.129 1.132 0 .347-.1.623-.293.822-.194.2-.492.31-.84.31Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPostpagoBold);
export default ForwardRef;
