import { useRef, useState } from "react";
import "./App.css";

import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaVolumeUp,
  FaVolumeMute,
  FaDiscord,
  FaFire,
  FaPlay,
  FaCrown,
  FaTrophy,
  FaHandshake,
  FaDownload,
} from "react-icons/fa";

const categories = [
  "Cập Nhật",
  "Hướng Dẫn Chung",
  "Gang / Hood",
  "PD",
  "Bệnh Viện",
  "Sự Kiện",
  "Cộng Đồng",
];

const newsList = [
  {
    category: "Cập Nhật",
    src: "/tintuc.mp4",
    poster: "/news1.jpg",
    date: "07/05/2026",
    title: "Cập nhật phiên bản đầu tiên",
    desc: "Giới thiệu giao diện, hệ thống cơ bản, nghề nghiệp và các hoạt động đầu tiên trong thành phố.",
  },
  {
    category: "Cập Nhật",
    src: "/chichech.mp4",
    date: "07/05/2026",
    title: "Ra mắt launcher Sunrise",
    desc: "Launcher mới giúp người chơi tải game, xem tin tức và cập nhật phiên bản dễ dàng hơn.",
  },
  
  
  {
    category: "Cập Nhật",
    youtubeId: "YgUNuS7hHTQ",
    date: "07/05/2026",
    title: "Tối ưu hiệu năng server",
    desc: "Cải thiện FPS, giảm lag và tối ưu trải nghiệm cho người chơi trong thành phố.",
  },
  {
    category: "Hướng Dẫn Chung",
    youtubeId: "MwRHrrWlbHQ",
    poster: "/hinh1.png",
    date: "07/05/2026",
    title: "Hướng dẫn tân thủ",
    desc: "Các bước tạo nhân vật, kiếm tiền ban đầu, xin việc và làm quen với roleplay.",
  },
  {
    category: "Hướng Dẫn Chung",
    src: "/chichech.mp4",
    date: "07/05/2026",
    title: "Luật roleplay cơ bản",
    desc: "Những quy tắc quan trọng giúp cộng đồng nhập vai văn minh và công bằng.",
  },
  {
    category: "Hướng Dẫn Chung",
    youtubeId: "YgUNuS7hHTQ",
    date: "07/05/2026",
    title: "Hướng dẫn nghề",
    desc: "Hướng dẫn chi tiết về các nghề nghiệp trong thành phố.",
  },
  {
    category: "Gang / Hood",
    youtubeId: "WrAuA1a8KKw",
    date: "07/05/2026",
    title: "Hệ thống Hood và Gang",
    desc: "Người chơi có thể tạo Hood nhỏ, phát triển lực lượng và nâng cấp lên Gang.",
  },
  {
    category: "Gang / Hood",
    youtubeId: "SxpLRYTH7UA",
    date: "07/05/2026",
    title: "Tranh chấp địa bàn",
    desc: "Các băng nhóm có thể tranh giành khu vực, tài nguyên và quyền kiểm soát.",
  },
  {
    category: "PD",
    youtubeId: "SxpLRYTH7UA",
    date: "07/05/2026",
    title: "Sự kiện vận chuyển vũ khí",
    desc: "PD hộ tống vật phẩm quan trọng, các băng đảng có thể phục kích để tranh đoạt.",
  },
  {
    category: "PD",
    src: "/chichech.mp4",
    date: "07/05/2026",
    title: "Tuần tra thành phố",
    desc: "Lực lượng cảnh sát bảo vệ an ninh, xử lý tình huống và hỗ trợ người dân.",
  },
  {
    category: "Bệnh Viện",
    youtubeId: "MwRHrrWlbHQ",
    poster: "/ems1.jpg",
    date: "07/05/2026",
    title: "Sự kiện khẩn cấp EMS",
    desc: "Bệnh viện có sự kiện cứu hộ định kỳ, xử lý tai nạn và phối hợp cùng PD.",
  },
  {
    category: "Bệnh Viện",
    src: "/chichech.mp4",
    date: "07/05/2026",
    title: "Cập nhật bệnh viện",
    desc: "Khu bệnh viện được làm mới với nhiệm vụ và trang thiết bị hiện đại hơn.",
  },
  {
    category: "Sự Kiện",
    src: "/chichech.mp4",
    poster: "/event1.jpg",
    date: "07/05/2026",
    title: "Chuỗi sự kiện khai mở",
    desc: "Nhiều hoạt động đầu mùa dành cho người chơi mới, quà đăng nhập và nhiệm vụ cộng đồng.",
  },
  {
    category: "Sự Kiện",
    src: "/chichech.mp4",
    date: "07/05/2026",
    title: "Đua xe thành phố",
    desc: "Giải đua xe với phần thưởng giới hạn dành cho cộng đồng Sunrise RP.",
  },
  {
    category: "Cộng Đồng",
    youtubeId: "SxpLRYTH7UA",
    date: "07/05/2026",
    title: "Sinh nhật Sunrise RP",
    desc: "Cộng đồng cùng tham gia ngày hội đặc biệt và lưu lại khoảnh khắc đáng nhớ.",
  },
  {
    category: "Cộng Đồng",
    youtubeId: "WrAuA1a8KKw",
    date: "07/05/2026",
    title: "Khoảnh khắc roleplay",
    desc: "Tổng hợp những câu chuyện nổi bật và đáng nhớ trong thành phố.",
  },
];

