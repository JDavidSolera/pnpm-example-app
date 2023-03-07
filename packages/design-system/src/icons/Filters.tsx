 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFilters(
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
        d="M5.143 5.037a1.76 1.76 0 0 0-.236 1.355c.108.466.396.865.81 1.12.415.26.908.342 1.381.234a1.827 1.827 0 0 0 1.149-.794c.26-.404.345-.885.236-1.354a1.785 1.785 0 0 0-.809-1.122 1.856 1.856 0 0 0-1.382-.233 1.824 1.824 0 0 0-1.149.794ZM2.638 6.594a.607.607 0 0 1-.612-.6c0-.33.273-.598.612-.598h1.069c.071-.35.202-.686.402-1a3.048 3.048 0 0 1 1.912-1.32c.79-.179 1.619-.04 2.306.387a2.959 2.959 0 0 1 1.35 1.87c.006.02.003.043.006.063h11.704c.337 0 .613.27.613.6 0 .33-.274.6-.613.6H9.686a2.87 2.87 0 0 1-.405.997 3.019 3.019 0 0 1-1.912 1.32c-.79.18-1.619.04-2.305-.387a2.985 2.985 0 0 1-1.351-1.87c-.006-.02-.006-.04-.009-.062H2.638Zm14.631 7.61c1.012 0 1.836-.806 1.836-1.796s-.824-1.796-1.836-1.796c-1.011 0-1.835.805-1.835 1.796 0 .987.824 1.795 1.835 1.795Zm4.096-2.397c.339 0 .612.268.612.6 0 .33-.273.598-.613.598h-1.1c-.282 1.363-1.518 2.393-2.995 2.393-1.476 0-2.71-1.03-2.995-2.393H2.613a.607.607 0 0 1-.613-.6c0-.33.274-.6.613-.6H14.27c.285-1.364 1.52-2.394 2.995-2.394 1.477 0 2.714 1.03 2.996 2.393h1.102v.003Zm-11.933 8.79c1.012 0 1.836-.805 1.836-1.795 0-.99-.824-1.796-1.836-1.796-1.011 0-1.835.806-1.835 1.796s.824 1.796 1.835 1.796Zm11.93-2.393c.339 0 .612.268.612.6 0 .331-.273.601-.612.601h-8.934c-.286 1.363-1.52 2.394-2.996 2.394s-2.71-1.03-2.995-2.394H2.613a.607.607 0 0 1-.613-.6c0-.33.274-.598.613-.598h3.824c.285-1.363 1.52-2.393 2.995-2.393 1.476 0 2.71 1.03 2.995 2.393l8.935-.003Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFilters);
export default ForwardRef;