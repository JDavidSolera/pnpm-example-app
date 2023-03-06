 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMapBold(
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
        d="m20.722 19.863-3.272-.538V3.392l3.272.537v15.934Zm-9.362.623-3.341-1.084V3.517l3.34 1.084v15.885ZM21.465 2.76l-4.547-.749c-.015-.002-.032.003-.046.003-.02-.003-.037-.011-.06-.011-.043 0-.08.014-.12.023-.022.005-.048-.003-.07.005l-4.62 1.437-4.424-1.437c-.023-.005-.049 0-.074-.005C7.464 2.017 7.424 2 7.38 2c-.02 0-.037.009-.054.009-.014.002-.028-.006-.045-.003l-4.744.748A.637.637 0 0 0 2 3.386v17.228a.638.638 0 0 0 .737.629l4.593-.726 4.474 1.454A.64.64 0 0 0 12 22a.718.718 0 0 0 .19-.029l4.67-1.454 4.397.726a.643.643 0 0 0 .745-.629V3.39a.644.644 0 0 0-.537-.63Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMapBold);
export default ForwardRef;
