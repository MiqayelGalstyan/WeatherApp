import { Fragment } from "react";
import { useStyles } from "./styles";

const NotFound = (): JSX.Element => {
  const styles = useStyles();
  return (
    <Fragment>
      <p className={styles.text}>not found</p>
    </Fragment>
  );
};

export default NotFound;
