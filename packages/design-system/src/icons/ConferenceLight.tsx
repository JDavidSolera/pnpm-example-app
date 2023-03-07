 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgConferenceLight(
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
        d="M18.829 8.89h-1.61c-.007 0-.012-.003-.018-.003H5.464c-.006 0-.011.003-.02.003h-1.61V7.504h14.995V8.89Zm-13.365 2.1h11.737V9.718H5.464v1.272Zm2.148 8.317h7.438v-7.484H7.612v7.484Zm9.566 2.062H5.484v-1.232h11.694v1.232ZM9.061 3.034l.597.597-.982.976-.597-.594.982-.979Zm3.932.595.597-.598.982.979-.597.595-.982-.976Zm5.836 3.044H15.98V5.57a.416.416 0 0 0-.122-.293l-.688-.686a.833.833 0 0 0 .239-.577.825.825 0 0 0-.245-.586l-.982-.98a.831.831 0 0 0-1.178 0l-.6.598a.831.831 0 0 0 0 1.175l.982.976a.832.832 0 0 0 1.178 0l.017-.017.566.564v.933H7.516v-.933l.56-.558.011.011a.832.832 0 0 0 1.178 0l.982-.976a.831.831 0 0 0 0-1.175l-.597-.597a.836.836 0 0 0-1.181 0l-.982.979a.827.827 0 0 0-.003 1.17l-.683.68a.404.404 0 0 0-.122.292v1.104H3.834A.83.83 0 0 0 3 7.504V8.89c0 .458.376.83.834.83h.796v1.272c0 .458.373.831.834.831h1.317v7.486H5.487a.83.83 0 0 0-.834.831v1.232c0 .458.373.831.834.831H17.18a.83.83 0 0 0 .834-.83V20.14a.832.832 0 0 0-.834-.83h-1.294v-7.487h1.317a.83.83 0 0 0 .834-.83V9.72h.794c.46 0 .833-.373.833-.831V7.504a.837.837 0 0 0-.836-.83Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgConferenceLight);
export default ForwardRef;
