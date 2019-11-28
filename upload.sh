cd dist
git init
git remote add origin https://github.com/onejae/beige.git
git add .
git commit -m "deploy"
git checkout -b gh-pages
git push origin --delete gh-pages
git push -u origin gh-pages