import { Box, Button, Card, Text } from "@phoenix/design-system";
import Image from "next/image";

function CardOutlet() {
  return (
    <Card p={0} borderRadius={8} overflow="hidden" minHeight={395}>
      <Box
        bg="secondary-dark"
        color="white"
        textAlign="center"
        py={2}
        fontSize={12}
      >
        Sólo hasta agotar stock
      </Box>
      <Box
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/images/backgrounds/card-outlet.svg"
          alt=""
          width={255}
          height={202}
        />
        <Box display="flex" alignItems="center" justifyContent="center" py={4}>
          <Text $size="Body3" lineHeight={1}>
            Ahorra
            <br />
            hasta
          </Text>
          <Text $size="H1" fontWeight="bold" pl={2}>
            <small>s/</small>
            450
          </Text>
        </Box>
        <Button label="Ir al outlet" width="100%" bg="#EC624B" />
      </Box>
    </Card>
  );
}

export default CardOutlet;
