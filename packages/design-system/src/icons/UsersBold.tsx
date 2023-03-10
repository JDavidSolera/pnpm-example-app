 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgUsersBold(
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
      <g clipPath="url(#users-bold_svg__a)">
        <path
          d="M18.06 19.29H5.93a.406.406 0 0 1-.41-.41v-1.21c0-.15.01-.29.02-.43v-.04c.02-.28.07-.56.15-.83.04-.16.1-.32.16-.48.07-.17.16-.34.26-.5.03-.05.06-.1.1-.16.04-.06.07-.1.11-.15.08-.1.16-.19.24-.28.14-.15.29-.28.46-.4.05-.04.11-.08.17-.12.06-.04.12-.07.18-.11.12-.07.25-.13.38-.18.09-.04.18-.07.29-.11.41-.14.83-.22 1.26-.25.16-.01.32-.02.48-.02h4.45c.16 0 .33.01.49.02.43.03.85.12 1.25.25.23.08.45.18.67.3.3.17.57.38.8.62.04.04.09.09.12.14.04.05.08.09.12.14.08.1.15.2.21.31.19.31.33.64.42.98.08.27.13.55.15.83.01.16.02.32.02.47v1.21c0 .04-.01.09-.02.13-.01.04-.03.08-.06.11-.01.01-.02.03-.03.04-.08.08-.19.13-.31.13Zm5.53-2.1h-3.76c-.02-.28-.06-.56-.12-.83-.18-.83-.58-1.59-1.16-2.2a4.835 4.835 0 0 0-1.92-1.18c.24-.04.48-.05.72-.05h3.61c.83-.06 1.66.23 2.28.79.56.63.84 1.45.78 2.29v.77c-.02.22-.2.41-.43.41Zm-19.41 0H.42c-.23 0-.41-.19-.41-.41v-.77c-.06-.84.23-1.66.78-2.29.62-.56 1.44-.85 2.28-.79h3.61c.24 0 .48.02.71.05-.53.17-1.03.43-1.47.78-.16.12-.31.26-.45.41-.58.61-.98 1.37-1.16 2.2-.07.27-.11.54-.13.82Zm14.96-4.85c-.77.05-1.53-.23-2.09-.77-.48-.55-.73-1.27-.69-2-.04-.73.21-1.45.69-2 .55-.54 1.31-.82 2.09-.78.77-.05 1.53.23 2.08.77.48.55.73 1.27.69 2 .04.73-.21 1.45-.69 2-.55.55-1.31.83-2.08.78Zm-14.28 0c-.77.05-1.53-.23-2.09-.77-.48-.55-.73-1.27-.69-2-.04-.73.21-1.45.69-2 .56-.54 1.31-.82 2.09-.77.77-.05 1.53.23 2.09.77.48.55.73 1.27.69 2 .04.73-.21 1.45-.69 2-.56.54-1.31.82-2.09.77Zm7.13-.33c-.97.06-1.94-.26-2.67-.9a3.643 3.643 0 0 1-.97-2.74c-.07-1.01.28-2.01.97-2.75.74-.64 1.7-.97 2.67-.91.98-.06 1.94.26 2.68.91.69.74 1.05 1.74.98 2.75.07 1.01-.28 2-.98 2.74-.74.64-1.7.96-2.68.9Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="users-bold_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ForwardRef = forwardRef(SvgUsersBold);
export default ForwardRef;
