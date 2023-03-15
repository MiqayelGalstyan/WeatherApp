import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    backgroundColor: "rgb(234, 236, 239)",
    height: 70,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
    "& p": {
      fontSize: 17,
      fontWeight: "bold",
      fontFamily: "monospace",
      color: "rgb(128 131 136)",
    },
  },
}));

const Header = (): JSX.Element => {
  const styles = useStyles();

  return (
    <header className={styles.container}>
      <p>Weather App</p>
    </header>
  );
};

export default Header;
