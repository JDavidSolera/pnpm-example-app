 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgExport(
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
        d="M11.647 16.693 5.66 10.705a.59.59 0 1 1 .788-.88c.014.015.031.03.043.044l4.977 4.988V2.59A.593.593 0 0 1 12.06 2c.327 0 .589.265.589.59v12.27l4.883-4.883a.59.59 0 0 1 .834.833l-5.882 5.883a.837.837 0 0 1-.2.13.555.555 0 0 1-.446 0 .735.735 0 0 1-.19-.13Zm9.764-.14a.59.59 0 0 1 .589.586v4.272c0 .324-.262.589-.586.589H2.586A.585.585 0 0 1 2 21.414v-4.272a.59.59 0 0 1 1.178 0v3.683h17.65v-3.683a.582.582 0 0 1 .583-.589Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgExport);
export default ForwardRef;
