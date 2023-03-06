 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFocus(
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
        d="M12.669 18.665v-2.169a.613.613 0 0 0-.615-.611.613.613 0 0 0-.615.611v2.172c-1.662-.086-5.663-.828-6.095-5.834h2.185a.613.613 0 0 0 .615-.612.613.613 0 0 0-.615-.612H5.315c.165-5.583 4.457-6.309 6.127-6.374v2.268c0 .338.276.612.615.612a.613.613 0 0 0 .615-.612V5.25c1.753.117 5.936.973 6.12 6.36h-2.316a.613.613 0 0 0-.614.612c0 .339.276.612.614.612h2.294c-.421 4.98-4.434 5.737-6.101 5.83Zm8.72-7.055h-1.37c-.202-6.596-5.631-7.476-7.35-7.584V2.612A.613.613 0 0 0 12.054 2a.613.613 0 0 0-.615.612v1.4c-1.605.063-7.177.777-7.353 7.598H2.615a.613.613 0 0 0-.615.612c0 .339.276.612.615.612h1.502c.47 6.21 5.686 6.978 7.322 7.057v1.497c0 .339.276.612.615.612a.613.613 0 0 0 .615-.612v-1.5c1.636-.088 6.87-.87 7.322-7.054h1.397a.611.611 0 1 0 0-1.224Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFocus);
export default ForwardRef;
