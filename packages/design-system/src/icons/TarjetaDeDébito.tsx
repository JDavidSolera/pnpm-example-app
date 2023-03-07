 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTarjetaDeDbito(
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
        d="M21.764 9.01v3.781c0 .031-.014.054-.017.085v4.659c0 .807-.669 1.465-1.49 1.465H3.504c-.824 0-1.493-.658-1.493-1.465v-4.696c-.003-.017-.011-.03-.011-.048V9.01c0-.017.008-.031.011-.048V6.465c0-.81.67-1.465 1.493-1.465h16.753c.821 0 1.49.655 1.49 1.465v2.46c.003.028.017.054.017.085Zm-1.507 8.75c.127 0 .23-.101.233-.228V13.41H3.27v4.125c0 .127.108.23.234.228 0-.003 16.753-.003 16.753-.003ZM3.504 6.237a.23.23 0 0 0-.233.228V8.39h17.217V6.465a.23.23 0 0 0-.234-.228H3.504Zm-.233 5.936h17.217V9.628H3.27v2.545Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTarjetaDeDbito);
export default ForwardRef;
