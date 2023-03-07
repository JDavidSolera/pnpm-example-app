 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTagLight(
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
        d="M22.003 3.363h-.009v8.453a2.055 2.055 0 0 1-.598 1.118l-8.46 8.41c-.35.388-.838.621-1.355.655a1.17 1.17 0 0 1-.843-.319l-8.421-8.41a1.58 1.58 0 0 1 .296-2.197l8.47-8.484A2.115 2.115 0 0 1 12.16 2h8.479c.75 0 1.363.61 1.363 1.363Zm-.843 8.328V3.363a.521.521 0 0 0-.52-.52h-8.328a1.253 1.253 0 0 0-.632.36l-8.495 8.454c-.37.37-.456.834-.288.999l8.422 8.413c.167.168.648.074 1.01-.285l8.478-8.461c.183-.168.305-.39.353-.632ZM17.02 4.22a2.518 2.518 0 0 1 1.698.85c.501.445.803 1.068.843 1.734a2.427 2.427 0 0 1-.8 1.742 2.464 2.464 0 0 1-1.685.8 2.53 2.53 0 0 1-1.744-.843 2.535 2.535 0 0 1-.843-1.742 2.438 2.438 0 0 1 .8-1.741 2.48 2.48 0 0 1 1.73-.8Zm1.169 3.668c.322-.278.518-.677.538-1.1a1.688 1.688 0 0 0-.572-1.154 1.692 1.692 0 0 0-1.144-.572 1.623 1.623 0 0 0-1.13.555 1.62 1.62 0 0 0-.555 1.119c.031.444.236.86.572 1.152.296.33.711.53 1.153.555a1.78 1.78 0 0 0 1.138-.555Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTagLight);
export default ForwardRef;
