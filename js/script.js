import { movies } from "./db.js";
import { MovieItem } from "../components/MovieItem.js";
import { reload } from "./utils.js";



const ul = document.querySelector('.promo__interactive-list')

reload(movies, MovieItem, ul)