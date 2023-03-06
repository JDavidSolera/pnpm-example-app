 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProtectionLight(
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
        d="M20.93 15.553c.002-.02.258-3.45.23-4.573-.006-.325-.094-.362-.316-.376-.256.009-.382.128-.416.305l-.538 2.624c-.005.025-.02.048-.03.074.005.219-.044.44-.16.634l-.003.003-1.597 2.704a.415.415 0 0 1-.57.148.424.424 0 0 1-.144-.578l1.596-2.7.003-.004v-.002c.094-.16.023-.436-.133-.53-.146-.09-.35-.09-.453.077l-.085.148c-.257.458-.792 1.415-1.862 1.967-.008.005-.293.165-.797.825a8.479 8.479 0 0 0-1.087 1.884l-.21.507h3.335c.063 0 .122.008.182.02l1.927-1.648c.143-.123.296-.24.447-.353.185-.14.322-.305.45-.518.13-.23.21-.444.23-.638Zm-2.801 5.16v-.737c0-.244-.2-.444-.442-.444h-3.586c-.242 0-.44.2-.44.444v.738c0 .244.198.444.44.444h3.586c.242 0 .442-.2.442-.445Zm3.865-9.753c.031 1.167-.222 4.534-.234 4.676a2.494 2.494 0 0 1-.35.985c-.185.31-.393.555-.629.731-.176.134-.316.24-.447.353l-1.685 1.44c.191.225.31.513.31.831v.738c0 .708-.571 1.286-1.274 1.286h-3.587a1.283 1.283 0 0 1-1.275-1.287v-.737c0-.418.202-.788.51-1.021l.455-1.099a9.31 9.31 0 0 1 1.198-2.072c.632-.823 1.02-1.03 1.093-1.062.834-.432 1.27-1.21 1.5-1.628l.103-.179c.324-.526.999-.68 1.554-.367l.37-1.807c.12-.584.62-.98 1.212-.98.476.026 1.153.214 1.176 1.199Zm-11.667 9.753v-.737a.442.442 0 0 0-.44-.444H6.3c-.242 0-.441.2-.441.444v.738c0 .244.196.444.44.444h3.587c.245 0 .441-.2.441-.445Zm-6.62-4.033c.18.137.336.257.487.385l1.927 1.648c.06-.012.12-.02.182-.02h3.335l-.21-.507a8.276 8.276 0 0 0-1.087-1.884c-.504-.66-.792-.823-.794-.823-1.073-.555-1.609-1.508-1.865-1.966l-.088-.151c-.102-.168-.304-.168-.455-.077-.154.094-.225.37-.131.53.003 0 .003.002.003.002l.002.003 1.594 2.704a.418.418 0 0 1-.355.635.417.417 0 0 1-.36-.208L4.3 14.25s-.003 0-.003-.003a1.234 1.234 0 0 1-.16-.637c-.008-.026-.025-.049-.03-.074l-.536-2.622a.395.395 0 0 0-.372-.31c-.282.017-.353.068-.362.379-.028 1.127.228 4.556.23 4.59.023.18.1.393.237.618.12.213.259.376.404.49Zm6.948 2.277c.307.234.509.604.509 1.022v.737A1.28 1.28 0 0 1 9.892 22H6.306a1.278 1.278 0 0 1-1.273-1.284v-.737c0-.319.12-.606.31-.83L3.66 17.707a9.57 9.57 0 0 0-.424-.336 2.489 2.489 0 0 1-.65-.748 2.431 2.431 0 0 1-.347-.97c-.01-.158-.264-3.524-.236-4.691.023-.985.7-1.17 1.102-1.196a1.223 1.223 0 0 1 1.28.976l.37 1.808c.555-.308 1.23-.157 1.552.37l.102.179c.233.418.672 1.193 1.517 1.634.057.025.444.233 1.076 1.056a9.377 9.377 0 0 1 1.195 2.072l.459 1.096Zm1.34-5.228c1.298-.649 4.173-2.368 4.429-3.868.23-1.343.27-4.24.276-5.365-1.087.034-1.742-.398-2.38-.825-.64-.427-1.243-.831-2.322-.831h-.006c-1.078 0-1.682.404-2.322.83-.646.433-1.307.892-2.38.832.006 1.13.049 4.019.28 5.36.258 1.499 3.127 3.218 4.425 3.867Zm5.251-3.72c-.392 2.28-4.593 4.343-5.072 4.571a.43.43 0 0 1-.176.04.442.442 0 0 1-.18-.04c-.477-.228-4.673-2.291-5.066-4.57-.304-1.754-.293-5.801-.293-5.972 0-.131.06-.25.163-.33.1-.08.23-.108.352-.08 1.014.16 1.554-.2 2.238-.657C9.895 2.515 10.666 2 11.995 2h.006c1.329 0 2.1.518 2.783.973.683.456 1.23.817 2.252.655a.437.437 0 0 1 .344.094.426.426 0 0 1 .157.316c-.003.168.008 4.215-.29 5.971 0-.003 0-.003 0 0Zm-3.045-3.743a.412.412 0 0 1 .589 0 .424.424 0 0 1 0 .595l-3.452 3.487a.419.419 0 0 1-.293.122.43.43 0 0 1-.296-.122L9.2 8.782a.424.424 0 0 1 0-.594.417.417 0 0 1 .59 0l1.255 1.266L14.2 6.266Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgProtectionLight);
export default ForwardRef;
