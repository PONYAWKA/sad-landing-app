import { useQuery } from "@/hooks/useQuery";

import { ServiceElement } from "../ServiceElement";
import { servicesItems } from "./mock";
import { Body, Grid } from "./styled";

export const ServiceList = () => {
  return (
    <Body>
      <Grid>
        {servicesItems.map((e) => (
          <ServiceElement key={e.id} {...e} />
        ))}
      </Grid>
    </Body>
  );
};
