**1. Décrivez ce qu'est la programmation fonctionnelle**

pure functions : Utilisation de fonctions "pures", c'est-à-dire avec des inputs

high-order functions : Utilisation de fonctions qui retournent des fonctions comme outputs

High-order functions like map or reduce. or filter : utilisation de fonctions map, reduce ou filter dans d'autres fonctions à la place de for et while

Eviter la mutation : éviter de changer des valeurs dans un array par exemple. Faire des copies des arrays ou des valeurs

L'immuabilité prend du temps : on copie toutes les données à chaque fois, même si on veut en changer qu'une seule. Cela fait beaucoup de données stockées.

immutable data structures (librairies js) : trees : connecter les éléments entre eux pour éviter de répliquer un tableau entier. Juste créér h4 et le relier à h1 et h2. C'est du sharing.

La programmation fonctionnelle est **déclarative**, c'est-à-dire qu'on déclare des fonctions qui changeront les états de variables, au lieu de les changer directement. On utilise donc des **fonctions**. Ces fonctions prennent des *inputs* en paramètres et renvoient des *outputs*. 

**2. Décrivez ce qu'est la programmation orientée objets**

