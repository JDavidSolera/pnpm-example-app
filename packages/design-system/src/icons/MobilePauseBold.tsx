 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMobilePauseBold(
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
        d="M8.02 16.873c3.264 0 4.784-1.506 4.784-4.738s-1.52-4.74-4.783-4.74c-3.261 0-4.78 1.505-4.78 4.74 0 3.232 1.519 4.738 4.78 4.738ZM21.03 2.97c.651.649.97 1.56.97 2.78v12.5c0 1.235-.319 2.148-.979 2.797-.654.64-1.573.953-2.808.953h-6.308c-1.238 0-2.154-.313-2.806-.953-.586-.575-.902-1.36-.967-2.396v-.558c-.037 0-.074.003-.114.003-3.801 0-6.018-1.9-6.018-5.96C2 8.071 4.217 6.17 8.018 6.17l.102.003V5.75c0-1.203.319-2.108.97-2.763C9.755 2.324 10.674 2 11.906 2h6.308c1.24.003 2.162.319 2.817.97Zm-5.97 14.065c-.668 0-1.07.398-1.07 1.064 0 .324.094.586.28.771.187.19.46.29.79.29s.603-.1.791-.29c.185-.188.279-.447.279-.771 0-.666-.398-1.064-1.07-1.064ZM6.171 9.258c.342 0 .618.274.618.612v4.786a.616.616 0 0 1-.618.615.614.614 0 0 1-.617-.615V9.873c0-.338.279-.614.617-.614Zm3.506-.014c.341 0 .617.276.617.612v4.786a.616.616 0 0 1-.617.615.614.614 0 0 1-.618-.615V9.856c0-.339.276-.612.618-.612Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMobilePauseBold);
export default ForwardRef;
