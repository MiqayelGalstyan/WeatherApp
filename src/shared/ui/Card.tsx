import { Card, CardContent, Typography } from "@mui/material";

interface ICardUIProps {
  title: string;
  value: string | number;
  width?: string | number;
}

const CardUI = ({ title, value, width }: ICardUIProps): JSX.Element => {
  return (
    <Card
      style={{ backgroundColor: "rgb(234, 236, 239)", marginBottom: 35 }}
      sx={{ minWidth: 276, width: width }}
    >
      <CardContent color="#d4cbcb30">
        <Typography color="rgb(147, 153, 162)" variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardUI;
