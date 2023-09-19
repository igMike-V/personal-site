import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './cms/collections/Users';
import Media from './cms/collections/Media';
import Technologies from './cms/collections/Technologies';
import Posts from './cms/collections/Posts';
import Projects from './cms/collections/Projects';
import {Logo} from './cms/adminui/Logo';
import {Icon} from './cms/adminui/Icon';
import { payloadCloud } from '@payloadcms/plugin-cloud';

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- igLab',
      favicon: './cms/assets/site_icon.png',
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
