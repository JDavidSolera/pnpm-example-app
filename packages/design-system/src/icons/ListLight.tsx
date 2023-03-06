 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgListLight(
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
        d="M19.166 20.56V3.443c0-.333-.267-.61-.404-.61H6.235c-.137 0-.404.277-.404.61v17.114c0 .347.245.61.404.61l12.527.002c.16-.003.404-.262.404-.609ZM18.756 2C19.406 2 20 2.689 20 3.443V20.56c0 .768-.58 1.44-1.244 1.44l-12.512-.003c-.663 0-1.244-.671-1.244-1.44V3.443C4.997 2.689 5.592 2 6.24 2h12.516ZM8.17 8.668A.833.833 0 1 1 8.17 7a.833.833 0 0 1 .001 1.667Zm0 2.498a.833.833 0 1 1 .001 1.666.833.833 0 0 1 0-1.666Zm2.923-2.498a.42.42 0 0 1-.421-.416c0-.23.187-.415.42-.415h5.823c.234 0 .421.187.421.415a.419.419 0 0 1-.42.416h-5.823ZM16.915 12c.234 0 .421.188.421.415a.42.42 0 0 1-.42.416h-5.823a.42.42 0 0 1-.421-.415c0-.231.187-.416.42-.416h5.823ZM8.17 15.335a.833.833 0 1 1 .001 1.666.833.833 0 0 1 0-1.666Zm8.745.831c.234 0 .421.188.421.416 0 .23-.187.415-.42.415h-5.823a.42.42 0 0 1-.421-.415c0-.23.187-.416.42-.416h5.823Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgListLight);
export default ForwardRef;
