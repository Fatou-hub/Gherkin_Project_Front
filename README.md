1. Git pull du projet "Gherkin_dictionary"

2. `npm start`
Runs the app in the development mode.\

3. Open the localhost link : http://localhost:3001 and local server.js on port 5000 at once

# connexion back  et front

* fichiers : 
connectMGDB.js permet la connexion à la base de données mongoDB dockerisé

server.js permet d'interroger la base de données MongoDB et de fournir les données nécessaires au frontend via des requêtes HTTP.

sous dossiers: > utils : composant Drag and Drop

DragAndDropContainerCatalog.jsx ou se trouve la logique du DragAndDrop avec DndKit. 
Ce composant effectue : 
- des requêtes HTTP au serveur backend et obtenir les données
- des écoutes d'évènements du système de glisser-déposer afin d'identifier si le conteneur de l'élément qui peut être déplacé est vide ou pas
-identifie la zone droppable
-identifie la zone survolé
-identifie les différentes phases du drag and drop (start, encours, finished ou abandon du dépôt de l'élément en cours de déplacement vers un nouveau conteneur).

# Structure des fichiers:

* index.html : contient une balise "div" qui a pour ID "root".  Il s'agit là de l'élément de la page dans lequel nous allons injecter notre application react. 

* index.js est notre fichier à partir duquel l'application "App.jsx" va pouvoir commencer avec la balise "div" et son attribut "root". 

# les premiers "import":
nous importons "react-dom" qui nous donne accès à la méthode "render".

-----------------------------------------------JE N'AI PAS TERMINE D'ECRIRE EN DESSOUS DE CETTE LIGNE---------------------------------------

# principale fichier:
App.jsx explication du code 

# explication du code des composants: 

# dossier components > 
>>> PagesRouter.jsx
>>> MenuiItems.jsx
>>> searchBar.jsx
>>> Dropdown.jsx
>>> container.jsx
>>> sortable_items.jsx

# dossier column
>>> Column.jsx

# dossier errorManagement
>>> errorBoundary.jsx

# dossier input
>>> input.jsx

# dossier Task
>>> task.jsx

# dossier utils
>>> getItems.jsx
