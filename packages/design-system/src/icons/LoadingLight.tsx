 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLoadingLight(
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
        d="M12 2c6.517 0 10 3.45 10 10s-3.45 10-10 10S2 18.55 2 12 5.45 2 12 2Zm0 19.166c6.059 0 9.166-3.082 9.166-9.166 0-6.084-3.073-9.166-9.166-9.166S2.834 5.94 2.834 12 5.907 21.166 12 21.166Zm0-17.049c.22 0 .398.165.415.384V7.67a.423.423 0 0 1-.415.415.416.416 0 0 1-.415-.415V4.533c0-.23.184-.416.415-.416Zm-3.916 7.826c0 .23-.188.416-.415.416h-3.17a.416.416 0 0 1 0-.831h3.167a.415.415 0 0 1 .418.415Zm.515 2.775a.418.418 0 0 1 .59.028l.002.003a.4.4 0 0 1 .017.566l-.017.017L7 17.515a.388.388 0 0 1-.316.125.416.416 0 0 1-.29-.706c-.003 0 2.205-2.216 2.205-2.216Zm3.344 1.175c.23 0 .416.188.416.415v3.125a.416.416 0 0 1-.831 0v-3.125a.412.412 0 0 1 .415-.415Zm3.39-1.118 2.216 2.216a.417.417 0 0 1 .003.59l-.003.002a.426.426 0 0 1-.29.117.409.409 0 0 1-.29-.117l-2.22-2.216a.417.417 0 0 1-.003-.59l.003-.002a.416.416 0 0 1 .583 0Zm4.1-3.16a.416.416 0 0 1 0 .832h-3.125a.416.416 0 0 1 0-.831h3.125Zm-4.357-2.239a.442.442 0 0 1-.299-.116.426.426 0 0 1 0-.592l2.226-2.217a.418.418 0 0 1 .586.048.418.418 0 0 1-.003.544l-2.25 2.217a.478.478 0 0 1-.26.116Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLoadingLight);
export default ForwardRef;
