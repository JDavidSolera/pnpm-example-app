 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgVideoPlayLight(
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
        d="M19.423 21.066c1.218-.04 2.586-.628 2.648-3.03h-2.658l.01 3.03Zm-17.505-3.03c0 .291.047 1.418.767 2.188.466.497 1.167.764 2.069.814l-.01-3H1.918v-.003ZM3.085 3.39c-.757.484-1.142 1.366-1.158 2.608h2.78L4.694 2.93c-.347.01-1.017.081-1.609.46ZM22.084 6c.006-.136.037-1.384-.742-2.225-.448-.481-1.118-.748-1.975-.82l.009 3.046h2.708ZM19.4 14.336l.006 2.775h2.674v-2.778c0 .003-2.68.003-2.68.003Zm2.677-7.408h-2.702l.01 2.779h2.695l-.003-2.779Zm-2.69 3.704.01 2.778h2.683v-2.778h-2.692ZM5.612 2.93l.057 18.125h12.835l-.057-18.13c-3.866 0-10.803.005-12.835.005Zm-3.69 14.18h2.817l-.01-2.78H1.922v2.78Zm2.795-7.405-.01-2.779H1.919v2.779h2.798Zm-2.795.925v2.778h2.808l-.01-2.778H1.921ZM18.928 2c4.39 0 4.067 4.101 4.067 4.101l.003 11.776c0 3.782-2.73 4.123-3.716 4.123-.22 0-.35-.019-.35-.019H5.047c-4.32 0-4.044-4.082-4.044-4.082V6.076C1.004 2.267 3.97 2 4.814 2c.14 0 .221.006.221.006S14.54 2 18.928 2ZM9.255 15.263 14.852 12 9.255 8.737v6.526Zm6.743-3.663a.463.463 0 0 1 0 .8l-6.971 4.068a.447.447 0 0 1-.457 0 .467.467 0 0 1-.229-.4V7.935c0-.165.088-.317.229-.4a.447.447 0 0 1 .457 0l6.971 4.064Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgVideoPlayLight);
export default ForwardRef;
