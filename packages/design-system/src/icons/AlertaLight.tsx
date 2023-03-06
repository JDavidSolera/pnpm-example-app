 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAlertaLight(
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
        d="M21.683 22H2.602a.454.454 0 0 1-.4-.205.453.453 0 0 1-.005-.447L11.77 2.256c.08-.162.217-.256.37-.256.155 0 .291.094.374.256l9.57 19.092a.453.453 0 0 1-.005.447c-.077.13-.223.205-.396.205Zm-18.927-.547h18.77L12.143 2.732 2.756 21.453Z"
        fill="currentColor"
      />
      <path
        d="M12.164 17.015a.286.286 0 0 1-.286-.284V8.39a.286.286 0 0 1 .57 0v8.34a.284.284 0 0 1-.284.284Zm-.02 2.245c-.197 0-.308-.114-.308-.308 0-.193.114-.307.308-.307s.307.114.307.307c0 .194-.11.308-.307.308Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAlertaLight);
export default ForwardRef;
