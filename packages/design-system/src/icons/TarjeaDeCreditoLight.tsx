 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTarjeaDeCreditoLight(
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
        d="M20.489 18.184a.435.435 0 0 0 .435-.43v-6.159H2.835v6.156c0 .24.194.43.436.43H20.49v.003ZM3.269 5.816a.435.435 0 0 0-.437.43v1.437h18.09V6.246a.432.432 0 0 0-.436-.43H3.268Zm-.434 4.96h18.092V8.502H2.835v2.276Zm18.93-2.682v3.093c0 .031-.01.056-.017.082v6.482c0 .69-.565 1.249-1.257 1.249H3.268c-.694 0-1.257-.56-1.257-1.249v-6.513c-.003-.017-.011-.034-.011-.05V8.093c0-.017.008-.034.011-.051V6.249c0-.69.566-1.249 1.257-1.249h17.22c.695 0 1.258.56 1.258 1.249v1.763c.008.025.02.053.02.082Zm-4.07 8.167c.496-.009 1.328-.203 1.328-1.387 0-1.187-.838-1.386-1.338-1.398l-.16-.002c-.147.002-.591.047-.917.34.137.29.222.638.222 1.06 0 .416-.082.76-.214 1.046.329.29.779.34.925.344l.155-.003Zm-3.02 0c.495-.009 1.328-.203 1.328-1.387 0-1.187-.838-1.386-1.339-1.398l-.16-.002c-.49.005-1.31.19-1.31 1.386 0 1.201.832 1.392 1.327 1.4h.154Zm3.026-3.603c.993.025 2.146.619 2.146 2.213 0 1.598-1.15 2.186-2.137 2.205h-.18c-.284-.005-.911-.073-1.423-.495-.408.338-.931.487-1.418.495h-.18c-.987-.017-2.14-.604-2.14-2.216 0-1.614 1.148-2.196 2.13-2.205l.182.003c.484.011 1.004.163 1.412.495.509-.427 1.139-.495 1.426-.498l.183.003Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTarjeaDeCreditoLight);
export default ForwardRef;
