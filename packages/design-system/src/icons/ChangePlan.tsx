 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgChangePlan(
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
        d="M11.567 21h8.358c.272 0 .544 0 .814-.003.443 0 .675-.199.793-.364.163-.227.182-.5.182-.71V8.93a.551.551 0 0 0-.165-.39l-4.374-4.374A.551.551 0 0 0 16.779 4h-5.215c-.673.003-1.093.418-1.093 1.085v14.813c0 .679.42 1.102 1.096 1.102Zm8.232-12.623-2.459-2.46v.833c0 .52.143.937.415 1.209s.69.418 1.212.418h.832Zm-3.58-3.253h-4.627v14.754h9.001V9.498h-1.627c-.824 0-1.516-.258-2.004-.746s-.743-1.18-.743-2.002V5.124Zm-3.034 7.086H19c.309 0 .56-.253.56-.561a.562.562 0 0 0-.56-.56h-5.815a.562.562 0 0 0-.56.56c0 .308.251.56.56.56Zm0 2.739H19c.309 0 .56-.252.56-.56a.562.562 0 0 0-.56-.561h-5.815a.562.562 0 0 0-.56.56c0 .309.251.561.56.561Zm0 2.756H19c.309 0 .56-.252.56-.56a.562.562 0 0 0-.56-.561h-5.815a.562.562 0 0 0-.56.56c0 .309.251.561.56.561Zm-6.11-9.558c0 .233.188.42.42.42.102 0 .197-.036.276-.098l.158-.137c.254-.22.694-.6.792-.698.37-.37.367-.833-.006-1.209-.21-.211-.724-.652-.893-.797a6.963 6.963 0 0 1-.054-.047.419.419 0 0 0-.592.048.419.419 0 0 0 .048.592l.036.03c.072.062.239.205.411.356H6.93c-.914 0-1.62.239-2.105.704-.508.485-.763 1.217-.763 2.168v.832a.42.42 0 1 0 .841 0V9.48c0-.715.171-1.24.505-1.562.322-.311.835-.468 1.522-.468h.731c-.14.12-.293.254-.439.378a.424.424 0 0 0-.146.32ZM5.62 20.98H2.852c-.51 0-.852-.345-.852-.858v-8.165c0-.499.35-.85.852-.85h3.292c.149 0 .292.06.398.163l2.431 2.431a.551.551 0 0 1 .166.396v6.037c0 .496-.345.84-.841.84l-2.678.006ZM3.122 19.86h4.892v-5.03h-.717c-.6 0-1.069-.166-1.391-.489-.322-.322-.488-.79-.488-1.39v-.72H3.122v7.629Zm3.137-7.282v.373c0 .737.3 1.037 1.038 1.037h.372l-1.41-1.41Zm-2.234 3.65h3.098a.42.42 0 1 0 0-.84H4.025a.42.42 0 1 0 0 .84Zm0 1.459h3.098a.42.42 0 1 0 0-.842H4.025a.42.42 0 1 0 0 .842Zm0 1.458h3.098a.42.42 0 1 0 0-.842H4.025a.42.42 0 1 0 0 .842Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgChangePlan);
export default ForwardRef;
