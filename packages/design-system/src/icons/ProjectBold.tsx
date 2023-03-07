 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProjectBold(
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
        d="M18.276 10.056c-.54 0-.993-.162-1.309-.472-.313-.302-.475-.734-.475-1.244V7.185l2.954 2.871h-1.17ZM13.993 5.35h-4.06c-.695 0-1.301.6-1.301 1.284v10.154l-4.363.017.003-13.526 9.721-.017v2.088Zm7.291 4.875a.814.814 0 0 0-.21-.364L16.68 5.591a.854.854 0 0 0-.598-.242h-.817V3.261c0-.683-.583-1.261-1.275-1.261H4.275C3.583 2 3 2.578 3 3.26v13.544c0 .668.595 1.258 1.272 1.258h4.36v2.655c0 .697.595 1.283 1.3 1.283h10.103c.706 0 1.297-.586 1.297-1.283V10.475a.688.688 0 0 0-.048-.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProjectBold);
export default ForwardRef;
