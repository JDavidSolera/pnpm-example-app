 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgKeyBold(
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
        d="M21.866 12.667a.396.396 0 0 1 .134.295.409.409 0 0 1-.13.3l-1.973 1.814a.433.433 0 0 1-.592-.008l-1.27-1.224-.742 1.15a.42.42 0 0 1-.338.192.384.384 0 0 1-.356-.159l-.917-1.144-.814 1.128a.428.428 0 0 1-.347.175H9.797l-.062.134C9.163 16.418 7.922 17 6.146 17 3.471 17 2 15.58 2 13s1.471-4 4.146-4c2.137 0 3.15.899 3.629 1.746h9.792c.108 0 .21.038.29.11l2.01 1.81Zm-16.23 1.019c-.509 0-.708-.191-.708-.683 0-.492.197-.683.709-.683s.708.19.708.683c0 .492-.199.683-.708.683Zm0-2.183c-.972 0-1.556.563-1.556 1.5 0 .94.584 1.5 1.557 1.5s1.557-.56 1.557-1.5-.581-1.5-1.557-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgKeyBold);
export default ForwardRef;
