 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgOnlineOffer(
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
        d="M10.055 22c-1.814 0-3.226-.477-4.2-1.414-1.013-.977-1.527-2.428-1.527-4.312v-4.446c0-1.884.514-3.335 1.527-4.312.974-.94 2.39-1.414 4.2-1.414s3.225.477 4.199 1.414c1.013.974 1.527 2.426 1.527 4.312v1.903a.563.563 0 0 1-.561.561.563.563 0 0 1-.562-.561v-1.903c0-1.57-.398-2.745-1.182-3.503-.758-.73-1.908-1.1-3.421-1.1s-2.664.37-3.422 1.1c-.783.758-1.182 1.934-1.182 3.503v4.446c0 1.57.399 2.745 1.182 3.503.758.73 1.909 1.1 3.422 1.1 1.156 0 2.108-.218 2.826-.648a.56.56 0 0 1 .576.963c-.896.539-2.04.808-3.402.808Z"
        fill="currentColor"
      />
      <path
        d="M10.055 11.909a.563.563 0 0 1-.562-.562v-2.49c0-.308.253-.56.562-.56.309 0 .561.252.561.56v2.49a.563.563 0 0 1-.561.562Zm-.017-4.848a.563.563 0 0 1-.562-.561v-.77c0-.378 0-1.08-1.628-1.08H6.742c-.965 0-1.594-.143-2.035-.46C4.233 3.843 4 3.313 4 2.56 4 2.253 4.253 2 4.561 2c.31 0 .562.253.562.561 0 .542 0 .969 1.617.969h1.106c.926 0 1.602.194 2.071.59.45.378.68.923.68 1.613v.77c0 .308-.25.558-.56.558Zm.017 6.729a37.662 37.662 0 0 1-5.244-.36.56.56 0 1 1 .157-1.111c1.687.233 3.386.35 5.087.348a36.337 36.337 0 0 0 5.089-.348.563.563 0 0 1 .634.477.563.563 0 0 1-.477.634c-1.74.244-3.492.362-5.246.36Z"
        fill="currentColor"
      />
      <path
        d="M15.248 21.86c-.41 0-.62-.382-.789-.688a3.908 3.908 0 0 0-.115-.2c-.067.037-.151.087-.21.121-.295.177-.66.399-1.01.197-.352-.202-.343-.635-.335-.983 0-.067.003-.163 0-.238-.076-.003-.171 0-.238 0-.348.008-.778.017-.983-.334-.205-.351.02-.716.197-1.01.036-.06.087-.144.12-.212a3.896 3.896 0 0 0-.199-.115c-.306-.168-.688-.378-.688-.788 0-.41.382-.62.688-.79a3.9 3.9 0 0 0 .2-.114c-.037-.067-.088-.152-.121-.21-.177-.295-.399-.66-.197-1.011.202-.351.635-.343.983-.334.067 0 .162.002.238 0 .003-.076 0-.171 0-.239-.008-.345-.017-.777.334-.982.351-.205.716.02 1.01.196.06.037.144.087.211.12.04-.06.085-.142.115-.198.169-.306.38-.688.79-.688.409 0 .62.382.788.688.03.056.076.137.115.199.067-.037.152-.087.21-.12.295-.178.66-.4 1.011-.197.35.202.342.634.334.982 0 .067-.003.163 0 .239.076.002.171 0 .239 0 .345-.009.777-.017.982.334.205.35-.02.716-.196 1.01a2.97 2.97 0 0 0-.121.21c.062.04.143.085.2.116.305.168.687.379.687.789 0 .41-.382.62-.688.788-.056.031-.137.076-.2.116.037.067.088.151.122.21.177.295.398.66.196 1.01-.202.351-.634.343-.982.335-.068 0-.163-.003-.239 0-.003.075 0 .17 0 .238.008.346.017.778-.334.983-.35.205-.716-.02-1.01-.197a2.97 2.97 0 0 0-.211-.12c-.04.061-.084.143-.115.199-.168.306-.38.688-.789.688Zm2.543-4.927c-.067-.255.486-.769.354-.99-.132-.222-.853-.003-1.036-.189-.182-.185.04-.906-.188-1.035-.227-.13-.735.423-.99.353-.248-.067-.416-.803-.683-.803-.267 0-.435.736-.682.803-.255.068-.77-.486-.99-.353-.223.131-.004.853-.189 1.035-.185.183-.907-.039-1.036.188-.129.228.424.739.354.991-.067.247-.803.416-.803.682 0 .267.736.435.803.682.067.256-.486.77-.354.991.132.222.854.003 1.036.188.182.186-.04.907.188 1.036.228.13.736-.424.991-.354.247.065.415.803.682.803.267 0 .435-.735.682-.802.256-.068.77.485.991.353.222-.132.003-.853.188-1.036.185-.182.907.037 1.036-.188.13-.224-.424-.735-.354-.99.065-.248.803-.416.803-.683 0-.266-.738-.435-.803-.682Z"
        fill="currentColor"
      />
      <path
        d="M14.086 19.381a.282.282 0 0 1-.222-.454l2.324-2.97a.28.28 0 0 1 .393-.048.28.28 0 0 1 .048.393l-2.324 2.97a.268.268 0 0 1-.22.11Zm.205-2.13c-.452 0-.733-.281-.733-.733 0-.452.28-.733.733-.733.452 0 .732.281.732.733 0 .452-.28.733-.732.733Zm0-.901c-.14 0-.171.028-.171.17 0 .144.028.172.17.172.144 0 .172-.028.172-.171 0-.143-.03-.171-.171-.171Zm1.892 3.068c-.452 0-.733-.281-.733-.733 0-.452.28-.733.733-.733.452 0 .732.281.732.733 0 .452-.283.733-.732.733Zm0-.901c-.14 0-.172.028-.172.17 0 .144.029.172.172.172s.17-.028.17-.171c0-.143-.03-.171-.17-.171Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgOnlineOffer);
export default ForwardRef;