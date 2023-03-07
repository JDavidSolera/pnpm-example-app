import { Box, Button, Card, Promo, Text } from "@phoenix/design-system";

function CardViewMoreOfferts({
  handleOnViewMore,
}: {
  handleOnViewMore: () => void;
}) {
  return (
    <Card
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={395}
      borderRadius={8}
    >
      <Box textAlign="center">
        <Box
          color="white"
          mb={4}
          bg="primary"
          borderRadius={20}
          fontSize={48}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={74}
          height={74}
          mx="auto"
        >
          <Promo />
        </Box>
        <Text color="gray-4" fontWeight="bold" mb={2}>
          ¿No te convence ningún equipo?
        </Text>
        <Button
          mt={5}
          label="Ver más ofertas"
          onClick={handleOnViewMore}
          fontStyle="italic"
          fontWeight="regular"
          bg="transparent"
          color="gray-4"
          border={1}
          borderColor="gray-3"
          borderStyle="solid"
          fontSize={18}
        />
      </Box>
    </Card>
  );
}

export default CardViewMoreOfferts;
