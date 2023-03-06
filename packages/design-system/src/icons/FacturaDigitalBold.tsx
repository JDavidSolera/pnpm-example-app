 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFacturaDigitalBold(
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
        d="M20.786 19H2.584a.553.553 0 0 1-.55-.552c0-.303.247-.55.55-.55h18.202c.303 0 .551.247.551.55a.553.553 0 0 1-.55.552Zm-7.921-9.895h.47l-.908-.91v.31c0 .396.148.6.438.6Z"
        fill="currentColor"
      />
      <path
        d="M11.875 8.505v-.664H9.68V14h4.012V9.657h-.827c-.608 0-.989-.44-.989-1.152Zm1.114 4.56h-2.604a.276.276 0 0 1-.276-.275c0-.152.124-.276.276-.276h2.606c.152 0 .276.124.276.276a.279.279 0 0 1-.278.275Zm0-1.116h-2.604a.276.276 0 0 1-.276-.275c0-.152.124-.276.276-.276h2.606c.152 0 .276.124.276.276a.279.279 0 0 1-.278.275Zm.275-1.391a.276.276 0 0 1-.275.276h-2.604a.276.276 0 0 1-.276-.276c0-.152.124-.276.276-.276h2.606c.15 0 .273.122.273.276Z"
        fill="currentColor"
      />
      <path
        d="M20.596 5.956C20.042 5.322 19.216 5 18.133 5H5.238c-1.08 0-1.91.322-2.464.956C2.262 6.546 2 7.4 2 8.496v4.858c0 1.097.262 1.951.774 2.54.554.634 1.38.957 2.464.957h12.895c1.08 0 1.91-.323 2.463-.953.515-.59.774-1.444.774-2.541v-4.86c0-1.097-.262-1.951-.774-2.54Zm-6.078 8.239c0 .369-.26.628-.629.628h-4.4c-.38 0-.636-.256-.636-.64V7.646c0-.38.256-.634.636-.634h2.755c.11 0 .215.045.293.122l1.86 1.862a.42.42 0 0 1 .12.295v4.905Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFacturaDigitalBold);
export default ForwardRef;
