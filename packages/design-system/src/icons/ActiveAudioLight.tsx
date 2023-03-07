 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgActiveAudioLight(
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
        d="M19.222 5.885c.111.103 2.73 2.53 2.775 6.683.006.148.148 4.232-2.738 6.84a.796.796 0 0 1-.54.207.819.819 0 0 1-.607-.273.828.828 0 0 1 .066-1.158c2.317-2.092 2.197-5.536 2.194-5.57-.037-3.47-2.214-5.49-2.237-5.51a.828.828 0 0 1-.063-1.16.815.815 0 0 1 1.15-.059Zm-.965 6.723c.006.088.1 2.81-1.83 4.55a.809.809 0 0 1-1.147-.065.825.825 0 0 1 .066-1.158c1.346-1.215 1.29-3.267 1.286-3.287-.02-2.041-1.263-3.222-1.318-3.27a.827.827 0 0 1-.05-1.159.803.803 0 0 1 1.138-.06c.077.071 1.827 1.69 1.855 4.449Zm-6.108 5.598V6.642c-2.18.034-3.722.757-4.656 2.155-.017.045-.062.068-.088.108a.742.742 0 0 1-.177.222l-.022.017a.797.797 0 0 1-.498.188l-3.089.003.009 6.193 3.071-.003c.313 0 .578.188.714.45.015.025.046.037.057.068.925 1.41 2.496 2.135 4.68 2.163ZM12.23 5c.885 0 1.543.666 1.543 1.48v11.894c0 .811-.652 1.472-1.455 1.472-3.338 0-5.103-1.38-6.04-2.684l-3.454.003a.814.814 0 0 1-.812-.817L2 8.515a.818.818 0 0 1 .811-.82l3.481-.003C7.232 6.383 8.99 5 12.23 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgActiveAudioLight);
export default ForwardRef;
