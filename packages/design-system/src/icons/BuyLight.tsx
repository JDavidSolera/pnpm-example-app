 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBuyLight(
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
        d="M17.274 17.004h-6.662c-.777 0-1.466-.26-1.987-.752-.555-.524-.914-1.284-1.07-2.263C7.408 13.075 6.05 4.909 5.888 4a1.637 1.637 0 0 0-.65-1.013 2.138 2.138 0 0 0-1.289-.419H2.285A.286.286 0 0 1 2 2.285C2 2.128 2.128 2 2.285 2H3.95c.598 0 1.179.188 1.634.532.464.348.772.835.869 1.37.162.91 1.523 9.084 1.665 9.998.256 1.634 1.145 2.537 2.494 2.537h6.662c.618 0 1.116-.2 1.523-.606.421-.422.749-1.08.977-1.956.12-.459.512-2.047.896-3.582.262-1.053.513-2.061.68-2.724h-3.316a.286.286 0 0 1-.284-.285c0-.157.128-.285.284-.285h3.681a.286.286 0 0 1 .276.356c-.156.62-.452 1.814-.768 3.078a632.707 632.707 0 0 1-.897 3.587c-.256.99-.626 1.717-1.125 2.218-.515.506-1.161.766-1.927.766Z"
        fill="currentColor"
      />
      <path
        d="M10.607 7.566H6.809a.286.286 0 0 1-.285-.285c0-.156.128-.285.285-.285h3.798a.286.286 0 0 1 0 .57ZM10.612 22c-.885 0-1.395-.51-1.395-1.395s.51-1.395 1.395-1.395c.886 0 1.395.51 1.395 1.395S11.5 22 10.612 22Zm0-2.22c-.572 0-.825.253-.825.825s.253.826.825.826.826-.254.826-.826-.254-.826-.826-.826ZM16.164 22c-.886 0-1.395-.51-1.395-1.395s.51-1.395 1.395-1.395 1.395.51 1.395 1.395S17.052 22 16.164 22Zm0-2.22c-.573 0-.826.253-.826.825s.254.826.826.826.825-.254.825-.826-.253-.826-.825-.826Z"
        fill="currentColor"
      />
      <path
        d="M17.269 13.698h-6.107c-.55 0-.866-.316-.866-.865V9.257H8.941a.311.311 0 0 1-.225-.524l5.281-5.551a.308.308 0 0 1 .45 0l1.4 1.477V3.95c0-.17.14-.31.311-.31h1.666c.17 0 .31.14.31.31v3.118l1.58 1.665a.31.31 0 0 1-.225.524h-1.355v3.576c0 .55-.316.865-.865.865ZM9.664 8.636h.943c.17 0 .31.14.31.31v3.887c0 .202.043.245.245.245h6.107c.202 0 .244-.043.244-.245V8.947c0-.171.14-.31.31-.31h.943L17.6 7.403a.311.311 0 0 1-.086-.214V4.26H16.47v1.176a.311.311 0 0 1-.536.214l-1.71-1.802-4.559 4.788Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBuyLight);
export default ForwardRef;
