import { useQuery } from "@/utils/useQuery";

import { ServiceElement } from "../ServiceElement";
import { servicesItems } from "./mock";
import { Body, Grid } from "./styled";

export const ServiceList = () => {
  const query = useQuery();
  const LocalId = query.get("service") ?? -1;
  const ChosenElement = servicesItems.filter(({ id }) => +LocalId === id)[0];
  const AllElements = servicesItems.filter(({ id }) => +LocalId !== id);

  return (
    <Body>
      <ServiceElement hide {...ChosenElement} />
      <Grid>
        {AllElements.map((e) => (
          <ServiceElement key={e.id} {...e} />
        ))}
      </Grid>
    </Body>
  );
};
