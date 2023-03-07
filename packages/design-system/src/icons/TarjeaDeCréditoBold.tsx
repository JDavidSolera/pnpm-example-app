 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTarjeaDeCrditoBold(
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
        d="M20.314 17.808a.22.22 0 0 0 .222-.22v-5.785H3.221v5.785c0 .121.1.22.225.22h16.868ZM3.446 6.187a.223.223 0 0 0-.225.222v1.198h17.315V6.41a.225.225 0 0 0-.222-.222H3.446Zm18.32 2.016v3.004c0 .028-.015.056-.017.084v6.297c0 .78-.644 1.412-1.435 1.412H3.446c-.79 0-1.435-.633-1.435-1.412v-6.33C2.008 11.24 2 11.226 2 11.207V8.203c0-.017.008-.033.011-.048V6.412c0-.78.644-1.412 1.435-1.412h16.868c.79 0 1.434.633 1.434 1.412v1.71c.003.025.017.05.017.081Zm-7.209 7.85c.515-.009 1.128-.22 1.128-1.173 0-.954-.619-1.167-1.139-1.181H14.4c-.507.002-1.111.21-1.111 1.172 0 .965.613 1.176 1.125 1.184l.143-.002Zm2.88-3.384c.993.023 2.157.616 2.157 2.214 0 1.6-1.164 2.188-2.16 2.205h-.174c-.27-.003-.85-.062-1.35-.434a2.381 2.381 0 0 1-1.339.43h-.174c-.996-.013-2.16-.601-2.16-2.215 0-1.615 1.159-2.197 2.149-2.205.064 0 .13 0 .185.002.447.012.928.147 1.325.43.523-.385 1.139-.43 1.355-.432.062 0 .13.002.186.005Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTarjeaDeCrditoBold);
export default ForwardRef;
