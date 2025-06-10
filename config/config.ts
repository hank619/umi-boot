import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  model: {},
  initialState: {},
  request: {
    dataField: '',
  },
  routes: routes,
  npmClient: 'pnpm',
  plugins: ['@umijs/max-plugin-openapi'],
  openAPI: {
    requestLibPath: "import { request } from '@umijs/max'",
    schemaPath:
      'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.jso',
    mock: false,
    projectName: 'bizApi',
  },
  tailwindcss: {},
  postcssLoader: {
    plugins: ['tailwindcss', 'autoprefixer'],
  },
  locale: {
    default: 'en-US',
    baseNavigator: false,
  },
  hash: true,
  // https://umijs.org/docs/api/config#icon-%E9%9B%86%E4%BD%BF%E7%94%A8
  icons: { autoInstall: {} },
  outputPath: 'build',
  // fix: https://github.com/umijs/umi/issues/10959
  esbuildMinifyIIFE: true,
  links: [
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
      rel: 'stylesheet',
    },
  ],
});
