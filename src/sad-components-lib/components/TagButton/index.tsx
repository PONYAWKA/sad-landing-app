import { ITagButton } from "./interfaces";
import { STagButton } from "./styled";

export const TagButton = (element: ITagButton) => {
  const { text, setSelected, selected } = element;

  const onClickHandler = () => {
    if (setSelected) setSelected(text);
  };

  return (
    <STagButton checks={selected} {...element} onClick={onClickHandler}>
      {text}
    </STagButton>
  );
};
