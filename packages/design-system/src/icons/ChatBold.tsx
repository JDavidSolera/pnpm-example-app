 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgChatBold(
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
        d="M14.335 2h6.098c.783 0 1.431.581 1.531 1.338.02.102.03.207.03.314v3.962c0 .905-.733 1.638-1.638 1.638h-3.339c-.319.504-.992 1.565-1.126 1.767-.296.452-.717.725-1.098.725a.763.763 0 0 1-.114-.009c-.42-.065-.762-.469-.762-.901V9.252h-.111c-.884 0-1.553-.705-1.553-1.638V3.652c0-.904.734-1.638 1.638-1.638h.23c.07-.01.142-.014.214-.014Zm.014 3.626a.554.554 0 1 0 1.108.002.554.554 0 0 0-1.107-.002Zm2.219 0a.554.554 0 1 0 1.11 0 .555.555 0 0 0-1.11 0Zm2.218 0a.553.553 0 1 0 1.11 0 .555.555 0 0 0-1.11 0ZM5.811 14.284c.666.705 1.627 1.06 2.861 1.06 1.232 0 2.196-.358 2.862-1.06.625-.663.944-1.587.944-2.745 0-1.157-.319-2.082-.944-2.745-.666-.702-1.627-1.06-2.862-1.06-1.234 0-2.195.355-2.86 1.06-.627.663-.945 1.588-.945 2.745 0 1.158.316 2.082.944 2.745ZM2.57 22h12.204a.569.569 0 0 0 .569-.569v-1.055c0-1.365-.361-2.418-1.075-3.137-.714-.72-1.764-1.084-3.123-1.084H6.198c-1.357 0-2.409.367-3.123 1.084C2.361 17.955 2 19.01 2 20.376v1.055a.57.57 0 0 0 .569.569Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgChatBold);
export default ForwardRef;
