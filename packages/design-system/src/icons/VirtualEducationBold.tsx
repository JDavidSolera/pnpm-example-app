 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgVirtualEducationBold(
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
        d="M21.685 16.76c.36 0 .652.295.652.66a.655.655 0 0 1-.652.658h-9.637a1.3 1.3 0 0 1-.795.489c-.808.146-1.946.455-2.763 1.105a1.498 1.498 0 0 1-.932.328c-.328 0-.656-.11-.932-.328-.817-.65-1.952-.96-2.763-1.105a1.32 1.32 0 0 1-1.084-1.305v-1.254l3.865 1.74a2.088 2.088 0 0 0 1.715 0l3.975-1.786 1.29-.58a2.128 2.128 0 0 0 1.25-1.943 2.1 2.1 0 0 0-1.25-1.943L8.356 9.128a2.078 2.078 0 0 0-.856-.185c-.297 0-.583.06-.859.182l-3.094 1.39V7.164c0-.996.267-1.78.79-2.317.54-.559 1.335-.84 2.365-.84L19.116 4c1.03 0 1.825.285 2.365.841.525.54.79 1.32.79 2.316v5.893c0 1-.265 1.783-.79 2.33-.543.567-1.339.855-2.368.855l-6.788.003v.523h9.36Zm-14.182.295c-.173 0-.343-.036-.504-.11l-5.264-2.367A1.24 1.24 0 0 1 1 13.436c0-.498.28-.935.732-1.139l5.267-2.37a1.233 1.233 0 0 1 1.005 0l5.268 2.367c.452.204.735.641.735 1.142 0 .492-.289.941-.735 1.139l-5.268 2.368a1.16 1.16 0 0 1-.5.112Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgVirtualEducationBold);
export default ForwardRef;
