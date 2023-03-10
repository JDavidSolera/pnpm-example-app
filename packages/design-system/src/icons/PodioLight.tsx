 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPodioLight(
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
        d="M9.395 4.774a.256.256 0 0 0 .06.27l.927.931a.49.49 0 0 1 .126.39l-.22 1.311c-.017.103.02.2.103.257a.212.212 0 0 0 .23.011l1.15-.62a.443.443 0 0 1 .432.009l1.133.61c.074.04.162.035.23-.01a.247.247 0 0 0 .103-.257l-.22-1.311a.469.469 0 0 1 .137-.401l.916-.92a.268.268 0 0 0 .06-.27.234.234 0 0 0-.188-.162l-1.283-.19a.451.451 0 0 1-.327-.24l-.578-1.203c-.082-.17-.335-.17-.415 0l-.575 1.195a.466.466 0 0 1-.361.25l-1.252.188a.23.23 0 0 0-.188.162Zm.242 1.645-.785-.788a1.089 1.089 0 0 1-.26-1.121c.132-.39.464-.666.866-.729l1.067-.16.48-1.004a1.077 1.077 0 0 1 1.95-.002l.483 1.004 1.067.16c.401.06.734.338.865.728.134.395.035.825-.261 1.12l-.786.789.185 1.121c.069.421-.102.83-.45 1.076a1.09 1.09 0 0 1-1.129.065l-.947-.515-.948.515c-.162.088-.339.13-.512.13a1.09 1.09 0 0 1-1.067-1.272l.182-1.117Zm11.512 14.699v-3.739c-.017-.003-.034-.003-.051-.003h-5.435c-.017 0-.034 0-.048.003v3.739c.014 0 .031.003.048.003h5.435c.017 0 .034 0 .051-.003Zm-11.868.023h5.435l.051-9.433-5.486-.002-.048 8.968v.464l.048.003ZM2.9 21.12h5.435a.254.254 0 0 0 .048-.006v-6.223a.133.133 0 0 0-.048-.008H2.899a.133.133 0 0 0-.048.008v6.226c.011.003.031.003.048.003ZM15.663 22H2.9C2.404 22 2 21.653 2 21.252v-6.5c0-.434.464-.728.9-.728h5.434c.017 0 .034.009.048.009v-2.327c0-.459.421-.863.9-.863h5.434c.478 0 .899.404.899.863v4.814c.014 0 .034-.006.048-.006h5.435c.447 0 .9.214.9.623v4.214c0 .367-.374.643-.903.643h-5.432V22Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPodioLight);
export default ForwardRef;
