import { defineConfig } from 'astro/config';

// GitHub Pages project sites are served from /<repository-name>/.
// User/organization sites (<owner>.github.io) are served from /.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isProjectPage = process.env.GITHUB_ACTIONS === 'true'
  && repository
  && repository !== `${owner}.github.io`;

export default defineConfig({
  output: 'static',
  base: isProjectPage ? `/${repository}` : '/',
});
