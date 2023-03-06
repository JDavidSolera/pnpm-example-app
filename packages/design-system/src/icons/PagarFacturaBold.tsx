 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPagarFacturaBold(
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
        d="M7.69 8.78V7.27c.193.049.378.12.549.217l.005.002c.072.04.154.063.234.066.219 0 .395-.176.395-.395 0-.086-.03-.248-.233-.373a2.46 2.46 0 0 0-.953-.327v-.484a.426.426 0 1 0-.854 0v.492c-.814.148-1.318.723-1.318 1.55 0 .552.236 1.23 1.318 1.46v1.596a2.413 2.413 0 0 1-.769-.35.48.48 0 0 0-.264-.086.407.407 0 0 0-.41.404.415.415 0 0 0 .193.359c.373.256.8.424 1.247.486v.384a.426.426 0 1 0 .854 0v-.39c.39-.06.72-.201.967-.415.333-.29.51-.697.51-1.18.006-.58-.256-1.303-1.472-1.508Zm-1.361-.797c0-.347.182-.592.507-.7v1.34c-.436-.154-.507-.404-.507-.64Zm1.36 1.635c.575.145.666.418.666.697 0 .387-.247.66-.666.765V9.618Z"
        fill="currentColor"
      />
      <path
        d="M21.997 7.834v-.008c0-.015 0-.026-.003-.04v-.014l-.008-.052c-.003-.017-.009-.03-.011-.045 0-.006-.003-.009-.006-.014-.003-.012-.009-.023-.014-.037l-.006-.012a.345.345 0 0 0-.023-.045v-.003l-.025-.043-.009-.011-.023-.031-.008-.012a.422.422 0 0 0-.034-.037L16.56 2.168c-.011-.012-.026-.023-.037-.034l-.011-.009-.032-.023-.01-.008-.044-.026c-.014-.008-.03-.014-.045-.022l-.012-.006a.14.14 0 0 0-.037-.012l-.014-.002c-.014-.006-.031-.009-.048-.012l-.051-.008h-.015c-.014-.003-.028-.006-.042-.006h-.009c-2.892.003-7.053.003-7.71.006-.737 0-1.196.458-1.196 1.189v.76c-1.653.002-2.948.44-3.842 1.302C2.472 6.153 2 7.487 2 9.214c0 1.726.472 3.058 1.406 3.957.894.862 2.186 1.3 3.842 1.302v6.324c0 .37.109.668.32.882.21.213.506.321.879.321h12.38c.72 0 1.17-.452 1.173-1.175-.003-.46 0-8.434-.003-12.99ZM7.263 13.367c-2.798 0-4.156-1.36-4.156-4.156 0-2.796 1.36-4.156 4.156-4.156 1.463 0 2.499.322 3.165.987.666.666.99 1.701.99 3.169 0 2.799-1.36 4.156-4.155 4.156Zm11.285 5.02h-8.169a.57.57 0 0 1-.569-.568.57.57 0 0 1 .57-.57h8.165a.568.568 0 0 1 .003 1.138Zm0-3.328h-6.845a.57.57 0 0 1-.57-.568.57.57 0 0 1 .57-.57h6.845a.57.57 0 0 1 .569.57.57.57 0 0 1-.57.568Zm0-3.328h-4.625a.57.57 0 0 1-.57-.569.57.57 0 0 1 .57-.569h4.625a.57.57 0 0 1 .569.57.57.57 0 0 1-.57.568Zm-.35-4.466c-.487-.003-.843-.162-1.085-.492-.242-.33-.375-.828-.378-1.436V3.946l3.318 3.32h-1.855Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPagarFacturaBold);
export default ForwardRef;
