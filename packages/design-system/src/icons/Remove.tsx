 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgRemove(
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
        d="M18.684 18.685V7.4H5.312v11.303c-.003.046-.046.942.506 1.525.344.365.87.547 1.568.547h9.213c.034 0 .953.025 1.547-.55.359-.346.538-.864.538-1.539ZM8.436 4.335v1.84h7.121V4.343c.009-.188-.02-.637-.261-.888-.146-.156-.365-.23-.67-.23l-5.268.003c-.057-.003-.402-.023-.638.193-.187.176-.284.484-.284.913Zm12.948 1.843a.61.61 0 1 1 0 1.223h-1.48v11.287c0 1.024-.31 1.841-.921 2.427-.868.83-2.052.885-2.347.885-.037 0-.06 0-.066-.003H7.386c-1.053 0-1.884-.316-2.464-.942-.913-.976-.83-2.338-.828-2.395L4.091 7.399h-1.48a.61.61 0 1 1 0-1.224h4.604v-1.84c0-.797.234-1.412.694-1.827.63-.57 1.42-.512 1.508-.501l5.21-.006c.816 0 1.303.339 1.565.623.64.686.591 1.653.586 1.762l.003 1.79h4.603v.002ZM9.912 17.832a.61.61 0 0 1-.611-.612v-6.26a.61.61 0 1 1 1.223 0v6.26a.614.614 0 0 1-.612.612Zm4.171 0a.61.61 0 0 1-.611-.612v-6.26a.61.61 0 1 1 1.223 0v6.26a.61.61 0 0 1-.612.612Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;
