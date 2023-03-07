 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowUpDown(
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
        d="M15.645 22a.77.77 0 0 1-.574-.259l-4.216-4.272-.037-.043a.805.805 0 0 1-.1-.844.769.769 0 0 1 .69-.443l1.85-.017-.003-2.938c0-.673.546-1.218 1.22-1.218h2.351c.674 0 1.22.545 1.22 1.218l.002 2.947 1.853.014c.298 0 .562.17.693.443a.8.8 0 0 1-.14.883l-4.235 4.27a.763.763 0 0 1-.574.259Zm-3.387-4.727 3.387 3.431 3.406-3.431-1.37-.012h-.01a.78.78 0 0 1-.76-.79l-.002-3.287a.082.082 0 0 0-.082-.082h-2.353a.082.082 0 0 0-.082.082l.006 3.287a.78.78 0 0 1-.756.79h-.012l-1.372.012Zm-2.068-5.245H7.84a1.219 1.219 0 0 1-1.218-1.219l-.003-2.943-1.85-.014a.765.765 0 0 1-.693-.443.8.8 0 0 1 .14-.884l4.232-4.267a.76.76 0 0 1 1.145 0l4.214 4.267c.014.014.025.028.037.043.19.236.23.568.099.843a.769.769 0 0 1-.69.444l-1.847.014.003 2.94a1.22 1.22 0 0 1-1.219 1.22ZM7.755 7.522l.003 3.284c0 .046.037.083.082.083h2.35a.082.082 0 0 0 .082-.082l-.002-3.285a.78.78 0 0 1 .755-.79h.012l1.369-.01-3.384-3.43-3.4 3.43 1.366.01H7a.78.78 0 0 1 .755.79Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgArrowUpDown);
export default ForwardRef;
