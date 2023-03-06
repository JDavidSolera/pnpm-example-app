 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgRemoveLight(
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
        d="M19.018 18.824V7.092H4.944V18.84c0 .042-.057 1.039.572 1.696.393.416.982.632 1.747.632h9.407c.034 0 1.056.034 1.73-.623.41-.39.618-.974.618-1.722ZM8.14 4.174v2.087h7.685V4.18c0-.034.034-.666-.325-1.047-.19-.208-.466-.3-.84-.3H9.28c-.043 0-.476-.033-.783.251-.242.216-.359.58-.356 1.09Zm13.423 2.087a.417.417 0 0 1 0 .83h-1.714v11.733c0 .99-.299 1.773-.882 2.328-.823.8-1.964.848-2.246.848H7.266c-1.016 0-1.804-.299-2.362-.9-.874-.93-.791-2.237-.791-2.288V7.092H2.39a.417.417 0 0 1 0-.831h4.915V4.174c0-.757.208-1.332.632-1.713.592-.524 1.35-.458 1.38-.458h5.34c.615 0 1.099.19 1.449.566.606.649.549 1.605.549 1.645v2.047h4.907ZM9.848 17.748a.414.414 0 0 1-.416-.416V10.94a.417.417 0 0 1 .831 0v6.392c0 .23-.185.416-.415.416Zm4.26 0a.414.414 0 0 1-.415-.416V10.94a.417.417 0 0 1 .831 0v6.392c0 .23-.185.416-.415.416Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgRemoveLight);
export default ForwardRef;
