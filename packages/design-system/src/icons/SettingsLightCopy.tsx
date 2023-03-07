 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSettingsLightCopy(
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
        d="M12 15.732c-1.186 0-2.108-.31-2.74-.92-.657-.634-.99-1.578-.99-2.813s.333-2.18.99-2.814c.635-.61 1.556-.92 2.74-.92 1.184 0 2.108.31 2.74.92.657.634.99 1.579.99 2.814s-.333 2.18-.99 2.814c-.635.611-1.556.919-2.74.919Zm0-6.894c-1.033 0-1.824.256-2.347.76-.54.523-.817 1.33-.817 2.404 0 1.072.276 1.88.817 2.404.523.503 1.311.76 2.347.76s1.824-.257 2.347-.76c.54-.524.817-1.332.817-2.404 0-1.073-.274-1.881-.817-2.402-.526-.506-1.314-.762-2.347-.762Z"
        fill="currentColor"
      />
      <path
        d="M12.788 22h-1.576a.725.725 0 0 1-.726-.726v-2.057c0-.09-.1-.16-.196-.173a7.485 7.485 0 0 1-2.219-.683l-.003-.003c-.074-.04-.176-.051-.239.008l-.003.003-1.502 1.506a.74.74 0 0 1-1.044 0l-1.152-1.153a.74.74 0 0 1 0-1.044l1.502-1.502.006-.003c.068-.074.043-.182.017-.222-.23-.376-.535-1.212-.694-2.24-.014-.09-.088-.193-.17-.196H2.724A.729.729 0 0 1 2 12.79v-1.577c0-.4.324-.725.725-.725h2.06c.083-.003.157-.106.17-.197.115-.74.376-1.718.695-2.239.023-.04.051-.148-.017-.222L4.128 6.325a.74.74 0 0 1 0-1.044L5.28 4.128a.74.74 0 0 1 1.044 0L7.83 5.634c.063.06.165.045.24.008l.002-.003a7.485 7.485 0 0 1 2.22-.683c.096-.014.195-.085.195-.173V2.726c0-.402.325-.723.726-.726h1.576c.401 0 .726.324.726.726v2.062c.002.089.1.154.196.171h.003c.83.128 1.533.344 2.213.683.048.023.165.068.245-.006l1.505-1.505a.74.74 0 0 1 1.044 0l1.152 1.153a.74.74 0 0 1 0 1.044l-1.505 1.505c-.057.063-.046.165-.009.239l.003.003c.328.646.555 1.391.683 2.22.014.096.085.196.174.196h2.056c.402 0 .726.324.726.725v1.576a.725.725 0 0 1-.726.726h-2.056c-.091 0-.16.1-.174.196a7.487 7.487 0 0 1-.683 2.22l-.003.003c-.04.074-.05.176.009.239l1.505 1.505a.74.74 0 0 1 0 1.044l-1.152 1.152a.74.74 0 0 1-1.044 0l-1.502-1.502-.003-.006c-.08-.074-.197-.028-.245-.005a7.4 7.4 0 0 1-2.213.683h-.003c-.094.014-.194.082-.197.17v2.063a.726.726 0 0 1-.725.72ZM8.33 17.854c.592.3 1.28.51 2.048.63.393.059.68.369.68.736v2.057a.16.16 0 0 0 .157.157h1.576a.16.16 0 0 0 .156-.157V19.22c0-.364.285-.674.675-.737h.002a6.887 6.887 0 0 0 2.052-.629c.253-.125.626-.162.902.117l.005.006 1.497 1.494a.174.174 0 0 0 .242 0l1.152-1.153a.174.174 0 0 0 0-.242l-1.502-1.502c-.23-.23-.276-.595-.114-.905.299-.592.509-1.28.628-2.049.06-.392.37-.68.737-.68h2.057a.16.16 0 0 0 .157-.156v-1.576a.16.16 0 0 0-.157-.157h-2.057c-.367 0-.677-.284-.736-.68-.12-.768-.33-1.457-.63-2.049-.161-.313-.116-.674.115-.904l.005-.006 1.497-1.494a.174.174 0 0 0 0-.242l-1.152-1.152a.173.173 0 0 0-.242 0l-1.502 1.502c-.276.279-.65.242-.902.117a6.863 6.863 0 0 0-2.052-.629h-.002c-.393-.063-.675-.37-.675-.737V2.72a.16.16 0 0 0-.156-.157h-1.576a.16.16 0 0 0-.157.157v2.057c0 .367-.284.677-.68.737-.768.12-1.456.33-2.048.629-.313.162-.677.117-.905-.114L5.926 4.527a.173.173 0 0 0-.242 0L4.532 5.679a.174.174 0 0 0 0 .242l1.502 1.502a.757.757 0 0 1 .103.925c-.24.387-.493 1.22-.618 2.029-.051.327-.327.677-.737.677H2.725a.16.16 0 0 0-.156.156v1.577a.16.16 0 0 0 .156.156h2.057c.308 0 .669.24.737.677.125.809.379 1.645.618 2.03a.757.757 0 0 1-.103.924l-1.502 1.502a.173.173 0 0 0 0 .242l1.152 1.152a.174.174 0 0 0 .242 0l1.502-1.502c.225-.23.59-.276.902-.114Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgSettingsLightCopy);
export default ForwardRef;
