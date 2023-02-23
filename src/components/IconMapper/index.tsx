import { memo } from "react";
import { v4 } from "uuid";

import { IIconsMapper } from "./interfaces";
import { Icon, IconsContainer, Link } from "./styled";

export const IconsMapper = memo(({ icons, urls }: IIconsMapper) => {
  if (urls)
    return (
      <IconsContainer>
        {urls.map((e, index) => (
          <Link href={e} key={v4()}>
            <Icon src={icons[index]} loading="lazy" alt="Loading..." />
          </Link>
        ))}
      </IconsContainer>
    );
  return (
    <IconsContainer>
      {icons.map((e) => (
        <Icon src={e} key={v4()} />
      ))}
    </IconsContainer>
  );
});