const hotList = [
  {
    youtubeId: "SxpLRYTH7UA",
    title: "Cơ chế Hood & Gang",
    desc: "Người chơi bắt đầu từ Hood nhỏ, tuyển thành viên, xây dựng địa bàn và phát triển thành Gang chính thức.",
  },
  {
    youtubeId: "MwRHrrWlbHQ",
    poster: "/hot2.jpg",
    title: "Vận chuyển hàng nóng",
    desc: "Các phe phái có thể phục kích, bảo vệ hoặc tranh chấp tuyến hàng để giành tài nguyên quan trọng.",
  },
  {
    src: "/chichech.mp4",
    title: "Nghề nghiệp thành phố",
    desc: "Hệ thống nghề nghiệp đa dạng giúp người chơi xây dựng cuộc sống riêng trong Sunrise City.",
  },
];

const getYoutubeThumb = (youtubeId) =>
  `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

const getYoutubeEmbed = (youtubeId) =>
  `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;

const getMediaType = (item) => {
  if (item.youtubeId) return "youtube";

  const src = item.src || "";
  if (src.match(/\.(mp4|webm|ogg)$/i)) return "video";

  return "image";
};

function MediaPreview({ item }) {
  const type = getMediaType(item);

  if (type === "youtube") {
  return (
    <iframe
      className="youtube-card"
      src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&playsinline=1&rel=0&modestbranding=1`}
      title={item.title || "Youtube video"}
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
}

  if (type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return <img src={item.src} alt={item.title || "Media"} />;
}

function MediaModal({ item }) {
  const type = getMediaType(item);

  if (type === "youtube") {
    return (
      <iframe
      className="youtube-modal"
      src={getYoutubeEmbed(item.youtubeId)}
      title={item.title || "Youtube video"}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    ></iframe>
    );
  }

  if (type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        controls
        autoPlay
        playsInline
      />
    );
  }

  return <img src={item.src} alt={item.title || "Media"} />;
}

function App() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Cập Nhật");
  const [selectedItem, setSelectedItem] = useState(null);
  const [page, setPage] = useState("home");

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    videoRef.current.volume = 0.6;
    videoRef.current.play();

    setMuted(videoRef.current.muted);
  };

  const filteredNews = newsList.filter(
    (item) => item.category === activeCategory
  );

  if (page === "ranking") {
    return <RankingPage onBack={() => setPage("home")} />;
  }

  return (
    <>
      <section className="hero" id="home">
        <video ref={videoRef} className="bg-video" autoPlay loop muted playsInline>
          <source src="/intro.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <header className="topbar">
          <img src="/logo.png" alt="Sunrise Roleplay" className="logo" />

          <nav className="main-nav">
            <a href="#home">Trang Chủ</a>
            <a href="#news">Tin Tức</a>
            <button type="button" onClick={() => setPage("ranking")}>
              <FaTrophy /> Xếp Hạng & Phần Thưởng
            </button>
            <a href="#hot">Cơ Chế Hot</a>
          </nav>

          <div className="socials">
            <a href="https://web.facebook.com/phu.trong.860383/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@MixiGaming3con" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@mixigaming" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </header>

        <div className="main-buttons">
          <a className="main-btn launcher" href="#">
            <FaDownload />
            <span>Tải Launcher</span>
          </a>

          <a
            className="main-btn discord"
            href="https://discord.gg/tjrEVJcsM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="discord-icon-box">
              <FaDiscord />
            </span>
            <span>Tham Gia Discord</span>
          </a>

          <a className="main-btn streamer" href="#partner">
            <FaHandshake />
            <span>Streamer Đăng Ký Đối Tác</span>
          </a>
        </div>

        <div className="scroll-text">Lướt để xem thêm</div>

        <button className="sound-btn" onClick={toggleSound}>
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </section>

      <section className="news-section" id="news">
        <video className="news-bg-video" autoPlay loop muted playsInline>
          <source src="/tintuc.mp4" type="video/mp4" />
        </video>

        <div className="news-overlay"></div>

        <div className="news-inner">
          <h2>TIN TỨC</h2>

          <div className="news-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="news-grid">
            {filteredNews.map((item, index) => (
              <div className="news-card" key={`${item.title}-${index}`}>
                <div className="news-media" onClick={() => setSelectedItem(item)}>
                  <MediaPreview item={item} />

                  <div className="play-circle">
                    <FaPlay />
                  </div>
                </div>

                <div className="news-content">
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <strong>{item.category}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hot-section" id="hot">
        <video className="hot-bg-video" autoPlay muted loop playsInline>
          <source src="/tintuc1.mp4" type="video/mp4" />
        </video>

        <div className="hot-overlay"></div>

        <div className="hot-inner">
          <div className="hot-title">
            <h2>
              <FaFire /> CƠ CHẾ HOT
            </h2>
            <span></span>
          </div>

          <div className="hot-grid">
            {hotList.map((item, index) => (
              <div className="hot-card" key={`${item.title}-${index}`}>
                <div className="hot-media" onClick={() => setSelectedItem(item)}>
                  <MediaPreview item={item} />

                  <div className="play-circle hot-play">
                    <FaPlay />
                  </div>
                </div>

                <div className="hot-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button onClick={() => setSelectedItem(item)}>Xem Chi Tiết</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bottom-sections">
        <video className="bottom-bg-video" autoPlay muted loop playsInline>
          <source src="/tintuc.mp4" type="video/mp4" />
        </video>

        <div className="bottom-bg-overlay"></div>

        <section className="partner-section" id="partner">
          <div className="partner-box">
            <div>
              <p className="hero-kicker">Creator Program</p>
              <h2>Đăng ký Streamer / Đối tác</h2>
              <p>
                Dành cho creator muốn hợp tác cùng server, làm nội dung, tổ chức event
                hoặc quảng bá cộng đồng Sunrise Roleplay.
              </p>
            </div>

            <a
              className="partner-cta"
              href="https://forms.gle/LINK_FORM_DANG_KY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gửi Đơn Đăng Ký
            </a>
          </div>
        </section>

        <section className="about-footer-section" id="about">
          <div className="about-footer-inner">
            <div className="about-top">
              <div className="about-brand">
                <img src="/logo.png" alt="Sunrise Roleplay" />
                <div>
                  <h2>SUNRISE ROLEPLAY</h2>
                  <p>Thành phố nhập vai đông người chơi nhất tại Việt Nam</p>
                </div>
              </div>

              <div className="about-content">
                <h3>VỀ CHÚNG TÔI</h3>
                <p>
                  SUNRISE RP được hình thành từ niềm đam mê GTA V của một cộng đồng
                  yêu thích nhập vai. Với mục tiêu tiên phong phát triển, chúng tôi
                  ngày càng hoàn thiện hệ thống, cập nhật nội dung mới và tạo ra một
                  thành phố sống động cho người chơi.
                </p>

                <p>
                  Server luôn hướng đến trải nghiệm ổn định, công bằng và sáng tạo,
                  nơi mỗi người chơi đều có thể xây dựng câu chuyện riêng của mình.
                </p>
              </div>
            </div>

            <div className="about-divider"></div>

            <div className="footer-center">
              <h2>SUNRISE ROLEPLAY</h2>
              <p>KẾT NỐI VỚI THÀNH PHỐ SUNRISE</p>

              <div className="footer-buttons">
                <a
                  href="https://discord.gg/tjrEVJcsM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-discord"
                >
                  <FaDiscord /> Discord
                </a>

                <a
                  href="https://www.tiktok.com/@mixigaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-tiktok"
                >
                  <FaTiktok /> TikTok
                </a>
              </div>

              <span>© 2026 SUNRISE ROLEPLAY. All rights reserved.</span>
            </div>
          </div>
        </section>
      </section>

      {selectedItem && (
        <div className="news-modal" onClick={() => setSelectedItem(null)}>
          <div className="news-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedItem(null)}>
              ×
            </button>

            <MediaModal item={selectedItem} />

            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}

function RankingPage({ onBack }) {
  const [selectedRanking, setSelectedRanking] = useState(null);
  const [activeReward, setActiveReward] = useState("gang");
  const [selectedRewardMedia, setSelectedRewardMedia] = useState(null);

  const rankingTypes = [
    {
      id: "gang",
      icon: "👑",
      title: "Xếp Hạng Gang",
      desc: "Xem bảng xếp hạng Gang thực tế trong game.",
      youtubeId: "SxpLRYTH7UA",
    },
    {
      id: "hood",
      icon: "🏠",
      title: "Xếp Hạng Hood",
      desc: "Xem bảng xếp hạng Hood nổi bật.",
      youtubeId: "WrAuA1a8KKw",
    },
    {
      id: "personal",
      icon: "⚡",
      title: "Xếp Hạng Cá Nhân",
      desc: "Top cá nhân theo event và hoạt động.",
      youtubeId: "MwRHrrWlbHQ",
      poster: "/ranking-personal.jpg",
    },
  ];

  const rewardGroups = {
    gang: {
      title: "Phần Thưởng Gang",
      list: [
        {
          title: "Top 1 Gang",
          media: [
            { src: "/logo.png" },
            { src: "/logo2.png" },
            { src: "/oke.png" },
            { youtubeId: "MwRHrrWlbHQ", poster: "/oke.png" },
          ],
          items: ["Xe gang độc quyền", "100 bộ sơ cứu", "50 nguyên liệu hiếm", "20 hòm đồ OC"],
        },
        {
          title: "Top 2 Gang",
          media: [
            { src: "chichech.mp4" },
            { youtubeId: "MwRHrrWlbHQ" },
            { youtubeId: "WrAuA1a8KKw" },
            { src: "logo2.png", poster: "/reward-gang-top1-video.jpg" },
          ],
          items: ["80 bộ sơ cứu", "40 nguyên liệu hiếm", "15 hòm đồ OC"],
        },
        {
          title: "Top 3 Gang",
          media: [
            { src: "chichech.mp4" },
            { src: "chichech.mp4" },
            { youtubeId: "YgUNuS7hHTQ", poster: "/reward-gang-top1-3.jpg" },
          ],
          items: ["50 bộ sơ cứu", "30 nguyên liệu hiếm"],
        },
      ],
    },
    hood: {
      title: "Phần Thưởng Hood",
      list: [
        {
          title: "Top 1 Hood",
          media: [
            { src: "chichech.mp4" },
            { src: "chichech.mp4" },
            { youtubeId: "MwRHrrWlbHQ", poster: "/reward-gang-top1-3.jpg" },
          ],
          items: ["Xe limited", "50 bộ sơ cứu", "15 hòm đồ OC"],
        },
        {
          title: "Top 2 Hood",
          media: [{ youtubeId: "YgUNuS7hHTQ" }, { src: "chichech.mp4" }],
          items: ["40 bộ sơ cứu", "10 hòm đồ OC"],
        },
        {
          title: "Top 3 Hood",
          media: [{ youtubeId: "YgUNuS7hHTQ" }],
          items: ["40 bộ sơ cứu"],
        },
      ],
    },
    personal: {
      title: "Phần Thưởng Cá Nhân",
      list: [
        {
          title: "Top 1 Cá Nhân",
          media: [
            { src: "tintuc1.mp4" },
            { src: "chichech.mp4" },
            { youtubeId: "MwRHrrWlbHQ", poster: "/reward-gang-top1-3.jpg" },
          ],
          items: ["Xe cá nhân giới hạn", "Danh hiệu mùa giải", "Gói vật phẩm VIP"],
        },
        {
          title: "Top 2 Cá Nhân",
          media: [{ src: "/tintuc.mp4" }, { youtubeId: "WrAuA1a8KKw" }],
          items: ["Danh hiệu mùa giải", "Gói vật phẩm cao cấp"],
        },
        {
          title: "Top 3 Cá Nhân",
          media: [{ youtubeId: "SxpLRYTH7UA" }],
          items: ["Tiền thưởng ingame"],
        },
      ],
    },
  };

  const currentReward = rewardGroups[activeReward];

  return (
    <main className="ranking-page">
      <video className="ranking-bg-video" autoPlay muted loop playsInline>
        <source src="/tintuc1.mp4" type="video/mp4" />
      </video>

      <div className="ranking-bg-overlay"></div>

      <button className="back-btn" onClick={onBack}>
        ← Quay Lại Trang Chủ
      </button>

      <section className="ranking-hero">
        <p className="hero-kicker">Leaderboard Season 01</p>
        <h1>
          <FaCrown /> Xếp Hạng & Phần Thưởng
        </h1>
        <p className="ranking-desc">Bảng xếp hạng sẽ được cập nhật vào mỗi cuối tuần.</p>
      </section>

      <div className="ranking-type-grid">
        {rankingTypes.map((item) => (
          <article
            className="ranking-type-card ranking-click-card"
            key={item.id}
            onClick={() => setSelectedRanking(item)}
          >
            <div className="ranking-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <strong>Xem bảng xếp hạng</strong>
          </article>
        ))}
      </div>

      <section className="reward-section">
        <h2>{currentReward.title}</h2>

        <div className="reward-tabs">
          <button className={activeReward === "gang" ? "active" : ""} onClick={() => setActiveReward("gang")}>
            Gang
          </button>
          <button className={activeReward === "hood" ? "active" : ""} onClick={() => setActiveReward("hood")}>
            Hood
          </button>
          <button className={activeReward === "personal" ? "active" : ""} onClick={() => setActiveReward("personal")}>
            Cá Nhân
          </button>
        </div>

        <div className="reward-grid">
          {currentReward.list.map((reward) => (
            <article className="reward-card" key={reward.title}>
              <h3>{reward.title}</h3>

              <div className="reward-media-slider">
                {reward.media.map((media, index) => (
                  <button
                    className="reward-media-item"
                    key={index}
                    onClick={() => setSelectedRewardMedia(media)}
                  >
                    <MediaPreview item={media} />

                    {getMediaType(media) !== "image" && (
                      <span className="reward-play">▶</span>
                    )}
                  </button>
                ))}
              </div>

              <ul>
                {reward.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {selectedRanking && (
        <div className="ranking-popup" onClick={() => setSelectedRanking(null)}>
          <div className="ranking-popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedRanking(null)}>
              ×
            </button>

            <MediaModal item={selectedRanking} />

            <h3>{selectedRanking.title}</h3>
            <p>{selectedRanking.desc}</p>
          </div>
        </div>
      )}

      {selectedRewardMedia && (
        <div className="reward-modal" onClick={() => setSelectedRewardMedia(null)}>
          <div className="reward-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedRewardMedia(null)}>
              ×
            </button>

            <MediaModal item={selectedRewardMedia} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;