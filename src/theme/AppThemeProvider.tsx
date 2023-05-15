import { NativeBaseProvider, StatusBar, extendTheme } from 'native-base';
import { PropsWithChildren } from 'react';

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const { colors } = extendTheme({});

  const appTheme = extendTheme({
    colors: {
      primary: colors.lightBlue,
    },
  });

  return <NativeBaseProvider theme={appTheme}>{children}</NativeBaseProvider>;
};

export default AppThemeProvider;
