import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <h2 className="hero-title">
                    Гастрономия в литературе:
                    <br />
                    от текста к тарелке
                </h2>
                <p className="hero-subtitle">
                    Исследовательский проект о кулинарных мотивах в классической
                    и современной литературе
                </p>
            </section>

            <section className="home-section">
                <h3>О проекте</h3>
                <p>
                    Этот сайт создан в рамках школьной научно-практической
                    конференции. Здесь собраны рецепты блюд, описанных в
                    литературных произведениях разных эпох и жанров.
                </p>
                <p>
                    Каждый рецепт — это попытка реконструировать
                    гастрономический код произведения, понять, как авторы
                    используют описание пищи для создания атмосферы, раскрытия
                    характеров и передачи культурного контекста.
                </p>
            </section>

            <section className="home-section">
                <h3>Что вы найдете на этом сайте</h3>
                <div className="features-grid">
                    <div className="feature-card">
                        <h4>📖 Литературные цитаты</h4>
                        <p>
                            Оригинальные отрывки из книг, где упоминаются блюда
                        </p>
                    </div>
                    <div className="feature-card">
                        <h4>🍳 Практические рецепты</h4>
                        <p>
                            Адаптированные рецепты для приготовления в домашних
                            условиях
                        </p>
                    </div>
                    <div className="feature-card">
                        <h4>🔬 Научный анализ</h4>
                        <p>
                            Исследование роли гастрономии в литературном
                            произведении
                        </p>
                    </div>
                </div>
            </section>

            <section className="home-section">
                <div className="cta-buttons">
                    <Link to="/recipes" className="btn btn-primary">
                        Смотреть рецепты
                    </Link>
                    <Link to="/portfolio" className="btn btn-secondary">
                        Об авторе
                    </Link>
                </div>
            </section>
        </div>
    );
}
