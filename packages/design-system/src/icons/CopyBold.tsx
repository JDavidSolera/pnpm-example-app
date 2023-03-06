 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCopyBold(
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
        d="m11.765 19.184-7.948-4.077 1.019-.525 6.1 3.127c.26.13.546.2.832.2.28 0 .56-.064.817-.195l6.226-3.138 1.044.531-8.09 4.077Zm0-14.368 8.087 4.11L11.765 13 3.817 8.926l7.948-4.11Zm-7.948 7.2 1.019-.524 6.1 3.129a1.816 1.816 0 0 0 1.649.005l6.226-3.137 1.044.53-8.088 4.077-7.95-4.08Zm17.855.004a1.81 1.81 0 0 0-.887-1.548c.54-.324.887-.903.887-1.54a1.816 1.816 0 0 0-.994-1.623l-8.088-4.11a1.813 1.813 0 0 0-1.66.005l-7.947 4.11A1.819 1.819 0 0 0 2 8.932c.003.637.344 1.216.885 1.54-.543.327-.888.91-.885 1.548.003.637.344 1.215.885 1.542-.543.33-.888.908-.885 1.55a1.82 1.82 0 0 0 .988 1.613l7.948 4.074a1.816 1.816 0 0 0 1.649.005l8.088-4.076a1.81 1.81 0 0 0 1-1.618c0-.643-.345-1.221-.888-1.55a1.8 1.8 0 0 0 .887-1.54Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCopyBold);
export default ForwardRef;
