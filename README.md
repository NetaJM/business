##### To run

# Install packages
npm install
# Run bundler - Will watch for CSS and JS changes (But no HTML changes)
npm run build

# When developing
Go to webpack.config.js
Change mode to "development"

# When pushing to git
Go to webpack.config.js
Change mode to "production"
npm run build
Then commit and push