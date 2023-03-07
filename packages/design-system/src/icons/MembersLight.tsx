 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMembersLight(
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
        d="M9.748 5.584c-.534.523-.805 1.34-.805 2.427 0 1.084.27 1.9.805 2.42.515.507 1.3.763 2.33.763 1.029 0 1.814-.256 2.334-.762.537-.524.808-1.337.808-2.421 0-1.084-.27-1.9-.808-2.427-.52-.509-1.305-.765-2.332-.765-1.032 0-1.817.256-2.332.765Zm2.33 6.426c-1.246 0-2.217-.333-2.887-.989-.696-.681-1.05-1.693-1.05-3.01 0-1.314.354-2.332 1.05-3.013C9.863 4.336 10.835 4 12.077 4c1.242 0 2.217.336 2.893.995.701.684 1.058 1.699 1.058 3.016s-.357 2.329-1.058 3.01c-.676.658-1.648.99-2.893.99ZM5.19 10.66c-.215.21-.324.563-.324 1.046 0 .483.109.834.322 1.044.207.204.546.308 1.003.308.46 0 .8-.104 1.01-.308.215-.21.324-.56.324-1.04 0-.484-.11-.835-.325-1.044-.21-.205-.549-.311-1.01-.311-.453-.003-.79.1-1 .305Zm1.004 3.214c-.673 0-1.2-.181-1.564-.535-.377-.37-.57-.92-.57-1.633s.193-1.262.57-1.633c.365-.356.891-.54 1.564-.54.675 0 1.202.18 1.567.537.38.371.572.923.572 1.633 0 .713-.193 1.263-.572 1.633-.363.357-.892.538-1.567.538Zm10.81-3.229c-.215.21-.325.564-.325 1.047 0 .48.11.83.325 1.04.21.205.55.308 1.01.308.46 0 .796-.103 1.006-.307.212-.21.322-.56.322-1.041 0-.483-.11-.834-.325-1.047-.207-.204-.547-.307-1.004-.307-.46 0-.799.103-1.009.307Zm-.557 2.68c-.38-.37-.573-.92-.573-1.633s.193-1.262.573-1.633c.365-.36.89-.54 1.566-.54s1.202.18 1.567.537c.377.37.57.923.57 1.636 0 .71-.19 1.26-.57 1.63-.365.357-.891.535-1.567.535-.675.003-1.201-.178-1.566-.532ZM21.4 17.78v-.563c0-.58-.17-1.072-.5-1.417-.362-.386-.911-.581-1.587-.581h-1.24c.579.67.918 1.546.993 2.561H21.4Zm-3.125 1.398v-.966c0-1.055-.313-1.947-.909-2.58-.652-.686-1.653-1.054-2.892-1.054H9.674c-1.24 0-2.231.368-2.884 1.055-.595.63-.909 1.52-.909 2.579v.966h12.395Zm-13.182-1.38c.072-1.015.405-1.892.983-2.562H4.892c-.675 0-1.224.198-1.587.58-.322.343-.5.835-.5 1.415v.567h2.289Zm16.388-2.562c.474.5.724 1.187.724 1.98v.728a.65.65 0 0 1-.644.656h-2.48v.949a.45.45 0 0 1-.452.451H5.528a.454.454 0 0 1-.452-.451v-.935H2.653A.655.655 0 0 1 2 17.956v-.725c0-.793.25-1.48.725-1.99.517-.537 1.265-.825 2.167-.825h2.151c.716-.434 1.61-.655 2.634-.655h4.801c1.015 0 1.9.213 2.616.638h2.223c.9.003 1.647.288 2.165.837Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMembersLight);
export default ForwardRef;
