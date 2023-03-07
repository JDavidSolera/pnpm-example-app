 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowLeftRightBold(
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
        d="M22 9.044c0 .22-.094.428-.259.573l-4.272 4.234c-.015.011-.026.026-.04.037a.79.79 0 0 1-.844.1.767.767 0 0 1-.443-.696l-.014-1.856-2.943.006a1.225 1.225 0 0 1-1.222-1.223V7.858a1.22 1.22 0 0 1 1.219-1.223l2.946-.003.014-1.859c0-.3.173-.57.443-.696a.796.796 0 0 1 .884.137l4.275 4.257a.77.77 0 0 1 .256.573Zm-9.974 5.474v2.358a1.22 1.22 0 0 1-1.22 1.223l-2.942.003-.015 1.856c0 .3-.173.567-.443.693a.797.797 0 0 1-.843-.103c-.015-.011-.029-.023-.04-.037l-4.267-4.248a.77.77 0 0 1 0-1.146l4.27-4.228c.014-.012.025-.026.04-.037a.786.786 0 0 1 .84-.1.765.765 0 0 1 .443.695l.015 1.854 2.943-.003a1.216 1.216 0 0 1 1.219 1.22Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgArrowLeftRightBold);
export default ForwardRef;
