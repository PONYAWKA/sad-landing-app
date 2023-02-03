import { SyntheticEvent, useState } from "react";

import { ITagButton } from "./interfaces";
import { STagButton } from "./styled";

export const TagButton = (element: ITagButton) => {
  const [checks, setChecks] = useState(true);

  const onClickHandler = (e: SyntheticEvent) => {
    if (element.onClick) element.onClick(e);
    setChecks((prev) => !prev);
  };
  return (
    <STagButton checks={checks} {...element} onClick={onClickHandler}>
      {element.children}
    </STagButton>
  );
};
