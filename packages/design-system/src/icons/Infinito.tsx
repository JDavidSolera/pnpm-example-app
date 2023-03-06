 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgInfinito(
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
        d="M18.524 15.998h-.019c-1.786-.006-4.826-2.355-6.037-3.498 1.214-1.143 4.264-3.498 6.05-3.498h.006c1.02.003 1.813.307 2.351.907.541.6.811 1.472.808 2.6-.003 2.25-1.128 3.489-3.16 3.489Zm-13.442 0h-.018c-1.015 0-1.802-.301-2.34-.891-.544-.594-.82-1.467-.823-2.595-.003-1.125.267-2 .808-2.6.541-.6 1.331-.904 2.351-.907h.007c1.785 0 4.835 2.352 6.049 3.498-1.208 1.137-4.245 3.489-6.034 3.495Zm16.442-6.796c-.707-.784-1.74-1.199-2.994-1.202h-.01c-2.308 0-5.628 2.791-6.722 3.827C10.701 10.79 7.384 8 5.076 8h-.01c-1.253.003-2.29.421-2.993 1.202-.704.784-1.076 1.927-1.073 3.31.003 1.383.381 2.527 1.091 3.305C2.798 16.59 3.828 17 5.073 17h.018c2.312-.01 5.616-2.794 6.71-3.827 1.095 1.033 4.402 3.818 6.707 3.827h.022c2.542 0 4.063-1.675 4.072-4.488-.003-1.38-.375-2.526-1.078-3.31Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgInfinito);
export default ForwardRef;
