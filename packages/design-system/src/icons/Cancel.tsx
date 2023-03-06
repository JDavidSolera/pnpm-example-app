 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCancel(
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
        d="M16.875 7.12a.622.622 0 0 1 0 .882L12.877 12l3.995 3.995a.625.625 0 1 1-.87.9l-.015-.014-3.993-3.996-3.984 3.984a.624.624 0 0 1-.882.003l-.003-.003a.625.625 0 0 1 0-.885L11.11 12 7.125 8.016a.622.622 0 0 1-.031-.882.622.622 0 0 1 .882-.032l.031.032 3.985 3.984 3.995-3.996a.626.626 0 0 1 .888-.002c-.003 0-.003 0 0 0Zm-4.878 13.63c5.888 0 8.754-2.862 8.754-8.747 0-5.888-2.863-8.754-8.751-8.754s-8.748 2.863-8.748 8.754c-.003 5.885 2.86 8.748 8.745 8.748Zm0-18.75C18.315 2 22 5.193 22 12.003 22 18.816 18.315 22 11.997 22 5.68 22 2 18.816 2 12.003 2 5.193 5.68 2 11.997 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCancel);
export default ForwardRef;
