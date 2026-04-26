export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ВКУСНАЯ*КДА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Акции</a>
          <a href="#">Адрес</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ГОЛОДНЫЙ?
              <br />
              МЫ <span>ОТКРЫТЫ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Вкусная еда в любое время суток — хоть в полдень, хоть в 3 ночи. Без компромиссов со вкусом, круглосуточно и без выходных.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Как доехать
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              РАБОТАЕМ
              <br />
              24/7
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВКУСНО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БЕЗ ВЫХОДНЫХ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * РАБОТАЕМ КРУГЛОСУТОЧНО * ВСЕГДА СВЕЖЕЕ * БЕЗ ВЫХОДНЫХ * ВКУСНАЯ КДА * ЛУЧШИЕ В ГОРОДЕ *
            РАБОТАЕМ КРУГЛОСУТОЧНО * ВСЕГДА СВЕЖЕЕ * БЕЗ ВЫХОДНЫХ * ВКУСНАЯ КДА * ЛУЧШИЕ В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/13b4219b-0b2f-4de1-914b-4dae272d393a/files/f2c73ab4-f8bc-455d-95c8-c3714ccf64cd.jpg"
                alt="Классический бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Классика</h3>
                  <span className="price">290 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сочная котлета, свежие овощи, фирменный соус и хрустящая булочка — проверенный вкус.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://cdn.poehali.dev/projects/13b4219b-0b2f-4de1-914b-4dae272d393a/files/17d52132-330a-4f9e-837f-50e2219723d3.jpg"
                alt="Хот-дог с картошкой"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Огненный хот-дог</h3>
                  <span className="price">220 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Сочная сосиска, острый соус, хрустящий лук и картошка фри в комплекте.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Ночной комбо"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ночной комбо</h3>
                  <span className="price">450 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Бургер + картошка фри + напиток. Идеально после полуночи — сытно и быстро.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ПОЗДНО? ДА НЕТ, САМОЕ ВРЕМЯ.</h2>
            <p className="vibe-text">
              Пока другие закрываются — мы только разогреваемся. «Вкусная КДА» работает 24/7, 365 дней в году. Настоящая еда без ожидания, в любое время суток. Заходи один или с компанией — всегда рады.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/13b4219b-0b2f-4de1-914b-4dae272d393a/files/fc0a387d-189e-4e5d-9a60-cea516dc5495.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @VKUSNAYA.KDA
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ВКУСНАЯ*КДА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Еда, которая не спит. Открыты 24 часа в сутки, 7 дней в неделю, без праздников и выходных.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Акции
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Вс: Круглосуточно</li>
            <li>Без выходных</li>
            <li>365 дней в году</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 ВКУСНАЯ КДА</span>
          <span>ВКУС БЕЗ ЧАСОВ</span>
          <span>IG / VK / TG</span>
        </div>
      </footer>
    </>
  );
}
