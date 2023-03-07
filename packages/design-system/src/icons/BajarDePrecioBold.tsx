 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBajarDePrecioBold(
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
        d="M7.392 10.69c-.074-.05-.108-.107-.108-.196a.206.206 0 0 1 .21-.201.3.3 0 0 1 .154.05c.327.217.781.436 1.31.436.79 0 1.277-.407 1.277-1.007 0-.491-.276-.841-1.18-.955l-.233-.028c-.964-.123-1.413-.586-1.413-1.305 0-.856.608-1.385 1.543-1.385.524 0 .964.137 1.268.327.094.057.137.131.137.202a.194.194 0 0 1-.193.196h-.003a.33.33 0 0 1-.145-.042 2.2 2.2 0 0 0-1.08-.29c-.717 0-1.118.398-1.118.955 0 .506.313.833 1.16.94l.225.03c.978.122 1.44.585 1.44 1.324 0 .833-.593 1.427-1.739 1.427a2.688 2.688 0 0 1-1.512-.477Z"
        fill="currentColor"
      />
      <path
        d="M8.907 11.381a2.934 2.934 0 0 1-1.638-.517.43.43 0 0 1-.199-.37.417.417 0 0 1 .424-.415c.096.003.19.032.27.086.398.264.799.398 1.194.398.654 0 1.063-.305 1.063-.793 0-.322-.12-.634-.995-.745l-.23-.029c-1.322-.167-1.6-.918-1.6-1.515 0-.97.69-1.598 1.756-1.598.517 0 1.006.128 1.382.359.207.127.238.295.238.383a.41.41 0 0 1-.409.41.548.548 0 0 1-.242-.066l-.005-.003a1.993 1.993 0 0 0-.978-.264c-.566 0-.904.279-.904.742 0 .196 0 .606.972.73l.225.03c1.344.17 1.629.929 1.629 1.537 0 .486-.18.896-.515 1.188-.344.296-.841.452-1.438.452Zm-1.402-.872.009.005c.108.077.224.143.344.2a2.824 2.824 0 0 1-.333-.197c-.006 0-.014-.005-.02-.008Zm1.95-1.837c.418.105.702.287.856.549-.19-.347-.569-.486-.856-.549Zm-1.768-.784c.12.31.392.514.827.625-.423-.12-.7-.327-.827-.625Z"
        fill="currentColor"
      />
      <path
        d="M9.01 12.004a.355.355 0 0 1-.356-.355v-6.03a.355.355 0 0 1 .71 0v6.032c0 .194-.159.353-.355.353Z"
        fill="currentColor"
      />
      <path
        d="M20.625 14.565a.567.567 0 0 0-.529-.36h-2.758V3.406c0-.867-.54-1.407-1.407-1.407H9.833c-.858 0-1.393.54-1.393 1.407v.262c-1.31.09-2.35.5-3.101 1.225C4.449 5.75 4 7.018 4 8.661c0 1.643.45 2.908 1.339 3.767.75.722 1.79 1.134 3.101 1.225v.551H5.684a.568.568 0 0 0-.384.99l7.207 6.655a.566.566 0 0 0 .77 0l7.204-6.658a.567.567 0 0 0 .145-.626ZM5.137 8.661c0-2.607 1.265-3.875 3.872-3.875s3.872 1.268 3.872 3.875-1.268 3.872-3.872 3.872-3.872-1.265-3.872-3.872Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBajarDePrecioBold);
export default ForwardRef;