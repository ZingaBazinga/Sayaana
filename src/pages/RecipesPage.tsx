import { useState } from "react";
import { recipes } from "../data/recipes";

export default function RecipesPage() {
    const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

    return (
        <div className="recipes-page">
            <div className="recipes-header">
                <h2>Кулинарная книга</h2>
                <p className="recipes-subtitle">
                    Выберите рецепт из списка слева
                </p>
            </div>

            <div className="recipe-content">
                <div className="recipe-header">
                    <img
                        src={selectedRecipe.image}
                        alt={selectedRecipe.title}
                        className="recipe-image"
                        loading="lazy"
                    />
                    <h3>{selectedRecipe.title}</h3>
                    <p className="book-source">{selectedRecipe.book}</p>
                </div>

                <blockquote className="literary-quote">
                    «{selectedRecipe.quote}»
                </blockquote>

                <div className="recipe-body">
                    <div className="recipe-section">
                        <h4>Описание</h4>
                        <p>{selectedRecipe.description}</p>
                    </div>

                    <div className="recipe-section">
                        <h4>Ингредиенты</h4>
                        <ul className="ingredients-list">
                            {selectedRecipe.ingredients.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="recipe-section full-width">
                        <h4>Приготовление</h4>
                        <p className="steps-text">{selectedRecipe.steps}</p>
                    </div>
                </div>
            </div>

            <div className="recipe-navigation">
                <h4>Выберите рецепт:</h4>
                <div className="recipe-tabs">
                    {recipes.map((recipe) => (
                        <button
                            key={recipe.id}
                            className={`recipe-tab ${selectedRecipe.id === recipe.id ? "active" : ""}`}
                            onClick={() => setSelectedRecipe(recipe)}
                        >
                            {recipe.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
