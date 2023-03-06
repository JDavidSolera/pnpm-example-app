 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProject(
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
        d="M9.904 20.717V6.633l.028-.009h5.29v1.714c0 .865.3 1.61.866 2.16.56.543 1.317.83 2.194.83h1.784l-.026 9.391-10.136-.002ZM4.272 16.8l.003-13.526 9.721-.017v2.091H9.932c-.691 0-1.3.6-1.3 1.284v10.154l-4.36.014Zm12.22-9.619 2.954 2.871h-1.167c-.54 0-.993-.162-1.312-.472-.313-.304-.478-.734-.478-1.243V7.182h.003Zm4.792 3.042a.848.848 0 0 0-.208-.364l-4.394-4.269a.858.858 0 0 0-.597-.242h-.817V3.258c0-.683-.583-1.258-1.275-1.258H4.275C3.583 2 3 2.578 3 3.258V16.8c0 .671.595 1.26 1.275 1.26h4.357v2.656c0 .694.595 1.283 1.3 1.283h10.103c.706 0 1.297-.59 1.297-1.283V10.475a.571.571 0 0 0-.048-.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProject);
export default ForwardRef;
