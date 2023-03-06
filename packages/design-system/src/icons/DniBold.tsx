 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDniBold(
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
        d="M20.31 20H4.356C3.608 20 3 19.365 3 18.587V7.41C3 6.632 3.608 6 4.357 6h15.955c.75 0 1.357.632 1.357 1.41v11.177c-.002.778-.61 1.413-1.36 1.413Zm-8.906-4.728a.582.582 0 0 0 .57-.595.584.584 0 0 0-.57-.595H5.486a.582.582 0 0 0-.571.595c0 .33.258.595.571.595h5.918Zm-1.902-3.176a.585.585 0 0 0 .574-.595.585.585 0 0 0-.574-.595H5.486a.585.585 0 0 0-.574.595c0 .329.258.595.574.595h4.016Zm6.882-2.723c-.54 0-.962.149-1.251.441-.303.303-.454.754-.454 1.339 0 .584.151 1.033.454 1.336.29.292.712.438 1.25.438.543 0 .962-.149 1.254-.438.303-.303.457-.755.457-1.339s-.154-1.033-.457-1.339c-.292-.292-.711-.438-1.253-.438Zm1.044 4.332h-2.085c-.633 0-1.153.202-1.501.58-.321.347-.489.83-.489 1.396v.593c0 .111.088.201.194.201h5.681c.107 0 .194-.09.194-.201v-.593c0-.565-.17-1.049-.491-1.397-.353-.377-.871-.579-1.503-.579Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgDniBold);
export default ForwardRef;
