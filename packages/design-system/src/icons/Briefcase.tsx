 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBriefcase(
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
        d="M20.75 12.29c-1.69 1.241-4.373 1.805-8.673 1.805-4.408 0-7.143-.595-8.825-1.921V8.59c0-.125.108-.228.233-.228h17.04c.126 0 .226.103.226.228v3.7Zm-9.342 4.212h1.193v-1.15h-1.193v1.15Zm9.343 4.004c0 .134-.1.233-.225.233H3.483a.233.233 0 0 1-.234-.233v-6.807c1.608.956 3.782 1.468 6.907 1.61v1.418c0 .353.16.646.435.83.208.135.476.203.8.203h1.215c.333 0 .592-.069.8-.202a.956.956 0 0 0 .44-.831v-1.412c3.108-.125 5.285-.611 6.902-1.536v6.727h.003ZM8.24 6.741c0-1.912 1.65-3.483 3.668-3.483h.19c2.018 0 3.66 1.57 3.66 3.483v.361H8.241v-.361Zm12.282.361H17.01v-.361c0-2.61-2.2-4.741-4.91-4.741h-.19C9.199 2 6.99 4.131 6.99 6.741v.361H3.483C2.666 7.102 2 7.766 2 8.588v11.918C2 21.328 2.666 22 3.483 22h17.04C21.34 22 22 21.331 22 20.506V8.588c0-.822-.657-1.486-1.477-1.486Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;
