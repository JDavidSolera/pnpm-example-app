 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBriefcaseLight(
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
        d="M21.15 20.688a.451.451 0 0 1-.448.455H3.301a.45.45 0 0 1-.45-.45V13.35c1.736 1.158 4.195 1.733 7.914 1.835l-.009.009v1.636c0 .256.077.464.23.618a.847.847 0 0 0 .604.222h.817c.256 0 .461-.077.603-.222.154-.154.23-.362.23-.618v-1.636c3.694-.094 6.162-.635 7.906-1.75.003 0 .003 7.245.003 7.245Zm-9.338-5.486.58-.01v.01l-.008 1.61-.774.017-.017-1.619.22-.009ZM2.851 8.524a.45.45 0 0 1 .444-.455h17.402c.247 0 .45.2.452.45v3.896c-1.719 1.303-4.425 1.9-8.742 1.937h-.33c-4.63 0-7.473-.643-9.226-2.066V8.525Zm5.1-1.895c0-2.075 1.778-3.773 3.958-3.773h.185c2.188 0 3.958 1.698 3.958 3.773v.583H7.95V6.63Zm12.749.583h-3.797V6.63c0-2.547-2.154-4.63-4.812-4.63h-.185c-2.65 0-4.81 2.083-4.81 4.63v.583H3.302C2.586 7.213 2 7.797 2 8.525v12.163C2 21.42 2.586 22 3.3 22h17.397C21.42 22 22 21.42 22 20.688V8.525a1.3 1.3 0 0 0-1.3-1.312Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBriefcaseLight);
export default ForwardRef;
