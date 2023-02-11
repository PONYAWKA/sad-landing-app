import { SolutionsElement } from "../SolutionsElement";
import { ISolutionsList } from "./interfaces";
import { Body, Grid } from "./styled";

export const SolutionsList = ({ items }: ISolutionsList) => {
  return (
    <Body>
      <Grid>
        {items.map((e) => (
          <SolutionsElement key={e.id} {...e} />
        ))}
      </Grid>
    </Body>
  );
};
