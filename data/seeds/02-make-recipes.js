const recipes = [
    { recipe_name : 'Alfredo Pasta'},
    { recipe_name : 'Califlower Tacos'},
    { recipe_name : 'Peanut Butter and Jelly'},
]

const ingredients = [
    { ingredient_name : 'Alfredo Sauce' , ingredient_unit: 'ounces'},
    { ingredient_name : 'Penne Pasta' , ingredient_unit: 'ounces'},
    { ingredient_name : 'Califlower' , ingredient_unit: 'lbs'},
    { ingredient_name : 'Tortillas' , ingredient_unit: 'slices'},
    { ingredient_name : 'Peanut Butter' , ingredient_unit: 'tablespoon'},
    { ingredient_name : 'Jelly' , ingredient_unit: 'tablespoon'},
    { ingredient_name : 'Bread' , ingredient_unit: 'slices'},
]

const step_ingredients = [
    //Alfredo Pasta 
    { step_id : 2, ingredient_id: 2 , quantity: 16 },
    { step_id : 3, ingredient_id: 1, quantity: 14 },

    //Califlower Tacos
    { step_id : 4, ingredient_id: 3, quantity: 1},
    { step_id : 6, ingredient_id: 4, quantity: 1},

    //Peanut Butter and Jelly 
    { step_id : 7, ingredient_id: 7, quantity: 2},
    { step_id : 8, ingredient_id: 5, quantity: 2},
    { step_id : 8, ingredient_id: 6, quantity: 1},
]

const steps = [
    //Alfredo Pasta
    { step_text: 'Boil water' , step_number: 1, recipe_id: 1},
    { step_text: 'Add penne pasta to water until boiled' , step_number: 2, recipe_id: 1},
    { step_text: 'Drain water from pasta and add alfredo sauce to mix' , step_number: 3, recipe_id: 1},

    //Califlower Tacos
    { step_text: 'Cut califlower into desired sized bites' , step_number: 1 , recipe_id: 2},
    { step_text: 'Place in airfryer or oven' , step_number: 2, recipe_id: 2},
    { step_text: 'Once cooked add califlower to toritilla of choice' , step_number: 3, recipe_id: 2},

    //Peanut Butter and Jelly 
    { step_text: 'Get two slices of bread' , step_number: 1, recipe_id: 3},
    { step_text: 'Add peanut butter and jelly to bread with butter knife to spread' , step_number: 2, recipe_id: 3},
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)

}