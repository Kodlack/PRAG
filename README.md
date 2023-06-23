# PRAG
Projet PRAG pour l'Académie française

Ici seront présenté le cahier des charges, les retours des intervenants, notes de développement.

Explication des exercices demandés

Le site devra proposer à l'utilisateur les différents exercices suivants :
- texte à trous : l'utilisateur doit rentrer le mot correspondant dans une zone de texte, il n'y a pas de suggestions de la part du site concernant les réponses.
- énoncé fautif : l'utilisateur doit cliquer sur le mot comportant une faute (orthographe, accord...).
- QCM : l'utilisateur choisit la bonne réponse parmis celles proposées.
- Repérage : dans l'énoncé, l'utilisateur doit trouver un élément (nom, grupe nominal, pronom) qui est COD du verbe conjugué au passé composé avec l'auxiliaire "avoir".

Ces exercices concerneront les notions suivantes :
- Lexique : L'utilisateur entraine son vocabulaire de français, particulièrement vis-à-vis des anglicismes.
- Synthaxe : l'utilisateur accorde un mot, l'adjectif, choisis entre un infinitif et un participe passé par exemple, en fonction de la phrase proposée.
- Morphologie : l'utilisateur doit reconnaître l'orthographe d'un participe passé (lettre muettes...)

Un exercice regroupe 5 à 10 questions avec corrigé, il possède une difficulté (facile, moyen et difficile).

Liste des fonctionnalités :
## Fonctionnalité 1 : le site doit pouvoir prendre en charge du texte et des images.
## Fonctionnalité 2 : le site doit pouvoir proposer des exercices de quatre types :
- Énoncé fautif (la proposition fausse pouvant être barrée ou cliquée)
- QCM
- Phrase à trous (avec ou sans menu déroulant proposant des réponses possibles)
- Question/réponse.
## Fonctionnalité 3 : Quand l’utilisateur a fini de répondre à une question, il clique sur un bouton
« valider », ce qui affiche automatiquement le corrigé correspondant. La page « corrigé » contient
aussi le rappel des règles.
## Fonctionnalité 4 : Le site propose des séries d’exercices composées automatiquement en puisant, de manière aléatoire, des exercices du niveau et de la catégorie souhaités, dans une banque d’exercices alimentée par le service du dictionnaire.
## Fonctionnalité 5 : L’utilisateur peut choisir de travailler selon un premier mode, qui est fonction de la difficulté des exercices (« facile », « moyen », « difficile »), la longueur des séries pouvant être ajustée à chaque niveau, par exemple :
- « facile » : 1 série de 15 exercices (mélangeant différentes catégories)
- « moyen » : 1 série de 20 exercices (mélangeant différentes catégories)
- « difficile » : 1 série de 25 exercices (mélangeant différentes catégories).
Remarque : le nombre de niveaux est fini (3).
## Fonctionnalité 6 : L’utilisateur peut choisir de travailler selon un deuxième mode, par catégories thématiques (notions linguistiques), par exemple : grammaire, orthographe, vocabulaire, accord du participe passé, anglicismes, etc.
### Remarque : l’administrateur doit pouvoir créer de nouvelles catégories.
Dans ce mode, l’utilisateur dispose, pour chaque catégorie thématique, d’une série « facile », par
exemple de 10 exercices. S’il obtient 70 % de réponses justes ou plus, il passe à une série « moyen »
(de 15 exercices), puis si plus de 70 %, à la série « difficile » (de 20 exercices), afin de suivre une
progression dans l’apprentissage de chaque catégorie. Si l’utilisateur obtient un résultat inférieur à
70 % de bonnes réponses à la fin d’une série, une nouvelle série de même niveau lui est
automatiquement proposée.
## Fonctionnalité 7 : A la fin de chaque série d’exercices réalisée, quel que soit le mode choisi, un tableau récapitule le pourcentage de fautes et de bonnes réponses. Si l’utilisateur obtient 70 % ou plus de bonnes réponses, la série est considérée comme réussie. L’utilisateur peut alors soit cliquer pour commencer une nouvelle série, soit retourner à la page d’accueil du site.
## Fonctionnalité 8 : la page d’accueil du site doit permettre d’accéder soit au mode par niveau, soit au mode par catégorie.
## Fonctionnalité 9 : les pages du site doivent pouvoir se charger rapidement.
## Fonctionnalité 10 : le site doit être accessible depuis les moteurs de recherche usuels (Google Chrome, Firefox, Microsoft Edge).
## Fonctionnalité 11 : Le contenu du site doit être adaptatif (pour tablette ou téléphone portable).
## Fonctionnalité 12 : le compte administrateur doit permettre, grâce à une interface facile d’utilisation :
- de créer de nouvelles catégories
- d’ajouter de nouveaux exercices accompagnés de leurs corrigés et des règles correspondantes.
###Liens utiles
Vers le Drive Google : https://drive.google.com/drive/folders/1I-_yem_UkbF4aMWeVbsuc6q0Fxig3bxD?usp=drive_link
