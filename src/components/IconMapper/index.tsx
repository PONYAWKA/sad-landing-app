import { v4 } from "uuid";

import { IIconsMapper } from "./interfaces";
import { Icon, IconsContainer, Link } from "./styled";

export const IconsMapper = ({ Icons, urls }: IIconsMapper) => {
  if (urls)
    return (
      <IconsContainer>
        {urls.map((e, index) => (
          <Link href={e} key={v4()}>
            <Icon src={Icons[index]} loading="lazy" alt="Loading..." />
          </Link>
        ))}
      </IconsContainer>
    );
  return (
    <IconsContainer>
      {Icons.map((e) => (
        <Icon src={e} key={v4()} />
      ))}
    </IconsContainer>
  );
};
