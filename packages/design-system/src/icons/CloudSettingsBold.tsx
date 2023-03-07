 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCloudSettingsBold(
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
        d="M12.089 10.057c1.238 0 1.98.735 1.98 1.964 0 1.233-.739 1.965-1.98 1.965-1.242 0-1.98-.735-1.98-1.965s.741-1.964 1.98-1.964Zm4.538 2.287v-.642a.752.752 0 0 0-.75-.747h-.522a3.442 3.442 0 0 0-.154-.492l.425-.421a.747.747 0 0 0 .01-1.058l-.007-.006-.47-.467a.766.766 0 0 0-1.073 0l-.425.422a3.64 3.64 0 0 0-.497-.154v-.518a.747.747 0 0 0-.75-.745h-.642a.747.747 0 0 0-.75.745v.518c-.169.04-.335.09-.497.154L10.1 8.51a.755.755 0 0 0-.534-.22h-.003a.757.757 0 0 0-.536.22l-.476.464a.745.745 0 0 0-.006 1.058l.006.006.422.418a3.254 3.254 0 0 0-.15.498H8.3a.752.752 0 0 0-.753.747v.642a.75.75 0 0 0 .753.744h.521c.033.148.082.328.15.497l-.421.419a.745.745 0 0 0-.006 1.058l.006.006.47.467c.145.141.335.22.536.22h.003a.75.75 0 0 0 .534-.22l.425-.422c.153.06.322.114.497.154v.518a.747.747 0 0 0 .75.744h.642a.75.75 0 0 0 .75-.744v-.518c.175-.04.338-.09.498-.157l.424.425a.766.766 0 0 0 1.073 0l.47-.467a.749.749 0 0 0 .003-1.061l-.003-.003-.422-.422c.06-.154.115-.316.154-.494h.521c.413 0 .75-.331.75-.744Zm.997-4.264c1.525.114 5.053.874 5.053 5.409 0 5.186-4.631 5.45-5.562 5.45L6.05 19c-2.2 0-4.55-1.181-4.55-4.499 0-2.712 1.56-3.766 2.69-4.18C4.312 4.308 9.94 4 11.08 4c.885 0 5.278.199 6.544 4.08Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCloudSettingsBold);
export default ForwardRef;
