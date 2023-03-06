 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMulticontenido(
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
        d="M15.227 16.504v-5.548c0-1.422.785-2.207 2.207-2.207h.944V8.74c0-.879-.18-1.534-.54-1.944-.363-.415-.935-.619-1.747-.619H5.466c-.811 0-1.383.204-1.746.62-.357.41-.54 1.064-.54 1.943v5.201c0 .88.18 1.534.54 1.944.363.416.935.62 1.746.62h9.761Zm0 1.177h-9.76c-1.157 0-2.045-.345-2.638-1.02C2.277 16.029 2 15.115 2 13.94v-5.2c0-1.175.28-2.09.829-2.72C3.422 5.342 4.307 5 5.466 5h10.625c1.157 0 2.045.345 2.638 1.02.551.632.829 1.546.829 2.72v.01h.97c1.443 0 2.207.763 2.207 2.206v6.834c-.003 1.443-.764 2.207-2.21 2.207h-3.091c-1.442 0-2.207-.764-2.207-2.207v-.109ZM8.047 20h5.177a.59.59 0 1 0 0-1.18H8.047a.592.592 0 0 0-.59.59c0 .325.266.59.59.59Zm8.36-9.047c0-.767.26-1.027 1.027-1.027v.003h3.1c.788 0 1.027.239 1.027 1.027v6.832c0 .398-.074.672-.218.814-.145.144-.416.215-.812.215h-3.094c-.395 0-.667-.074-.811-.215-.145-.145-.219-.42-.219-.814v-6.835Zm1.995 6.928c.097.1.277.219.578.219.3 0 .48-.121.578-.219.098-.097.21-.274.21-.569 0-.48-.31-.79-.788-.79-.478 0-.788.31-.788.79 0 .295.115.472.21.57Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMulticontenido);
export default ForwardRef;
