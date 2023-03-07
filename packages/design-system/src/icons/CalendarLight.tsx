 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCalendarLight(
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
        d="M4.314 20.5h15.344a2.574 2.574 0 0 0 2.572-2.571V7.795a.289.289 0 0 0 0-.1v-1.71A2.487 2.487 0 0 0 19.745 3.5H4.315A2.487 2.487 0 0 0 1.83 5.984v12.032A2.487 2.487 0 0 0 4.314 20.5ZM21.657 7.457V5.984a1.913 1.913 0 0 0-1.912-1.912H4.315a1.913 1.913 0 0 0-1.913 1.912v1.473h19.255Zm0 .576H2.402v9.983c0 1.055.858 1.912 1.912 1.912h15.344a2.003 2.003 0 0 0 2-2V8.034Zm-11.373 8.524a.802.802 0 0 0-.073.346.7.7 0 0 0 .035.21h3.602v-.596h-2.783l1.479-1.74c.317-.378.56-.69.73-.936a2.92 2.92 0 0 0 .36-.689 2.14 2.14 0 0 0 .107-.697c0-.506-.157-.895-.468-1.171-.337-.3-.845-.45-1.53-.45-.483 0-.951.058-1.407.171v.587c.43-.09.863-.137 1.296-.137.438 0 .77.079.99.239.224.156.335.424.335.796 0 .276-.07.555-.216.834-.142.281-.395.642-.755 1.086l-1.415 1.729a2.264 2.264 0 0 0-.287.418ZM7.051 6.18a.56.56 0 0 0 .415.154.595.595 0 0 0 .421-.154.569.569 0 0 0 .146-.41c0-.355-.21-.567-.564-.567-.355 0-.564.212-.564.567 0 .171.05.31.146.41Zm9.078 0a.559.559 0 0 0 .416.153.595.595 0 0 0 .421-.154.569.569 0 0 0 .145-.41.567.567 0 0 0-.16-.423.575.575 0 0 0-.403-.143c-.355 0-.564.212-.564.567 0 .171.05.31.145.41Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCalendarLight);
export default ForwardRef;
