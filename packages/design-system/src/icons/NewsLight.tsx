 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgNewsLight(
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
        d="M16.123 18.972a.661.661 0 0 0 .583-.105.747.747 0 0 0 .291-.594V6.723a.737.737 0 0 0-.291-.592.656.656 0 0 0-.583-.103L2.926 10.02v-.495a.274.274 0 0 0-.274-.274.274.274 0 0 0-.275.274v5.953c0 .153.122.275.275.275a.274.274 0 0 0 .274-.275v-.497l3.845 1.163a.564.564 0 0 0-.015.042l-.238.758a.556.556 0 0 0 .363.696l2.304.722a.534.534 0 0 0 .425-.042.546.546 0 0 0 .271-.325l.239-.757a.537.537 0 0 0 .018-.076l5.985 1.81Zm.164-12.418a.093.093 0 0 1 .025-.004c.022 0 .041.008.063.025.045.03.07.089.07.15v11.553a.185.185 0 0 1-.07.15c-.03.023-.06.03-.094.02L3.068 14.45c-.061-.02-.105-.088-.105-.169v-3.56c0-.081.044-.15.105-.17l13.213-3.996.006-.002Zm2.506 5.957h2.753a.278.278 0 0 0 .277-.277.278.278 0 0 0-.277-.278h-2.753a.278.278 0 0 0-.278.278c0 .153.125.277.278.277ZM9.35 17.83l-2.303-.722.238-.757 2.304.721-.239.758Zm11.273.28a.278.278 0 0 0 .391 0 .277.277 0 0 0 0-.391l-1.945-1.946a.276.276 0 1 0-.391.392l1.945 1.945Zm-1.937-9.47a.278.278 0 0 0 .391 0l1.946-1.945a.276.276 0 1 0-.391-.39l-1.946 1.945a.276.276 0 0 0 0 .39Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgNewsLight);
export default ForwardRef;
