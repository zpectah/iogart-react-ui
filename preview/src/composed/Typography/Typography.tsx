import React from 'react';
import { useIogartTheme } from '@iogart-react-ui/styles';
import TypographyBlock from './TypographyBlock';

const Typography = () => {
  const theme = useIogartTheme();

  return (
    <div>
      <TypographyBlock elementType="h1" style={theme.typography.h1} caption="H1">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>

      <TypographyBlock elementType="h2" style={theme.typography.h2} caption="H2">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>

      <TypographyBlock elementType="h3" style={theme.typography.h3} caption="H3">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>

      <TypographyBlock elementType="h4" style={theme.typography.h4} caption="H4">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>

      <TypographyBlock elementType="h5" style={theme.typography.h5} caption="H5">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>

      <TypographyBlock elementType="h6" style={theme.typography.h6} caption="H6">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>

      <TypographyBlock elementType="p" style={theme.typography.subtitle} caption="subtitle">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>

      <TypographyBlock elementType="p" style={theme.typography.body} caption="body">
        A dolor quis, odio morbi augue ollicitudin neque consequat curabitur ultricies, etiam sed ornare suspendisse. Cursus
        cras dictum, porttitor imperdiet tellus felis suspendisse et iaculis consequat, ultrices luctus sit amet quam.
        Integer luctus, fusce lorem ipsum dolor sit amet consequat quam placerat donec arcu, metus felis a volutpat sem
        lobortis. Proin nunc, sem egestas urna consequat nibh maximus iaculis tristique, in donec dignissim ultricies enim
        in.
      </TypographyBlock>

      <TypographyBlock elementType="p" style={theme.typography.caption} caption="caption">
        Venenatis et, urna non mauris consequat nulla aliquet fringilla ollicitudin, nisi nunc nunc lectus quis odio.
      </TypographyBlock>
    </div>
  );
};

export default Typography;
