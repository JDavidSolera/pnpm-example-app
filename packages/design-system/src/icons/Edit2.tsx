 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgEdit2(
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
        d="M19.576 20.287c.449 0 .815.383.815.855 0 .475-.366.858-.815.858H3.816c-.45 0-.816-.383-.816-.858 0-.472.367-.855.816-.855h15.76ZM6.214 12.95l-1.506 4.836.045.117h.006l4.436-1.59c2.143-2.05 8.451-8.115 8.878-8.57.42-.435.656-1.018.653-1.627a2.603 2.603 0 0 0-.648-1.707 2.132 2.132 0 0 0-1.531-.692c-.546 0-1.058.24-1.473.692-.488.526-8.519 8.215-8.86 8.541ZM4.75 19.615a1.65 1.65 0 0 1-1.199-.537 1.87 1.87 0 0 1-.395-1.822l1.487-4.801a1.78 1.78 0 0 1 .477-.775c4.032-3.864 8.482-8.144 8.778-8.465C14.62 2.432 15.558 2 16.544 2c1.006 0 1.992.443 2.702 1.212a4.353 4.353 0 0 1 1.108 2.903 4.084 4.084 0 0 1-1.122 2.822c-.56.6-8.843 8.548-8.926 8.625a1.572 1.572 0 0 1-.585.366l-4.436 1.59c-.17.066-.35.097-.535.097Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgEdit2);
export default ForwardRef;
