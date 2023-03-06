 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgEdit(
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
        d="M19.908 5.84c-.313.308-5.31 4.727-6.21 5.546l-2.691.888.88-2.62c.608-.539 5.918-5.217 6.265-5.56.64-.638 1.42-.34 1.76 0 .23.232.375.574.372.898 0 .322-.137.63-.376.848ZM18.246 17.9c0 .754-.202 1.317-.623 1.724-.455.441-1.155.663-2.077.663H6.414c-.922 0-1.622-.222-2.078-.663-.418-.404-.623-.967-.623-1.722V7.414c0-2.012 1.469-2.436 2.7-2.436h8.18a1408.895 1408.895 0 0 1-3.888 3.432c-.193.17-.338.39-.421.637l-1.056 3.139a1.467 1.467 0 0 0 1.858 1.867l3.162-1.042c.188-.063.362-.162.504-.29.031-.029 1.821-1.608 3.497-3.093-.003-.003-.003 8.272-.003 8.272ZM22 4.995a3.043 3.043 0 0 0-.877-2.117c-1.027-1.027-2.87-1.306-4.183 0-.042.043-.199.185-.44.401a26.634 26.634 0 0 0-.954-.017H6.414C3.734 3.265 2 4.892 2 7.414V17.9c0 1.226.384 2.222 1.147 2.953.788.763 1.887 1.147 3.27 1.147h9.132c1.38 0 2.481-.384 3.27-1.144.76-.734 1.146-1.727 1.146-2.956l-.008-9.798a76.294 76.294 0 0 0 1.155-1.041A2.859 2.859 0 0 0 22 4.995Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
