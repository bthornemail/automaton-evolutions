# GitHub Pages Documentation

This folder contains the GitHub Pages documentation site for `automaton-evolutions`.

## Site Structure

- **`index.md`**: Main homepage with package overview
- **`files.md`**: Complete reference for all 12 CanvasL files (A₀-A₁₁)
- **`api.md`**: TypeScript API documentation
- **`examples.md`**: Usage examples with `meta-log-db` and `automata-metaverse`
- **`_config.yml`**: Jekyll configuration

## GitHub Pages Setup

The site is configured to deploy from the `/docs` folder on the `main` branch.

**Site URL**: https://bthornemail.github.io/automaton-evolutions/

## Local Development

To preview the site locally with Jekyll:

```bash
# Install Jekyll (if not already installed)
gem install bundler jekyll

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000/automaton-evolutions/
```

## Theme

Uses the Jekyll Minima theme with:
- GitHub social links
- Site navigation
- Feed and sitemap plugins

## Updating Documentation

1. Edit the relevant `.md` file in this folder
2. Commit and push to `main` branch
3. GitHub Pages will automatically rebuild and deploy

