import { SolutionsElement } from "../SolutionsElement";
import { solutionsItems } from "./mock";
import { Body, Grid } from "./styled";

export const SolutionsList = () => {
  return (
    <Body>
      <Grid>
        {solutionsItems.map((e) => (
          <SolutionsElement key={e.id} {...e} />
        ))}
      </Grid>
    </Body>
  );
};
