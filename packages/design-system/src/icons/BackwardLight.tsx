 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBackwardLight(
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
        d="M11.999 22C5.459 22 2 18.544 2 12.001 2 5.46 5.456 2 11.999 2c3.191 0 5.665.826 7.356 2.457C21.11 6.148 22 8.687 22 12 22.003 18.541 18.544 22 11.999 22Zm0-19.43c-6.255 0-9.43 3.174-9.43 9.431 0 6.255 3.172 9.43 9.43 9.43 6.26 0 9.432-3.172 9.432-9.43.002-6.26-3.172-9.432-9.432-9.432Zm-.886 12.74a.294.294 0 0 1-.145-.04l-5.6-3.334a.285.285 0 0 1-.003-.49l5.597-3.362a.281.281 0 0 1 .288-.003.289.289 0 0 1 .145.248v3.226a.28.28 0 0 1 .1-.103l5.597-3.362a.281.281 0 0 1 .287-.003.289.289 0 0 1 .145.248v6.693a.282.282 0 0 1-.145.247.27.27 0 0 1-.14.037.293.293 0 0 1-.144-.04l-5.598-3.33a.288.288 0 0 1-.102-.106v3.186a.283.283 0 0 1-.145.248.256.256 0 0 1-.137.04ZM6.068 11.69l4.758 2.833V8.833L6.068 11.69Zm10.887 2.839-4.757-2.833 4.757-2.858v5.69Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBackwardLight);
export default ForwardRef;
