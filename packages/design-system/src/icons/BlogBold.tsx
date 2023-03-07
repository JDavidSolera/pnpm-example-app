 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBlogBold(
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
        d="M21.516 10.333a2.02 2.02 0 0 0-1.257-.575 1.824 1.824 0 0 0-.852.14V5.868c0-1.16-.319-2.142-.945-2.806C17.794 2.356 16.829 2 15.595 2H5.812c-1.234 0-2.2.356-2.866 1.063C2.319 3.726 2 4.709 2 5.869v12.319c0 1.16.32 2.085.946 2.75.667.706 1.63 1.062 2.866 1.062h9.783c1.234 0 2.2-.356 2.867-1.063.626-.664.945-1.59.945-2.749v-3.22a171.894 171.894 0 0 0 2.103-1.885c.382-.376.584-.844.587-1.35a2.025 2.025 0 0 0-.581-1.4ZM5.869 6.271h9.726c.314 0 .57.256.57.57 0 .313-.256.57-.57.57H5.87a.571.571 0 0 1-.57-.57c0-.314.257-.57.57-.57Zm0 3.458h9.726c.314 0 .57.257.57.57 0 .314-.256.57-.57.57H5.87a.571.571 0 0 1-.57-.57c0-.313.257-.57.57-.57Zm0 3.459h9.698c-.425.376-.863.764-1.29 1.14H5.868a.571.571 0 0 1-.57-.57c0-.314.257-.57.57-.57Zm6.236 4.598H5.87a.571.571 0 0 1-.57-.57c0-.313.257-.57.57-.57h6.618l-.382 1.14Zm8.604-5.515c-.23.228-3.515 3.142-5.726 5.096l-1.727.57.567-1.69c.93-.82 5.433-4.797 5.747-5.11a.76.76 0 0 1 .604-.245.839.839 0 0 1 .78.832.753.753 0 0 1-.245.547Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBlogBold);
export default ForwardRef;
