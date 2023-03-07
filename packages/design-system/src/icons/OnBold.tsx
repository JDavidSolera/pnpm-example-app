 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgOnBold(
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
        d="M17.546 15.72V8.89a.416.416 0 0 0-.415-.415h-.279a.416.416 0 0 0-.416.415v4.85L13.07 8.66a.417.417 0 0 0-.347-.188H12.5a.418.418 0 0 0-.416.415v6.83c0 .23.188.416.416.416h.279c.23 0 .415-.188.415-.416v-4.84l3.352 5.074a.417.417 0 0 0 .348.188h.23a.42.42 0 0 0 .421-.419Zm-9.069.558c1.306 0 2.863-.686 2.863-3.961 0-3.284-1.557-3.973-2.863-3.973-1.312 0-2.874.689-2.874 3.973 0 3.272 1.562 3.96 2.874 3.96ZM12.41 2.009c1.6.037 9.59.7 9.59 10.017 0 9.323-7.96 9.94-9.553 9.97-.174.002-.37.005-.572.005-.105 0-.216 0-.319-.003C2.461 21.867 2 13.62 2 11.969c0-1.65.458-9.891 9.488-9.968.304-.003.64.003.922.008ZM8.477 9.477c.797 0 1.71.324 1.71 2.84 0 2.484-.865 2.82-1.71 2.82-.85 0-1.722-.336-1.722-2.82 0-2.505.871-2.84 1.722-2.84Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgOnBold);
export default ForwardRef;
