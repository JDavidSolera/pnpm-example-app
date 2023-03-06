 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAddLocationBold(
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
        d="M14.754 10.694c1.343 0 2.177-.823 2.177-2.146s-.834-2.146-2.177-2.146c-1.347 0-2.18.823-2.18 2.146s.836 2.146 2.18 2.146Zm-7.147 8.654c1.457-.026 3.92-.59 3.92-4.067 0-3.477-2.48-4.058-3.954-4.098h-.464c-1.449.014-3.868.555-3.868 4.064 0 3.526 2.453 4.08 3.91 4.106h.16c.097 0 .205 0 .296-.005Zm12.486-15.43c1.252 1.25 1.916 3.076 1.907 5.299-.009 4.687-6.023 11.764-6.88 12.604a.62.62 0 0 1-.438.179.601.601 0 0 1-.438-.18c-.43-.415-1.392-1.533-2.51-3.084-1.292 1.64-3.407 1.83-4.101 1.835-.1.009-.214.009-.322.009h-.174C6.06 20.566 2 20.179 2 15.25c0-4.915 4.019-5.282 5.095-5.29h.372a5.08 5.08 0 0 1-.048-.794c0-2.212.672-4.041 1.938-5.282 1.27-1.24 3.14-1.878 5.38-1.884 2.242.009 4.098.669 5.356 1.918ZM8 14.641h2.066c.344 0 .62.273.62.612a.616.616 0 0 1-.62.611H8v2.041a.616.616 0 0 1-.62.612.615.615 0 0 1-.621-.612v-2.04h-2.06a.615.615 0 0 1-.621-.612c0-.339.279-.612.62-.612h2.06v-2.012c0-.339.28-.612.621-.612.345 0 .62.273.62.612v2.012Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAddLocationBold);
export default ForwardRef;
