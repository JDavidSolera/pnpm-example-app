 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPodioBold(
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
        d="M20.91 16.466c.632 0 1.09.342 1.09.811v4.087c0 .478-.45.833-1.093.833h-3.913v-5.73h3.916ZM2 14.963c0-.563.566-.913 1.09-.913h3.913v8.147H3.09c-.6 0-1.09-.43-1.09-.933v-6.3Zm12.66-3.995c.581 0 1.09.487 1.09 1.044v10.191H8.253V12.015c0-.555.51-1.041 1.09-1.041h5.319v-.006ZM10.88 5.02l-1.215.185.902 1.002c.14.142.21.37.176.566l-.213 1.304 1.147-.567a.636.636 0 0 1 .631.015l1.102.603.002.003s.003 0 .006-.003l-.199-1.355a.686.686 0 0 1 .196-.583l.891-.905-1.264-.27a.653.653 0 0 1-.478-.35l-.566-1.198-.595 1.186a.648.648 0 0 1-.523.367ZM9.464 6.867l-.694-.705a1.294 1.294 0 0 1-.302-1.33c.151-.458.541-.788 1.01-.859l.937-.142.424-.897a1.26 1.26 0 0 1 1.144-.73c.49 0 .928.278 1.141.73l.427.9.936.14c.473.07.863.403 1.016.861.154.473.037.98-.307 1.33l-.695.708.165 1.007a1.314 1.314 0 0 1-.526 1.272 1.26 1.26 0 0 1-1.326.077l-.618-.338-.213-.117-.213.117-.615.338a1.262 1.262 0 0 1-1.596-.339 1.296 1.296 0 0 1-.254-1.01l.16-1.013Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPodioBold);
export default ForwardRef;
