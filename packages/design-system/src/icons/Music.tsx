 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMusic(
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
        d="m17.05 20.708-.242.003c-.799-.011-2.136-.316-2.136-2.24 0-1.914 1.32-2.213 2.108-2.221l.259.002c.805.02 2.157.336 2.157 2.234-.003 1.9-1.343 2.208-2.146 2.222ZM10.125 4.857V3.366l9.068 2.424v1.491l-9.068-2.424ZM6.688 16.494c-.074.003-.16.003-.245 0-.8-.011-2.137-.318-2.137-2.24 0-1.917 1.326-2.216 2.114-2.221l.253.003c.791.017 2.106.332 2.149 2.154v.165c-.043 1.818-1.346 2.122-2.134 2.14Zm13.81-10.88c0-.558-.434-1.019-.986-1.073l-9.427-2.518L9.915 2c-.604 0-1.093.484-1.093 1.078v8.363c-.632-.458-1.397-.675-2.12-.692-.091-.002-.202-.002-.296-.002-1.57.011-3.406.939-3.406 3.508 0 2.566 1.844 3.503 3.42 3.525h.29c1.514-.028 3.25-.905 3.395-3.212h.02v-.213c0-.029.008-.055.008-.083 0-.028-.008-.051-.008-.08v-8l9.068 2.423v7.048a3.795 3.795 0 0 0-2.126-.697l-.296-.003c-1.57.012-3.405.94-3.405 3.509 0 2.566 1.843 3.505 3.425 3.528h.08l.205-.003c1.58-.028 3.42-.964 3.42-3.508 0-.051-.011-.091-.014-.14h.014V5.614h.003Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMusic);
export default ForwardRef;
