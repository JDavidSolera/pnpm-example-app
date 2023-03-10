 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTargetBold(
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
        d="M18.138 12.617a.608.608 0 1 1 0-1.218h.47c-.276-5.136-4.249-6.013-5.999-6.143v.609a.608.608 0 0 1-.609.609.603.603 0 0 1-.609-.61v-.626c-1.585.04-5.874.7-6.135 6.161h.603c.341 0 .609.268.609.61a.608.608 0 0 1-.61.608h-.594c.35 5.234 4.502 5.94 6.127 6.014v-.487a.608.608 0 1 1 1.218 0v.472c1.716-.105 5.666-.933 5.99-5.996h-.46v-.002Zm3.25-1.22c.342 0 .61.267.61.609a.608.608 0 0 1-.61.609H19.82c-.35 6.257-5.5 7.111-7.208 7.216v1.56a.608.608 0 0 1-.61.609.602.602 0 0 1-.608-.609v-1.545c-1.543-.066-6.964-.763-7.348-7.234H2.61a.608.608 0 1 1 0-1.218h1.429c.284-6.722 5.876-7.34 7.353-7.388V2.61a.608.608 0 1 1 1.218 0v1.423c1.747.122 6.915 1.041 7.217 7.362h1.562v.003Zm-7.3-1.617c0 .715-.196 1.261-.577 1.625-.373.35-.902.53-1.585.53-.683 0-1.212-.18-1.576-.53-.382-.367-.578-.91-.578-1.625 0-.705.196-1.252.578-1.616.367-.359.893-.535 1.576-.535s1.212.18 1.585.535c.384.364.578.91.578 1.616Zm1.674 5.493v.722a.25.25 0 0 1-.253.242H8.343a.25.25 0 0 1-.245-.242v-.722c0-.683.211-1.267.618-1.69.438-.462 1.098-.698 1.892-.698h2.633c.797 0 1.454.236 1.892.697.41.424.63 1.01.63 1.69Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTargetBold);
export default ForwardRef;
