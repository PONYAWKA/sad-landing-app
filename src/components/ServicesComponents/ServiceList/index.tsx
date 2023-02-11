import { ServiceElement } from "../ServiceElement";
import { IServiceList } from "./interfaces";
import { Body, Grid } from "./styled";

export const ServiceList = ({ items }: IServiceList) => {
  return (
    <Body>
      <Grid>
        {items.map((e) => (
          <ServiceElement key={e.id} {...e} />
        ))}
      </Grid>
    </Body>
  );
};
