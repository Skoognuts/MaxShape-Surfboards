# MAX SHAPE SURFBOARDS
## Site Web de l'entreprise MaxShape Surfboards

Site réalisé par J.Labatut à l'aide du générateur de site statique Eleventy, au CMS Forestry ainsi qu'au Framework CSS Bootstrap. Tous droits réservés. 

**MaxShape Surfboards**
- **Adresse :** 101 Chemin du Pey de l'Ancre, 40660 Messanges.
- **Téléphone :** 06 99 72 46 13.
- **Mail :** maxshape@hotmail.fr.

**1. Déployer l'application en local :**
Le déploiement en local a pour objectif une modification du code de l'application web. Si la manœuvre désirée est une modification des contenus multimédias, se référer à la partie 2. Pour déployer cette application en local, vous devez au préalable cloner le dépôt Git dans un dossier créé à cet effet. Assurez vous d'avoir installé Node JS sur votre poste en amont (Application crée avec Node 16.13.1 / NPM 8.5.1).

    git clone https://github.com/Skoognuts/MaxShape-Surfboards.git

Une fois le clonage effectué, vous devez installer les dépendances de l'application.

    npm install

 **2. Se connecter au CMS :**
 Le CMS Forestry vous permet d'insérer automatiquement votre contenu au sein de l'application. Utilisez vos identifiants pour accéder à la plateforme et ajoutez, modifiez ou supprimez vos contenus (Modèles / Blog / Galerie).

---

***- Galerie Photo :*** 
Chaque photo de la galerie est stockée dans le dépôt Git en tant que fichier Markdown (.md). Le Template d'un fichier photo comprend deux entrées :

- **Le fichier photo** à proprement parler, en version .jpeg ou .png. Celui ci sera importé dans un répertoire dédié du dépôt Git, el le fichier Markdown en conservera l'Url relative. 
- **Une description** sous la forme "MaxShape Galerie XXX", XXX étant le numéro de la photo sur trois charactères numériques. Cette description est obligatoire car elle sert de texte alternatif au fichier photo. 

Le nom du fichier Markdown ainsi généré doit être sous la forme "galerie_XXX.md", XXX étant le numéro de la photo sur trois charactères numériques.
**Note :** Pour un affichage optimal, vérifiez que vos fichiers photo ne dépassent pas 1 Mo.

---

***- Blog :*** 
Chaque article du blog est stockée dans le dépôt Git en tant que fichier Markdown (.md). Le Template d'un fichier article comprend quatre entrées :

- **Le titre de l'article** dont la forme est libre. Cette entrée est obligatoire.
- **La description** de l'article dont la forme est libre. Ce peut être un passage de l'article ou un commentaire décrivant la démarche de l'auteur de l'article. Cette entrée est obligatoire.
- **Le lien URL vers l'article** sous la forme "https://xxxxx.xx/xxx...". L'adresse complète est recommandée pour un rendu optimal. Cette entrée est obligatoire.
- **Une capture d'écran de l'article** au format .jpg ou .png. Cette capture devra être recadrée pour conserver le titre du site présentant l'article, le titre et le sous-titre de l'article lui même et une photo si il y en a.

Le nom du fichier Markdown ainsi généré doit être sous la forme "blog_XXX.md", XXX étant le numéro de l'article sur trois charactères numériques.
**Note :** Pour un affichage optimal, vérifiez que vos fichiers photo ne dépassent pas 1 Mo.

---

***- Modèles :*** 
Chaque modèle est stockée dans le dépôt Git en tant que fichier Markdown (.md). Le Template d'un fichier modèle comprend treize entrées :

