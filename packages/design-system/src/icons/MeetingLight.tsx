 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMeetingLight(
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
        d="M21.605 21.312c.22.011.387.195.376.414a.392.392 0 0 1-.376.376H9.47a.393.393 0 0 1-.394-.395c0-.22.175-.395.394-.395h12.136ZM7.842 4.775c-.627.608-.946 1.525-.946 2.728 0 1.203.319 2.12.946 2.722.605.584 1.5.879 2.657.879 1.16 0 2.055-.295 2.663-.879.633-.603.952-1.522.952-2.722s-.319-2.122-.952-2.728c-.608-.587-1.503-.884-2.663-.884-1.157 0-2.052.297-2.657.884Zm2.657 7.121c-1.368 0-2.446-.37-3.203-1.098-.79-.76-1.19-1.868-1.19-3.292 0-1.425.4-2.534 1.187-3.296.757-.735 1.838-1.108 3.206-1.108 1.368 0 2.45.373 3.21 1.103.792.762 1.192 1.873 1.192 3.298s-.4 2.533-1.195 3.293c-.757.73-1.836 1.1-3.207 1.1Zm-6.71 7.132c0 .032.027.06.06.06h5.293a2.87 2.87 0 0 1-.065-.61v-4.111c0-.268.036-.506.095-.722H8.061c-1.373 0-2.49.408-3.23 1.181-.68.709-1.039 1.701-1.039 2.869l-.003 1.333Zm7.36-5.92c-.463 0-.796.102-.996.302a.797.797 0 0 0-.135.192v.043H10a1.71 1.71 0 0 0-.135.722v4.112c0 .443.097.768.29.968.197.205.53.308.989.308l8.748-.005c.46 0 .792-.103.993-.309.191-.2.289-.527.289-.97v-4.107c0-.44-.098-.762-.29-.957-.197-.203-.53-.303-.992-.303.006-.002-8.743.003-8.743.003ZM9.45 19.813v.063H3.852a.85.85 0 0 1-.852-.85v-1.33c0-1.375.435-2.557 1.254-3.414.895-.933 2.21-1.425 3.801-1.425h1.533c.352-.36.876-.54 1.558-.54l8.748-.006c.681 0 1.206.181 1.557.541.34.346.511.857.511 1.508v4.113c0 .654-.173 1.165-.51 1.516-.352.365-.877.552-1.56.552l-8.75.005c-.68 0-1.205-.187-1.559-.551-.046-.054-.087-.12-.133-.182Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMeetingLight);
export default ForwardRef;