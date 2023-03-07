 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgActiveAudioBold(
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
        d="M19.207 4.942a1.059 1.059 0 0 0-1.505.08 1.104 1.104 0 0 0 .068 1.537c.086.08 2.05 1.952 2.086 5.194.003.031.111 3.261-2.04 5.22a1.106 1.106 0 0 0-.086 1.54c.211.238.504.363.8.363.253 0 .51-.09.714-.278 2.9-2.639 2.761-6.766 2.753-6.905-.046-4.192-2.678-6.648-2.79-6.75Zm-.842 6.785c-.028-2.826-1.819-4.494-1.895-4.562a1.058 1.058 0 0 0-1.512.082 1.103 1.103 0 0 0 .08 1.54c.014.012 1.167 1.116 1.187 3 .003.017.045 1.89-1.159 2.986a1.106 1.106 0 0 0-.085 1.54 1.055 1.055 0 0 0 1.514.085c1.97-1.793 1.873-4.588 1.87-4.67ZM12.223 4c-3.168 0-4.94 1.335-5.92 2.633l-3.233.002c-.284 0-.558.117-.757.322A1.092 1.092 0 0 0 2 7.726l.009 7.661c0 .6.48 1.087 1.07 1.087l3.21-.002c.973 1.297 2.758 2.624 6.017 2.624.936 0 1.696-.774 1.696-1.728V5.736c0-.956-.766-1.736-1.779-1.736Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgActiveAudioBold);
export default ForwardRef;
