 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgEdit2Light(
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
        d="M19.983 20.822c.314 0 .565.262.565.59a.579.579 0 0 1-.565.588H3.565A.575.575 0 0 1 3 21.411c0-.324.254-.589.565-.589h16.418ZM4.538 19.54c-.393 0-.767-.168-1.041-.458a1.633 1.633 0 0 1-.351-1.576l1.552-4.913c.092-.265.246-.501.454-.683 4.27-4.02 8.857-8.393 9.174-8.723A3.414 3.414 0 0 1 16.806 2a3.59 3.59 0 0 1 2.615 1.175 4.187 4.187 0 0 1 1.133 2.774 3.907 3.907 0 0 1-1.133 2.702c-.565.635-9.197 8.78-9.285 8.863-.146.142-.32.247-.511.304L5.004 19.45a1.108 1.108 0 0 1-.466.088Zm-.316-1.678a.393.393 0 0 0 .091.398.324.324 0 0 0 .328.094l4.621-1.576a.322.322 0 0 0 .115-.072c1.427-1.35 8.754-8.298 9.239-8.816a2.76 2.76 0 0 0 .77-1.94 2.956 2.956 0 0 0-.759-1.963 2.494 2.494 0 0 0-1.8-.8 2.407 2.407 0 0 0-1.745.8c-.42.458-6.793 6.49-9.208 8.78a.357.357 0 0 0-.102.153l-1.55 4.942Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgEdit2Light);
export default ForwardRef;
