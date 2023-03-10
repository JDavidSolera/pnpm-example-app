 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgReward(
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
        d="m17.398 18.115 1.625.598-2.363-5.12c-.913.81-2.146 1.277-3.654 1.417l2.465 5.345.606-1.634a1.04 1.04 0 0 1 1.32-.606Zm-9.361 2.237 2.484-5.39c-1.485-.211-2.672-.775-3.526-1.694l-2.513 5.453 1.628-.603a1.04 1.04 0 0 1 1.317.6l.61 1.634Zm3.956-17.097c-3.598 0-5.274 1.677-5.274 5.274 0 3.598 1.676 5.271 5.274 5.271 3.6 0 5.277-1.673 5.277-5.27 0-3.601-1.677-5.275-5.277-5.275Zm8.416 15.45a1.02 1.02 0 0 1-.137 1.078c-.247.304-.64.441-1.024.356l-2.07-.755-.742 1.993c-.211.41-.558.62-.943.62h-.028a1.018 1.018 0 0 1-.905-.595l-2.81-6.09-2.806 6.09A1.022 1.022 0 0 1 8.04 22h-.03c-.382 0-.73-.208-.909-.547l-.777-2.066-1.99.732c-.463.108-.853-.029-1.104-.333a1.02 1.02 0 0 1-.133-1.076l3.034-6.583c.008-.02.025-.035.037-.052-.467-.944-.715-2.123-.715-3.54C5.452 4.083 7.86 2 11.99 2c4.13 0 6.54 2.083 6.54 6.535 0 1.66-.335 2.988-.967 4.002l2.846 6.167Zm-9.39-10.853-1.18.179.867.851a.69.69 0 0 1 .18.58l-.2 1.207 1-.577a.644.644 0 0 1 .617 0l1.002.549-.202-1.19a.686.686 0 0 1 .182-.572l.845-.86-1.153-.167a.664.664 0 0 1-.498-.385l-.515-1.087-.466 1.107a.669.669 0 0 1-.479.365ZM9.591 9.548l-.632-.643a1.26 1.26 0 0 1-.296-1.29c.148-.446.526-.765.987-.836l.848-.128.385-.812a1.223 1.223 0 0 1 1.113-.708c.478 0 .905.27 1.112.708l.387.814.846.129c.458.068.837.39.987.836.151.459.037.95-.296 1.29l-.631.643.15.916a1.237 1.237 0 0 1-1.802 1.31l-.753-.413-.749.41a1.21 1.21 0 0 1-1.295-.077 1.246 1.246 0 0 1-.51-1.232l.149-.917Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgReward);
export default ForwardRef;
