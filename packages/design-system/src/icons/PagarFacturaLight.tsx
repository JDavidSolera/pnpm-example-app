 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPagarFacturaLight(
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
        d="M7.146 14.075c-1.637 0-2.912-.426-3.783-1.261C2.46 11.944 2 10.644 2 8.947c0-1.696.46-2.998 1.363-3.867.87-.838 2.146-1.261 3.783-1.261s2.912.423 3.782 1.261c.904.87 1.364 2.17 1.364 3.867 0 1.696-.46 2.998-1.364 3.867-.87.835-2.142 1.261-3.782 1.261Zm0-9.688c-1.486 0-2.624.372-3.389 1.102-.79.759-1.19 1.92-1.19 3.458 0 1.537.4 2.7 1.19 3.458.762.733 1.903 1.102 3.389 1.102 1.486 0 2.624-.37 3.389-1.102.787-.759 1.19-1.92 1.19-3.458 0-1.537-.4-2.7-1.19-3.458-.762-.733-1.903-1.102-3.39-1.102Z"
        fill="currentColor"
      />
      <path
        d="M5.332 11.162c-.08-.056-.12-.119-.12-.213a.228.228 0 0 1 .23-.221c.06.002.118.022.166.056.357.236.856.475 1.435.475.864 0 1.395-.443 1.395-1.097 0-.537-.302-.917-1.292-1.042l-.254-.032c-1.056-.133-1.546-.639-1.546-1.42 0-.932.667-1.51 1.688-1.51.57 0 1.056.152 1.39.356.102.063.15.142.15.222a.213.213 0 0 1-.21.213H8.36A.35.35 0 0 1 8.2 6.9a2.404 2.404 0 0 0-1.18-.316c-.785 0-1.222.435-1.222 1.043 0 .554.343.91 1.27 1.028l.245.032c1.07.133 1.577.639 1.577 1.446 0 .909-.65 1.557-1.902 1.557a3.033 3.033 0 0 1-1.657-.529Z"
        fill="currentColor"
      />
      <path
        d="M6.99 11.81a3.092 3.092 0 0 1-1.732-.545.368.368 0 0 1-.174-.319.354.354 0 0 1 .36-.349.434.434 0 0 1 .236.077c.453.3.91.452 1.363.452.782 0 1.267-.373 1.267-.97 0-.377-.14-.784-1.181-.914l-.254-.031c-1.372-.174-1.66-.938-1.66-1.549 0-.994.713-1.637 1.817-1.637.548 0 1.064.134 1.455.376.137.082.21.201.21.33a.343.343 0 0 1-.342.34.526.526 0 0 1-.216-.06l-.003-.002a2.246 2.246 0 0 0-1.121-.302c-.673 0-1.093.35-1.093.915 0 .35.132.77 1.158.9l.246.032c.77.097 1.691.45 1.691 1.571.006 1.04-.773 1.685-2.028 1.685Zm-1.584-.753c.214.15.799.498 1.583.498 1.113 0 1.774-.535 1.774-1.43 0-.764-.479-1.196-1.466-1.318l-.248-.031c-.941-.12-1.38-.486-1.38-1.154 0-.71.53-1.17 1.349-1.17.425 0 .83.108 1.24.33a.32.32 0 0 0 .1.033.084.084 0 0 0 .086-.085c0-.051-.057-.09-.089-.114-.35-.215-.821-.338-1.32-.338-.964 0-1.56.529-1.56 1.381 0 .739.482 1.174 1.434 1.296l.257.034c.958.122 1.406.494 1.406 1.17 0 .745-.599 1.225-1.523 1.225-.505 0-1.013-.168-1.506-.494a.189.189 0 0 0-.094-.034.102.102 0 0 0-.103.093c-.003.043.006.071.06.108Z"
        fill="currentColor"
      />
      <path
        d="M7.103 12.598a.286.286 0 0 1-.285-.285V5.74a.286.286 0 0 1 .57 0v6.574a.286.286 0 0 1-.285.285Z"
        fill="currentColor"
      />
      <path
        d="M20.102 21.997H7.773c-.602 0-.935-.336-.935-.938v-7.171a.285.285 0 0 1 .57 0v7.171c0 .29.08.37.365.37h13.319c.26 0 .336-.08.339-.339V7.984c-1.743 0-2.77 0-3.052-.003-1.486-.006-2.376-1.057-2.382-2.813V2.571c-3.01 0-7.582 0-8.224.003-.276 0-.362.082-.362.355v1.174a.286.286 0 0 1-.57 0V2.929c0-.585.339-.923.932-.923C8.433 2 13.281 2 16.28 2c.157 0 .286.128.286.284v2.881c.002.835.24 2.239 1.811 2.248.3 0 1.42.002 3.337.002.157 0 .286.128.286.285v13.393c0 .574-.331.907-.907.907-.331-.003-.662-.003-.99-.003Zm-1.45-3.881h-8.431a.286.286 0 0 1-.286-.285c0-.156.129-.284.286-.284h8.432c.157 0 .285.128.285.284a.286.286 0 0 1-.285.285Zm0-3.325H11.4a.286.286 0 0 1-.285-.284c0-.156.128-.284.285-.284h7.257c.156 0 .285.128.285.284a.288.288 0 0 1-.288.284Zm0-3.324H13.22a.286.286 0 0 1-.286-.284c0-.156.129-.284.286-.284h5.434c.157 0 .285.128.285.284a.285.285 0 0 1-.285.284Z"
        fill="currentColor"
      />
      <path
        d="M21.714 7.98c-1.917 0-3.04 0-3.337-.002C16.89 7.972 16 6.921 15.995 5.165v-2.88c0-.157.127-.285.284-.285.077 0 .15.031.204.082l5.433 5.413c.112.11.112.29 0 .4a.274.274 0 0 1-.202.086Zm-5.149-5.008v2.193c.002.835.24 2.239 1.811 2.248.26 0 1.15.002 2.648.002l-4.459-4.443Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPagarFacturaLight);
export default ForwardRef;
