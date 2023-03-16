import { Button } from "@mui/material";
import { EUnitType } from "../../../store/models/enums/unitType.enum";

import { makeStyles } from "@mui/styles";

interface ITabsProps {
  type: typeof EUnitType[keyof typeof EUnitType];
  handleChange: (unitType: typeof EUnitType[keyof typeof EUnitType]) => void;
}

const useStyles = makeStyles(() => ({
  btn: {
    "&.MuiButton-root": {
      marginTop: 10,
      color: "rgb(157 159 163)",
      fontSize: 14,
      "@media (max-width: 1200px)": {
        fontSize: 13,
      },
      "@media (max-width: 575px)": {
        fontSize: 12,
      },
    },
  },
  btnActive: {
    "&.MuiButton-root": {
      color: "black",
      fontWeight: "bold",
      fontSize: 16,
      "@media (max-width: 1200px)": {
        fontSize: 15,
      },
      "@media (max-width: 575px)": {
        fontSize: 14,
      },
    },
  },
}));

const Tabs = ({ type, handleChange }: ITabsProps): JSX.Element => {
  const styles = useStyles();
  return (
    <>
      <Button
        className={`${styles.btn} ${
          type === EUnitType.CELSIUS ? styles.btnActive : ""
        }`}
        onClick={() => handleChange(EUnitType.CELSIUS)}
      >
        Celsius
      </Button>
      <Button
        className={`${styles.btn} ${
          type === EUnitType.FAHRENHEIT ? styles.btnActive : ""
        }`}
        onClick={() => handleChange(EUnitType.FAHRENHEIT)}
      >
        Fahrenheit
      </Button>
    </>
  );
};

export default Tabs;
