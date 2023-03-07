 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLoadingBold(
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
        d="M19.179 12.657h-3.047a.612.612 0 0 1-.61-.614.61.61 0 0 1 .61-.615h3.047c.336 0 .61.273.61.615a.612.612 0 0 1-.61.614Zm-1.726 4.978a.604.604 0 0 1-.858.002l-.003-.002-2.155-2.175a.618.618 0 0 1 0-.868.607.607 0 0 1 .861 0l2.155 2.172c.24.242.24.629 0 .87Zm-4.877-9.872a.61.61 0 1 1-1.22 0V4.689a.61.61 0 1 1 1.22 0v3.074Zm-.085 11.548a.61.61 0 1 1-1.22 0v-3.074a.61.61 0 1 1 1.22 0v3.074ZM9.348 15.4l-2.155 2.174a.607.607 0 0 1-.86 0 .618.618 0 0 1 0-.868l2.154-2.171a.607.607 0 0 1 .861.022.614.614 0 0 1 0 .843Zm-5.29-3.444c0-.338.275-.614.61-.614h3.05c.337 0 .61.273.61.614a.61.61 0 0 1-.61.615h-3.05a.613.613 0 0 1-.61-.615ZM14.5 8.6l2.155-2.171a.607.607 0 0 1 .861 0 .616.616 0 0 1 0 .868l-2.157 2.171a.607.607 0 0 1-.862 0A.62.62 0 0 1 14.5 8.6ZM11.921 2C5.43 2 2 5.458 2 12.003 2 18.543 5.431 22 11.92 22c6.493 0 9.927-3.458 9.927-9.997C21.847 5.458 18.417 2 11.921 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLoadingBold);
export default ForwardRef;
