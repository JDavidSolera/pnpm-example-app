 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTarjetaDeDebitoLight(
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
        d="M21.759 8.908v3.9c.002.031.002.06 0 .09v4.837c.002.334-.133.658-.372.897a1.293 1.293 0 0 1-.905.368H3.26A1.26 1.26 0 0 1 2 17.752V6.248A1.262 1.262 0 0 1 3.268 5h17.214c.335-.003.658.13.897.363.239.233.377.55.377.885v2.57c.005.031.005.062.003.09Zm-18.935.417v3.084h18.114V9.325H2.823Zm.444-3.498a.437.437 0 0 0-.447.433v2.252h18.1V6.26a.436.436 0 0 0-.436-.433H3.268Zm17.217 12.35a.434.434 0 0 0 .453-.433v-4.52H2.823v4.52a.436.436 0 0 0 .447.433h17.214Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTarjetaDeDebitoLight);
export default ForwardRef;
