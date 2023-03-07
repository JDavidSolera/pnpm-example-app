 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWarning(
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
        d="M12.376 20.74c2.488-.046 8.269-.988 8.269-8.716 0-7.73-5.815-8.707-8.317-8.766a29.665 29.665 0 0 0-.73-.009h-.173c-2.461.023-8.186.916-8.186 8.715 0 7.817 5.778 8.744 8.263 8.778l.291.003c.207 0 .408-.003.583-.006ZM12.36 2.01c1.95.046 9.528.82 9.528 10.016 0 9.216-7.592 9.93-9.488 9.967-.181.003-.39.006-.6.006-.105 0-.21-.003-.311-.003C9.493 21.966 2 21.24 2 11.967 2 2.706 9.422 2.017 11.417 2h.181c.26 0 .53.003.761.011Zm-.418 13.539a.624.624 0 0 1-.623-.626V6.29a.622.622 0 1 1 1.245 0v8.633a.628.628 0 0 1-.623.626Zm0 .85a.714.714 0 0 1 .002 1.426h-.002a.71.71 0 0 1-.708-.714.71.71 0 0 1 .707-.712Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;
