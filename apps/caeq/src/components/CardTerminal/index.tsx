import { Button, Text, ChevronRight, Box } from "@phoenix/design-system";
import Image from "next/image";
import S from "./CardTerminalStyled";

function CardTerminal({
  terminal,
  isUnbeatable,
  handleViewDetail,
}: {
  terminal: any;
  isUnbeatable?: boolean;
  handleViewDetail: () => void;
}) {
  return (
    <S.CardWrapper minHeight={395} isUnbeatable={isUnbeatable}>
      <S.HeadBand isUnbeatable={isUnbeatable}>
        {isUnbeatable ? (
          <Box display="flex" alignItems="center" px={3}>
            <Text width="50%">¡Sólo por hoy!</Text>
            <Box height={35} width="50%" />
          </Box>
        ) : (
          <>
            Precio exclusivo Online - <b>Sólo aquí</b>
          </>
        )}
      </S.HeadBand>
      <S.Body isUnbeatable={isUnbeatable}>
        <Box display="flex">
          <S.Photo width="50%">
            <Image
              src={terminal.image}
              width={150}
              height={230}
              style={{ objectFit: "contain" }}
              alt=""
              priority
            />
          </S.Photo>
          <Box
            width="50%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            pt={3}
          >
            <div>
              <Text mb={18} color={isUnbeatable ? "white" : "secondary-dark"}>
                {terminal.shortName} <br />
                <b>{terminal.model}</b>
              </Text>
              <Text
                mb={1}
                $size="Body4"
                color={isUnbeatable ? "white" : undefined}
              >
                En 12 cuotas de
              </Text>
              <Text
                $size="H1"
                fontWeight="bold"
                color={isUnbeatable ? "white" : "primary"}
              >
                <small>s/</small>
                1871
              </Text>
              <Text
                color={isUnbeatable ? "white" : "gray-4"}
                fontSize={{ xs: 12 }}
                maxWidth={110}
              >
                Disfruta hoy, paga desde Marzo
              </Text>
            </div>
            <Button
              fontSize={14}
              color={isUnbeatable ? "white" : "primary"}
              pb={2}
              label="Detalle del equipo"
              $variant="text"
              onClick={handleViewDetail}
              iconRight={<ChevronRight />}
            />
          </Box>
        </Box>
        <Button
          as="a"
          href="/order"
          label="Lo quiero"
          $variant="text"
          color="white"
          p={2}
          bg={isUnbeatable ? "magenta" : "success"}
          width="100%"
        />
      </S.Body>
    </S.CardWrapper>
  );
}
// <S.Wrapper isUnbeatable={isUnbeatable}>
//   <S.HeadBand bg={isUnbeatable ? "magenta" : "secondary-dark"}>
//     <Text textAlign="center" fontSize={{ xs: 12 }}>
//       {isUnbeatable ? (
//         <b>¡Sólo por hoy!</b>
//       ) : (
//         <>
//           Precio exclusivo Online - <b>Sólo aquí</b>
//         </>
//       )}
//     </Text>
//   </S.HeadBand>
//   <S.Body>
//     <S.Photo>
//       <Image
//         src={terminal.image}
//         width={150}
//         height={230}
//         style={{ objectFit: "contain" }}
//         alt=""
//         priority
//       />
//     </S.Photo>
//     <S.Info>
//       <div>
//         <Text mb={18} color={isUnbeatable ? "white" : "secondary-dark"}>
//           {terminal.shortName} <br />
//           <b>{terminal.model}</b>
//         </Text>
//         <Text
//           mb={1}
//           $size="Body4"
//           color={isUnbeatable ? "white" : undefined}
//         >
//           En 12 cuotas de
//         </Text>
//         <Text
//           mb={2}
//           color={isUnbeatable ? "white" : "secondary-dark"}
//           fontWeight="bold"
//           fontSize={{ xs: 20 }}
//         >
//           <Text
//             as="span"
//             color={isUnbeatable ? "white" : undefined}
//             fontSize={{ xs: 14 }}
//             fontWeight="bold"
//           >
//             S/
//           </Text>{" "}
//           95
//         </Text>
//         <Text
//           color={isUnbeatable ? "white" : "gray-4"}
//           fontSize={{ xs: 12 }}
//           maxWidth={110}
//         >
//           Disfruta hoy, paga desde Marzo
//         </Text>
//       </div>

//       <Button
//         fontSize={14}
//         color={isUnbeatable ? "white" : "primary"}
//         pb={2}
//         label="Detalle del equipo"
//         $variant="text"
//         onClick={handleViewDetail}
//         iconRight={<ChevronRight />}
//       />
//     </S.Info>
//     <Button
//       as="a"
//       href="/order"
//       label="Lo quiero"
//       $variant="success"
//       width="100%"
//       mt={3}
//     />
//   </S.Body>
// </S.Wrapper>
export default CardTerminal;
