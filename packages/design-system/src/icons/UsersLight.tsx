 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgUsersLight(
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
      <g clipPath="url(#users-light_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m6.04 17.258-.001.018c-.01.142-.019.265-.019.394v1.12h11.96v-1.12c0-.13-.009-.274-.019-.436a3.407 3.407 0 0 0-.13-.722l-.002-.007-.002-.007a3.17 3.17 0 0 0-.363-.847l-.007-.01-.006-.011a1.62 1.62 0 0 0-.204-.288c-.02-.021-.048-.053-.077-.09l-.021-.026-.013-.02-.002-.004-.003-.002a1.166 1.166 0 0 0-.044-.046l-.008-.008a2.993 2.993 0 0 0-.682-.529 3.944 3.944 0 0 0-.586-.263 4.735 4.735 0 0 0-1.124-.225 7.562 7.562 0 0 0-.457-.019H9.78a7.23 7.23 0 0 0-.447.019 4.443 4.443 0 0 0-1.127.223l-.08.028c-.073.027-.121.044-.173.067l-.011.005-.012.005a2.173 2.173 0 0 0-.394.198l-.004.002a2.167 2.167 0 0 0-.2.133l-.011.01-.012.008a2.44 2.44 0 0 0-.38.329c-.079.09-.149.168-.218.255-.033.041-.054.07-.085.115l-.087.14-.005.008a2.91 2.91 0 0 0-.219.418c-.06.162-.108.293-.14.418l-.002.01-.003.011a3.407 3.407 0 0 0-.13.706v.04Zm-.5-.058c.02-.28.07-.56.15-.83.04-.16.1-.32.16-.48.07-.17.16-.34.26-.5.03-.05.06-.1.1-.16.04-.06.07-.1.11-.15.08-.1.16-.19.24-.28.14-.15.29-.28.46-.4a2.496 2.496 0 0 1 .26-.175c.03-.018.06-.035.09-.055.12-.07.25-.13.38-.18a3.12 3.12 0 0 1 .29-.11c.41-.14.83-.22 1.26-.25.16-.01.32-.02.48-.02h4.45c.16 0 .33.01.49.02.43.03.85.12 1.25.25.23.08.45.18.67.3.3.17.57.38.8.62.04.04.09.09.12.14.02.025.04.048.06.07.02.023.04.045.06.07.08.1.15.2.21.31.19.31.33.64.42.98.08.27.13.55.15.83.01.16.02.32.02.47v1.21c0 .04-.01.09-.02.13-.01.04-.03.08-.06.11-.005.005-.01.012-.015.02l-.015.02c-.08.08-.19.13-.31.13H5.93a.406.406 0 0 1-.41-.41v-1.21c0-.15.01-.29.02-.43v-.04Zm13.01-3.04c.58.61.98 1.37 1.16 2.2.06.27.1.55.12.83h3.76c.23 0 .41-.19.43-.41v-.77c.06-.84-.22-1.66-.78-2.29-.62-.56-1.45-.85-2.28-.79h-3.61c-.24 0-.48.01-.72.05a4.651 4.651 0 0 1 .987.45c.168.1.33.211.483.33.16.12.31.26.45.4Zm-.06-.73c.152.122.29.254.414.377l.009.008a5.103 5.103 0 0 1 1.286 2.438c.031.144.058.29.08.437h3.241v-.698l.002-.018a2.602 2.602 0 0 0-.637-1.901 2.587 2.587 0 0 0-1.889-.644l-.018.001H18.49Zm.65-1.09c.77.05 1.53-.23 2.08-.78.48-.55.73-1.27.69-2 .04-.73-.21-1.45-.69-2-.55-.54-1.31-.82-2.08-.77-.78-.04-1.54.24-2.09.78-.48.55-.73 1.27-.69 2-.04.73.21 1.45.69 2 .56.54 1.32.82 2.09.77Zm-1.727-1.115a2.258 2.258 0 0 0 1.695.616l.032-.002.033.002a2.194 2.194 0 0 0 1.682-.623c.387-.45.588-1.037.556-1.63l-.002-.028.002-.027a2.315 2.315 0 0 0-.555-1.63 2.222 2.222 0 0 0-1.683-.614l-.03.002-.028-.002a2.277 2.277 0 0 0-1.7.624 2.315 2.315 0 0 0-.556 1.63l.002.027-.002.027a2.315 2.315 0 0 0 .554 1.628ZM15.65 8.37c.07-1.01-.29-2.01-.98-2.75-.74-.65-1.7-.97-2.68-.91-.97-.06-1.93.27-2.67.91-.69.74-1.04 1.74-.97 2.75-.07 1.01.28 2 .97 2.74.73.64 1.7.96 2.67.9.98.06 1.94-.26 2.68-.9.7-.74 1.05-1.73.98-2.74Zm-1.326 2.378c.592-.635.887-1.48.827-2.343l-.002-.035.002-.035a3.173 3.173 0 0 0-.83-2.356 3.204 3.204 0 0 0-2.3-.77l-.031.002-.03-.002a3.237 3.237 0 0 0-2.292.772 3.166 3.166 0 0 0-.819 2.354l.002.035-.002.035c-.06.863.236 1.71.82 2.346.625.539 1.456.812 2.29.76l.031-.002.03.002a3.24 3.24 0 0 0 2.304-.763ZM7.64 9.57c.04-.73-.21-1.45-.69-2-.56-.54-1.32-.82-2.09-.77-.78-.05-1.53.23-2.09.77-.48.55-.73 1.27-.69 2-.04.73.21 1.45.69 2 .56.54 1.32.82 2.09.77.78.05 1.53-.23 2.09-.77.48-.55.73-1.27.69-2Zm-1.052 1.655c.385-.45.585-1.036.553-1.628l-.002-.027.002-.027a2.315 2.315 0 0 0-.553-1.628A2.258 2.258 0 0 0 4.893 7.3l-.033.002-.032-.002a2.244 2.244 0 0 0-1.695.616 2.315 2.315 0 0 0-.554 1.628l.002.027-.002.027a2.315 2.315 0 0 0 .554 1.628 2.258 2.258 0 0 0 1.695.616l.032-.002.032.002c.63.04 1.237-.182 1.696-.616ZM3.07 12.93c-.84-.06-1.66.23-2.28.79-.55.63-.84 1.45-.78 2.29v.77c0 .22.18.41.41.41h3.76c.02-.28.06-.55.13-.82.18-.83.58-1.59 1.16-2.2.14-.15.29-.29.45-.41a4.468 4.468 0 0 1 .76-.488c.229-.116.466-.214.71-.292a5.52 5.52 0 0 0-.71-.05H3.07Zm2.46.5H3.052l-.017-.001a2.573 2.573 0 0 0-1.888.642 2.643 2.643 0 0 0-.638 1.903l.001.018v.698h3.224c.023-.145.052-.29.09-.436A5.103 5.103 0 0 1 5.53 13.43Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="users-light_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ForwardRef = forwardRef(SvgUsersLight);
export default ForwardRef;