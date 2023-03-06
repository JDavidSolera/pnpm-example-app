 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCopyLight(
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
        d="M11.73 16.552 2.998 12.02l2.207-1.157 6.066 3.149a.98.98 0 0 0 .906.003l6.183-3.155 2.25 1.16-8.882 4.532Zm8.88-1.096-8.88 4.532-8.731-4.532L5.206 14.3l6.066 3.151a.979.979 0 0 0 .457.112c.154 0 .31-.036.45-.106L18.36 14.3l2.25 1.156ZM11.73 4.011l8.88 4.572-8.88 4.535-8.731-4.535 8.73-4.572Zm9.879 8.011c0-.38-.212-.732-.547-.902l-1.596-.822 1.593-.813a1.016 1.016 0 0 0 .003-1.805l-8.88-4.571a.997.997 0 0 0-.913.006L2.54 7.685a1.013 1.013 0 0 0 .003 1.797l1.57.816-1.573.825a1.015 1.015 0 0 0 .003 1.797l1.57.815-1.573.825a1.016 1.016 0 0 0 .003 1.796l8.728 4.532a.977.977 0 0 0 .907.003l8.88-4.532a1.017 1.017 0 0 0 .003-1.805l-1.596-.822 1.593-.813c.338-.17.55-.517.55-.897Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCopyLight);
export default ForwardRef;
