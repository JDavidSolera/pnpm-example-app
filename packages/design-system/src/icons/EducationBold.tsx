 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgEducationBold(
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
        d="M11.194 15.721c.35 0 .696-.087.959-.175l6.449-2.876v2.964a1.78 1.78 0 0 1-1.393 1.742c-1.393.263-3.31.784-4.707 1.918-.35.262-.783.437-1.22.437-.438 0-.872-.175-1.222-.437-1.393-1.134-3.31-1.655-4.706-1.918a1.78 1.78 0 0 1-1.393-1.742v-2.877l6.274 2.79c.263.087.612.174.959.174Zm10.11 1.218c.437.35.696 1.046.696 1.48 0 .263-.087.522-.262.61-.175.174-.522.262-.784.262h-.525c-.35 0-.696 0-.959-.262a.792.792 0 0 1-.262-.61c0-.437.262-1.133.697-1.48v-5.837l-8.192 3.66c-.175.088-.438.175-.61.175-.262 0-.437-.087-.608-.175l-8.536-3.835c-.61-.262-.959-.784-.959-1.48 0-.61.35-1.221.959-1.48l8.538-3.836a1.697 1.697 0 0 1 1.309 0l8.539 3.835c.88.404.871 1.408.871 1.918l.087 7.055Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgEducationBold);
export default ForwardRef;
