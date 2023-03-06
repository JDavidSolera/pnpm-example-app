 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgListWithBullet(
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
        d="M6.15 6.898c-.448 0-.812-.34-.812-.76s.361-.758.811-.758h15.04c.447 0 .811.339.811.759s-.361.759-.811.759H6.149ZM3.171 5c.646 0 1.17.512 1.17 1.142 0 .63-.524 1.141-1.17 1.141C2.524 7.28 2 6.771 2 6.142 2 5.512 2.524 5 3.172 5Zm18.017 5.555c.447 0 .811.34.811.76s-.361.758-.811.758H6.149c-.447 0-.81-.339-.81-.759s.36-.759.81-.759h15.04Zm-18.017-.382c.646 0 1.17.512 1.17 1.141 0 .63-.524 1.142-1.17 1.142-.648 0-1.172-.512-1.172-1.142 0-.63.524-1.141 1.172-1.141ZM21.19 15.73c.447 0 .811.34.811.76 0 .416-.361.758-.811.758H6.149c-.447 0-.81-.342-.81-.759s.36-.76.81-.76h15.04Zm-18.017-.383c.646 0 1.17.512 1.17 1.142 0 .627-.524 1.142-1.17 1.142C2.524 17.629 2 17.117 2 16.49c0-.632.524-1.141 1.172-1.141Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgListWithBullet);
export default ForwardRef;
