 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgForward(
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
        d="M12.003 20.77c-5.823 0-8.774-2.95-8.774-8.767 0-5.823 2.951-8.774 8.774-8.774 5.82 0 8.768 2.951 8.768 8.774 0 5.817-2.951 8.768-8.768 8.768Zm0-18.77C5.46 2 2 5.458 2 12.003 2 18.543 5.458 22 12.003 22 18.543 22 22 18.542 22 12.003 22 5.458 18.542 2 12.003 2ZM7.592 13.622v-3.85l3.221 1.935c-.003 0-3.221 1.915-3.221 1.915Zm9.237-1.92-3.221 1.914v-3.85l3.221 1.935ZM6.673 8.15a.613.613 0 0 0-.313.535V14.7a.616.616 0 0 0 .93.529l5.032-2.994c.025-.014.037-.043.06-.06v2.522a.616.616 0 0 0 .927.53l5.031-2.995a.613.613 0 0 0 .003-1.053l-5.031-3.027a.615.615 0 0 0-.93.526v2.558c-.023-.017-.032-.042-.058-.057l-5.03-3.022a.62.62 0 0 0-.621-.008Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgForward);
export default ForwardRef;
