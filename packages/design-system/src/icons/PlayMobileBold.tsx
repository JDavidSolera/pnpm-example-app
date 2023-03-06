 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPlayMobileBold(
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
        d="M6.875 13.81v-3.35L9.8 12.134 6.875 13.81Zm4.47-2.206L6.565 8.87a.614.614 0 0 0-.618 0 .614.614 0 0 0-.31.529v5.47c0 .219.117.42.31.529a.603.603 0 0 0 .31.082.603.603 0 0 0 .31-.082l4.781-2.735a.615.615 0 0 0 .31-.532.619.619 0 0 0-.313-.527Zm-3.33 5.274c3.268 0 4.793-1.511 4.793-4.739 0-3.235-1.525-4.746-4.792-4.746-3.258 0-4.775 1.51-4.775 4.746 0 3.228 1.517 4.739 4.775 4.739ZM21.039 2.965c.652.654.965 1.56.965 2.786v12.498c0 1.233-.322 2.149-.982 2.795-.652.646-1.568.956-2.806.956h-6.309c-1.238 0-2.151-.31-2.812-.948-.583-.58-.899-1.363-.964-2.401v-.555c-.04 0-.074.008-.117.008C4.211 18.104 2 16.2 2 12.14 2 8.07 4.211 6.166 8.013 6.166c.04 0 .074.009.108.009V5.75c0-1.21.313-2.109.973-2.77C9.754 2.32 10.671 2 11.906 2h6.31c1.237 0 2.162.319 2.822.965Zm-6.767 15.907c.188.191.46.29.791.29.33 0 .603-.099.791-.29.185-.187.279-.446.279-.77 0-.667-.401-1.065-1.07-1.065s-1.07.398-1.07 1.064c0 .322.094.584.279.771Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPlayMobileBold);
export default ForwardRef;
