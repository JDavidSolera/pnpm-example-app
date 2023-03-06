 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgConnectionsBold(
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
        d="M18.121 12.075c-.942 0-1.793.35-2.461.908l-1.548-1.357c.446-.62.72-1.378.72-2.2 0-.097-.023-.188-.029-.282l2.439-.72a2.49 2.49 0 0 0 2.126 1.2 2.5 2.5 0 0 0 2.498-2.498 2.502 2.502 0 0 0-2.498-2.499 2.505 2.505 0 0 0-2.502 2.499c0 .023.006.04.006.063l-2.376.7a3.783 3.783 0 0 0-3.444-2.24 3.765 3.765 0 0 0-2.678 1.115L6.861 5.467c.185-.333.301-.715.301-1.125a2.344 2.344 0 0 0-4.687 0 2.344 2.344 0 0 0 2.342 2.343c.413 0 .794-.114 1.13-.302L7.64 7.832a3.74 3.74 0 0 0-.364 1.59c0 .806.259 1.552.692 2.167L6.59 12.938a2.793 2.793 0 0 0-1.77-.643A2.823 2.823 0 0 0 2 15.112a2.82 2.82 0 0 0 5.64 0c0-.41-.094-.8-.253-1.152l1.494-1.46a3.749 3.749 0 0 0 4.314.028l1.622 1.423a3.824 3.824 0 0 0-.566 1.99c0 .503.102.979.279 1.42l-1.688.777a2.332 2.332 0 0 0-1.77-.823 2.347 2.347 0 0 0-2.345 2.343A2.348 2.348 0 0 0 11.072 22a2.344 2.344 0 0 0 2.342-2.342c0-.12-.017-.234-.034-.348l1.833-.842a3.856 3.856 0 0 0 2.911 1.346A3.878 3.878 0 0 0 22 15.944a3.883 3.883 0 0 0-3.879-3.869Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgConnectionsBold);
export default ForwardRef;
