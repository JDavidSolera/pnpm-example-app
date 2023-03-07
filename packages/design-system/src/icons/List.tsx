 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgList(
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
        d="M8.654 8.705a.814.814 0 1 1 0-1.628.814.814 0 1 1 0 1.628Zm.006 2.518a.814.814 0 1 1 0 1.628.814.814 0 1 1 0-1.628Zm2.769-2.67a.613.613 0 0 1-.615-.611c0-.339.276-.612.615-.612h5.651c.339 0 .615.273.615.612a.613.613 0 0 1-.615.612H11.43Zm5.734 2.872c.338 0 .614.273.614.612a.613.613 0 0 1-.614.612H11.51a.613.613 0 0 1-.615-.612c0-.339.276-.612.615-.612h5.652ZM8.66 15.298a.814.814 0 1 1 0 1.628.814.814 0 1 1 0-1.628Zm8.503.202c.338 0 .614.274.614.612a.613.613 0 0 1-.614.612H11.51a.613.613 0 0 1-.615-.612c0-.338.276-.612.615-.612h5.652Zm1.608 4.884V3.616c0-.196-.148-.372-.211-.395l-12.146.003a.553.553 0 0 0-.187.392v16.768c0 .207.133.37.193.392h12.166c.045-.014.185-.17.185-.392ZM18.586 2C19.326 2 20 2.771 20 3.616v16.768C20 21.26 19.351 22 18.586 22H6.414C5.646 22 5 21.26 5 20.384V3.616C5 2.771 5.674 2 6.414 2h12.172Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgList);
export default ForwardRef;
