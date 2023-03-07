 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPaste(
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
        d="M20.705 20.517a.188.188 0 0 1-.188.188H9.177a.188.188 0 0 1-.188-.188v-4.211h5.786c.845 0 1.533-.689 1.533-1.534V8.986h4.21c.105 0 .187.083.187.188v11.343Zm-17.41-5.742V3.534a.24.24 0 0 1 .239-.24h11.238a.24.24 0 0 1 .239.24v11.24a.24.24 0 0 1-.24.24H3.532a.24.24 0 0 1-.236-.24c-.003 0-.003 0 0 0Zm17.222-7.083h-4.211V3.534c0-.848-.689-1.534-1.534-1.534H3.53C2.686 2 2 2.686 2 3.534v11.24c0 .846.689 1.534 1.534 1.534h4.158v4.21c0 .816.665 1.482 1.482 1.482h11.34c.82 0 1.483-.666 1.483-1.483V9.174a1.481 1.481 0 0 0-1.48-1.482Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPaste);
export default ForwardRef;
