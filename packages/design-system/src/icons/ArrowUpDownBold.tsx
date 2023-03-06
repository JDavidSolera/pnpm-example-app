 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowUpDownBold(
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
        d="M14.683 22a.763.763 0 0 1-.573-.259L9.876 17.47c-.011-.015-.025-.026-.037-.04a.79.79 0 0 1-.1-.844.767.767 0 0 1 .696-.443l1.856-.014-.005-2.943c0-.674.547-1.22 1.223-1.222h2.36a1.22 1.22 0 0 1 1.223 1.219l.003 2.946 1.86.014c.299 0 .57.173.695.443a.796.796 0 0 1-.1.844c-.011.014-.023.028-.037.04l-4.257 4.275a.77.77 0 0 1-.573.256ZM9.21 12.026H6.851a1.22 1.22 0 0 1-1.223-1.22l-.003-2.942-1.856-.015a.762.762 0 0 1-.693-.443.797.797 0 0 1 .103-.843c.011-.015.023-.029.037-.04l4.248-4.267a.77.77 0 0 1 1.146 0l4.229 4.27c.011.014.025.025.037.04a.786.786 0 0 1 .1.84.765.765 0 0 1-.696.443l-1.853.015.002 2.943a1.216 1.216 0 0 1-1.22 1.219Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgArrowUpDownBold);
export default ForwardRef;
