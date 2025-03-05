import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';

const out = './content/docs/openapi';

// clean generated files
rimrafSync(out, {
  filter(v) {
    return !v.endsWith('index.mdx') && !v.endsWith('meta.json') && !v.endsWith('api-migration.mdx');
  },
});

void OpenAPI.generateFiles({
  // input files
  input: ['./public/openapi.json'],
  output: out,
  groupBy: 'tag',
});
