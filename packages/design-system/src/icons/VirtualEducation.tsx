 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgVirtualEducation(
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
        d="M7.679 18.633a.197.197 0 0 1-.249 0c-1.032-.82-2.386-1.196-3.346-1.372v-1.627L7 16.945c.319.143.686.146 1.005 0l3.02-1.357-.002 1.679c-.957.173-2.31.546-3.343 1.366Zm-.203-7.499 5.121 2.302-5.067 2.3-5.121-2.3 5.067-2.302Zm5.795 1.163L8.004 9.93a1.233 1.233 0 0 0-1.005 0l-2.159.969V7.16c0-.643.143-1.117.422-1.405.289-.298.775-.45 1.446-.45L19.12 5.3c.668 0 1.154.152 1.445.45.28.288.422.762.422 1.405v5.893c0 .65-.142 1.13-.425 1.424-.291.303-.777.458-1.442.458l-6.645.003.792-.355c.446-.2.735-.646.735-1.138.009-.495-.28-.941-.732-1.142Zm8.413 4.46h-9.351v-.522l6.791-.003c1.027 0 1.825-.289 2.368-.856.523-.547.787-1.333.787-2.329v-5.89c0-.995-.267-1.776-.79-2.316C20.95 4.282 20.154 4 19.124 4H6.711c-1.033 0-1.828.285-2.368.841-.526.54-.79 1.32-.79 2.316v4.317l-1.818.82A1.237 1.237 0 0 0 1 13.436c0 .491.288.94.735 1.138l1.044.474v2.216c0 .643.455 1.19 1.08 1.305.808.146 1.944.456 2.763 1.105.547.434 1.321.434 1.865 0 .816-.65 1.952-.959 2.762-1.105.328-.06.604-.242.796-.488h9.636a.657.657 0 0 0 .652-.66.654.654 0 0 0-.65-.664Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgVirtualEducation);
export default ForwardRef;
