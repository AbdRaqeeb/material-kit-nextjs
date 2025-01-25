import packageJson from '../package.json';
// ----------------------------------------------------------------------

export type ConfigValue = {
    appName: string;
    appVersion: string;
    appLogo: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
    appName: 'Minimal UI',
    appVersion: packageJson.version,
    appLogo: '',
};
