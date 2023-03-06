 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgConferenceBold(
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
        d="M18.5 6.073c.643 0 1.163.56 1.163 1.255v1.106c0 .694-.52 1.255-1.163 1.255h-.387v.003H4.55v-.003h-.387C3.521 9.689 3 9.129 3 8.434V7.325c0-.694.52-1.254 1.163-1.254h2.85v-.68c0-.111.04-.216.114-.296l.635-.683a.863.863 0 0 1-.225-.589.86.86 0 0 1 .228-.591l.913-.985a.751.751 0 0 1 .549-.244c.205 0 .404.088.549.244l.554.6a.883.883 0 0 1 0 1.181l-.913.982a.738.738 0 0 1-1.098 0l-.011-.012-.52.56v.507h7.088v-.506l-.523-.567-.015.015a.738.738 0 0 1-1.098 0l-.913-.982a.883.883 0 0 1 0-1.18l.558-.6A.747.747 0 0 1 13.434 2c.205 0 .404.088.549.245l.913.984a.873.873 0 0 1 .006 1.172l.64.688c.074.08.113.185.113.296v.68H18.5v.008ZM4.55 10.664v-.307h13.563v.308c0 .69-.52 1.254-1.163 1.254h-1.172v.003H6.883v-.003H5.71c-.64 0-1.16-.563-1.16-1.255Zm2.333 7.291v-5.368h8.895v5.368H6.883Zm10.044.666c.643 0 1.163.56 1.163 1.254v.87c0 .695-.52 1.255-1.163 1.255H5.734c-.643 0-1.164-.56-1.164-1.254v-.87c0-.686.51-1.241 1.14-1.253h10.37v-.002h.847Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgConferenceBold);
export default ForwardRef;
