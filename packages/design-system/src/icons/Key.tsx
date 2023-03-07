 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgKey(
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
        d="M5.898 13.142c.467 0 .612-.15.612-.642 0-.495-.142-.646-.612-.646s-.612.151-.612.646c0 .489.146.642.612.642Zm0-2.603c1.161 0 1.855.732 1.855 1.958 0 1.208-.711 1.958-1.855 1.958-1.147 0-1.858-.75-1.858-1.958.003-1.226.697-1.958 1.858-1.958Zm13.558 2.938 1.013-1.017-1.303-1.282h-9.6a.624.624 0 0 1-.57-.39c-.418-.996-1.311-1.479-2.725-1.479-2.06 0-3.022 1.012-3.022 3.188 0 2.173.962 3.187 3.022 3.187 1.337 0 2.208-.402 2.586-1.198.04-.083.131-.33.131-.332a.622.622 0 0 1 .578-.415h4.575l.933-1.417a.62.62 0 0 1 .495-.283.628.628 0 0 1 .51.255l.694.95.53-.898a.604.604 0 0 1 .967-.117l1.186 1.248Zm2.345-1.503a.681.681 0 0 1 .006.956l-1.932 1.94a.601.601 0 0 1-.871-.012l-1.056-1.113-.589.996a.623.623 0 0 1-.498.31.58.58 0 0 1-.523-.255l-.723-.987-.635.963a.611.611 0 0 1-.512.282h-4.49c-.002.01-.008.016-.011.025C9.549 15.955 8.57 17 6.268 17 3.517 17 2 15.402 2 12.5S3.517 8 6.268 8c2.108 0 3.156.944 3.673 1.869h9.467c.156 0 .31.064.424.175l1.969 1.93Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgKey);
export default ForwardRef;
