 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgQuestionBold(
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
        d="M13.573 12.07c-1.36 1.573-1.412 1.635-1.412 3.104a.407.407 0 0 1-.407.407h-.45a.4.4 0 0 1-.398-.33 3.183 3.183 0 0 1-.056-.644c0-1.1.386-1.752 1.254-2.797l.165-.199c1.429-1.69 1.7-2.16 1.7-2.96 0-.565-.163-.935-.544-1.24-.22-.173-.604-.375-1.654-.375a6.55 6.55 0 0 0-1.693.222.407.407 0 0 1-.498-.322l-.065-.35a.407.407 0 0 1 .225-.444c.384-.182 1.323-.37 2.23-.37.957 0 1.72.214 2.271.629.709.52 1.042 1.243 1.042 2.268-.003 1.252-.524 1.997-1.71 3.4Zm-1.987 6.313c-.543 0-.887-.338-.887-.839v-.066c0-.503.353-.856.856-.856.538 0 .888.353.888.857 0 .569-.344.904-.857.904Zm.82-16.373c-.279-.005-.612-.014-.908-.008C9.91 2.016 2 2.56 2 11.97c0 9.412 7.965 10.004 9.56 10.027a36.065 36.065 0 0 0 .876-.003c1.598-.028 9.56-.646 9.56-9.967.002-9.317-7.988-9.98-9.59-10.017Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgQuestionBold);
export default ForwardRef;
