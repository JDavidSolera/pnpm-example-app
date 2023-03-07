import { Button, Card, Text, Promo, Box } from "@phoenix/design-system";
import InputFindTerminal from "./InputFindTerminal";

function CardFindTerminal() {
  return (
    <Card
      height="100%"
      display="flex"
      borderRadius={8}
      flexDirection="column"
      justifyContent="space-between"
      onClick={(e) => e.stopPropagation()}
    >
      <Box>
        <Box
          color="white"
          mb={2}
          bg="primary"
          borderRadius={8}
          fontSize={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={46}
          height={46}
          mx="auto"
        >
          <Promo />
        </Box>
        <Text color="primary" textAlign="center" fontWeight="bold" mb={4}>
          ¿Deseas otro equipo?
        </Text>
        <InputFindTerminal />
      </Box>
      <Box textAlign="center">
        <Text color="gray-4" $size="Body3" mt={60} mb={2}>
          ¿Necesitas ayuda?
        </Text>
        <Button
          label="Te llamamos"
          $size="sm"
          $variant="secondary"
          fontWeight="regular"
          fontSize={12}
          py={1}
        />
      </Box>
    </Card>
  );
}

export default CardFindTerminal;
