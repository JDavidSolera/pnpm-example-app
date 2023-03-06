 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStatus(
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
        d="M20.03 7.66a.696.696 0 1 1-.002-1.391.696.696 0 0 1 .002 1.391ZM8.043 11.553a.696.696 0 1 1 .048-1.391.696.696 0 0 1-.048 1.39ZM20.03 5c-1.087 0-1.969.88-1.972 1.966 0 .475.177.905.459 1.243l-2.427 4.063a1.9 1.9 0 0 0-.456-.056c-.572 0-1.084.247-1.445.64L9.998 11.02c.006-.055.017-.106.017-.163a1.971 1.971 0 0 0-3.94 0c0 .487.19.942.503 1.295l-2.242 3.952a1.949 1.949 0 0 0-.364-.037c-1.087 0-1.97.88-1.972 1.966a1.974 1.974 0 0 0 3.946 0c0-.5-.193-.95-.503-1.297l2.245-3.958c.12.023.236.045.358.045.572 0 1.084-.247 1.445-.64l4.191 1.835c-.002.054-.017.106-.017.162a1.972 1.972 0 0 0 3.94.003v-.002c.001-.464-.167-.885-.437-1.224l2.435-4.077c.14.031.28.051.43.051 1.087 0 1.966-.88 1.969-1.966A1.973 1.973 0 0 0 20.03 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgStatus);
export default ForwardRef;
