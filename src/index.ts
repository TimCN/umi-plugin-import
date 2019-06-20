interface IPluginOption {
  key: string;
  libraryName: string;
  libraryDirectory: string;
  style: boolean | string;
  camel2DashComponentName: boolean;
  camel2UnderlineComponentName: boolean;
  fileName: string;
  customName: string;
  transformToDefaultImport: boolean;
  types: object;
  index: number;
}

const importPlugin = ({ key, ...options }: IPluginOption) => {
  return [require.resolve("babel-plugin-import"), options, key];
};

export default (api: object, options: IPluginOption) => {
  api.modifyAFWebpackOpts(opts => {
    opts.babel.plugins = [...(opts.babel.plugins || []), importPlugin(options)];
    return opts;
  });
};
