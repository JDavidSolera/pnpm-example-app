 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClockLight(
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
        d="M11.997 21.166c6.084 0 9.17-3.082 9.17-9.163 0-6.084-3.086-9.17-9.17-9.17-6.081 0-9.163 3.086-9.163 9.17 0 6.081 3.082 9.163 9.163 9.163Zm0-19.166C18.315 2 22 5.19 22 12.003 22 18.816 18.315 22 11.997 22 5.68 22 2 18.816 2 12.003S5.68 2 11.997 2Zm.421 10.102 2.954 2.957c.16.165.157.43-.011.59a.414.414 0 0 1-.578 0l-3.079-3.077a.428.428 0 0 1-.122-.296V8.11a.416.416 0 0 1 .83 0l.006 3.992Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgClockLight);
export default ForwardRef;
