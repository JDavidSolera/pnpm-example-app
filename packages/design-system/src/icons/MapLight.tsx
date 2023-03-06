 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMapLight(
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
        d="m21.167 20.328-3.822-.63V2.909l3.822.629v16.79ZM2.834 3.54l4.021-.635v16.79l-4.021.636V3.54Zm9.582.717 4.095-1.275v16.762l-4.095 1.272V4.256ZM7.689 2.99l3.896 1.264v16.757l-3.896-1.264V2.99Zm13.962-.219-4.656-.765c-.011-.003-.02.003-.028.003-.015 0-.023-.009-.037-.009-.029 0-.052.011-.077.014-.014.003-.032-.003-.046.003l-4.804 1.494L7.4 2.02c-.015-.006-.032 0-.046-.003C7.325 2.011 7.3 2 7.271 2c-.012 0-.023.006-.037.009l-.029-.003-4.852.765A.416.416 0 0 0 2 3.184v17.633c0 .23.188.416.416.416.022 0 .042-.003.065-.006l4.755-.748 4.634 1.5c.082.028.17.028.25.002l4.835-1.503 4.56.752a.416.416 0 0 0 .483-.41V3.184a.413.413 0 0 0-.347-.413Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMapLight);
export default ForwardRef;
