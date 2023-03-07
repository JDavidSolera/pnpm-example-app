 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAddUserLight(
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
        d="M21.76 22H7.24a.242.242 0 0 1-.24-.242v-1.887c0-1.29.399-2.389 1.15-3.178.822-.857 2.05-1.312 3.548-1.312h5.604c1.499 0 2.726.455 3.547 1.314.755.79 1.151 1.888 1.151 3.178v1.887c0 .131-.108.24-.24.24Zm-14.28-.484h14.04v-1.645c0-1.162-.351-2.145-1.016-2.841-.74-.773-1.816-1.165-3.202-1.165h-5.604c-1.386 0-2.462.393-3.202 1.164-.665.697-1.016 1.677-1.016 2.841v1.646Zm7.019-8.01c-2.758 0-4.216-1.469-4.216-4.247 0-1.41.375-2.49 1.115-3.211C12.11 5.353 13.154 5 14.498 5c1.346 0 2.39.353 3.109 1.048.745.721 1.12 1.803 1.12 3.211 0 2.778-1.461 4.247-4.228 4.247Zm0-8.022c-1.216 0-2.148.307-2.767.912-.641.627-.968 1.59-.968 2.863s.327 2.234.968 2.856c.62.602 1.551.905 2.767.905 1.215 0 2.152-.305 2.774-.908.646-.624.973-1.585.973-2.855s-.327-2.236-.973-2.863c-.625-.603-1.556-.91-2.774-.91Z"
        fill="currentColor"
      />
      <path
        d="M5.5 2v7M2 5.5h7"
        stroke="currentColor"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAddUserLight);
export default ForwardRef;
