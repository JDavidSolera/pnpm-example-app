 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgUser(
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
        d="M11.89 12.014c-1.581 0-2.813-.415-3.667-1.237-.884-.854-1.334-2.12-1.334-3.764 0-1.645.45-2.913 1.334-3.77C9.077 2.418 10.31 2 11.89 2c1.582 0 2.817.418 3.673 1.243.89.857 1.34 2.125 1.34 3.77 0 1.644-.452 2.91-1.342 3.764-.854.822-2.089 1.237-3.67 1.237Zm0-8.876c-1.274 0-2.241.31-2.876.925-.654.634-.987 1.627-.987 2.953 0 1.325.333 2.313.987 2.944.632.609 1.6.92 2.877.92 1.277 0 2.247-.311 2.884-.92.657-.631.993-1.621.993-2.942-.003-2.611-1.272-3.88-3.878-3.88ZM20.212 22H3.569A.57.57 0 0 1 3 21.431v-1.664c0-1.593.495-2.95 1.434-3.93 1.024-1.066 2.543-1.632 4.398-1.632h6.103c1.854 0 3.38.563 4.403 1.63.945.982 1.443 2.338 1.443 3.932v1.664a.57.57 0 0 1-.57.569ZM4.138 20.862h15.505v-1.095c0-1.292-.39-2.379-1.124-3.144-.82-.85-2.025-1.28-3.584-1.28H8.832c-1.559 0-2.762.43-3.576 1.28-.731.762-1.118 1.85-1.118 3.144v1.095Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;
