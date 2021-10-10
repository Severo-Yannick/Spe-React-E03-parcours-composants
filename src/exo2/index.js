/*
 * Exo 2 : React !
 *
 * C'est parti avec React :D !!!
 *
 * 1) Installer les packages react et react-dom
 *
 * 2) Créer un composant HelloWorld, en créant une fonction HelloWorld()
 *    qui renvoie le JSX suivant :
 *
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par React</h1>
 *        <h2>Et affiché avec ReactDOM</h2>
 *      </div>
 *
 * 3) Importer la fonction render du module 'react-dom'
 *
 * 4) Exécuter la fonction render() pour afficher
 *    <HelloWorld /> dans la div #root
 *
 * 5) Rajouter un fichier .css pour venir centrer
 *    le texte de #hello-world
 */

/*
 * Npm import
 */

/*
 * Local import
 */
import React from 'react';
import { render } from 'react-dom';
import test from './test';

import './exo2.css';
/*
 * Code
 */
const HelloWorld = () => (
  <div id="hello-world">
    <h1>Ce HTML a été généré par React</h1>
    <h2>Et affiché avec ReactDOM</h2>
  </div>
);

render(<HelloWorld />, document.getElementById('root'));

/*
 * Tests
 */
test();
