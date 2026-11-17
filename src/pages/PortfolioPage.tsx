export default function PortfolioPage() {
    return (
        <div className="portfolio-page">
            <section className="portfolio-header">
                <div className="avatar-placeholder">
                    <span>АВ</span>
                </div>
                <div className="portfolio-info">
                    <h2>Иванов Иван</h2>
                    <p className="portfolio-role">Ученик 10 класса</p>
                    <p className="portfolio-school">МБОУ «Лицей №1»</p>
                </div>
            </section>

            <section className="portfolio-section">
                <h3>О себе</h3>
                <p>
                    Увлекаюсь литературой и кулинарией. Этот проект объединяет
                    два моих увлечения и позволяет исследовать, как авторы
                    используют гастрономические описания для создания атмосферы
                    произведений.
                </p>
            </section>

            <section className="portfolio-section">
                <h3>Научные интересы</h3>
                <ul className="interests-list">
                    <li>Литературный анализ</li>
                    <li>История быта и кулинарии</li>
                    <li>Культурология</li>
                    <li>Практическая реконструкция исторических блюд</li>
                </ul>
            </section>

            <section className="portfolio-section">
                <h3>Достижения</h3>
                <div className="achievements-grid">
                    <div className="achievement-card">
                        <h4>🏆 Призер школьной НПК</h4>
                        <p>2025 год — исследование творчества А.С. Пушкина</p>
                    </div>
                    <div className="achievement-card">
                        <h4>📚 Публикация</h4>
                        <p>
                            Статья в школьном научном журнале «Юный
                            исследователь»
                        </p>
                    </div>
                    <div className="achievement-card">
                        <h4>🎓 Олимпиада</h4>
                        <p>Победитель муниципальной олимпиады по литературе</p>
                    </div>
                </div>
            </section>

            <section className="portfolio-section">
                <h3>Контакты</h3>
                <div className="contacts-list">
                    <p>
                        <strong>Email:</strong> ivanov@example.com
                    </p>
                    <p>
                        <strong>Научный руководитель:</strong> Петрова Мария
                        Сергеевна, учитель литературы
                    </p>
                </div>
            </section>
        </div>
    );
}
