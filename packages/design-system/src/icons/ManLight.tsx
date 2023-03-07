 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgManLight(
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
        d="M10.977 3.195c-.264.248-.395.64-.395 1.17 0 1.038.498 1.525 1.568 1.525 1.072 0 1.573-.484 1.573-1.526 0-.526-.134-.919-.398-1.166-.256-.242-.65-.364-1.173-.364-.526 0-.919.122-1.175.361ZM12.15 6.72c-1.54 0-2.425-.859-2.425-2.356 0-.762.222-1.357.658-1.766C10.8 2.202 11.396 2 12.15 2c.75 0 1.345.202 1.766.598.439.41.66 1.004.66 1.766 0 1.497-.884 2.356-2.426 2.356Zm4.413 8.317a.534.534 0 0 0 .39-.643c0-.002 0-.005-.003-.008l-1.215-4.356a.814.814 0 0 1-.043-.117 1.63 1.63 0 0 0-.017-.057c-.182-.88-.99-1.517-1.918-1.517h-2.706c-.925 0-1.733.638-1.918 1.517-.002.014-.008.026-.01.037a.313.313 0 0 1-.035.094l-1.23 4.405a.53.53 0 0 0 .38.645h.005c.14.04.287.023.412-.05a.51.51 0 0 0 .25-.314l.541-2.91c.04-.214.228-.353.461-.342a.42.42 0 0 1 .39.415v8.792a.539.539 0 0 0 1.079 0V15.39c0-.23.19-.415.426-.415h1.207c.236 0 .43.188.43.415v5.241c0 .296.241.535.54.535a.537.537 0 0 0 .538-.535V11.84c0-.216.17-.395.39-.415.23-.009.418.128.458.341l.546 2.94c.029.1.12.21.245.281.122.071.27.088.407.051Zm1.215-.867a1.363 1.363 0 0 1-.97 1.667c-.006 0-.01.003-.015.003a1.418 1.418 0 0 1-1.422-.416v5.204c0 .755-.627 1.37-1.395 1.37a1.382 1.382 0 0 1-1.394-1.37v-4.822h-.341v4.825c0 .754-.626 1.369-1.395 1.369-.768 0-1.394-.615-1.394-1.369v-5.207c-.358.399-.91.558-1.425.416a1.362 1.362 0 0 1-.985-1.656l.003-.009 1.218-4.362a.839.839 0 0 1 .048-.142c.273-1.258 1.429-2.165 2.752-2.165h2.706c1.323 0 2.475.907 2.748 2.16.026.06.046.116.057.173l1.204 4.33Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgManLight);
export default ForwardRef;