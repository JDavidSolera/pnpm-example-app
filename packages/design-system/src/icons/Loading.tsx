 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLoading(
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
        d="M11.997 20.773c5.823 0 8.776-2.95 8.776-8.77 0-5.823-2.95-8.776-8.776-8.776-5.82 0-8.77 2.953-8.77 8.776 0 5.82 2.95 8.77 8.77 8.77Zm0-18.773C18.54 2 22 5.458 22 12.003 22 18.543 18.542 22 11.997 22 5.457 22 2 18.542 2 12.003 2 5.458 5.458 2 11.997 2Zm.046 2.075c.338 0 .614.276.614.614v3.074a.614.614 0 1 1-1.229 0V4.689a.618.618 0 0 1 .615-.614Zm-3.668 7.882a.616.616 0 0 1-.615.615H4.686a.614.614 0 1 1 0-1.23H7.76a.616.616 0 0 1 .614.615Zm.165 2.576a.615.615 0 0 1 .868.868l-2.172 2.171a.614.614 0 0 1-.865.003l-.003-.003a.615.615 0 0 1 0-.868l2.172-2.171Zm3.417 1.093c.339 0 .612.276.612.614v3.07a.612.612 0 0 1-1.224 0v-3.07c0-.338.274-.614.612-.614Zm3.444-1.03 2.171 2.17a.613.613 0 0 1-.865.868l-2.174-2.174a.613.613 0 0 1-.034-.868.613.613 0 0 1 .867-.034c.012.012.023.026.035.037Zm3.91-3.165a.612.612 0 0 1 0 1.224h-3.074a.612.612 0 0 1 0-1.224h3.074Zm-4.283-1.784a.615.615 0 0 1-.436-1.048l2.172-2.174a.615.615 0 0 1 .868.868L15.46 9.467a.614.614 0 0 1-.432.18Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLoading);
export default ForwardRef;
