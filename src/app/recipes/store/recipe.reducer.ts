import * as RecipeActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.module';

export interface State {
  recipes: Recipe[];
  recipeSelected: number;
}

const initialState: State = {
  recipeSelected: -1,
  recipes: [
      new Recipe(
        'Arroz con Papa',
        'Comida endogena',
        'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
        [
          new Ingredient('Arroz', 10),
          new Ingredient('Papa', 10),
          new Ingredient('Tajada', 10),
        ]
      ),
      new Recipe(
        'Pabellon',
        'Comida criolla',
        'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
        [
          new Ingredient('Arroz', 10),
          new Ingredient('Carne Mechada', 30),
          new Ingredient('Tajada', 3),
        ]
      ),
    ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SELECT_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload
      };

    case RecipeActions.INIT_RECIPE:
      return {
        ...state,
        selectedRecipe: -1
      };

    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [ ...state.recipes, action.payload ]
      };

    case RecipeActions.DELETE_RECIPE:
      const deletedRecipe = [ ...state.recipes ];
      deletedRecipe.splice(state.recipeSelected, 1);
      return {
        ...state,
        recipes: deletedRecipe,
        selectedRecipe: -1
      };

    case RecipeActions.UPDATE_RECIPE:
      const updatedRecipes = [ ...state.recipes ];
      updatedRecipes[state.recipeSelected] = action.payload;
      return {
        ...state,
        recipes: updatedRecipes,
        selectedRecipe: -1
      };

    default:
      return state;
  }
}
