 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgNewsBold(
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
        d="M15.472 18.961a.933.933 0 0 0 .8-.133.964.964 0 0 0 .397-.78V6.953c0-.309-.147-.6-.397-.781a.913.913 0 0 0-.8-.133L3.083 9.762a.527.527 0 0 0-.541-.5c-.3 0-.542.23-.542.511v5.465c0 .284.242.511.542.511.3 0 .541-.227.542-.51l3.154.948-.179.568a.815.815 0 0 0 .533 1.02l2.25.705a.775.775 0 0 0 .62-.056c.195-.1.336-.269.4-.477l.193-.613 5.417 1.627Zm3.361-6.179H21a.54.54 0 1 0 0-1.083h-2.167a.54.54 0 1 0 0 1.083ZM8.91 17.37l-1.733-.544.07-.223 1.733.545-.07.222Zm11 .8a.54.54 0 0 0 .766 0 .543.543 0 0 0 0-.767l-1.495-1.494a.543.543 0 0 0-.766.767l1.494 1.494Zm-1.526-9.62a.54.54 0 0 0 .767 0l1.534-1.534a.543.543 0 0 0-.767-.767L18.383 7.78a.543.543 0 0 0 0 .767Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgNewsBold);
export default ForwardRef;
