 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgVideoPlayBold(
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
        d="M19.562 20.753c1.73-.138 2.008-1.522 2.049-2.349h-2.049v2.35Zm-17.177-2.33c.031.398.153 1.124.635 1.641.33.348.802.564 1.416.648v-2.289H2.385Zm.942-14.622c-.222.14-.855.573-.936 2.02h2.045V3.43c-.32.038-.736.129-1.109.37ZM21.62 5.805c-.019-.376-.116-1.152-.62-1.697-.326-.354-.808-.573-1.434-.661v2.358h2.054Zm-2.058 11.203h2.058v-2.334h-2.058v2.334Zm0-7.47h2.058V7.205h-2.058v2.333Zm0 3.733h2.058v-2.333h-2.058v2.333ZM2.375 17.023h2.058V14.69H2.375v2.333Zm0-7.475h2.061V7.22h-2.06v2.327Zm0 1.4v2.339h2.058v-2.34H2.375Zm16.552-8.945c4.387 0 4.068 4.134 4.068 4.134s.003 7.219.003 11.873c0 3.814-2.73 4.159-3.717 4.159-.216 0-.351-.02-.351-.02H5.047c-4.32 0-4.043-4.117-4.043-4.117S1 10.587 1 6.112C1 2.272 3.97 2 4.812 2c.138 0 .219.006.219.006l13.896-.003ZM9.48 14.972V9.2l4.908 2.887-4.908 2.885Zm6.63-3.492L9.137 7.384a.679.679 0 0 0-.69 0 .705.705 0 0 0-.344.607v8.196a.696.696 0 0 0 .69.698.68.68 0 0 0 .344-.094l6.971-4.096a.705.705 0 0 0 .345-.608.701.701 0 0 0-.342-.607Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgVideoPlayBold);
export default ForwardRef;
