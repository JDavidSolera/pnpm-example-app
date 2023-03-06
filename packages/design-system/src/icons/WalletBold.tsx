 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWalletBold(
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
        d="M20.63 16.127v-2.758c0-.12-.097-.22-.214-.22h-7.604c-.803 0-1.458.672-1.458 1.496v.203c0 .824.653 1.495 1.458 1.495h7.604a.213.213 0 0 0 .213-.216ZM5.61 7.956c0 .021-.009.037-.011.056l12.129.003v-1.21c0-.14-.126-.259-.279-.259l-.272.022h-.006l-11.246.805c-.193.002-.318.12-.318.26v.323h.002Zm-1.148-.37a1.437 1.437 0 0 1 1.425-1.395L16.6 5.423V4.71l-11.196.789a1.217 1.217 0 0 0-.893.366 1.254 1.254 0 0 0-.353.878v.032c0 .3.112.585.305.813Zm15.954 4.382c.754 0 1.366.628 1.366 1.404v2.757c0 .773-.612 1.402-1.366 1.402h-.083l.002 1.524c0 .647-.243 1.257-.69 1.715-.446.46-1.04.711-1.669.711l-12.615.005c-.712-.005-1.335-.267-1.763-.733-.425-.465-.631-1.093-.594-1.82V6.741c0-.648.246-1.257.69-1.715a2.317 2.317 0 0 1 1.67-.711l11.77-.83a.574.574 0 0 1 .433.159.594.594 0 0 1 .182.433V5.41c.655.147 1.129.72 1.129 1.398v1.378c.326.12.615.305.845.556.425.466.628 1.097.59 1.83l.004 1.398h.099v-.002Zm-7.42 1.904c.514 0 .928.428.928.955a.941.941 0 0 1-.928.954.941.941 0 0 1-.928-.954.94.94 0 0 1 .928-.955Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgWalletBold);
export default ForwardRef;
