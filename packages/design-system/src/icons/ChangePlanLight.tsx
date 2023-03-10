 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgChangePlanLight(
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
        d="M11.887 21h9.759c.267 0 .46-.087.582-.255.122-.168.137-.383.137-.568V8.857a.28.28 0 0 0-.027-.167.285.285 0 0 0-.057-.082l-4.523-4.523a.3.3 0 0 0-.206-.084h-.114c-.761 0-5.066-.002-5.554 0-.534.003-.841.305-.841.832v15.318c0 .539.307.849.844.849Zm9.49-12.473-3.532-3.534v1.563c0 1.252.719 1.971 1.971 1.971h1.56Zm-4.112-3.943h-5.378c-.226 0-.261.06-.261.252v15.317c0 .22.046.27.264.27.678-.003 7.01-.003 7.706-.003h2.05a.297.297 0 0 0 .113-.014.615.615 0 0 0 .026-.23V9.108h-1.969c-1.574 0-2.551-.977-2.551-2.551V4.584Zm-3.703 7.326h6.289c.16 0 .29-.13.29-.29a.29.29 0 0 0-.29-.29h-6.289a.29.29 0 0 0-.29.29c0 .16.13.29.29.29Zm0 2.833h6.289c.16 0 .29-.13.29-.29a.29.29 0 0 0-.29-.29h-6.289a.29.29 0 0 0-.29.29c0 .16.13.29.29.29Zm0 2.85h6.289c.16 0 .29-.13.29-.29a.29.29 0 0 0-.29-.29h-6.289a.29.29 0 0 0-.29.29c0 .16.13.29.29.29Zm-6.46-9.594a.29.29 0 0 0 .48.22c.086-.072.849-.727.976-.855.33-.327.328-.71-.006-1.044-.213-.213-.738-.663-.914-.814a7.903 7.903 0 0 1-.057-.05.29.29 0 1 0-.377.441c.007.005.451.384.75.655h-1.15c-.904 0-1.603.232-2.076.688-.493.475-.742 1.194-.742 2.136v.862c0 .159.13.29.29.29.16 0 .29-.131.287-.29v-.862c0-.78.191-1.36.565-1.719.363-.348.925-.525 1.676-.525h1.143a82.99 82.99 0 0 1-.743.647.293.293 0 0 0-.101.22ZM5.45 20.98H2.591c-.365 0-.591-.229-.591-.597V11.94c0-.362.226-.588.591-.588h3.404a.3.3 0 0 1 .206.084l2.514 2.514a.287.287 0 0 1 .084.206v6.242c0 .35-.226.58-.58.58l-2.769.003Zm-2.87-.58h5.639v-5.954h-.716c-.58 0-1.03-.157-1.337-.461-.307-.305-.46-.757-.46-1.337v-.713H2.58V20.4Zm3.705-8.057v.305c0 .84.377 1.218 1.218 1.218h.304l-1.522-1.523ZM3.803 16.21h3.204c.16 0 .29-.13.29-.29a.29.29 0 0 0-.29-.29H3.803a.29.29 0 0 0-.29.29c0 .16.13.29.29.29Zm0 1.508h3.204c.16 0 .29-.13.29-.29a.29.29 0 0 0-.29-.29H3.803a.29.29 0 0 0-.29.29c0 .16.13.29.29.29Zm0 1.508h3.204c.16 0 .29-.13.29-.29a.29.29 0 0 0-.29-.29H3.803a.29.29 0 0 0-.29.29c0 .16.13.29.29.29Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgChangePlanLight);
export default ForwardRef;
