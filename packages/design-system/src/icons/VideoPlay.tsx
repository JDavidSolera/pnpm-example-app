 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgVideoPlay(
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
        d="M19.564 20.748c1.728-.138 2.006-1.521 2.05-2.348h-2.05v2.348ZM2.387 18.42c.031.398.154 1.124.636 1.64.328.351.801.564 1.415.648V18.42h-2.05ZM3.33 3.797c-.222.14-.854.573-.936 2.019h2.045V3.427c-.32.038-.736.129-1.109.37ZM21.62 5.8c-.018-.375-.115-1.152-.623-1.696-.328-.354-.81-.573-1.436-.66V5.8h2.06Zm-2.056 11.201h2.06v-2.332h-2.06V17Zm0-7.466h2.056V7.2h-2.056v2.335Zm0 3.731h2.056v-2.335h-2.056v2.335ZM5.812 3.406v17.342h12.377V3.4c-3.787 0-10.176.007-12.377.007ZM2.378 17.02h2.06v-2.332h-2.06v2.332Zm0-7.476h2.06V7.218h-2.06v2.326Zm0 1.4v2.341h2.06v-2.341h-2.06ZM18.928 2c4.39 0 4.067 4.135 4.067 4.135s.003 7.219.003 11.874c0 3.813-2.73 4.16-3.716 4.16-.216 0-.35-.018-.35-.018H5.047c-4.32 0-4.044-4.12-4.044-4.12S1 10.587 1 6.113C1 2.273 3.968 2 4.81 2c.141 0 .22.006.22.006S14.54 2 18.927 2ZM9.484 14.97l4.908-2.887-4.908-2.886v5.772Zm6.627-3.494a.704.704 0 0 1 .344.607c0 .25-.131.482-.344.607l-6.972 4.098a.679.679 0 0 1-.688 0 .704.704 0 0 1-.345-.607V7.985c0-.25.132-.482.345-.607a.678.678 0 0 1 .688 0l6.972 4.098Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgVideoPlay);
export default ForwardRef;
