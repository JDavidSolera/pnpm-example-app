 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBriefcaseBold(
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
        d="M13.846 16.83v-1.442c3.159-.223 6.201-1.017 8.157-2.12v7.342c0 .823-.663 1.492-1.48 1.492H3.48c-.817 0-1.48-.67-1.48-1.492v-7.537c1.947 1.19 4.992 2.047 8.154 2.297v1.46c0 .353.16.647.441.832.208.133.467.202.8.202h1.218c.325 0 .592-.069.792-.203a.956.956 0 0 0 .44-.83ZM15.758 7.2v-.356c0-1.92-1.645-3.483-3.663-3.483h-.188c-2.02 0-3.663 1.562-3.663 3.483V7.2h7.514Zm4.765 0c.817 0 1.48.669 1.48 1.491v3.094c-1.941 1.406-6.051 2.414-9.925 2.414-3.947 0-8.148-1.107-10.078-2.642V8.69C2 7.868 2.663 7.2 3.483 7.2h3.512v-.356c0-2.615 2.206-4.741 4.915-4.741h.188c2.71 0 4.915 2.128 4.915 4.741V7.2h3.51Zm-9.12 9.407v-1.15h1.193v1.15h-1.192Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBriefcaseBold);
export default ForwardRef;
