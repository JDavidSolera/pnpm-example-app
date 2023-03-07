 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgQuestionLight(
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
        d="M12.433 21.158c2.049-.043 8.733-.806 8.733-9.132 0-8.327-6.716-9.135-8.773-9.184-.276-.008-.6-.008-.891-.008-2.032.017-8.668.731-8.668 9.132 0 8.418 6.684 9.169 8.733 9.192.294.008.607 0 .866 0Zm-.026-19.15c1.608.043 9.593.71 9.593 10.018 0 9.317-7.96 9.934-9.55 9.965-.182 0-.393.009-.6.009-.1 0-.2 0-.291-.009C2.467 21.866 2 13.614 2 11.966c0-1.648.458-9.883 9.49-9.966h.277c.216 0 .45 0 .64.009Zm-.822 14.92c.4 0 .657.26.657.667v.065c0 .39-.26.649-.658.649-.44 0-.7-.259-.7-.649v-.065c0-.407.26-.666.658-.666h.043Zm2.572-10.474c.675.492.985 1.158.985 2.148 0 1.207-.493 1.907-1.69 3.33-1.384 1.59-1.492 1.724-1.492 3.306a.207.207 0 0 1-.208.208h-.455a.212.212 0 0 1-.208-.168 3.27 3.27 0 0 1-.05-.617c0-.965.275-1.582 1.231-2.724l.174-.207c1.474-1.74 1.773-2.274 1.773-3.148 0-.649-.19-1.084-.632-1.434-.25-.2-.691-.433-1.816-.433-.583 0-1.115.074-1.781.234a.196.196 0 0 1-.168-.026.29.29 0 0 1-.09-.134l-.066-.358a.214.214 0 0 1 .125-.234c.367-.167 1.306-.35 2.183-.35.927.006 1.662.208 2.185.607Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgQuestionLight);
export default ForwardRef;
