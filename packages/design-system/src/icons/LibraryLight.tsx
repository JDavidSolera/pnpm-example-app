 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLibraryLight(
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
        d="M21.555 18.073c-4.25.078-7.592 1.338-8.928 1.925V6.72c3.528-1.788 7.654-1.818 8.928-1.78v13.133ZM2.851 4.943c1.269-.04 5.4-.009 8.928 1.78v13.278c-1.333-.587-4.677-1.844-8.928-1.925V4.943Zm19.163-.824c-.223-.02-5.383-.392-9.814 1.875C7.77 3.73 2.613 4.101 2.392 4.121A.42.42 0 0 0 2 4.54V18.49c0 .232.192.421.424.421 5.432 0 9.541 2.105 9.582 2.126a.42.42 0 0 0 .197.046c.018 0 .035-.012.052-.014a.392.392 0 0 0 .143-.035l.02-.012h.003c.25-.125 4.268-2.114 9.555-2.114a.423.423 0 0 0 .424-.424V4.537a.412.412 0 0 0-.386-.418Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLibraryLight);
export default ForwardRef;
