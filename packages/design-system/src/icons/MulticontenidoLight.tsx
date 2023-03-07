 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMulticontenidoLight(
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
        d="M15.368 10.892v6.081H4.3c-1.833 0-2.686-.946-2.686-2.975V8.586c0-2.03.853-2.975 2.686-2.975h11.365c1.833 0 2.687.945 2.687 2.975v.313h-.995c-.666 0-1.154.169-1.492.51-.335.34-.497.822-.497 1.482ZM4.3 17.587h11.068v.418c0 1.338.65 1.989 1.989 1.989h3.22c1.339 0 1.99-.65 1.99-1.992v-7.114c0-.669-.163-1.157-.494-1.492-.335-.334-.823-.497-1.495-.497h-1.612v-.313c0-1.145-.268-2.03-.79-2.628-.555-.636-1.4-.958-2.51-.958H4.3c-1.111 0-1.955.322-2.511.958C1.264 6.556 1 7.44 1 8.586V14c0 1.145.267 2.03.789 2.628.556.636 1.4.958 2.511.958ZM12.98 20H6.992a.308.308 0 0 1-.307-.307c0-.169.138-.307.307-.307h5.986c.169 0 .307.138.307.307a.308.308 0 0 1-.307.307Zm4.377-10.484c-.976 0-1.375.4-1.375 1.376v7.113c0 .991.387 1.375 1.375 1.375h3.22c.992 0 1.376-.387 1.376-1.375v-7.113c0-.992-.387-1.376-1.375-1.376h-3.221Zm1.1 8.39c0-.352.202-.515.512-.515s.51.163.513.516c0 .169-.046.291-.129.377-.092.092-.221.135-.384.135s-.295-.043-.384-.135c-.082-.083-.129-.208-.129-.377Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMulticontenidoLight);
export default ForwardRef;
