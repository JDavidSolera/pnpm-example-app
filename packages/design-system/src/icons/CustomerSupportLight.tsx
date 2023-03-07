 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCustomerSupportLight(
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
        d="M5.915 15.74c.609.647 1.503.974 2.656.974 1.153 0 2.047-.327 2.656-.97.575-.613.868-1.47.868-2.555 0-1.084-.293-1.944-.868-2.553-.61-.647-1.503-.974-2.656-.974-1.153 0-2.047.327-2.656.974-.575.612-.869 1.469-.869 2.553 0 1.085.29 1.942.869 2.551Zm-.3-2.55c0-2.446 1.606-2.959 2.956-2.959 2.443 0 2.955 1.612 2.955 2.958 0 1.347-.512 2.956-2.955 2.956s-2.955-1.606-2.955-2.956ZM2 22.714c0 .157.128.285.285.285h12.572a.285.285 0 0 0 .285-.282V21.66c0-1.29-.336-2.275-.994-2.94-.658-.667-1.643-1.003-2.924-1.003H5.917c-1.28 0-2.263.336-2.923 1-.66.663-.994 1.653-.994 2.94v1.06Zm12.572-1.059v.775H2.57v-.775c0-1.13.277-1.987.826-2.54.55-.552 1.398-.83 2.522-.83h5.307c1.125 0 1.976.278 2.523.83.546.553.825 1.407.825 2.54Zm.043-10.035a.525.525 0 0 0 .094.008c.312 0 .505-.297.586-.42v-.001c.037-.06.687-1.034 1.022-1.535h4.288A1.424 1.424 0 0 0 22 8.278V4.392a1.39 1.39 0 0 0-.416-.976A1.409 1.409 0 0 0 20.605 3h-7.132c-.774 0-1.48.666-1.48 1.395v3.886c.014.763.632 1.38 1.395 1.395h.825v1.38c0 .123 0 .494.402.565Zm-2.053-7.226c0-.416.45-.826.911-.826h7.132c.433 0 .826.393.826.826v3.889c0 .433-.393.826-.826.826h-4.441a.277.277 0 0 0-.237.125c-.042.063-1.059 1.583-1.113 1.668l-.014.02a.385.385 0 0 0-.017.026V9.39a.286.286 0 0 0-.285-.284h-1.11c-.433 0-.826-.393-.826-.826V4.395Zm4.672 4.04a.327.327 0 0 0 0-.464.32.32 0 0 0-.242-.097h-.008c-.183 0-.33.15-.33.333 0 .088.036.17.099.23.063.063.148.1.24.097a.322.322 0 0 0 .241-.1Zm-.578-1.165c0 .18.145.328.328.328a.32.32 0 0 0 .324-.328v-.518c.029-.063.194-.196.276-.26l.055-.044c.033-.026.065-.053.096-.08l.023-.02c.222-.194.524-.459.524-.991 0-.695-.595-1.284-1.301-1.284a1.28 1.28 0 0 0-1.301 1.284c.005.17.142.307.313.313a.326.326 0 0 0 .341-.313c0-.359.277-.63.647-.63.304 0 .646.26.646.63 0 .225-.097.319-.299.498l-.023.02c-.02.019-.047.04-.076.063l-.046.037c-.222.173-.527.413-.527.766v.53Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCustomerSupportLight);
export default ForwardRef;
