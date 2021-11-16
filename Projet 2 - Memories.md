# Réaliser un jeu de mémoire type "Memories"

## Front
Pour le front utiliser les langages HTML, CSS (avec l'utilisation de préférence un préprocesseur comme sass mais sans task runner), et JS

L'objectif est de réaliser un code simple et compréhensible pour une personne débutante en programmation web - pas d'utilisation de canvas.

## Back

Pour le Back, utiliser un serveur Apache en fonction du langage serveur choisit Php - pas de Framework

La base de données : Mysql. On doit stocker uniquement des temps et des dates. Il n'y a pas de gestion des utilisateurs. L'objectif est de découvrir l'insertion et la recherche de données.

## Outils
Déposer le projet sur github.

## Fonctionnel

- Ecran avant de jouer ou rejouer : Afficher les meilleurs temps
- Ecran de démarrage : Au commencement du jeu, des cartes sont disposées face cachée à l'écran
- Durant le jeu : Le joueur doit cliquer sur deux cartes. Si celles-ci sont identiques, la paire est validée. Sinon, les cartes sont retournées face cachée, et le joueur doit sélectionner une nouvelle paire de cartes
- Un compteur de temps, avec une barre de progression, s’affiche en dessous du plateau
- Le joueur gagne s'il arrive à découvrir toutes les paires avant la fin du temps imparti