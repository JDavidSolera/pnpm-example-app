import { Box, Button, CallCenter, Card, Text } from "@phoenix/design-system";

function CardCallMe({ handleOnCallMe }: { handleOnCallMe: () => void }) {
  return (
    <Card
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={395}
      borderRadius={8}
    >
      <Box>
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
          <CallCenter />
        </Box>
        <Text color="gray-4" textAlign="center" fontWeight="bold" mb={2}>
          ¿Necesitas ayuda?
        </Text>
        <Text color="gray-4" textAlign="center" $size="Body3">
          No te preocupes te ayudamos
        </Text>
        <Button
          $variant="text"
          width="100%"
          mt={5}
          color="primary"
          fontWeight="bold"
          fontSize="16px"
          label="Te llamamos"
          onClick={handleOnCallMe}
        />
      </Box>
    </Card>
  );
}

export default CardCallMe;
