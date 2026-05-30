# Gemfile — sert uniquement pour la PRÉVISUALISATION locale du site.
# GitHub Pages construit le site automatiquement, sans ce fichier.
#
# Pour prévisualiser le site sur votre ordinateur :
#   gem install bundler
#   bundle install
#   bundle exec jekyll serve
# puis ouvrez http://localhost:4000

source "https://rubygems.org"

# Utilise exactement la même version que GitHub Pages pour éviter
# toute différence entre l'aperçu local et le site en ligne.
gem "github-pages", group: :jekyll_plugins

# Plugins utilisés par le site (déjà inclus dans github-pages, listés ici
# pour la clarté).
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Dépendances utiles selon le système d'exploitation.
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]

# Compatibilité Ruby 3.x (webrick n'est plus inclus par défaut).
gem "webrick", "~> 1.8"
