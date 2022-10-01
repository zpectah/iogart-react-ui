import React from 'react';

import { useIogartTheme } from '@iogart-react-ui/styles';
import ColorRow from './ColorRow';
import ColorBlock from './ColorBlock';

const Colors = () => {
  const theme = useIogartTheme();

  const getPaletteList = () => {
    const list: { name: string; backgroundColor: string }[] = [];

    for (const key in theme.palette.common) {
      list.push({
        name: key,
        backgroundColor: theme.palette.common[key],
      });
    }

    return list;
  };

  return (
    <div>
      <div
        style={{
          width: '100%',
          marginBottom: '4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <ColorRow>
          <ColorBlock
            color={theme.palette.primary.contrastText}
            backgroundColor={theme.palette.primary.dark}
            label="Primary:dark"
          />
          <ColorBlock
            color={theme.palette.secondary.contrastText}
            backgroundColor={theme.palette.secondary.dark}
            label="Secondary:dark"
          />
          <ColorBlock
            color={theme.palette.success.contrastText}
            backgroundColor={theme.palette.success.dark}
            label="Success:dark"
          />
          <ColorBlock color={theme.palette.info.contrastText} backgroundColor={theme.palette.info.dark} label="Info:dark" />
          <ColorBlock
            color={theme.palette.warning.contrastText}
            backgroundColor={theme.palette.warning.dark}
            label="Warning:dark"
          />
          <ColorBlock
            color={theme.palette.error.contrastText}
            backgroundColor={theme.palette.error.dark}
            label="Error:dark"
          />
        </ColorRow>
        <ColorRow>
          <ColorBlock
            color={theme.palette.primary.contrastText}
            backgroundColor={theme.palette.primary.main}
            label="Primary"
          />
          <ColorBlock
            color={theme.palette.secondary.contrastText}
            backgroundColor={theme.palette.secondary.main}
            label="Secondary"
          />
          <ColorBlock
            color={theme.palette.success.contrastText}
            backgroundColor={theme.palette.success.main}
            label="Success"
          />
          <ColorBlock color={theme.palette.info.contrastText} backgroundColor={theme.palette.info.main} label="Info" />
          <ColorBlock
            color={theme.palette.warning.contrastText}
            backgroundColor={theme.palette.warning.main}
            label="Warning"
          />
          <ColorBlock color={theme.palette.error.contrastText} backgroundColor={theme.palette.error.main} label="Error" />
        </ColorRow>
        <ColorRow>
          <ColorBlock
            color={theme.palette.primary.contrastText}
            backgroundColor={theme.palette.primary.light}
            label="Primary:light"
          />
          <ColorBlock
            color={theme.palette.secondary.contrastText}
            backgroundColor={theme.palette.secondary.light}
            label="Secondary:light"
          />
          <ColorBlock
            color={theme.palette.success.contrastText}
            backgroundColor={theme.palette.success.light}
            label="Success:light"
          />
          <ColorBlock
            color={theme.palette.info.contrastText}
            backgroundColor={theme.palette.info.light}
            label="Info:light"
          />
          <ColorBlock
            color={theme.palette.warning.contrastText}
            backgroundColor={theme.palette.warning.light}
            label="Warning:light"
          />
          <ColorBlock
            color={theme.palette.error.contrastText}
            backgroundColor={theme.palette.error.light}
            label="Error:light"
          />
        </ColorRow>
        <ColorRow>
          <ColorBlock
            color={theme.palette.primary.contrastText}
            backgroundColor={theme.palette.primary.main}
            label="Primary:border"
            bordered
          />
          <ColorBlock
            color={theme.palette.secondary.contrastText}
            backgroundColor={theme.palette.secondary.main}
            label="Secondary:border"
            bordered
          />
          <ColorBlock
            color={theme.palette.success.contrastText}
            backgroundColor={theme.palette.success.main}
            label="Success:border"
            bordered
          />
          <ColorBlock
            color={theme.palette.info.contrastText}
            backgroundColor={theme.palette.info.main}
            label="Info:border"
            bordered
          />
          <ColorBlock
            color={theme.palette.warning.contrastText}
            backgroundColor={theme.palette.warning.main}
            label="Warning:border"
            bordered
          />
          <ColorBlock
            color={theme.palette.error.contrastText}
            backgroundColor={theme.palette.error.main}
            label="Error:border"
            bordered
          />
        </ColorRow>
      </div>
      <div
        style={{
          width: '100%',
          marginBottom: '4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <ColorRow>
          {getPaletteList().map((color) => (
            <ColorBlock
              key={color.name}
              color={theme.palette._inverted(color.backgroundColor, true)}
              backgroundColor={color.backgroundColor}
              label={color.name}
            />
          ))}
        </ColorRow>
      </div>
    </div>
  );
};

export default Colors;
