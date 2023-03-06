 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPodio(
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
        d="m13.407 7.93.003.003s.003 0 .003-.003l-.197-1.355a.675.675 0 0 1 .197-.583l.89-.905-1.263-.27a.66.66 0 0 1-.478-.35l-.566-1.2-.595 1.186a.66.66 0 0 1-.524.367l-1.214.185.902 1.001c.139.143.21.37.176.566l-.213 1.304 1.146-.564a.656.656 0 0 1 .632.011l1.101.607ZM9.463 6.666l-.694-.705a1.3 1.3 0 0 1-.304-1.33c.15-.46.54-.79 1.013-.861l.936-.142.424-.897A1.26 1.26 0 0 1 11.982 2c.489 0 .927.279 1.14.731l.427.9.936.139a1.27 1.27 0 0 1 1.016.862c.154.47.037.979-.307 1.329l-.694.705.165 1.008c.08.498-.123.984-.527 1.272-.387.273-.91.304-1.326.076l-.83-.455-.829.452a1.228 1.228 0 0 1-.6.157c-.256 0-.506-.08-.725-.233A1.295 1.295 0 0 1 9.3 7.67l.162-1.005Zm6.283 14.065h5.005v-3.215h-5.005v3.215ZM3.246 15.1v5.631h5.002V15.1H3.246ZM14.5 12.016H9.495v2.728c0 .009.003.012.003.02v5.987H14.5v-8.735ZM14.659 22H3.089C2.49 22 2 21.57 2 21.067v-6.303c0-.563.566-.913 1.09-.913H8.25v-2.04c0-.555.51-1.044 1.087-1.044h5.321c.58 0 1.09.486 1.09 1.044v4.456h5.161c.632 0 1.087.341 1.087.81v4.09c0 .477-.45.83-1.09.83H14.66V22Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPodio);
export default ForwardRef;
