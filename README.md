# Charte graphique :

## Couleurs :

* Background: RGB(15, 14, 20), #0F0E14;
* Control-Panel: RGB(36, 35, 43), #24232B;
* Buttons-main: RGB(164, 255, 175), #A4FFAF;
* Buttons-secondary: RGB(244, 203, 105), #F4CB69;

## Fonts :

* Main: Calling Code
* Footer: DM Sans
* Color: #C8C8CE, RGB(200, 200, 206)

-----

# Application

## Explication rapide :

Nous allons faire un "etch-a-sketch". Cette application permet, lors du passage  
de la souris sur une surface de dessin, de les colorier.

Nous allons avoir quatre fonctions de coloriage :  
* une où la couleur est choisie
* une où la couleur est "rainbow" (aléatoirement choisie) 
* une ou l'on peut gommer l'image (la couleur est alors en fait simplement blanche)
* une pour tout effacer : la surface de dessin redevient blanche

L'utilisateur peut choisir un **mode** dans lequel il est  
(le bouton sera alors "activé"), et dans un seul.

Autrement, nous allons avoir une fonction permettant de **choisir la taille de la     
grille de dessin** :

On a un bouton coulissant qui nous permet de choisir la taille de notre grille de 1 à 100.  La taille est changée dynamiquement avec JS, et **la grille se met à jour**.

Il faut donc voir comment à partir de la valeur du bouton coulissant,  
on peut toujours créer une grille de carrés homogène.

## Problèmes :

Nous allons avoir 2 problèmes ; ils doivent être résolus dans un ordre précis :

* créer une grille à partir de la valeur du bouton coulissant
* implémenter les fonctions de choix de couleur.

### 1 : Créer une grille à partir de la valeur du bouton coulissant

* On peut premièrement créer une grille en 16x16 pour s'entraîner (problème A1)
* Il faut aussi ne pas négliger le style de la grille (choisir ce qu'on fait et s'y tenir)

* Comment créer une grille à partir de la donnée reçue du bouton ? A1 [x]
* Comment récupérer dynamiquement la donnée du bouton ? A2 [x]


#### 1A : Créer une grille à partir de la donnée reçue du bouton

