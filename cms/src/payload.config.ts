import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Media from './collections/Media';
import Technologies from './collections/Technologies';
import Posts from './collections/Posts';
import Projects from './collections/Projects';
import {Logo} from './graphics/Logo';
import {Icon} from './graphics/Icon';
import { payloadCloud } from '@payloadcms/plugin-cloud';

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- igLab',
      favicon: './assets/site_icon.png',
    },
    components: {
      graphics: {
        Logo, 
        Icon,
      },
    },
  },
  collections: [
    Posts,
    Projects,
    Technologies,
    Users,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
