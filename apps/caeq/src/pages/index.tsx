import {
  Box,
  Button,
  Container,
  OutgoingCall,
  Text,
} from "@phoenix/design-system";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { IPromotion, promotionService } from "@phoenix/core/src/caeq";
import CarouselProducts from "@/components/CarouselProducts";

export const getServerSideProps: GetServerSideProps<{
  promotion: IPromotion;
}> = async (ctx) => {
  const { query } = ctx;
  const { hash } = query;

  if (!hash || typeof hash !== "string") {
    // el hash no existe en la query o no es un string
    return {
      notFound: true,
    };
  }

  const result = await promotionService.getPromotion(hash);

  if (result.isLeft()) {
    return {
      redirect: {
        destination: "promo-error",
        permanent: true,
      },
    };
  }

  return {
    props: {
      promotion: result.get(),
    },
  };
};

export default function IndexPage({
  promotion,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Box bg="primary" color="white" py={2}>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Text fontWeight="bold">Hola Anthony</Text>
              <Text $size="Body3">Tenemos estas ofertas para ti.</Text>
            </div>
            <Image src="/movistar.svg" width={36} height={28} alt="" />
          </Box>
        </Container>
      </Box>
      <CarouselProducts products={promotion.products} />
      <Container>
        <Text textAlign="center" maxWidth={233} mx="auto" mb="10px">
          Ademáz, recibe estos beneficios
        </Text>
        <Box display="flex" textAlign="center" mb={4}>
          <Box width="33.3%">
            <Image alt="" src="/rappi-prime.png" width={61} height={42} />
            <Text $size="Body3" mt={1}>
              3 meses gratis
            </Text>
            <Text
              as="a"
              $size="Body3"
              fontWeight="bold"
              href="http://example.com"
            >
              Ver más
            </Text>
          </Box>
          <Box width="33.3%">
            <Image
              alt=""
              src="/free-delivery.png"
              width={87}
              height={42}
              style={{ objectFit: "contain" }}
            />
            <Text $size="Body3" mt={1}>
              Pídelo hoy,
              <br /> recíbelo hoy
            </Text>
          </Box>
          <Box width="33.3%">
            <Image alt="" src="/badge.png" width={40} height={42} />
            <Text $size="Body3" mt={1}>
              1 año de
              <br /> garantía
            </Text>
          </Box>
        </Box>
      </Container>
      <Box textAlign="center" backgroundColor="white" py={3}>
        <Button
          iconLeft={<OutgoingCall style={{ fontSize: "2rem" }} />}
          label="¿Necesitas ayudad?"
          $variant="secondary"
          $size="sm"
        />
      </Box>
    </>
  );
}
