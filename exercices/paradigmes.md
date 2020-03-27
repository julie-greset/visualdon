**1. Décrivez ce qu'est la programmation fonctionnelle**

La programmation fonctionnelle est **déclarative**, c'est-à-dire qu'on déclare des fonctions qui feront une ou plusieurs actions, au lieu d'effectuer ces actions manuellement, "en dur". 

On utilise donc des **fonctions**. Ces fonctions peuvent prendre des *inputs* en paramètres et renvoient des *outputs*. On essaie au maximum d'utiliser ce qu'on appelle des **fonctions pures**, c'est-à-dire des fonctions qui ne modifient pas l'état courant de l'objet. La fonction ne dépend que de ses arguments, ainsi, les résultats de ces fonctions seront toujours les mêmes : ils ne dépendent pas de l'extérieur. Cela évite des effets collatéraux.

Cela rejoint un autre concept important : **l'immuabilité**. On essaie au maximum de ne pas modifier l'état des objets. C'est-à-dire qu'on peut utiliser des valeurs dans une fonction pour retourner des *outputs*, mais que la valeur en elle-même ne sera pas modifiée. Pour cela, on utilise des **high-order functions** : des fonctions qui retournent des fonctions comme outputs. 

**2. Décrivez ce qu'est la programmation orientée objets**

Dans la programmation orientée objets, on représente le monde extérieur sous forme d'**objets**. Ces objets auront des **attributs** qui les définiront, et des **fonctions** qui traiteront les données. Par exemple : un objet "Voiture" aura comme attributs son nombre de roues et sa couleur, et pourra accélérer ou ralentir (fonctions). Les fonctions peuvent donc changer l'état de l'objet. 