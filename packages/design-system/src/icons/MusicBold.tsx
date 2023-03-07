 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMusicBold(
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
        d="M20.501 5.609c0-.555-.43-1.013-.982-1.065l-9.435-2.521L9.916 2c-.45 0-.834.27-.999.655a1.063 1.063 0 0 0-.085.415v8.388c-.632-.467-1.406-.689-2.132-.706-.091-.003-.2-.003-.302-.003C4.83 10.763 3 11.69 3 14.253c0 2.561 1.841 3.498 3.415 3.52h.117c.063 0 .122 0 .174-.002 1.508-.026 3.239-.9 3.387-3.2h.028v-8.72l9.096 2.485v7.348c-.631-.466-1.411-.688-2.137-.705l-.296-.003c-1.568.014-3.398.939-3.398 3.503 0 2.562 1.841 3.498 3.415 3.521h.117c.062 0 .122 0 .173-.003 1.574-.028 3.416-.962 3.416-3.503 0-.052-.012-.092-.015-.14h.015V5.61H20.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMusicBold);
export default ForwardRef;
