 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProjectLight(
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
        d="M20.499 20.922c0 .119-.134.241-.268.241H9.873c-.134 0-.257-.142-.257-.241V6.505c0-.091.143-.242.257-.242h5.654v1.99c0 .819.285 1.527.817 2.04.532.518 1.25.785 2.091.785H20.5v9.844ZM8.783 6.505v10.623h-4.71c-.108 0-.242-.134-.242-.216V3.052c0-.09.125-.218.242-.218h9.963c.117 0 .242.108.242.219v2.373H9.873c-.575 0-1.09.518-1.09 1.079Zm7.578.008 3.859 3.728h-1.785c-.617 0-1.14-.185-1.505-.543-.367-.359-.566-.86-.566-1.446V6.513h-.003Zm4.954 3.82a.613.613 0 0 0-.182-.36l-4.505-4.362a.601.601 0 0 0-.367-.173c-.025-.009-.051-.009-.082-.009h-1.067V3.053c0-.57-.493-1.053-1.076-1.053h-9.96C3.509 2 3 2.495 3 3.053v13.856c0 .552.518 1.053 1.076 1.053h4.707v2.96c0 .569.509 1.078 1.09 1.078h10.36c.593 0 1.1-.504 1.1-1.078v-10.49c0-.031-.01-.066-.018-.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProjectLight);
export default ForwardRef;
