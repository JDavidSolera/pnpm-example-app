 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFacturaDigital(
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
        d="M9.489 14.825c-.38 0-.637-.256-.637-.639V7.648c0-.38.256-.634.637-.634h2.755c.11 0 .215.044.292.121l1.86 1.863a.413.413 0 0 1 .121.292v4.907c0 .37-.259.629-.628.629h-4.4Zm.19-.826h4.012V9.46l-1.62-1.62H9.678v6.158Z"
        fill="currentColor"
      />
      <path
        d="M12.989 10.83h-2.604a.276.276 0 0 1-.276-.275c0-.152.124-.275.276-.275h2.606c.152 0 .276.123.276.275a.279.279 0 0 1-.278.276Zm0 1.12h-2.604a.276.276 0 0 1-.276-.276c0-.152.124-.276.276-.276h2.606c.152 0 .276.124.276.276a.279.279 0 0 1-.278.275Zm0 1.115h-2.604a.276.276 0 0 1-.276-.275c0-.152.124-.276.276-.276h2.606c.152 0 .276.124.276.276a.279.279 0 0 1-.278.275Zm1.024-3.408h-1.149c-.608 0-.986-.441-.986-1.152v-.986a.276.276 0 0 1 .471-.196l1.857 1.863a.275.275 0 0 1 0 .388.274.274 0 0 1-.192.083ZM12.43 8.185v.32c0 .397.146.6.435.6h.483l-.918-.92Z"
        fill="currentColor"
      />
      <path
        d="M18.133 16.85H5.238c-1.08 0-1.91-.322-2.464-.953C2.262 15.306 2 14.452 2 13.355V8.497c0-1.097.262-1.951.774-2.54C3.328 5.321 4.154 5 5.238 5h12.895c1.08 0 1.91.322 2.463.956.515.59.774 1.444.774 2.54v4.858c0 1.097-.262 1.951-.774 2.54-.554.634-1.383.957-2.463.957ZM5.238 6.106c-.76 0-1.293.19-1.632.579-.333.38-.504.991-.504 1.813v4.857c0 .821.171 1.433.504 1.816.34.389.874.579 1.632.579h12.895c.757 0 1.292-.19 1.63-.579.334-.383.505-.995.505-1.816V8.497c0-.822-.17-1.433-.504-1.816-.34-.389-.874-.579-1.631-.579l-12.895.003ZM20.786 19H2.584a.553.553 0 0 1-.55-.551c0-.303.247-.551.55-.551h18.202c.303 0 .551.248.551.55a.553.553 0 0 1-.55.552Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFacturaDigital);
export default ForwardRef;
