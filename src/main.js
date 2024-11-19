import { reels } from './data/reels';
import { createReel } from './components/reel';

const reelsContainer = document.getElementById('reels-container');

reelsContainer.innerHTML = reels.map(createReel).join('');
