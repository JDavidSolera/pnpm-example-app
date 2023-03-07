 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMessage(
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
        d="M4.59 20.037c0 .512.466.963.996.963.124 0 .51 0 .84-.44l2.134-2.73h10.214a2.75 2.75 0 0 0 2.755-2.74V5.74A2.75 2.75 0 0 0 18.774 3H5.227A2.752 2.752 0 0 0 2.47 5.74v9.347c0 1.346.896 2.437 2.12 2.686v2.264ZM3.556 5.74c0-.912.749-1.656 1.669-1.656H18.77c.92 0 1.67.741 1.67 1.656v9.351c0 .912-.75 1.656-1.67 1.656H8.297a.548.548 0 0 0-.43.209L5.676 19.76v-2.472a.544.544 0 0 0-.543-.543c-.898 0-1.576-.711-1.576-1.655V5.74Zm2.66 3.126h11.56a.544.544 0 0 0 .543-.543.544.544 0 0 0-.543-.543H6.216a.544.544 0 0 0-.543.543c0 .299.244.543.543.543Zm0 4.233h7.856a.544.544 0 0 0 .543-.543.544.544 0 0 0-.543-.542H6.216a.544.544 0 0 0-.543.542c0 .299.244.543.543.543Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMessage);
export default ForwardRef;
