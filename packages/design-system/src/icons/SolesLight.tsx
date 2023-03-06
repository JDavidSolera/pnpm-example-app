 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSolesLight(
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
        d="M4.344 18.534c-.23-.163-.344-.344-.344-.62a.664.664 0 0 1 .665-.642c.172.009.34.063.484.163 1.036.687 2.488 1.375 4.166 1.375 2.51 0 4.048-1.29 4.048-3.198 0-1.565-.873-2.669-3.75-3.04l-.737-.09c-3.062-.39-4.487-1.864-4.487-4.143 0-2.714 1.931-4.397 4.903-4.397 1.656 0 3.062.439 4.026 1.036.298.185.438.416.438.647 0 .339-.271.62-.615.62h-.004c-.163 0-.321-.068-.462-.14-1.058-.575-2.162-.924-3.428-.924-2.275 0-3.542 1.267-3.542 3.04 0 1.61.99 2.646 3.682 2.99l.715.09c3.107.39 4.582 1.864 4.582 4.211 0 2.646-1.886 4.532-5.523 4.532-1.94.01-3.668-.705-4.817-1.51ZM15.38 21.994a.454.454 0 0 1-.37-.52l3.148-19.097a.454.454 0 0 1 .52-.37c.244.04.411.275.37.52l-3.147 19.096a.454.454 0 0 1-.52.37Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSolesLight);
export default ForwardRef;
