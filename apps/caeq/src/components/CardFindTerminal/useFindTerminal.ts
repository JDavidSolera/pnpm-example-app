import { useState } from "react";

export interface TerminalOption {
  readonly value: string | number;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const terminalOptions: readonly TerminalOption[] = [
  {
    value: 481,
    label: "Apple iPhone 11 64 GB",
    isDisabled: true,
  },
  {
    value: 561,
    label: "Apple iPhone 12 64 GB",
    isDisabled: true,
  },
  {
    value: 704,
    label: "Apple iPhone 14 128GB",
  },
  {
    value: 714,
    label: "Apple iPhone 14 Plus 128GB",
  },
  {
    value: 709,
    label: "Apple iPhone 14 PRO MAX 128GB",
  },
  {
    value: 681,
    label: "Apple iPhone SE",
  },
  {
    value: 719,
    label: "Apple PACK - iPhone 11 64 GB",
  },
  {
    value: 722,
    label: "Apple PACK - iPhone 14 Plus 128GB",
  },
  {
    value: 700,
    label: "HONOR Honor 70",
  },
  {
    value: 702,
    label: "HONOR Honor X6",
  },
  {
    value: 725,
    label: "HONOR PACK - Honor 70",
  },
  {
    value: 685,
    label: "HONOR X7",
  },
  {
    value: 678,
    label: "Huawei Nova Y70",
  },
  {
    value: 597,
    label: "Huawei Y9a",
  },
  {
    value: 648,
    label: "Motorola E20",
  },
  {
    value: 649,
    label: "Motorola E30",
  },
  {
    value: 691,
    label: "Motorola E32",
  },
  {
    value: 712,
    label: "Motorola Edge 30 Fusion 5G",
  },
  {
    value: 713,
    label: "Motorola Edge 30 Neo 5G",
  },
  {
    value: 652,
    label: "Motorola G200 5G",
  },
  {
    value: 679,
    label: "Motorola G22",
  },
  {
    value: 653,
    label: "Motorola G51 5G",
  },
  {
    value: 730,
    label: "Motorola PACK - Motorola Edge30 Fusion 5G",
  },
  {
    value: 731,
    label: "Motorola PACK - Motorola Edge30 Neo 5G",
  },
  {
    value: 733,
    label: "Motorola PACK - Motorola G51 5G",
  },
  {
    value: 647,
    label: "Nokia C20",
  },
  {
    value: 701,
    label: "OPPO A57",
  },
  {
    value: 699,
    label: "OPPO A77",
  },
  {
    value: 735,
    label: "OPPO PACK - Oppo A77",
  },
  {
    value: 693,
    label: "OPPO Reno 7",
  },
  {
    value: 759,
    label: "Realme 9",
  },
  {
    value: 629,
    label: "Realme C11",
  },
  {
    value: 694,
    label: "Realme C35 128 GB",
  },
  {
    value: 737,
    label: "Realme PACK - C35 128 GB",
  },
  {
    value: 655,
    label: "Samsung Galaxy A03",
  },
  {
    value: 758,
    label: "Samsung GALAXY A04 64GB",
  },
  {
    value: 667,
    label: "Samsung Galaxy A13",
  },
  {
    value: 672,
    label: "Samsung Galaxy A23",
  },
  {
    value: 677,
    label: "Samsung Galaxy A33 5G",
  },
  {
    value: 671,
    label: "Samsung Galaxy A53 5G",
  },
  {
    value: 676,
    label: "Samsung Galaxy S20 FE 5G",
  },
  {
    value: 651,
    label: "Samsung Galaxy S21 FE",
  },
  {
    value: 662,
    label: "Samsung Galaxy S22",
  },
  {
    value: 661,
    label: "Samsung Galaxy S22 Plus",
  },
  {
    value: 663,
    label: "Samsung Galaxy S22 Ultra",
  },
  {
    value: 695,
    label: "Samsung Galaxy Z FLIP 4 128GB",
  },
  {
    value: 742,
    label: "Samsung PACK - Galaxy S20 FE 5G",
  },
  {
    value: 743,
    label: "Samsung PACK - Galaxy S21 FE",
  },
  {
    value: 745,
    label: "Samsung PACK - Galaxy S22 Plus",
  },
  {
    value: 747,
    label: "Samsung PACK - Z FLIP 4 128GB",
  },
  {
    value: 749,
    label: "Vivo PACK - Y22S",
  },
  {
    value: 673,
    label: "Vivo V21 5G",
  },
  {
    value: 762,
    label: "Vivo Y16",
  },
  {
    value: 659,
    label: "Xiaomi 11T Pro",
  },
  {
    value: 636,
    label: "Xiaomi Mi 11 Lite 5G NE 256",
  },
  {
    value: 750,
    label: "Xiaomi PACK - Redmi Note 11",
  },
  {
    value: 751,
    label: "Xiaomi PACK - Redmi Note 11 Pro",
  },
  {
    value: 752,
    label: "Xiaomi PACK - Xiaomi Redmi Note 11S",
  },
  {
    value: 612,
    label: "Xiaomi Redmi 10",
  },
  {
    value: 689,
    label: "Xiaomi Redmi 10A",
  },
  {
    value: 682,
    label: "Xiaomi Redmi 10C",
  },
  {
    value: 755,
    label: "Xiaomi Redmi A1",
  },
  {
    value: 665,
    label: "Xiaomi Redmi Note 11S",
  },
  {
    value: 633,
    label: "ZTE Blade A31",
  },
  {
    value: 632,
    label: "ZTE Blade A51",
  },
  {
    value: 688,
    label: "ZTE Blade V30",
  },
  {
    value: 717,
    label: "ZTE BLADE V40 VITA 128GB",
  },
  {
    value: 718,
    label: "ZTE BLADE V40S 128GB",
  },
  {
    value: 754,
    label: "ZTE PACK - BLADE V40S 128GB",
  },
];
const filterTerminal = (inputValue: string) =>
  terminalOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

export const useFindTerminal = () => {
  const [terminalResults, setTerminalResults] = useState<TerminalOption[]>([]);
  const [terminal, setValue] = useState<TerminalOption>();
  const [inputValue, setInputValue] = useState<string>("");

  const getTerminalOptions = (_inputValue: string) =>
    new Promise<TerminalOption[]>((resolve) => {
      setTimeout(() => {
        const resultsOfFilter = filterTerminal(_inputValue);
        const top5 = resultsOfFilter.slice(0, 5);

        setTerminalResults(top5);
        resolve(top5);
      }, 500);
    });

  const handleOnInputChange = (newValueInput: string) => {
    setInputValue(newValueInput);
  };

  const handleOnChange = (newTerminalSelected: TerminalOption) => {
    setValue(newTerminalSelected);
  };

  const handleOnFocus = () => {
    if (terminal) {
      setInputValue(terminal.label);
    } else {
      setInputValue("");
    }
  };

  const handleOnClick = () => {
    // Llamada a la api para buscar el detalle del terminal
  };

  return {
    terminalResults,
    terminal,
    inputValue,
    getTerminalOptions,
    handleOnInputChange,
    handleOnChange,
    handleOnFocus,
    handleOnClick,
  };
};
