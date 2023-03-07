 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAlerta(
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
        d="M21.397 22H2.883a.736.736 0 0 1-.638-.338.745.745 0 0 1-.022-.722l9.19-18.525c.13-.262.364-.415.626-.415s.496.153.627.412l9.386 18.525s0 .003.003.003a.73.73 0 0 1-.02.722.742.742 0 0 1-.638.338ZM3.496 20.886h17.28L12.045 3.651l-8.55 17.235Z"
        fill="currentColor"
      />
      <path
        d="M12.153 17.053a.559.559 0 0 1-.558-.557V8.671a.559.559 0 0 1 1.116 0v7.825c0 .307-.25.557-.558.557Zm0 2.154c-.356 0-.564-.205-.564-.563s.205-.562.564-.562c.36 0 .564.204.564.562 0 .358-.208.563-.564.563Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAlerta);
export default ForwardRef;
