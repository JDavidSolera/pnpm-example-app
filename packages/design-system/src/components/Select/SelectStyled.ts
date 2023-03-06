import styled, { DefaultTheme } from "styled-components";
import ReactSelect from "react-select/async";
import { StylesConfig } from "react-select";
import { rgba } from "polished";
import { layout, space } from "styled-system";

const SelectStyled = styled(ReactSelect)`
  ${space}
  ${layout}
`;

export const getReactSelectStyles = ({
  error,
  theme,
}: {
  error?: boolean;
  theme?: DefaultTheme;
}): StylesConfig => ({
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    borderRadius: "24px",
    lineHeight: "18px",
    boxSizing: "border-box",
    padding: "4px 16px",
    boxShadow: "none",
    minHeight: "40px",
    borderColor: (() => {
      if (error) return theme?.colors.danger;
      if (state.isFocused) return theme?.colors.primary;
      return theme?.colors["gray-3"];
    })(),
    backgroundColor: state.isDisabled
      ? theme?.colors["gray-1"]
      : theme?.colors.white,
    borderWidth: state.isFocused ? "2px" : "1px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: error ? theme?.colors.danger : theme?.colors.black,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: "0 0 4px 4px",
  }),
  menuList: (provided) => ({
    ...provided,
    fontSize: "14px",
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: "left",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    textAlign: "left",
  }),
  loadingMessage: (provided) => ({
    ...provided,
    textAlign: "left",
  }),
  dropdownIndicator: (_, state) => ({
    lineHeight: 0,
    transition: "transform 0.2s",
    color: theme?.colors["gray-3"],
    transform: `rotate(${!state.selectProps.menuIsOpen ? "0" : "180"}deg)`,
  }),
  option: (provided, state) => ({
    ...provided,
    color: theme?.colors.black,
    cursor: "pointer",
    background: (() => {
      if (state.isFocused) {
        return rgba(theme?.colors["primary-light"] as string, 0.1);
      }

      if (state.isDisabled) {
        return theme?.colors["gray-1"];
      }

      return "transparent";
    })(),
  }),
});

export default SelectStyled;
