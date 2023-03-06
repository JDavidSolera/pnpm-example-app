 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFlatsLight(
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
        d="M19.656 11.735a.355.355 0 0 1-.327.202H3.799V3.158c0-.199.163-.361.365-.361h15.162c.21 0 .305.154.327.202.032.06.086.219-.002.341l-3.219 3.202a1.161 1.161 0 0 0 0 1.636l3.187 3.176a.354.354 0 0 1 .037.381ZM17.004 7.62a.368.368 0 0 1-.003-.518l3.256-3.238a1.14 1.14 0 0 0 .12-1.218A1.159 1.159 0 0 0 19.328 2H4.167C3.524 2 3 2.518 3 3.155v18.447a.4.4 0 0 0 .401.398.4.4 0 0 0 .402-.396v-8.87h15.526c.447 0 .848-.247 1.047-.646.2-.398.154-.865-.154-1.258l-3.218-3.21Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFlatsLight);
export default ForwardRef;
