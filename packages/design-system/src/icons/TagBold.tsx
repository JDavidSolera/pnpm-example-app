 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTagBold(
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
        d="M21.887 3.36A1.366 1.366 0 0 0 20.532 2h-8.43a2.15 2.15 0 0 0-1.073.606l-8.422 8.46a1.583 1.583 0 0 0-.294 2.191l8.373 8.4c.221.223.524.345.838.337.09.008.184.008.278 0a2.024 2.024 0 0 0 1.072-.672l8.413-8.4c.312-.302.518-.692.595-1.119v-8.44h.005V3.36Zm-6.639 3.361c.032-.427.23-.828.552-1.11.283-.33.688-.526 1.12-.546.442.028.855.23 1.147.563.334.293.538.706.569 1.15-.026.427-.221.822-.544 1.101-.285.33-.693.53-1.129.555a1.662 1.662 0 0 1-1.146-.555 1.676 1.676 0 0 1-.569-1.135V6.72Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTagBold);
export default ForwardRef;
