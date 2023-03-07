 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMusicLight(
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
        d="m9.864 4.575.003-1.696 9.621 2.564.128.026v1.705L9.864 4.575Zm-3.312 12.24c-.077 0-.171.003-.26 0-.725-.009-2.418-.276-2.418-2.516 0-2.233 1.676-2.492 2.396-2.498.088 0 .185 0 .27.003.731.017 2.433.296 2.433 2.512 0 2.217-1.693 2.485-2.421 2.499Zm10.643 4.317-.26.003c-.725-.009-2.418-.276-2.418-2.516 0-2.234 1.676-2.49 2.396-2.495l.27.002c.732.017 2.436.296 2.436 2.513-.003 2.211-1.696 2.482-2.424 2.493Zm3.3-15.66a.884.884 0 0 0-.825-.874l-9.69-2.58L9.868 2a.885.885 0 0 0-.89.876v9.036c-.641-.655-1.54-.95-2.411-.97-.091-.004-.2 0-.3-.004C4.686 10.95 3 11.841 3 14.3c0 2.46 1.699 3.358 3.284 3.381.097.003.194.003.29 0 .53-.008 3.09-.213 3.267-3.053h.017l.012-9.155 9.752 2.6v8.163c-.64-.655-1.54-.954-2.416-.974l-.296-.003c-1.58.015-3.267.902-3.267 3.361s1.7 3.358 3.287 3.381l.285-.003c.549-.008 3.284-.219 3.284-3.36 0-.052-.012-.092-.015-.143h.015V5.472h-.003Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMusicLight);
export default ForwardRef;
