export default function PortfolioPage() {
    return (
        <div className="portfolio-page">
            <section className="portfolio-header">
                <div className="avatar-placeholder">
                    <span>АВ</span>
                </div>
                <div className="portfolio-info">
                    <h2>Федорова Сайаана</h2>
                    <p className="portfolio-role">Ученица 9 класса</p>
                    <p className="portfolio-school">ЫКСОШ Nº1</p>
                </div>
            </section>

            <section className="portfolio-section">
                <h3>О себе</h3>
                <p>
                    Люблю открывать новое на стыке литературы, языка и
                    иллюстрации. Регулярно проверяю свои силы в олимпиадах и
                    научно-практических конференциях. Верю, что учеба может быть
                    красивой и увлекательной, поэтому создаю авторские материалы
                    и планирую дальше развивать свое дело в этом направлении.
                </p>
            </section>

            <section className="portfolio-section">
                <h3>Научные интересы</h3>
                <ul className="interests-list">
                    <li>Литературный анализ</li>
                    <li>История быта и кулинарии</li>
                    <li>Книжная иллюстрация</li>
                    <li>Визуализация художественного текста на уроках языка</li>
                </ul>
            </section>

            <section className="portfolio-section">
                <h3>Достижения</h3>
                <div className="achievements-grid">
                    <div className="achievement-card">
                        <h4>🏆 Призер НПК</h4>
                        <p>
                            Призер республиканской научно-практической
                            конференции "Инникигэ хардыы"
                        </p>
                    </div>
                    <div className="achievement-card">
                        <h4>🎓 Олимпиада</h4>
                        <p>Призер республиканских олимпиад</p>
                    </div>
                </div>
            </section>

            <section className="portfolio-section">
                <h3>Контакты</h3>
                <div className="contacts-list">
                    <p>
                        <strong>Email:</strong> sayaanafedd@gmail.com
                    </p>
                    <p>
                        <strong>Научный руководитель:</strong> Петрова Евдокия
                        Владиславовна, учитель русского языка и литературы
                    </p>
                </div>
            </section>
        </div>
    );
}
