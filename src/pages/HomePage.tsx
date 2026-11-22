import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <h2 className="hero-title">
                    Литературные нарисованные рецепты: улучшай свои знания с
                    интересом
                </h2>
                <p className="hero-subtitle">
                    Здесь вы найдете авторские карточки с рецептами, интересные
                    задания, рабочие листы и онлайн-игры
                </p>
            </section>

            <section className="home-section">
                <h3>О проекте</h3>
                <p>
                    Сайт создан к докладу "Литературные нарисованные рецепты на
                    урок языка" для школьной научно-практической конференции.
                </p>
                <p>
                    Еда в книгах помогает лучше понять героев и время. В проекте
                    гастрономические образы классики XIX-XX веков оживают в
                    авторских иллюстрациях, рецептах и рабочих листах для 5-9
                    классов. Художественные отрывки и кулинарные тексты
                    становятся здесь удобным инструментом для изучения
                    орфографии, синтаксиса и подготовки к ОГЭ
                </p>
            </section>

            <section className="home-section">
                <h3>Что вы найдете на этом сайте</h3>
                <div className="features-grid">
                    <div className="feature-card">
                        <h4>
                            Отрывки из художественных произведений с названиями
                            блюд
                        </h4>
                    </div>
                    <div className="feature-card">
                        <h4>Авторские карточки с литературными рецептами</h4>
                    </div>
                    <div className="feature-card">
                        <h4>Вкусные рабочие листы для 5-9 классов</h4>
                    </div>
                    <div className="feature-card">
                        <h4>
                            Рабочие листы по разделам русского языка (
                            прошлогодние)
                        </h4>
                    </div>
                    <div className="feature-card">
                        <h4>Онлайн-тесты</h4>
                    </div>
                </div>
            </section>
        </div>
    );
}
