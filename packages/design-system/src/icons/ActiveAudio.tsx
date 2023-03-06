 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgActiveAudio(
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
        d="M19.208 4.942c.11.103 2.744 2.56 2.79 6.75.005.139.147 4.267-2.753 6.905a1.068 1.068 0 0 1-.715.28c-.296 0-.589-.126-.8-.365a1.106 1.106 0 0 1 .086-1.54c2.155-1.959 2.044-5.19 2.04-5.22-.036-3.24-2-5.116-2.086-5.196a1.104 1.104 0 0 1-.068-1.537 1.062 1.062 0 0 1 1.506-.077Zm-.843 6.787c.003.082.1 2.877-1.873 4.668a1.055 1.055 0 0 1-1.514-.085 1.103 1.103 0 0 1 .085-1.54c1.204-1.096 1.161-2.967 1.159-2.986-.02-1.882-1.173-2.99-1.187-3a1.105 1.105 0 0 1-.08-1.54 1.058 1.058 0 0 1 1.511-.083c.08.074 1.868 1.742 1.9 4.566Zm-6.504 5.18V6.19c-1.873.085-3.166.726-3.988 1.95a1.046 1.046 0 0 1-.977.675c-.006 0-.011-.006-.014-.006-.009 0-.014.006-.023.006H4.141l.008 5.482 2.702-.003c.401 0 .74.237.925.57.017.034.06.05.074.085.803 1.224 2.152 1.882 4.01 1.961ZM12.222 4c1.016 0 1.782.78 1.782 1.736V17.37c0 .954-.76 1.728-1.697 1.728-3.259 0-5.044-1.326-6.017-2.624l-3.211.003a1.08 1.08 0 0 1-1.07-1.088L2 7.726c0-.287.111-.563.313-.768.202-.205.473-.322.757-.322l3.234-.003C7.28 5.335 9.054 4 12.222 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgActiveAudio);
export default ForwardRef;
