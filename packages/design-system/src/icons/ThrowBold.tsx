 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgThrowBold(
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
        d="M2.569 21.991a.569.569 0 0 1-.401-.972l4.704-4.704a.57.57 0 0 1 .805.804L2.97 21.825a.56.56 0 0 1-.401.167Zm5.114.003a.569.569 0 0 1-.407-.967l2.33-2.386a.57.57 0 0 1 .838.77c-.008.01-.014.018-.023.024l-2.329 2.389a.57.57 0 0 1-.41.17ZM2.62 16.932a.569.569 0 0 1-.407-.967l2.33-2.386a.57.57 0 0 1 .813.796l-2.33 2.386a.559.559 0 0 1-.406.17ZM20.58 2H12.88a1.423 1.423 0 0 0-1.007 2.429l.708.708-6.317 6.317a1.423 1.423 0 0 0 0 2.01l4.26 4.264a1.423 1.423 0 0 0 2.012 0l6.317-6.32.72.723c.264.267.625.418 1.003.418.785 0 1.422-.637 1.425-1.422V3.422A1.42 1.42 0 0 0 20.58 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgThrowBold);
export default ForwardRef;
