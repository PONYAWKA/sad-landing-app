import { useQuery } from "@/hooks/useQuery";

import { SolutionsElement } from "../SolutionsElement";
import { solutionsItems } from "./mock";
import { Body, Grid } from "./styled";

export const SolutionsList = () => {
  const query = useQuery();
  const LocalId = query.get("solution") ?? -1;
  const ChosenElement = solutionsItems.filter(({ id }) => +LocalId === id)[0];
  const AllElements = solutionsItems.filter(({ id }) => +LocalId !== id);

  return (
    <Body>
      <SolutionsElement hide {...ChosenElement} />
      <Grid>
        {AllElements.map((e) => (
          <SolutionsElement key={e.id} {...e} />
        ))}
      </Grid>
    </Body>
  );
};
