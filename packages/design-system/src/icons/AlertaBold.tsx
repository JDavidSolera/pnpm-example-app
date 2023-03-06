 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAlertaBold(
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
        d="M22.054 20.943 12.67 2.413c-.13-.26-.367-.413-.632-.413s-.502.156-.63.415L2.224 20.943a.727.727 0 0 0 .022.716c.132.21.374.341.644.341h18.503c.27 0 .51-.125.644-.338a.726.726 0 0 0 .017-.72Zm-9.914-1.734c-.356 0-.564-.204-.564-.562 0-.358.205-.563.564-.563.36 0 .564.205.564.563s-.208.562-.564.562Zm.573-2.71c0 .31-.25.56-.561.56a.56.56 0 0 1-.562-.56V8.671c0-.31.251-.56.562-.56.31 0 .56.25.56.56v7.826Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgAlertaBold);
export default ForwardRef;
