## Pre-requisites

- Ruby ( https://www.ruby-lang.org/en/ )
- Bundler ( https://bundler.io/ )
- Clone this repo, switch directory to the repo and run command `bundle install`. This will install all bundles mentioned in Gemfile.
- If you want to do UI development, following things are additionally required -
  - Node (https://nodejs.org/en/)
  - Gulp 3
  - switch directory to the repo and run command `npm install`. This will install all the packages mentioned in package.json.

## Workflow

- **For local development:**
  - run command `bundle exec jekyll serve` in terminal. and open url http://localhost:3000/
  - If doing any UI changes run command `gulp` in another terminal.
- **For Deployment:**
  - Once work is finished push code to the repo and it will automatically regenerate the site.
