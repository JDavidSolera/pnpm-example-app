 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgApiLight(
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
        d="M20.725 19.189c.242 0 .441-.19.441-.427V13.74l-.475.439a.425.425 0 0 1-.478.076 3.095 3.095 0 0 0-.86-.259.404.404 0 0 1-.35-.398v-.83l-.734-.038-.037.868c0 .2-.148.367-.35.398a3.105 3.105 0 0 0-.86.257.428.428 0 0 1-.48-.077l-.635-.615-.572.492.635.672c.134.128.16.327.068.484-.114.19-.208.549-.253.814a.412.412 0 0 1-.413.338h-.86l-.036.712.896.037c.205 0 .379.142.413.338.045.268.14.62.253.814a.397.397 0 0 1-.068.487l-.456.438h5.211v.003Zm-17.891-.424c0 .236.196.427.44.427H14.53a.799.799 0 0 1 .216-.396l.43-.415a3.432 3.432 0 0 1-.142-.456h-.518a.858.858 0 0 1-.871-.845v-.674a.86.86 0 0 1 .87-.845h.519c.034-.14.08-.302.142-.459l-.43-.415a.838.838 0 0 1-.256-.6c0-.231.091-.442.259-.604l.506-.492a.922.922 0 0 1 1.244 0l.433.418c.148-.057.304-.102.466-.142v-.5c0-.468.393-.846.871-.846h.697c.481 0 .871.378.871.845v.5c.162.04.316.086.467.143l.433-.421a.878.878 0 0 1 .43-.228V9.08H2.833v9.685Zm.44-12.957a.435.435 0 0 0-.44.427v2.04h18.332v-2.04a.433.433 0 0 0-.44-.427H3.274ZM20.726 5C21.428 5 22 5.555 22 6.235v12.53c0 .68-.572 1.235-1.275 1.235H3.275C2.572 20 2 19.445 2 18.765V6.235C2 5.555 2.572 5 3.275 5h17.45ZM6.257 7.66a.572.572 0 0 1-.58-.56c0-.31.259-.56.58-.56.322 0 .58.25.58.56a.57.57 0 0 1-.58.56ZM8 7.66a.572.572 0 0 1-.58-.56c0-.31.258-.56.58-.56.321 0 .578.25.578.56 0 .31-.257.56-.578.56Zm-3.48 0a.572.572 0 0 1-.581-.56c0-.31.259-.56.58-.56.322 0 .581.25.581.56a.57.57 0 0 1-.58.56Zm14.095 10.405c.919 0 1.366-.433 1.366-1.323 0-.891-.447-1.324-1.367-1.324-.919 0-1.365.433-1.365 1.324 0 .89.446 1.323 1.365 1.323Zm0-3.458c1.377 0 2.2.797 2.2 2.132 0 1.334-.823 2.131-2.2 2.131-1.378 0-2.2-.797-2.2-2.131 0-1.335.822-2.132 2.2-2.132Z"
        fill="currentColor"
      />
      <path
        d="M5.398 11.662h.922l1.323 3.668h-.896l-.305-.922h-1.19l-.284.922h-.797l1.227-3.668Zm.842 2.14-.401-1.224h-.011l-.382 1.224h.794Zm1.83-2.14h1.26c.576 0 .94.08 1.176.302.2.182.296.466.296.859 0 .393-.091.686-.273.89-.214.243-.547.354-1.03.354h-.59v1.266h-.836v-3.671H8.07Zm1.25 1.776c.267 0 .38-.037.486-.14.097-.097.145-.253.145-.466 0-.2-.043-.345-.14-.436-.102-.09-.256-.128-.514-.128h-.393v1.17h.415Zm2.082-1.776h.837v3.668h-.837v-3.668Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgApiLight);
export default ForwardRef;
