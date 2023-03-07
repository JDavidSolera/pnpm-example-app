 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPauseBold(
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
        d="M19.344 4.464C17.645 2.83 15.174 2 11.997 2 8.82 2 6.35 2.83 4.653 4.467 2.892 6.165 2 8.701 2 12.003c0 3.302.892 5.835 2.653 7.533C6.35 21.17 8.82 22 11.997 22c3.178 0 5.648-.83 7.347-2.464C21.105 17.838 22 15.305 22 12.003c0-3.302-.895-5.84-2.656-7.539Zm-9.59 11.413c0 .314-.242.57-.541.57-.3 0-.542-.256-.542-.57V8.1c0-.314.243-.57.542-.57.3 0 .541.256.541.57v7.777Zm5.586.009c0 .313-.242.57-.539.57-.296 0-.538-.257-.538-.57V8.108c0-.313.242-.57.538-.57.297 0 .539.257.539.57v7.778Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPauseBold);
export default ForwardRef;
