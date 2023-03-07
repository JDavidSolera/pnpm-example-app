 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFiltersBold(
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
        d="M2.638 6.599a.608.608 0 0 1-.612-.601c0-.331.273-.599.612-.599h1.069c.071-.35.202-.687.402-1A3.048 3.048 0 0 1 6.02 3.076c.79-.18 1.619-.04 2.306.388a2.963 2.963 0 0 1 1.35 1.872c.006.02.003.043.006.063h11.704A.61.61 0 0 1 22 6c0 .33-.274.602-.613.602H9.686a2.876 2.876 0 0 1-.405.997A3.019 3.019 0 0 1 7.37 8.921c-.79.18-1.619.04-2.305-.387a2.989 2.989 0 0 1-1.351-1.872c-.006-.02-.006-.04-.009-.063H2.638Zm18.727 5.22c.339 0 .612.269.612.602 0 .33-.273.599-.613.599h-1.1c-.282 1.364-1.518 2.396-2.995 2.396-1.476 0-2.71-1.032-2.995-2.396H2.613A.608.608 0 0 1 2 12.418c0-.33.274-.601.613-.601H14.27c.285-1.365 1.52-2.397 2.995-2.397 1.477 0 2.714 1.032 2.996 2.397h1.102v.003Zm-.003 6.407c.339 0 .612.268.612.601 0 .331-.273.602-.612.602h-8.934c-.286 1.365-1.52 2.396-2.996 2.396s-2.71-1.031-2.995-2.396H2.613A.608.608 0 0 1 2 18.827c0-.33.274-.598.613-.598h3.824c.285-1.365 1.52-2.397 2.995-2.397 1.476 0 2.71 1.032 2.995 2.397l8.935-.003Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFiltersBold);
export default ForwardRef;
