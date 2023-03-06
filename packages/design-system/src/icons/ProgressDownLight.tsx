 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProgressDownLight(
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
        d="M21.763 14.891v3.696c0 .23-.189.416-.416.413H17.6a.415.415 0 0 1-.425-.408v-.005c0-.231.186-.414.425-.414h2.82l-5.998-8.318-7.592 3.248a.43.43 0 0 1-.535-.175l-4.24-7.303a.415.415 0 0 1 .154-.568c.003-.002.006-.002.009-.005a.437.437 0 0 1 .579.157l4.052 6.983L14.4 8.96a.417.417 0 0 1 .518.14l5.996 8.307v-2.52c0-.23.185-.413.424-.413a.419.419 0 0 1 .425.416Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProgressDownLight);
export default ForwardRef;
