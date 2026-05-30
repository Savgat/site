# Site de Savannah Gatineau

Site vitrine et blog de **Savannah Gatineau**, professeure des écoles et autrice
jeunesse. Construit avec **Jekyll** et hébergé gratuitement sur **GitHub Pages**.

- 📚 Présentation des livres avec lien d'achat vers TheBookEdition
- ✍️ Blog d'articles et de ressources pédagogiques (avec PDF à télécharger)
- 🗂️ Articles classés par catégories + barre de navigation
- 📢 Emplacements Google AdSense prêts à activer
- 📨 Page contact (formulaire + e-mail + réseaux sociaux)
- 🇫🇷 Entièrement en français, optimisé pour le référencement (SEO)
- ✨ Interface d'édition **sans code** via Pages CMS (voir ci-dessous)

---

## ✨ Le plus simple pour Savannah : écrire avec Pages CMS

[Pages CMS](https://pagescms.org) offre une interface conviviale pour **écrire et
modifier les articles, les livres et les pages** — comme un traitement de texte,
avec choix de la catégorie dans une liste et envoi d'images/PDF en un clic. Aucune
connaissance technique requise. Tout est déjà configuré dans le fichier `.pages.yml`.

**Mise en route (une seule fois)** :

1. Allez sur **[app.pagescms.org](https://app.pagescms.org)** et cliquez sur
   **« Sign in with GitHub »** (connexion avec le compte GitHub qui possède le site).
2. Autorisez l'application **Pages CMS** à accéder au dépôt **`Savgat/site`**
   (vous pouvez limiter l'accès à ce seul dépôt).
3. Le site apparaît dans la liste : cliquez dessus. C'est prêt&nbsp;! ✅

**Au quotidien** :

- **Articles du blog** → écrire un nouvel article, choisir la catégorie, ajouter
  une image de couverture et un PDF à télécharger, rédiger le texte, puis **Save**.
- **Les livres** → modifier titres, prix, descriptions, couvertures, liens d'achat.
- **Pages « À propos » / « Mentions légales »** → modifier le texte.

À chaque enregistrement, le site se met à jour tout seul en une minute environ.
Astuce : on peut inviter Savannah comme **collaboratrice** du dépôt (Settings →
Collaborators) pour qu'elle se connecte avec son propre compte GitHub.

> Pour les pages, laissez tels quels les petits bouts entre `{{ }}` ou `{% %}` :
> ce sont des éléments techniques (liens, conditions) gérés par le site.

---

## 1. Mettre le site en ligne (une seule fois)

1. Créez un compte sur [github.com](https://github.com).
2. Créez un dépôt (*repository*) et déposez-y tous ces fichiers.
   - Pour l'adresse la plus simple `https://VOTRE-PSEUDO.github.io`, nommez le
     dépôt exactement `VOTRE-PSEUDO.github.io`.
   - Sinon, n'importe quel nom fonctionne (ex. `site-savannah`), l'adresse sera
     alors `https://VOTRE-PSEUDO.github.io/site-savannah` — dans ce cas, mettez
     `baseurl: "/site-savannah"` dans `_config.yml`.
3. Dans le dépôt&nbsp;: **Settings → Pages → Build and deployment → Source =
   Deploy from a branch**, branche `main`, dossier `/ (root)`. Enregistrez.
4. Patientez 1-2 minutes&nbsp;: le site se construit tout seul. 🎉
5. Renseignez `url:` (et `baseurl:` si besoin) dans `_config.yml`.

> À chaque fois que vous modifiez un fichier sur GitHub, le site se reconstruit
> automatiquement en une minute environ.

---

## 2. Écrire un nouvel article de blog

Un article = **un fichier** dans le dossier `_posts/`, nommé
`AAAA-MM-JJ-titre-de-larticle.md`.

Copiez ce modèle, changez les informations, et le tour est joué&nbsp;:

```markdown
---
title: "Le titre de mon article"
date: 2026-06-15
categories: ["Activités maternelle"]   # voir la liste plus bas
tags: [maternelle, langage]            # facultatif
excerpt: "Une phrase de résumé qui s'affiche sur les cartes et Google."
image: /assets/img/blog/mon-image.jpg  # facultatif (illustration en haut)
# --- Pour joindre un PDF à télécharger (facultatif) : ---
pdf: /assets/pdf/ma-fiche.pdf
pdf_title: "Fiche à imprimer : les homophones"
pdf_description: "Une fiche d'activité prête à imprimer pour la maison ou la classe."
---

Ici, j'écris mon article en **Markdown**.

## Un sous-titre

Du texte, des listes, des images :

- une idée
- une autre idée

![Texte alternatif de l'image](/assets/img/blog/exemple.jpg)
```

**Où ranger les fichiers&nbsp;:**
- Images des articles → `assets/img/blog/`
- PDF à télécharger → `assets/pdf/`

**Catégories disponibles** (à recopier exactement dans `categories:`)&nbsp;:
`Activités maternelle`, `Langage & vocabulaire`, `Alimentation & nature`,
`Comptines & lecture`, `Coulisses d'autrice`.
Pour en ajouter/modifier, éditez `_data/categories.yml`.

---

## 3. Ajouter ou modifier un livre

Tout se passe dans `_data/books.yml`. Copiez un bloc existant et adaptez-le
(titre, prix, lien d'achat, couverture…). Déposez la vraie couverture dans
`assets/img/livres/` et indiquez son chemin dans `cover:`.

---

## 4. Activer la publicité Google AdSense

1. Créez un compte sur [adsense.google.com](https://adsense.google.com) et
   ajoutez l'adresse de votre site. *(AdSense exige un site avec du contenu
   original et un peu de trafic avant de valider — patience.)*
2. Une fois **validé**, dans `_config.yml`&nbsp;:
   ```yaml
   adsense:
     enabled: true
     publisher_id: "ca-pub-VOTRE-NUMERO"
   ```
3. Créez des blocs d'annonces dans AdSense et remplacez les `slot="..."` dans
   les emplacements déjà placés (`_includes/adsense.html` est inclus en bas
   d'article, en colonne latérale, sur l'accueil, etc.).
4. **Bloquer les annonces indésirables — INDISPENSABLE.** Le site s'adresse à
   des enfants et des familles : vous **devez** bloquer les catégories
   sensibles. Dans AdSense → **Brand safety / Blocage des annonces →
   Catégories sensibles**, désactivez au minimum&nbsp;: jeux d'argent, alcool,
   rencontres, contenu pour adultes, et tout ce qui ne convient pas à un public
   familial. Vous pouvez aussi bloquer des annonceurs précis dans **Contrôle
   des annonces**. ⚠️ AdSense ne permet pas de n'afficher *que* des pubs
   « éducation » : on procède par blocage des catégories non souhaitées.
5. **Consentement RGPD.** Une bannière de consentement s'affiche automatiquement
   et le script publicitaire ne se charge qu'après acceptation (aucun cookie
   avant). Pour des annonces **personnalisées** dans l'Union européenne, Google
   exige en plus un message de consentement certifié&nbsp;: activez-le
   gratuitement dans AdSense → **Confidentialité et messages**.

Tant que `enabled: false`, **aucune publicité, ni case vide, ni cookie** ne
s'affiche.

---

## 5. Faire marcher le formulaire de contact

Par défaut, la page Contact affiche directement le **lien e-mail** (toujours
fonctionnel). Pour activer en plus un **formulaire**&nbsp;: GitHub Pages ne peut
pas envoyer d'e-mail seul, on utilise donc [Formspree](https://formspree.io)
(gratuit). Créez un formulaire, copiez son identifiant, et collez-le dans
`_config.yml`&nbsp;:

```yaml
forms:
  formspree_id: "xxxxxxx"   # l'identifiant fourni par Formspree
```

Le formulaire apparaît alors automatiquement sur la page Contact. Laissez ce
champ vide pour n'afficher que le lien e-mail.

---

## 6. (Option) Utiliser un nom de domaine personnalisé

Un domaine comme `savannahgatineau.fr` (~12 €/an) renforce l'image d'autrice.
Après l'avoir acheté, créez un fichier nommé `CNAME` à la racine contenant
seulement votre domaine, puis configurez-le dans **Settings → Pages**. Mettez
alors `url: "https://savannahgatineau.fr"` et `baseurl: ""` dans `_config.yml`.

---

## 7. Prévisualiser le site sur son ordinateur (facultatif)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```
Puis ouvrez <http://localhost:4000>.

---

## Structure du projet

```
_config.yml          Réglages du site (titre, AdSense, réseaux…)
_data/
  navigation.yml     Liens de la barre de navigation
  books.yml          Fiches des livres
  categories.yml     Catégories du blog
_layouts/            Gabarits (page, article…)
_includes/           Morceaux réutilisables (en-tête, pied, pub, cartes…)
_posts/              Vos articles de blog (un fichier = un article)
assets/
  css/style.css      Mise en forme
  js/main.js         Menu mobile + filtre des catégories
  img/               Images (couvertures, illustrations)
  pdf/               PDF à télécharger
index.html           Page d'accueil
livres.html          Page des livres
blog.html            Liste des articles
categories.html      Articles par catégorie
a-propos.md          Page « À propos »
contact.html         Page contact
mentions-legales.md  Mentions légales (à compléter)
```
