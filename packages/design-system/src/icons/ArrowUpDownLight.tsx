 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowUpDownLight(
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
        d="M14.678 22a.491.491 0 0 1-.377-.174l-4.494-4.542-.018-.02a.521.521 0 0 1-.065-.558.494.494 0 0 1 .45-.287l2.286-.02-.005-3.442c0-.537.44-.975.979-.975h2.505c.54 0 .979.438.979.975l.003 3.445 2.288.02c.191 0 .363.11.448.287a.522.522 0 0 1-.085.578l-4.518 4.54a.491.491 0 0 1-.376.173Zm-4.364-5.012 4.367 4.409 4.388-4.409-2.217-.017h-.006a.508.508 0 0 1-.493-.518l-.006-3.493a.407.407 0 0 0-.408-.407h-2.505a.407.407 0 0 0-.409.407l.006 3.493a.508.508 0 0 1-.494.518h-.005l-2.217.017ZM6.77 12.016a.979.979 0 0 1-.978-.976l-.003-3.442-2.289-.02a.498.498 0 0 1-.448-.287.522.522 0 0 1 .086-.577l4.517-4.54a.507.507 0 0 1 .317-.17.498.498 0 0 1 .436.17l4.495 4.542c.005.006.011.015.017.02.128.16.154.37.066.558a.494.494 0 0 1-.451.287l-2.286.02.006 3.44c0 .537-.44.975-.98.975H6.77Zm-.41-4.469.002 3.493c0 .225.183.407.408.407h2.506a.407.407 0 0 0 .408-.407l-.006-3.49a.51.51 0 0 1 .494-.518h.005l2.218-.017-4.366-4.409-4.39 4.403 2.218.018h.006c.28.01.5.241.496.52Zm6.175-.535c-.003 0 0 0 0 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgArrowUpDownLight);
export default ForwardRef;
