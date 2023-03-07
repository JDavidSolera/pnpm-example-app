 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgUserLight(
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
        d="M20.495 22H3.285A.286.286 0 0 1 3 21.715v-2.22c0-1.518.473-2.81 1.364-3.738.973-1.008 2.428-1.543 4.205-1.543h6.642c1.776 0 3.231.535 4.205 1.545.894.928 1.363 2.221 1.363 3.738v2.221a.285.285 0 0 1-.284.282Zm-16.926-.57H20.21v-1.935c0-1.367-.416-2.523-1.204-3.343-.877-.908-2.153-1.37-3.795-1.37H8.569c-1.643 0-2.918.462-3.795 1.37-.789.82-1.205 1.973-1.205 3.343v1.936Zm8.32-9.423c-3.27 0-4.997-1.728-4.997-4.996 0-1.66.444-2.93 1.32-3.778C9.059 2.416 10.295 2 11.889 2c1.595 0 2.833.416 3.684 1.233.883.848 1.327 2.12 1.327 3.778 0 3.268-1.731 4.996-5.01 4.996Zm0-9.438c-1.441 0-2.546.362-3.28 1.074-.76.737-1.148 1.87-1.148 3.368 0 1.497.387 2.627 1.148 3.36.734.708 1.839 1.064 3.28 1.064 1.44 0 2.55-.359 3.288-1.068.765-.734 1.152-1.865 1.152-3.36 0-1.494-.387-2.63-1.152-3.367-.74-.709-1.845-1.07-3.289-1.07Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgUserLight);
export default ForwardRef;
