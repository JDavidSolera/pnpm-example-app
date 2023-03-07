 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowLeftRightLight(
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
        d="M22 9.032a.491.491 0 0 1-.174.376l-4.542 4.495-.02.017a.521.521 0 0 1-.558.065.494.494 0 0 1-.287-.45l-.02-2.286-3.442.005a.979.979 0 0 1-.975-.978V7.77c0-.539.438-.978.975-.978l3.445-.003.02-2.289c0-.191.11-.362.287-.448a.522.522 0 0 1 .578.086l4.54 4.517a.491.491 0 0 1 .173.377Zm-5.012 4.363 4.409-4.366-4.409-4.39-.017 2.218v.006a.508.508 0 0 1-.518.494l-3.493.005a.407.407 0 0 0-.407.408v2.506c0 .225.182.408.407.408l3.493-.006a.508.508 0 0 1 .518.494v.005l.017 2.218Zm-4.972 3.544c0 .54-.438.979-.976.979l-3.442.003-.02 2.288c0 .191-.11.363-.287.448a.522.522 0 0 1-.577-.085l-4.54-4.518a.498.498 0 0 1 0-.753l4.542-4.495c.006-.005.015-.01.02-.017a.521.521 0 0 1 .558-.065c.18.085.287.257.287.45l.02 2.286 3.44-.005c.537 0 .975.44.975.978v2.506Zm-4.469.41 3.493-.002a.407.407 0 0 0 .407-.408v-2.506a.407.407 0 0 0-.407-.408l-3.49.006a.51.51 0 0 1-.518-.494v-.005l-.017-2.217-4.409 4.366 4.403 4.388.018-2.217v-.006c.01-.28.241-.499.52-.496Zm-.535-6.174c0 .002 0 0 0 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgArrowLeftRightLight);
export default ForwardRef;
