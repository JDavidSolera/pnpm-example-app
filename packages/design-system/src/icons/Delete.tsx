 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDelete(
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
        d="M16.983 11.345a.626.626 0 1 1 0 1.253H12.62l-.247-.003h-.413c-.344 0-.028.005-.341 0H7.014a.626.626 0 0 1 0-1.252h4.354l.25.002c.342-.002-.005-.002.342-.002h.413l.247.002h4.363Zm-4.55 9.4c2.501-.046 8.315-.988 8.315-8.72 0-7.731-5.848-8.707-8.361-8.767a30.08 30.08 0 0 0-.717-.009h-.188c-2.476.023-8.23.914-8.23 8.72 0 7.817 5.811 8.745 8.31 8.779.29.003.58.003.87-.003Zm-.018-18.736C14.38 2.057 22 2.83 22 12.026c0 9.217-7.635 9.931-9.542 9.968-.18.003-.384.006-.592.006-.108 0-.216 0-.324-.003C9.532 21.97 2 21.243 2 11.97 2 2.706 9.462 2.017 11.47 2h.2c.256 0 .52.003.745.009Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgDelete);
export default ForwardRef;
