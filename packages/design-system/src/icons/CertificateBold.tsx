 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCertificateBold(
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
        d="m17.226 7.743-4.103-4.05v1.793c0 .669.216 1.232.621 1.634.411.406.995.62 1.684.62h1.798v.003Zm1.67.108a.624.624 0 0 1 .048.242v12.501c0 .763-.644 1.406-1.404 1.406H5.403C4.658 22 4 21.343 4 20.594l.04-3.35L4 9.147v-5.74C4 2.669 4.67 2 5.403 2h7.389c.23 0 .453.094.615.256l5.273 5.205a.83.83 0 0 1 .216.39Zm-7.165 2.41c1.76 0 2.546.803 2.546 2.601 0 1.799-.785 2.598-2.546 2.598-1.76 0-2.546-.802-2.546-2.598 0-1.798.786-2.6 2.546-2.6Zm2.918 4.642c-.006-.012-.014-.02-.02-.029.295-.52.456-1.184.456-2.009 0-2.33-1.236-3.423-3.354-3.423-2.117 0-3.35 1.092-3.35 3.423 0 .703.124 1.278.337 1.759-.023.028-.049.054-.063.088L7.1 18.162a.625.625 0 0 0 .08.648c.144.185.379.267.654.2l.947-.357.374 1.016c.108.205.31.33.536.33h.017a.608.608 0 0 0 .536-.358l1.366-3.03 1.367 3.03a.605.605 0 0 0 .536.358h.017c.224 0 .43-.125.556-.378l.354-.968.995.373a.608.608 0 0 0 .604-.216.625.625 0 0 0 .08-.649l-1.47-3.258ZM10.48 13.4l-.076.473a.68.68 0 0 0 .266.663.633.633 0 0 0 .686.04l.377-.211.374.21a.64.64 0 0 0 .684-.04.687.687 0 0 0 .269-.665l-.077-.47.318-.33a.685.685 0 0 0 .156-.694.647.647 0 0 0-.522-.45l-.425-.065-.196-.422c-.22-.472-.958-.47-1.173 0l-.193.416-.425.065a.659.659 0 0 0-.522.453c-.08.245-.02.51.156.694l.323.333Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgCertificateBold);
export default ForwardRef;
