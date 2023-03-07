 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTeam(
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
        d="M16.647 10.421c-.194.182-.233.537-.233.805 0 .265.038.62.233.796.192.179.555.215.828.215.272 0 .633-.036.822-.212.191-.179.23-.531.23-.8 0-.268-.042-.622-.233-.804-.192-.179-.553-.212-.822-.212-.27 0-.63.033-.825.212Zm-.844 2.459c-.406-.375-.611-.93-.611-1.654 0-.724.205-1.283.61-1.66.39-.363.953-.545 1.672-.545.723 0 1.28.182 1.672.548.403.377.606.936.606 1.66 0 .723-.206 1.28-.606 1.654-.389.36-.95.545-1.672.545-.722-.003-1.283-.188-1.671-.548ZM5.224 10.413c-.191.181-.233.536-.233.804 0 .266.042.62.23.8.19.176.553.212.823.212.269 0 .633-.036.827-.215.192-.18.233-.531.233-.797 0-.265-.041-.623-.233-.804-.194-.18-.555-.216-.825-.216-.269 0-.633.037-.822.216Zm.822 3.006c-.719 0-1.28-.184-1.669-.545-.402-.374-.608-.93-.608-1.654 0-.724.206-1.282.608-1.66.39-.363.95-.547 1.67-.547.719 0 1.282.181 1.671.545.406.377.611.936.611 1.66 0 .723-.205 1.28-.61 1.656-.392.36-.953.545-1.673.545Zm5.644-5.666a.602.602 0 0 1-.609-.598l.014-2.565a.602.602 0 0 1 .611-.59h.003a.602.602 0 0 1 .608.598l-.014 2.565a.602.602 0 0 1-.61.59h-.003Zm-2.655.592L7.888 7.219a.58.58 0 0 1 .005-.838.626.626 0 0 1 .864.002L9.904 7.51a.586.586 0 0 1-.003.842.622.622 0 0 1-.866-.006Zm4.887.176a.624.624 0 0 1-.43-.17.58.58 0 0 1-.006-.839l1.147-1.126a.627.627 0 0 1 .867-.005.58.58 0 0 1 .003.838l-1.147 1.126a.61.61 0 0 1-.434.176Zm6.332 12.291.04-3.976c0-.27-.053-.648-.312-.908-.288-.293-.769-.352-1.122-.352h-2.777c-.036 0-.08-.003-.12 0h-.01c-.128.003-.264-.003-.4 0-.148.003-.373 0-.503-.047a1.231 1.231 0 0 1-.375-.257c-.083-.093-.305-.397-.305-.397l-1.983-2.588v1.417l1.397 1.78.605.768s.142.163.194.285c.05.112.064.353.064.428l-.014 1.252-.027 2.596h3.396V18.09c0-.33.275-.592.611-.592.336 0 .611.265.611.592v2.721h1.03Zm-9.123-7.116v-1.417l-1.983 2.59s-.222.305-.305.397c-.075.087-.27.22-.375.257-.13.048-.358.05-.503.048-.136-.003-.275.002-.4 0H4.658c-.353 0-.83.061-1.122.354-.256.26-.311.638-.311.909l.039 3.976h1.03v-2.722c0-.327.275-.592.61-.592.337 0 .612.265.612.592v2.722h3.396l-.025-2.599-.016-1.252c0-.075.016-.315.064-.427.052-.123.194-.285.194-.285l.605-.769 1.397-1.782Zm9.734 1.41c.428.431.653 1.03.653 1.733l-.05 4.912a.255.255 0 0 1-.258.249h-7.58a.255.255 0 0 1-.257-.249l.047-4.772-1.664-2.118-1.658 2.112.05 4.773c0 .14-.116.248-.26.248h-7.58a.253.253 0 0 1-.258-.248L2 16.83c0-.701.225-1.3.653-1.733.466-.469 1.158-.718 2.002-.718h2.777c.186 0 .364.017.533.042l3.28-4.28.003-.003.006-.009c.008-.01.022-.02.03-.028a.485.485 0 0 1 .103-.097c.017-.012.033-.017.05-.025.033-.02.07-.042.111-.056.003-.003.008 0 .011-.003.008-.003.014-.003.022-.003a.647.647 0 0 1 .164-.025c.014 0 .025.005.039.005a.622.622 0 0 1 .147.026l-.003-.003h.006c.003 0 .003.003.003.003a.047.047 0 0 0 .02.002c.002.003.007 0 .01.003.042.014.075.037.114.056.014.008.034.014.047.025a.574.574 0 0 1 .103.098c.011.011.022.017.03.03l.006.006.003.003 3.28 4.284c.17-.025.347-.04.533-.04h2.777c.847-.002 1.539.246 2.005.716Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgTeam);
export default ForwardRef;