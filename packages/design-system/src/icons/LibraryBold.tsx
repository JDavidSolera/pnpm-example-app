 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLibraryBold(
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
        d="M22.008 4.034c-.22-.017-5.379-.392-9.811 1.878-4.43-2.267-9.585-1.898-9.805-1.878a.424.424 0 0 0-.392.42v13.948c0 .235.192.424.424.424 5.43 0 9.538 2.104 9.578 2.125.061.032.128.049.198.049.026 0 .052-.017.081-.023.04-.009.081-.009.116-.03l.018-.008h.006l.002-.003c.262-.13 4.276-2.11 9.553-2.11a.422.422 0 0 0 .424-.424V4.455a.424.424 0 0 0-.392-.421Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgLibraryBold);
export default ForwardRef;
