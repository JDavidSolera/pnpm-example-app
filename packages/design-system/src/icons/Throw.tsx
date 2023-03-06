 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgThrow(
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
        d="M20.58 3.138c.157 0 .285.128.285.284v7.702a.285.285 0 0 1-.284.284h-.003a.278.278 0 0 1-.2-.085l-1.31-1.311-.208-.208a2.706 2.706 0 0 0-.208.197l-6.92 6.922a.283.283 0 0 1-.4 0L7.068 12.66a.283.283 0 0 1 0-.401l6.92-6.92c.111-.11.111-.29 0-.401l-1.311-1.311a.283.283 0 0 1 .202-.484h7.702v-.005Zm0-1.138H12.88a1.423 1.423 0 0 0-1.007 2.429l.708.708-6.317 6.317a1.423 1.423 0 0 0 0 2.01l4.26 4.264a1.423 1.423 0 0 0 2.012 0l6.317-6.32.72.723c.264.267.625.418 1.003.418.785 0 1.422-.637 1.425-1.422V3.422A1.42 1.42 0 0 0 20.58 2ZM2.57 21.991a.569.569 0 0 1-.401-.972l4.704-4.704a.57.57 0 0 1 .82.79l-.015.014-4.707 4.705a.56.56 0 0 1-.401.167Zm5.114.003a.57.57 0 0 1-.57-.569c0-.15.06-.295.169-.4 1.058-1.059 2.306-2.364 2.32-2.378a.57.57 0 0 1 .834.776c-.003.003-.006.006-.009.012-.011.014-1.271 1.328-2.338 2.394a.592.592 0 0 1-.406.165ZM2.62 16.932a.57.57 0 0 1-.404-.97c1.058-1.058 2.307-2.364 2.321-2.378a.57.57 0 0 1 .833.777 166.8 166.8 0 0 1-2.346 2.406.58.58 0 0 1-.404.165Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgThrow);
export default ForwardRef;