- **Un ID** : Cette entrée est un identifiant numérique unique déterminant l'ordre de présentation des planches sur la page Modèles. Si il y a 10 modèles, alors chaque fichier Markdown doit avoir un ID unique compris entre 1 et 10. Cette entrée est obligatoire.
> **Exemple :** 10
- **Un titre correspondant au nom de la planche**. Pour un affichage optimal, penser à écrire chaque mot composant ce nom avec sa première lettre capitale. Cette entrée est obligatoire.
> **Exemple :** One Foot
- **Un prix** correspondant au prix nominal de la planche en question. Ce prix doit être formaté en séparant les milliers des centaines (affichage plus efficace), suivi d'une virgule, des centimes sur deux chiffres, d'un espace et enfin du symbole Euro. Cette entrée est obligatoire.
> **Exemple :** 1 050,00 €
- **Une longueur** correspondante à la longueur de la planche en pieds et en pouces. Cette longueur doit être formatée de façon à donner une fourchette des longueur disponibles pour cette planche. Les pieds sont caractérisés par le charactère apostrophe ( ' ), les pouces par le charactère guillemets doubles ( " ). Les valeurs minimales et maximales seront séparées par un espace, un tiret ( - ) et un autre espace. Cette entrée est obligatoire.
> **Exemple :** 9'0" - 9'6"
- **Une largeur** correspondante à la largeur de la planche en pouces et en huitièmes de pouce. Cette largeur doit être formatée de façon à donner une fourchette des largeurs disponible pour cette planche. Les pouces sont caractérisés par le charactère guillemets doubles ( " ), les huitièmes de pouce par deux nombres séparés par un slash. Les valeurs minimales et maximales seront séparées par un espace, un tiret ( - ) et un autre espace. Cette entrée est obligatoire.
> **Exemple :** 22"1/2 - 23"3/4
- **Une épaisseur** correspondante à l'épaisseur de la planche en pouces et en huitièmes de pouce. Cette épaisseur doit être formatée de façon à donner une fourchette des épaisseurs disponible pour cette planche. Les pouces sont caractérisés par le charactère guillemets doubles ( " ), les huitièmes de pouce par deux nombres séparés par un slash. Les valeurs minimales et maximales seront séparées par un espace, un tiret ( - ) et un autre espace. Cette entrée est obligatoire.
> **Exemple :** 2"7/8 - 3"1/2
- **Une liste de tails** correspondant à la liste possible des formes de tail que l'utilisateur du site à la possibilité de choisir lors d'une demande de devis. Chaque tail devra être écrit avec sa première lettre majuscule et les différents tails possibles seront séparés par un espace, un slash et un autre espace. Cette entrée est obligatoire.
> **Exemple :** Squash / Round
- **Un descriptif du shape** correspondant à la liste complète des formes cumulées composant la planche. Chaque shape devra être écrit avec sa première lettre majuscule pour chaque mot et les différents shapes seront séparés par un espace, un symbole ( + ) et un autre espace. Cette entrée est obligatoire.
> **Exemple :** Belly + Vee + Nose Concave
- **Une liste des dérives** correspondant à la liste possible des configurations de dérives que l'utilisateur du site à la possibilité de choisir lors d'une demande de devis. Chaque configuration de dérives devra être écrite avec sa première lettre majuscule (si elle est de nature alphabétique) et les différentes configurations possibles seront séparées par un espace, un slash et un autre espace. Cette entrée est obligatoire.
> **Exemple :** Single / 2 + 1
- **Un niveau** correspondant soit au niveau moyen requis pour utiliser cette planche, soit à une fourchette de niveau dans laquelle l'utilisateur doit être placé. Seul le premier niveau indiqué doit débuter par une majuscule. Cette entrée est obligatoire.
> **Exemple :** Intermédiaire à confirmé
- **Une description** correspondant à un ou plusieurs paragraphes séparés par un interligne double. Les majuscules seront ajoutées au début de chaque phrase. Cette entrée est obligatoire.
- **Une image principale** au format .png uniquement, détourée, montrant la planche de face en position verticale, le nose vers le haut. Un canal alpha devra être ajouté sur ce fichier afin de rendre le fond transparent. Un soin particulier devra être apporté au détourage de la planche. Cette entrée est obligatoire. Le fichier n'excèdera pas 2 Mo.
- **Une galerie d'images secondaires** contenant en première instance une image au format .png uniquement, détourée, montrant la planche de dos en position verticale, le nose vers le haut (si elle est disponible). Un canal alpha devra être ajouté sur ce fichier afin de rendre le fond transparent. Un soin particulier devra être apporté au détourage de la planche. Ce fichier n'excèdera pas 2 Mo. D'autres fichiers photo pourront être ajouté en suivant. Il est possible de modifier l'ordre des photos dans la galerie par glissé-déposé, l'image détourée montrant le dos de la planche devant être positionnée en premier.

---

**Site réalisé par Julien Labatut :**
- **Téléphone :** 06 76 75 92 04.
- **Mail :** j.labatut33127@gmail.com.
- **GitHub :** https://github.com/Skoognuts.