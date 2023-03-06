import { Box, Button, Select, Text } from "@phoenix/design-system";
import { useFindTerminal } from "./useFindTerminal";

function InputFindTerminal() {
  const {
    terminalResults,
    terminal,
    inputValue,
    getTerminalOptions,
    handleOnInputChange,
    handleOnChange,
    handleOnFocus,
    handleOnClick,
  } = useFindTerminal();

  return (
    <>
      <Text color="gray-4" $size="Body3">
        Busca tu equipo aquí
      </Text>
      <Select
        isAsync
        mt={2}
        loadingMessage={() => "Estamos buscando tu equipo..."}
        noOptionsMessage={() => "Busca Tu equipo"}
        placeholder="Ingresa"
        value={terminal}
        inputValue={inputValue}
        defaultOptions={terminalResults}
        loadOptions={getTerminalOptions}
        onBlur={(e: any) => e.preventDefault()}
        onInputChange={handleOnInputChange}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        className="swiper-no-swiping"
      />
      <Box textAlign="center">
        <Button
          $variant="success"
          width={146}
          label="Buscar"
          mt={6}
          disabled={!terminal?.value}
          onClick={handleOnClick}
        />
      </Box>
    </>
  );
}

export default InputFindTerminal;
