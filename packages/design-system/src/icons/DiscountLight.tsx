 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDiscountLight(
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
        d="M11.997 21.166c6.084 0 9.17-3.082 9.17-9.163 0-6.084-3.086-9.17-9.17-9.17-6.081 0-9.163 3.086-9.163 9.17 0 6.081 3.082 9.163 9.163 9.163Zm0-19.166C18.315 2 22 5.19 22 12.003 22 18.816 18.315 22 11.997 22 5.68 22 2 18.816 2 12.003S5.68 2 11.997 2Zm2.362 13.754c.643 0 .851-.208.851-.848 0-.644-.208-.851-.85-.851-.644 0-.849.207-.849.85 0 .644.205.849.848.849Zm0-2.53c1.062 0 1.685.537 1.685 1.684 0 1.144-.62 1.682-1.685 1.682-1.061 0-1.682-.538-1.682-1.682s.618-1.684 1.682-1.684ZM9.641 8.423c-.64 0-.848.208-.848.85 0 .641.208.849.848.849.643 0 .85-.205.85-.848-.002-.646-.21-.851-.85-.851Zm0 2.53c-1.062 0-1.682-.535-1.682-1.682 0-1.147.62-1.685 1.682-1.685 1.061 0 1.685.538 1.685 1.685s-.624 1.682-1.685 1.682Zm6.147-3.816c.182.139.213.4.074.583l-7.055 9.072a.417.417 0 0 1-.657-.51L15.2 7.209a.413.413 0 0 1 .581-.077l.006.006Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgDiscountLight);
export default ForwardRef;
