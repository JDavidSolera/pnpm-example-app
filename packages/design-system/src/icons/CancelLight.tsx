 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCancelLight(
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
        d="M16.038 7.959a.417.417 0 0 1 0 .59l-3.455 3.454 3.455 3.457c.16.165.157.43-.011.59a.414.414 0 0 1-.578 0l-3.455-3.458-3.446 3.446a.417.417 0 0 1-.589-.589l3.446-3.446L7.96 8.559a.417.417 0 0 1 .59-.589l3.445 3.447 3.458-3.458a.414.414 0 0 1 .586 0Zm-4.04 13.207c6.083 0 9.168-3.082 9.168-9.163 0-6.084-3.085-9.17-9.169-9.17-6.081 0-9.163 3.086-9.163 9.17 0 6.081 3.082 9.163 9.163 9.163Zm0-19.166C18.314 2 22 5.19 22 12.003 22 18.816 18.315 22 11.997 22 5.68 22 2 18.816 2 12.003S5.68 2 11.997 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCancelLight);
export default ForwardRef;
