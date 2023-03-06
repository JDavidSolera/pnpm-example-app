 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFlats(
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
        d="M19.308 11.654a.155.155 0 0 1-.145.091H4.178V3.332a.16.16 0 0 1 .163-.16h14.825c.088 0 .128.058.145.092a.47.47 0 0 1 .035.11l-3.151 3.137a1.338 1.338 0 0 0-.003 1.881l3.1 3.094a.15.15 0 0 1 .016.168ZM17.032 7.57c-.066-.068-.069-.17-.003-.233l3.199-3.197c.31-.404.364-.939.136-1.397a1.33 1.33 0 0 0-1.2-.743H4.337C3.6 2 3 2.598 3 3.33v18.086c0 .322.265.584.59.584.324 0 .588-.262.588-.584v-8.504h14.985c.513 0 .974-.284 1.201-.743.228-.458.174-.993-.184-1.454L17.032 7.57Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFlats);
export default ForwardRef;
