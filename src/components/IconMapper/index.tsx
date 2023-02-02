import { IIconsMapper } from "./interfaces";
import { Icon, IconsContainer } from "./styled";

export const IconsMapper = ({ Icons }: IIconsMapper) => {
  return (
    <IconsContainer>
      {Icons.map((e, index) => (
        <Icon src={e} key={index} />
      ))}
    </IconsContainer>
  );
};
