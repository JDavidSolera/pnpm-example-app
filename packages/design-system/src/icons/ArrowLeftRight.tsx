 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowLeftRight(
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
        d="M22.335 8.69a.77.77 0 0 1-.259.574l-4.272 4.216-.043.037a.805.805 0 0 1-.844.1.769.769 0 0 1-.443-.69l-.017-1.85-2.938.002a1.218 1.218 0 0 1-1.218-1.218V7.508c0-.673.545-1.218 1.218-1.218l2.946-.003.015-1.853c0-.298.17-.562.443-.693a.8.8 0 0 1 .844.102c.014.012.028.023.04.037l4.27 4.236c.17.15.258.361.258.574Zm-4.727 3.387 3.431-3.387-3.431-3.406-.012 1.37v.01a.78.78 0 0 1-.79.76l-3.287.002a.082.082 0 0 0-.082.082v2.353c0 .045.037.082.082.082l3.287-.006a.78.78 0 0 1 .79.756v.011l.012 1.373Zm-5.245 2.068v2.35c0 .673-.545 1.218-1.219 1.218l-2.943.003-.014 1.85c0 .298-.17.562-.443.693a.8.8 0 0 1-.844-.102c-.014-.012-.029-.023-.04-.037l-4.267-4.234a.76.76 0 0 1 0-1.144l4.267-4.214c.014-.014.028-.025.043-.037a.805.805 0 0 1 .843-.099c.273.13.44.395.444.69l.014 1.847 2.94-.003c.67 0 1.22.546 1.22 1.219ZM7.857 16.58l3.284-.003a.082.082 0 0 0 .083-.083v-2.35a.082.082 0 0 0-.083-.081l-3.284.002a.78.78 0 0 1-.79-.755v-.012l-.01-1.369-3.43 3.384 3.43 3.4.01-1.366v-.012a.78.78 0 0 1 .79-.755Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgArrowLeftRight);
export default ForwardRef;
