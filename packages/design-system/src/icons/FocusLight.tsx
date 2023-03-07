 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFocusLight(
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
        d="M12.48 19.02v-2.428a.417.417 0 0 0-.419-.415.417.417 0 0 0-.418.415v2.434c-1.6-.037-6.285-.66-6.652-6.381h2.45c.231 0 .42-.185.42-.416a.417.417 0 0 0-.42-.415H4.96c.065-6.342 5.095-6.91 6.683-6.93V7.41c0 .23.188.415.418.415.23 0 .419-.185.419-.415V4.89c1.69.063 6.588.786 6.68 6.92h-2.588a.418.418 0 0 0-.418.415c0 .23.188.416.418.416h2.562c-.35 5.698-5.046 6.335-6.654 6.378Zm9.11-7.21h-1.596c-.097-7.058-6.088-7.698-7.517-7.752V2.416A.417.417 0 0 0 12.058 2a.417.417 0 0 0-.418.416v1.633c-1.284.012-7.448.47-7.52 7.762H2.418a.419.419 0 0 0-.418.415c0 .228.188.416.418.416h1.734c.395 6.64 6.145 7.18 7.485 7.215v1.727c0 .231.188.416.418.416.231 0 .419-.185.419-.416v-1.733c1.343-.037 7.113-.595 7.488-7.212h1.622c.231 0 .419-.185.419-.416a.41.41 0 0 0-.413-.412Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFocusLight);
export default ForwardRef;
