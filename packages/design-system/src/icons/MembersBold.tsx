 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMembersBold(
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
        d="M12.074 4c1.214 0 2.162.334 2.818.995.684.687 1.032 1.702 1.032 3.016s-.348 2.329-1.032 3.01c-.655.655-1.604.99-2.818.99-1.213 0-2.162-.334-2.814-.99-.679-.681-1.024-1.696-1.024-3.01 0-1.317.345-2.332 1.024-3.016C9.915 4.334 10.86 4 12.074 4ZM6.152 8.988c.638 0 1.138.176 1.483.524.36.359.54.894.54 1.587s-.18 1.224-.543 1.584c-.345.345-.845.52-1.483.52-.638 0-1.136-.175-1.48-.52-.36-.36-.541-.891-.541-1.584 0-.693.18-1.228.537-1.587.351-.348.848-.524 1.487-.524Zm11.85.03c.63 0 1.125.174 1.467.517.354.356.532.885.532 1.57 0 .684-.178 1.213-.535 1.566-.339.343-.834.515-1.466.515-.633 0-1.127-.172-1.47-.515-.356-.356-.534-.882-.534-1.567 0-.684.181-1.213.535-1.57.345-.344.842-.517 1.472-.517Zm-3.584 4.37c1.423 0 2.593.476 3.384 1.382.724.831 1.107 1.984 1.107 3.335v1.412c0 .267-.196.483-.438.483H5.691c-.24 0-.436-.216-.436-.483v-1.412c0-1.351.38-2.501 1.1-3.332.786-.906 1.953-1.383 3.379-1.383h4.684v-.003Zm-8.683.761c-.006.006-.015.012-.02.02-.866.998-1.323 2.36-1.323 3.936v.768h-1.51c-.485 0-.882-.411-.882-.92v-.722c0-.868.267-1.616.776-2.168.552-.598 1.346-.914 2.298-.914h.66Zm15.695.897c.509.552.776 1.303.776 2.168v.722c0 .509-.396.92-.882.92h-1.556v-.754c0-1.575-.46-2.935-1.331-3.936l-.035-.034h.73c.955 0 1.749.316 2.298.914Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMembersBold);
export default ForwardRef;