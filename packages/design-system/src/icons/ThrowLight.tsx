 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgThrowLight(
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
        d="M11.322 17.387a.85.85 0 0 1-.603-.247l-3.864-3.864a.854.854 0 0 1 0-1.208l7.779-7.782-1.316-1.312A.57.57 0 0 1 13.72 2h7.71c.314 0 .57.256.57.57v7.71c0 .313-.256.57-.57.57a.56.56 0 0 1-.401-.168l-1.327-1.327-7.776 7.785a.843.843 0 0 1-.604.247Zm2.4-14.815 1.313 1.313a.57.57 0 0 1 0 .806L7.256 12.47a.284.284 0 0 0 0 .401l3.864 3.864c.111.111.29.111.402 0L19.3 8.956a.56.56 0 0 1 .803 0l1.324 1.324V2.572h-7.705ZM2.286 21.992a.286.286 0 0 1-.202-.487l4.997-4.998a.286.286 0 0 1 .401.006.287.287 0 0 1 0 .396l-4.994 5a.294.294 0 0 1-.202.082Zm5.12.002a.286.286 0 0 1-.203-.487c1.062-1.062 2.6-2.656 2.617-2.673a.284.284 0 1 1 .424.378c-.005.006-.008.012-.014.015-.014.017-1.558 1.614-2.623 2.682a.29.29 0 0 1-.202.085Zm-5.069-5.068a.286.286 0 0 1-.202-.487c1.062-1.062 2.6-2.66 2.617-2.674a.284.284 0 0 1 .407.396c-.014.017-1.558 1.615-2.623 2.682a.282.282 0 0 1-.199.083Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgThrowLight);
export default ForwardRef;
