 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgShareBold(
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
        d="M12.001 2C5.658 2 2 5.159 2 11.999 2 18.839 5.658 22 12.001 22c6.344 0 10.002-3.162 10.002-10.001C22.003 5.159 18.343 2 12 2Zm-1.365 9.999c0 .22-.02.424-.054.618l2.691 1.346c.071-.094.148-.185.234-.265.425-.402 1.032-.616 1.753-.616.722 0 1.332.214 1.754.616.456.433.687 1.052.687 1.836 0 .752-.214 1.351-.636 1.782-.428.439-1.052.67-1.808.67-.755 0-1.38-.231-1.807-.67-.422-.43-.636-1.032-.636-1.782 0-.177.011-.345.037-.505l-2.743-1.371a1.52 1.52 0 0 1-.11.125c-.429.44-1.053.67-1.808.67-.756 0-1.38-.23-1.808-.67-.422-.43-.636-1.032-.636-1.782 0-.784.231-1.402.687-1.836.425-.402 1.032-.615 1.754-.615.721 0 1.331.213 1.753.615.06.057.117.117.168.183l2.74-1.369a3.642 3.642 0 0 1-.037-.51c0-.784.231-1.403.687-1.836.425-.402 1.032-.616 1.754-.616.72 0 1.331.214 1.753.616.456.433.687 1.052.687 1.836 0 .753-.214 1.351-.636 1.782-.427.439-1.052.67-1.807.67-.756 0-1.38-.231-1.808-.67a2.462 2.462 0 0 1-.177-.208L10.57 11.39c.049.188.066.39.066.608Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgShareBold);
export default ForwardRef;
