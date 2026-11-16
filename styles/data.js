window.SPECULUM_CASES = [
  {
    "num": 2,
    "name": "Awwwards",
    "url": "https://www.awwwards.com",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "做网页和前端绕不开的奖。每天评出一个「今日最佳网站」，评委按设计、易用性、创意、内容四项打分，年底还会选年度大奖。很适合每天早上开工前花五分钟刷一下，看看现在的网页设计又卷出了什么新花样。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到 Awwwards 页面，含「Site of the Day Nov 16, 2026 Score 7.39 of 10」与「Bulletproof」。"
    ],
    "slug": "002-awwwards-com",
    "md": "../doctrinale/style-cases/002-awwwards-com.md",
    "html": "cases/002-awwwards-com.html"
  },
  {
    "num": 3,
    "name": "CSS Design Awards",
    "url": "https://www.cssdesignawards.com",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "和 Awwwards 齐名的另一个网页大奖，也是每天推一个最佳站点，按 UI、UX、创新打分。它和 Awwwards 的评委口味不太一样，两边选出来的网站经常不重样，可以换着看。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机复核 HTTP 200；站点特定搜索有 CSS Design Awards 自身「AWARDED 2026 NOV 15」页面。"
    ],
    "slug": "003-cssdesignawards-com",
    "md": "../doctrinale/style-cases/003-cssdesignawards-com.md",
    "html": "cases/003-cssdesignawards-com.html"
  },
  {
    "num": 4,
    "name": "The FWA",
    "url": "https://thefwa.com",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "2000 年就开始办的老牌数字设计奖，也是每天更新一个获奖项目。相比规规矩矩的商业排版，FWA 更喜欢选那些在交互、WebGL、声音互动上玩出花来的技术流作品。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://thefwa.com/`。",
      "页面 `<title>`：`The FWA — Digital design awards since 2000`。",
      "页面 meta description：`Digital design awards since 2000. FWAi gives every entry a written critique; every award is decided by an independent human jury.`。"
    ],
    "slug": "004-thefwa-com",
    "md": "../doctrinale/style-cases/004-thefwa-com.md",
    "html": "cases/004-thefwa-com.html"
  },
  {
    "num": 5,
    "name": "The Motion Awards",
    "url": "https://motionawards.com",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "Motionographer 自己办的动态设计专项奖。片头、广告、品牌包装、纪录片各评各的，这两年还加了 AI 单元。最实在的是获奖页直接嵌着成片，不用再跳出去到处找，像《幕府将军》的片头就在里面，一个下午就能把一整年最好的动态作品刷一遍。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://motionawards.com/`。",
      "页面 og:description：`The 20th Anniversary Window is open. Submissions through January 15, 2027 — work published in 2025 or 2026 can both enter. The Final Stretch is open — last day to submit is January 15, 2027.`。",
      "本机二次抓取 HTTP 200、约 180 KB 页面；无 <title>，但有 20 周年投稿窗口的 og 描述。"
    ],
    "slug": "005-motionawards-com",
    "md": "../doctrinale/style-cases/005-motionawards-com.md",
    "html": "cases/005-motionawards-com.html"
  },
  {
    "num": 6,
    "name": "Apple Design Awards",
    "url": "https://developer.apple.com/design/awards",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "苹果每年 WWDC 开发者大会上颁的奖。能上榜的 App 和游戏，在果味审美、交互手感和硬件特性结合上基本都是教科书级别的。苹果官方还会给每个获奖应用写一段评语，讲清楚为什么选它，做移动端的人非常值得细看。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://developer.apple.com/design/awards/`。",
      "页面 `<title>`：`Apple Design Awards - 2026 winners and finalists - Apple Developer`。",
      "页面 meta description：`The Apple Design Awards recognize innovation, ingenuity, and technical achievement in app and game design. Meet the winners and finalists for the 2026 Apple Design Awards.`。"
    ],
    "slug": "006-developer-apple-com",
    "md": "../doctrinale/style-cases/006-developer-apple-com.md",
    "html": "cases/006-developer-apple-com.html"
  },
  {
    "num": 7,
    "name": "D&AD",
    "url": "https://www.dandad.org",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "英国的设计与广告大奖，因为奖杯造型是铅笔，国内同行一般叫它「黄铅笔奖」。它最高级别的「黑铅笔」评选极其苛刻，有些年份宁可空缺也不发，能拿下的全是能写进设计史的案子。做品牌、广告和平面的人可以多翻它的历年档案。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.dandad.org/`。",
      "页面 `<title>`：`D&AD`。",
      "页面 meta description：`width=device-width, initial-scale=1.0\" /> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=EDGE\" /> <meta data-rh=\"true\" content=\"D&AD\" name=\"site_name\"/><meta data-rh=`。"
    ],
    "slug": "007-dandad-org",
    "md": "../doctrinale/style-cases/007-dandad-org.md",
    "html": "cases/007-dandad-org.html"
  },
  {
    "num": 8,
    "name": "The One Show & ADC",
    "url": "https://www.oneclub.org",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "美国 The One Club 办的两个顶级大奖。One Show 更看重广告片背后的创意点子，而 1921 年创办的 ADC（纽约艺术指导俱乐部奖）更看重纯正的视觉表现、字体排印和工艺细节。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.oneclub.org/`。",
      "页面 `<title>`：`The One Show & ADC Awards | Advertising & Design Awards | The One Club`。",
      "页面 meta description：`Home of The One Show, ADC Annual Awards, TDC and Young Ones. Enter global creative awards, explore winners, and join the creative community.`。"
    ],
    "slug": "008-oneclub-org",
    "md": "../doctrinale/style-cases/008-oneclub-org.md",
    "html": "cases/008-oneclub-org.html"
  },
  {
    "num": 9,
    "name": "Runway AI Film Festival",
    "url": "https://aif.runwayml.com",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "AI 视频工具 Runway 办的 AI 影像节，2026 年已经是第 4 届，在纽约、洛杉矶、东京都有线下放映。除了短片，还分了设计、新媒体、时尚、广告几个赛道。官网的 Screening Room 能直接看历届获奖片，想知道 AI 视频的天花板现在到了哪儿，看这里最直接。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://aif.runwayml.com/`。",
      "页面 `<title>`：`AIF 2026 | AI Festival`。",
      "页面 meta description：`AIF is a celebration of the art and artists embracing new and emerging AI tools for creative work. Works showcased offer a glimpse at a new creative era. One made possible when today's brightest creative minds are empowered with the tools of tomorrow.`。"
    ],
    "slug": "009-aif-runwayml-com",
    "md": "../doctrinale/style-cases/009-aif-runwayml-com.md",
    "html": "cases/009-aif-runwayml-com.html"
  },
  {
    "num": 10,
    "name": "Tokyo TDC",
    "url": "https://tokyotypedirectorsclub.org",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "东京字体指导俱乐部的年度奖。虽然名字里带「字体」，但它其实是整个亚洲视觉设计圈的风向标。评委眼光非常刁钻，获奖的海报、书籍和动态视觉大多带有很强的实验性，看腻了四平八稳的商业稿，去这儿洗洗眼睛特别好。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机复核 HTTP 200；站点特定搜索有 Tokyo TDC 自身「Tokyo TDC Annual Awards 2026 Results」。"
    ],
    "slug": "010-tokyotypedirectorsclub-org",
    "md": "../doctrinale/style-cases/010-tokyotypedirectorsclub-org.md",
    "html": "cases/010-tokyotypedirectorsclub-org.html"
  },
  {
    "num": 11,
    "name": "Annecy 安纳西国际动画节",
    "url": "https://www.annecyfestival.com",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "1960 年创办的法国动画节，动画人眼里的最高殿堂。除了动画长片和独立短片，它还有专门的商业委托单元（广告、MV、片头），能看到全世界最好的一批美术风格和动态叙事。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.annecyfestival.com/`。",
      "页面 `<title>`：`Site officiel du Festival et du Marché international du film d'animation d'Annecy`。",
      "页面 meta description：`Site officiel du Festival et du Marché (Mifa) international du film d'animation d'Annecy : le rendez-vous mondial de plus de 12 000 professionnels`。"
    ],
    "slug": "011-annecyfestival-com",
    "md": "../doctrinale/style-cases/011-annecyfestival-com.md",
    "html": "cases/011-annecyfestival-com.html"
  },
  {
    "num": 12,
    "name": "Ciclope Festival",
    "url": "https://www.ciclopefestival.com",
    "section": "大赛与奖项：先看看顶配长什么样",
    "key": "awards",
    "desc": "一个专门按「工种」发奖的影视广告节。别的奖大多看整体创意，它偏偏把片子拆开：导演、摄影、调色、剪辑、三维动画、视觉特效、配乐各评各的奖。做视频的人如果想单拎出「调色」或「剪辑节奏」来研究，看这个奖最对路。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.ciclopefestival.com/`。",
      "页面 `<title>`：`CICLOPE Festival`。",
      "页面 meta description：`Home to those who believe in the power of craft. The 2026 edition of CICLOPE Festival and Awards takes place 6 - 8 October in Berlin.`。"
    ],
    "slug": "012-ciclopefestival-com",
    "md": "../doctrinale/style-cases/012-ciclopefestival-com.md",
    "html": "cases/012-ciclopefestival-com.html"
  },
  {
    "num": 28,
    "name": "The Rookies",
    "url": "https://www.therookies.co",
    "section": "3D 与渲染",
    "key": "three",
    "desc": "专门给全球相关专业大学生和入行新人办的年度比赛社区，分 3D 动画、游戏开发、视觉特效、概念设计好几个赛道。刚学软件或者准备找工作的人可以去翻翻，看看现在的应届生作品集都已经卷到什么地步了。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "站点特定搜索有 The Rookies 自身 Rookie Awards 2026、/contests/556、/entries/47642 页面内容。"
    ],
    "slug": "028-therookies-co",
    "md": "../doctrinale/style-cases/028-therookies-co.md",
    "html": "cases/028-therookies-co.html"
  },
  {
    "num": 29,
    "name": "80 Level",
    "url": "https://80.lv",
    "section": "3D 与渲染",
    "key": "three",
    "desc": "专聊游戏美术和三维技术的媒体。这个站最值得看的是它的 Breakdown（制作拆解）文章：请原作者出面，把一个复杂的三维场景拆开，从用什么软件建白模、怎么在 Substance 里刷脏迹，到怎么在引擎里摆灯光，写得跟操作手册一样细。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://80.lv/`。",
      "页面 `<title>`：`80 Level`。",
      "页面 meta description：`80 LEVEL is an industry-leading platform for game developers,, digital artists, animators, video game enthusiasts, CGI and VFX specialists. Join us to learn about new workflows, discuss new tools and share your work`。"
    ],
    "slug": "029-80-lv",
    "md": "../doctrinale/style-cases/029-80-lv.md",
    "html": "cases/029-80-lv.html"
  },
  {
    "num": 30,
    "name": "Sketchfab",
    "url": "https://sketchfab.com",
    "section": "3D 与渲染",
    "key": "three",
    "desc": "直接在网页上 360 度转着看 3D 模型的平台。遇到做得好的模型，点一下右下角的查看器设置，就能直接切到纯白模、线框（Wireframe）、法线贴图或者粗糙度通道——别人模型是怎么布线的、UV 怎么拆的，扒得干干净净。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://sketchfab.com/`。",
      "页面 `<title>`：`Sketchfab - The best 3D viewer on the web`。",
      "页面 meta description：`With a community of over one million creators, we are the world’s largest platform to publish, share, and discover 3D content on web, mobile, AR, and VR.`。"
    ],
    "slug": "030-sketchfab-com",
    "md": "../doctrinale/style-cases/030-sketchfab-com.md",
    "html": "cases/030-sketchfab-com.html"
  },
  {
    "num": 31,
    "name": "befores & afters",
    "url": "https://beforesandafters.com",
    "section": "3D 与渲染",
    "key": "three",
    "desc": "专门扒好莱坞大片视效幕后的在线杂志。文章最爱放特效前后的对比图：左边是演员穿着动作捕捉服站在绿幕前，右边是合成完的爆炸场面，同时配着视效总监的采访，讲清楚这场戏到底是怎么借位和合成的。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到标题「befores & afters」。"
    ],
    "slug": "031-beforesandafters-com",
    "md": "../doctrinale/style-cases/031-beforesandafters-com.md",
    "html": "cases/031-beforesandafters-com.html"
  },
  {
    "num": 32,
    "name": "fxguide",
    "url": "https://www.fxguide.com",
    "section": "3D 与渲染",
    "key": "three",
    "desc": "圈内资历最老的影视视效技术媒体。文章写得非常硬核，不聊八卦，专门深挖渲染器底层算法、虚拟制片 LED 棚管线、流体解算技术，适合想往技术美术（TA）或视效深水区走的人。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.fxguide.com/`。",
      "页面 `<title>`：`fxguide`。",
      "页面 meta description：`vfx and 3D news`。"
    ],
    "slug": "032-fxguide-com",
    "md": "../doctrinale/style-cases/032-fxguide-com.md",
    "html": "cases/032-fxguide-com.html"
  },
  {
    "num": 34,
    "name": "Poly Haven",
    "url": "https://polyhaven.com",
    "section": "3D 与渲染",
    "key": "three",
    "desc": "做三维渲染必存的良心资源站。里面的高清 HDRI 环境光贴图、PBR 材质球和扫描模型全部采用 CC0 协议——意思是完全免费、不用注册就能直接下载，拿去接商业私活也不用署名。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://polyhaven.com/`。",
      "页面 `<title>`：`Poly Haven`。",
      "页面 meta description：`The Public 3D Asset Library`。"
    ],
    "slug": "034-polyhaven-com",
    "md": "../doctrinale/style-cases/034-polyhaven-com.md",
    "html": "cases/034-polyhaven-com.html"
  },
  {
    "num": 35,
    "name": "Beeple Everydays",
    "url": "https://beeple-crap.com/everydays",
    "section": "3D 与渲染",
    "key": "three",
    "desc": "数字艺术家 Beeple 从 2007 年 5 月 1 日那天起，逼自己每天做一张图传上网，结婚、生病、过年一天都没断过，就这么连着画了快二十年。你如果往前翻他头两年的图，会发现画得也挺糙的，但一页页往后翻，能亲眼看到一个普通人是怎么靠每天交作业硬生生把自己练成大神的。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://beeple-crap.com/everydays`。",
      "页面 `<title>`：`Everydays | BEEPLE`。",
      "页面 meta description：`A picture every day since May 1, 2007. Explore the Everydays project and artwork archive by Beeple.`。",
      "FetchURL 读到 Beeple Everydays 页面标题「Everydays | BEEPLE」。"
    ],
    "slug": "035-beeple-crap-com",
    "md": "../doctrinale/style-cases/035-beeple-crap-com.md",
    "html": "cases/035-beeple-crap-com.html"
  },
  {
    "num": 13,
    "name": "Motionographer",
    "url": "https://motionographer.com",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "动态设计圈办了快二十年的老牌网站。编辑挑片子的眼光很毒，平时不乱发水文，一旦更新基本都是值得反复拉片的好作品，还经常顺带放出工作室写的幕后制作手记。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://motionographer.com/`。",
      "页面 `<title>`：`Motionographer® Unexpected Inspiration™`。",
      "页面 meta description：`Motionographer shares inspiring work and important news for the Motion Design, animation and visual effects communities.`。"
    ],
    "slug": "013-motionographer-com",
    "md": "../doctrinale/style-cases/013-motionographer-com.md",
    "html": "cases/013-motionographer-com.html"
  },
  {
    "num": 15,
    "name": "Art of the Title",
    "url": "https://www.artofthetitle.com",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "专门研究电影、剧集和游戏「片头设计」的网站。它不光放高清片头视频，最下功夫的是长篇主创专访——把导演和设计师请来，把最初的草图、废稿、分镜脚本全摆出来，一步步讲这短短两分钟的片头是怎么磨出来的。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.artofthetitle.com/`。",
      "页面 `<title>`：`Art of the Title`。"
    ],
    "slug": "015-artofthetitle-com",
    "md": "../doctrinale/style-cases/015-artofthetitle-com.md",
    "html": "cases/015-artofthetitle-com.html"
  },
  {
    "num": 18,
    "name": "Short of the Week",
    "url": "https://www.shortoftheweek.com",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "专门推荐全球优秀独立短片的网站，实拍和动画都有。每部片子下面都配了一篇编辑写的正经影评，帮你拆解导演是怎么在十几分钟里立住人物、讲完一个好故事的。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.shortoftheweek.com/`。",
      "页面 `<title>`：`Short of the Week | The Best Short Films`。",
      "页面 meta description：`Watch the most innovative stories—Documentary, Comedy, Sci-fi, Horror, Experimental, Animation, Inspiration, Student films, Award winners & more short films`。"
    ],
    "slug": "018-shortoftheweek-com",
    "md": "../doctrinale/style-cases/018-shortoftheweek-com.md",
    "html": "cases/018-shortoftheweek-com.html"
  },
  {
    "num": 19,
    "name": "Directors Notes",
    "url": "https://directorsnotes.com",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "一个做独立导演访谈的博客。每次聊一部短片，问的问题都很实在：当时怎么凑的钱、现场用的什么机器和镜头、后期遇到了什么麻烦。自己平时接片子、拍东西的人看这个会很有共鸣。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://directorsnotes.com/`。",
      "页面 `<title>`：`Directors Notes // The Home of Independent Filmmaking`。",
      "页面 meta description：`Watch the world's best independent films and & discover how they were made: Animation, Live Action, Documentary, Music Video, Branded, Fashion, Experimental.`。"
    ],
    "slug": "019-directorsnotes-com",
    "md": "../doctrinale/style-cases/019-directorsnotes-com.md",
    "html": "cases/019-directorsnotes-com.html"
  },
  {
    "num": 20,
    "name": "Sakugabooru",
    "url": "https://www.sakugabooru.com",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "动画迷自己维护的「作画」片段库，存了 32 万多条从动画里剪出来的高光片段。每条都打好了标签：哪位原画师画的、出自哪部作品、是爆炸特效还是角色表演。想研究一个动作的节奏和弹性，搜标签就能拉出几百个片段逐帧看，做动画的人和用 AI 生成动作镜头的人都用得上。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.sakugabooru.com/`。",
      "页面 `<title>`：`sakugabooru`。",
      "页面 meta description：`sakugabooru - a booru dedicated to sakuga videos and images`。"
    ],
    "slug": "020-sakugabooru-com",
    "md": "../doctrinale/style-cases/020-sakugabooru-com.md",
    "html": "cases/020-sakugabooru-com.html"
  },
  {
    "num": 21,
    "name": "Promonews",
    "url": "https://www.promonews.tv",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "每天精选几支新出的 MV 和广告片，大多配着导演的创作说明：用什么机器拍的、为什么这么调色、某个镜头是怎么做出来的。MV 是风格化镜头、色彩和剪辑节奏最敢玩的地方，想找视觉风格参考，刷这里比在视频网站上大海捞针高效得多。下面这 5 个不是聚合站，而是业内公认最能打的 5 家工作室官网。把他们作品集里的片子下到本地，放进播放器里按方向键一帧一帧拆着看，比报什么进阶班都管用：",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.promonews.tv/`。",
      "页面 `<title>`：`Music video creativity everyday | Promonews`。",
      "页面 meta description：`Music video creativity every day. The latest, best and most inspiring music videos every day, interviews with music video directors, and much more. Your daily destination &amp;quot;if you&amp;#039;ve got the slightest interest in film or music&amp;quot; (Guardian Guide)`。"
    ],
    "slug": "021-promonews-tv",
    "md": "../doctrinale/style-cases/021-promonews-tv.md",
    "html": "cases/021-promonews-tv.html"
  },
  {
    "num": 22,
    "name": "BUCK",
    "url": "https://buck.co",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "BUCK：全球规模和名气最大的动态设计工作室之一，苹果、耐克、Meta 的常客。2D、3D、实拍结合全能，作品集大得像个博物馆。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://buck.co/`。",
      "页面 `<title>`：`BUCK`。",
      "页面 meta description：`BUCK is a global creative company that brings brands, stories, and experiences to life through art, design, and technology.`。"
    ],
    "slug": "022-buck-co",
    "md": "../doctrinale/style-cases/022-buck-co.md",
    "html": "cases/022-buck-co.html"
  },
  {
    "num": 23,
    "name": "ManvsMachine",
    "url": "https://mvsm.com",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "ManvsMachine：伦敦的顶尖创意工作室，尤其擅长做三维材质碰撞和硬核产品广告，画面的光影质感好到让人头皮发麻。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://mvsm.com/`。",
      "二次抓取超时；另由网页内容通道读到完整正文，见下条。",
      "FetchURL 读到 ManvsMachine 官网正文「ManvsMachine TM — Design & Direction Co.」及伦敦／洛杉矶工作室信息。"
    ],
    "slug": "023-mvsm-com",
    "md": "../doctrinale/style-cases/023-mvsm-com.md",
    "html": "cases/023-mvsm-com.html"
  },
  {
    "num": 24,
    "name": "Oddfellows",
    "url": "https://oddfellows.tv",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "Oddfellows：美国工作室，主打插画风和 2D 角色动画，配色极其舒服，镜头衔接和动作惯性做得丝滑无比。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机复核 HTTP 200；站点特定搜索有 Oddfellows 自身 /work 作品页内容。"
    ],
    "slug": "024-oddfellows-tv",
    "md": "../doctrinale/style-cases/024-oddfellows-tv.md",
    "html": "cases/024-oddfellows-tv.html"
  },
  {
    "num": 25,
    "name": "Golden Wolf",
    "url": "https://www.goldenwolf.tv",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "Golden Wolf：伦敦动画工作室，风格极好认——高饱和撞色、夸张的透视变形、快到飞起的剪辑节奏，满屏都是精力旺盛的街头卡通感。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.goldenwolf.tv/`。",
      "页面 `<title>`：`Golden Wolf`。",
      "页面 meta description：`Golden Wolf - Award-winning animation studio creating compelling content for global brands. Based in London and New York.`。"
    ],
    "slug": "025-goldenwolf-tv",
    "md": "../doctrinale/style-cases/025-goldenwolf-tv.md",
    "html": "cases/025-goldenwolf-tv.html"
  },
  {
    "num": 26,
    "name": "Ordinary Folk",
    "url": "https://www.ordinaryfolk.co",
    "section": "动态设计与视频",
    "key": "motion",
    "desc": "Ordinary Folk：温哥华的团队，专门把基础的 2D 几何图形玩出花来，运动曲线的弹性和节奏感拿捏得死死的。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.ordinaryfolk.co/`。",
      "页面 `<title>`：`Ordinary Folk – Motion Design & Animation Studio, Vancouver`。",
      "页面 meta description：`Vancouver motion design studio making motion graphics, explainer animation, brand videos, 2D and character animation for Google, Webflow and TED.`。"
    ],
    "slug": "026-ordinaryfolk-co",
    "md": "../doctrinale/style-cases/026-ordinaryfolk-co.md",
    "html": "cases/026-ordinaryfolk-co.html"
  },
  {
    "num": 38,
    "name": "StillsLab",
    "url": "https://stillslab.com",
    "section": "电影画面与镜头参考",
    "key": "cinema",
    "desc": "免费的影视截图库，电影、剧集、MV、广告都有，不付钱也能看全库。标签打得很细，可以按景别、机位角度、光线、色彩、日景夜景，甚至用的什么摄影机和镜头来筛，也能直接敲一句大白话描述画面去搜。每部片子的页面还会给出统计，比如《银翼杀手 2049》里夜景占 69%、柔光占 52%，研究一部片子的视觉配方特别方便。",
    "access": "免费可看",
    "free_basis": "原文明确写免费或完全免费开源。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://stillslab.com/`。",
      "页面 `<title>`：`StillsLab — Movie Stills & TV Show Frames for Filmmakers`。",
      "页面 meta description：`Discover high-quality movie stills, film frames & TV screenshots for filmmakers. Perfect for cinematography references, shot lists, and mood boards.`。"
    ],
    "slug": "038-stillslab-com",
    "md": "../doctrinale/style-cases/038-stillslab-com.md",
    "html": "cases/038-stillslab-com.html"
  },
  {
    "num": 39,
    "name": "Flim",
    "url": "https://flim.ai",
    "section": "电影画面与镜头参考",
    "key": "cinema",
    "desc": "接了 AI 语义搜索的影视截图库，除了电影还收了不少 MV 和商业广告。最好用的一点是不需要记片名，直接在搜索框里敲一句大白话（比如「一个人站在走廊尽头背光」或者「俯拍餐桌上的食物」），就能把各个片子里的类似镜头全搜出来。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://flim.ai/`。",
      "页面 `<title>`：`Flim | AI search engine for film stills and visual references`。",
      "页面 meta description：`Search over 2 million frames from films, series, ads and music videos by mood, colour or era. Build boards and generate cinematic images in one place.`。"
    ],
    "slug": "039-flim-ai",
    "md": "../doctrinale/style-cases/039-flim-ai.md",
    "html": "cases/039-flim-ai.html"
  },
  {
    "num": 40,
    "name": "EyeCannndy",
    "url": "https://eyecannndy.com",
    "section": "电影画面与镜头参考",
    "key": "cinema",
    "desc": "一个把「镜头语言和剪辑手法」做成动图词典的网站。看到好看的转场或运镜叫不出名字很正常，这里把匹配剪辑（Match Cut）、希区柯克变焦、鞭甩转场、第一人称视角等几十种常见技法全列了出来，点开一个词条，直接给你看五六个不同广告和MV里的动图实例。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://eyecannndy.com/`。",
      "页面 `<title>`：`Eyecandy - Visual Technique Library`。",
      "页面 meta description：`The visual technique library for visual technique lovers. Enjoy. Learn. Don`。"
    ],
    "slug": "040-eyecannndy-com",
    "md": "../doctrinale/style-cases/040-eyecannndy-com.md",
    "html": "cases/040-eyecannndy-com.html"
  },
  {
    "num": 41,
    "name": "StudioBinder 镜头语言指南",
    "url": "https://www.studiobinder.com/blog/ultimate-guide-to-camera-shots",
    "section": "电影画面与镜头参考",
    "key": "cinema",
    "desc": "一家做制片软件的公司写的系列教程，把景别、机位角度、运镜方式（推拉、摇移、甩镜头、环绕）一种一种讲清楚，每一种都配了电影里的实例。审美高度一般，但胜在系统、好查。用 AI 生成视频时，提示词里写「low angle」「dolly in」「whip pan」比写「拍得高级一点」管用得多，这些词在这里都能查到。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.studiobinder.com/blog/ultimate-guide-to-camera-shots/`。",
      "二次抓取超时；另由网页内容通道读到完整正文，见下条。",
      "FetchURL 读到「50+ Types of Camera Shots, Angles, and Techniques」及 shot size / framing / focus / angles / movement / equipment 正文。"
    ],
    "slug": "041-studiobinder-com",
    "md": "../doctrinale/style-cases/041-studiobinder-com.md",
    "html": "cases/041-studiobinder-com.html"
  },
  {
    "num": 42,
    "name": "American Cinematographer",
    "url": "https://theasc.com",
    "section": "电影画面与镜头参考",
    "key": "cinema",
    "desc": "美国电影摄影师协会（ASC）办了一百多年的杂志。上面的文章大多是摄影指导亲自讲一部片子：为什么选这套镜头、用的什么机器、主光从哪儿打、调色怎么定。截图库告诉你画面长什么样，这里告诉你为什么这么拍。不少文章在官网免费就能读全文。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到「Home - The ASC」及 2026 年文章。"
    ],
    "slug": "042-theasc-com",
    "md": "../doctrinale/style-cases/042-theasc-com.md",
    "html": "cases/042-theasc-com.html"
  },
  {
    "num": 48,
    "name": "Figma Community",
    "url": "https://www.figma.com/community",
    "section": "UI 设计",
    "key": "ui",
    "desc": "Figma 自带的开源社区。看别人的截图只能看个皮毛，在这里看到好的设计系统、大厂开源组件库或者排得漂亮的模板，点一下右上角的「Open in Figma」，整个源文件就直接进你草稿箱了。点开图层面板，别人怎么套的自动布局（Auto Layout）、怎么命名的颜色变量，一目了然。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.figma.com/community`。",
      "页面 `<title>`：`Human Verification`。"
    ],
    "slug": "048-figma-com",
    "md": "../doctrinale/style-cases/048-figma-com.md",
    "html": "cases/048-figma-com.html"
  },
  {
    "num": 49,
    "name": "Apple 人机界面指南（HIG",
    "url": "https://developer.apple.com/design/human-interface-guidelines",
    "section": "UI 设计",
    "key": "ui",
    "desc": "Apple 人机界面指南（HIG）苹果官方写给设计师和开发者的规范文档。遇到「底部导航栏该放几个图标」「手指点击热区最小留多少像素」「什么情况下该弹警告框」这种基础问题，不用在网上到处问人，直接翻苹果这套文档，里面把原因讲得明明白白。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://developer.apple.com/design/human-interface-guidelines`。",
      "页面 `<title>`：`Human Interface Guidelines | Apple Developer Documentation`。",
      "页面 meta description：`The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.`。"
    ],
    "slug": "049-developer-apple-com",
    "md": "../doctrinale/style-cases/049-developer-apple-com.md",
    "html": "cases/049-developer-apple-com.html"
  },
  {
    "num": 50,
    "name": "Material Design 3",
    "url": "https://m3.material.io",
    "section": "UI 设计",
    "key": "ui",
    "desc": "Google 的设计系统文档。就算你平时不做原生安卓应用，这套文档也极力推荐通读一遍。它把一套大厂设计系统是怎么定色阶、怎么算字号层级、怎么处理深色模式对比度、怎么定义组件悬停和按下状态的逻辑，毫无保留地全写出来了。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://m3.material.io/`。",
      "页面 `<title>`：`Material Design`。",
      "页面 meta description：`Material Design 3 - Google`。"
    ],
    "slug": "050-m3-material-io",
    "md": "../doctrinale/style-cases/050-m3-material-io.md",
    "html": "cases/050-m3-material-io.html"
  },
  {
    "num": 51,
    "name": "Vercel Web Interface Guidelines",
    "url": "https://vercel.com/design/guidelines",
    "section": "UI 设计",
    "key": "ui",
    "desc": "Vercel 整理的一份界面细节清单，交互、动画、布局、文案、表单、性能分门别类，每一条都是能直接照着检查的硬规矩，比如「手机上输入框字号不能小于 16px，不然 iOS 一点就会自动放大」「动画别偷懒写 transition: all」。最适合用 AI 写代码的人：页面上专门有一节教你接进 AI，给了现成的 AGENTS.md 和审查 skill，让 AI 写完界面后按清单逐条自查。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://vercel.com/design/guidelines`。",
      "页面 `<title>`：`Web Interface Guidelines`。",
      "页面 meta description：`Guidelines for building great interfaces on the web. Covers interactions, animations, layout, content, forms, performance & design.`。"
    ],
    "slug": "051-vercel-com",
    "md": "../doctrinale/style-cases/051-vercel-com.md",
    "html": "cases/051-vercel-com.html"
  },
  {
    "num": 52,
    "name": "Impeccable",
    "url": "https://impeccable.style",
    "section": "UI 设计",
    "key": "ui",
    "desc": "专门治「AI 味」的设计 skill。它把 AI 最爱用的默认套路列成了 62 项检查：米黄色的「AI 配色」、斜体衬线大标题、提示框左边一根彩色竖条、卡片里再套卡片、「01 Discover」这种编号小标题……装进 Claude Code、Cursor、Codex 之后，可以用它的命令让 AI 打磨排版、调布局、给自己的设计挑毛病。就算不装，把这份清单读一遍，也能一眼看出很多页面为什么透着廉价感。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://impeccable.style/`。",
      "页面 `<title>`：`Impeccable: The missing design vocabulary for agents`。",
      "页面 meta description：`Turn AI slop into interfaces you’re proud to ship. Give your agent the design expertise to build, refine, and follow your design system.`。"
    ],
    "slug": "052-impeccable-style",
    "md": "../doctrinale/style-cases/052-impeccable-style.md",
    "html": "cases/052-impeccable-style.html"
  },
  {
    "num": 53,
    "name": "The Component Gallery",
    "url": "https://component.gallery",
    "section": "UI 设计",
    "key": "ui",
    "desc": "一个专门把各家大厂「基础组件」拉出来同台比武的网站。比如你想研究一个最普通的「开关（Toggle）」或者「警告横幅（Alert）」，点进去，它会把苹果、谷歌、微软、Shopify、GitHub 等几十套设计系统里的对应组件截图和文档链接全列在一页上，写组件规范时拿来查漏补缺特别爽。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://component.gallery/`。",
      "页面 `<title>`：`The Component Gallery`。",
      "页面 meta description：`An up-to-date repository of interface components based on examples from the world of design systems, designed to be a reference for anyone building user interfaces.`。"
    ],
    "slug": "053-component-gallery",
    "md": "../doctrinale/style-cases/053-component-gallery.md",
    "html": "cases/053-component-gallery.html"
  },
  {
    "num": 54,
    "name": "60fps",
    "url": "https://60fps.design",
    "section": "UI 设计",
    "key": "ui",
    "desc": "专门收集「丝滑 UI 动效」的网站。里面全是高帧率录下来的真实应用交互片段，没有花里胡哨的废话，打开网页满屏都是各种极有手感的卡片展开、下拉刷新和页面过渡动效。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://60fps.design/`。",
      "页面 `<title>`：`60fps - UI/UX animation inspiration for mobile & web apps`。",
      "页面 meta description：`60fps is a curated collection of UI/UX animation and interaction design details from the world’s best iOS, and web apps.`。"
    ],
    "slug": "054-60fps-design",
    "md": "../doctrinale/style-cases/054-60fps-design.md",
    "html": "cases/054-60fps-design.html"
  },
  {
    "num": 55,
    "name": "Spotted in Prod",
    "url": "https://www.spottedinprod.com",
    "section": "UI 设计",
    "key": "ui",
    "desc": "专门抓拍海外已上线 iOS 应用里那些「让人眼前一亮的小细节」。全是几秒钟的实机操作短视频，比如某个按钮按下去时的微弱震动反馈视觉化、或者一段藏在设置页里的小彩蛋，很适合平时抠细节找灵感。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.spottedinprod.com/`。",
      "页面 `<title>`：`Spotted in Prod — The very best of iOS`。",
      "页面 meta description：`Spotted in Prod is a curated collection of standout iOS apps and interactions. Discover the makers behind the work—and download apps that do it right.`。"
    ],
    "slug": "055-spottedinprod-com",
    "md": "../doctrinale/style-cases/055-spottedinprod-com.md",
    "html": "cases/055-spottedinprod-com.html"
  },
  {
    "num": 56,
    "name": "Growth.Design",
    "url": "https://growth.design",
    "section": "UI 设计",
    "key": "ui",
    "desc": "Growth.Design两个产品设计师做的网站，专门用「连环画」的形式拆解知名 App 的真实体验。比如他们会像普通用户一样去走一遍 Duolingo 的新手引导，或者去订一次 Airbnb，然后一页页画出来：这一步文案为什么能让人安心付钱，下一步弹窗又为什么会把人吓跑。既好玩又有干货。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://growth.design/`。",
      "页面 `<title>`：`Growth.Design — Better Products, Better Growth.`。",
      "页面 meta description：`Level up your product skills with bite-sized tips. Learn the growth & design strategies used by the top product companies in the world.`。"
    ],
    "slug": "056-growth-design",
    "md": "../doctrinale/style-cases/056-growth-design.md",
    "html": "cases/056-growth-design.html"
  },
  {
    "num": 57,
    "name": "Laws of UX",
    "url": "https://lawsofux.com",
    "section": "UI 设计",
    "key": "ui",
    "desc": "把交互设计里常被拿来装门面的心理学定律（比如菲茨定律、希克定律、米勒定律、峰终定律），浓缩成了二十几张干净的图文卡片。每点开一张，用三句话告诉你这定律是什么意思、最早是谁提出来的、落到具体界面设计上该注意什么。写改版方案需要找理论依据时，上去翻一下很快。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://lawsofux.com/`。",
      "页面 `<title>`：`Home | Laws of UX`。",
      "页面 og:description：`Laws of UX is a collection of best practices that designers can consider when building user interfaces.`。"
    ],
    "slug": "057-lawsofux-com",
    "md": "../doctrinale/style-cases/057-lawsofux-com.md",
    "html": "cases/057-lawsofux-com.html"
  },
  {
    "num": 58,
    "name": "Game UI Database",
    "url": "https://www.gameuidatabase.com",
    "section": "UI 设计",
    "key": "ui",
    "desc": "一个规模吓人的游戏界面截图库，收了将近 2000 款主机与 PC 游戏、7 万多张高清截图。最牛的是它按 UI 功能做好了分类：你可以直接搜所有游戏里的「捏脸界面」「装备背包」「技能树」「任务弹窗」或「死亡结算画面」。哪怕不做游戏，去看看游戏设计师是怎么在极度复杂的信息量下排好视觉层级的，也相当涨见识。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到「Game UI Database 2.0 | Welcome」。"
    ],
    "slug": "058-gameuidatabase-com",
    "md": "../doctrinale/style-cases/058-gameuidatabase-com.md",
    "html": "cases/058-gameuidatabase-com.html"
  },
  {
    "num": 59,
    "name": "Recent（原 Godly",
    "url": "https://recent.design",
    "section": "网页灵感",
    "key": "web",
    "desc": "Recent（原 Godly）以前网页设计师几乎人手一个书签的 Godly（godly.website），现在输入原网址会直接跳转到这个新站 Recent。它保留了以前那种不用点进原网站、直接在缩略图上就能看高清滚动录屏的爽快体验，同时还把收录范围扩到了产品宣传片、App 图标、品牌视觉和海报。想看眼下海外独立开发者和科技公司最流行什么网页风向，刷它就对了。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://recent.design/`。",
      "页面 `<title>`：`Recent — Design Inspiration`。",
      "页面 meta description：`The best design inspiration on the Internet.`。"
    ],
    "slug": "059-recent-design",
    "md": "../doctrinale/style-cases/059-recent-design.md",
    "html": "cases/059-recent-design.html"
  },
  {
    "num": 60,
    "name": "Siteinspire",
    "url": "https://www.siteinspire.com",
    "section": "网页灵感",
    "key": "web",
    "desc": "办了十来年的老牌网页灵感库，攒了几千个站。它的筛选器做得很好用，可以把「视觉风格（如网格、极简、大字报）」「网站类型（如作品集、电商）」和「所属行业（如建筑、时尚）」叠在一起筛。整体选品眼光很克制，很少收那种眼花缭乱的炫技站，全是耐看的排版。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到「Siteinspire | A showcase of the web’s finest design + talent」。"
    ],
    "slug": "060-siteinspire-com",
    "md": "../doctrinale/style-cases/060-siteinspire-com.md",
    "html": "cases/060-siteinspire-com.html"
  },
  {
    "num": 61,
    "name": "Land-book",
    "url": "https://land-book.com",
    "section": "网页灵感",
    "key": "web",
    "desc": "专门收落地页（Landing Page）的图库。除了产品首页，里面也单独分出了定价页（Pricing）、关于我们、个人简历页的合集，做常规商业网站很实用。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://land-book.com/`。",
      "页面 `<title>`：`Landbook - website design inspiration gallery`。",
      "页面 meta description：`Find the best hand-picked website design inspiration. We're a curated website design gallery for Creatives, updated daily.`。"
    ],
    "slug": "061-land-book-com",
    "md": "../doctrinale/style-cases/061-land-book-com.md",
    "html": "cases/061-land-book-com.html"
  },
  {
    "num": 63,
    "name": "awesome-design-md",
    "url": "https://github.com/VoltAgent/awesome-design-md",
    "section": "网页灵感",
    "key": "web",
    "desc": "GitHub 上的一个开源合集，把 Stripe、Linear、Vercel、Apple 这些公认好看的网站，各自的配色、字体、间距和组件风格整理成一份 DESIGN.md 文件。把它放进你的项目里，AI 就会照着这个品牌的规矩来生成界面，比你自己描述「我要 Linear 那种感觉」靠谱得多。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://github.com/VoltAgent/awesome-design-md`。",
      "页面 `<title>`：`GitHub - VoltAgent/awesome-design-md: A collection of DESIGN.md files analysis by popular brand design systems. Drop one into your project and let coding agents generate a matching UI. · GitHub`。",
      "页面 meta description：`A collection of DESIGN.md files analysis by popular brand design systems. Drop one into your project and let coding agents generate a matching UI. - VoltAgent/awesome-design-md`。"
    ],
    "slug": "063-github-com",
    "md": "../doctrinale/style-cases/063-github-com.md",
    "html": "cases/063-github-com.html"
  },
  {
    "num": 64,
    "name": "One Page Love",
    "url": "https://onepagelove.com",
    "section": "网页灵感",
    "key": "web",
    "desc": "专门收集「单页网站」的网站。有些小产品、线下活动或者个人主页，根本撑不起好几个频道的导航栏，去这儿看看别人是怎么在一页从上滑到下的篇幅里，把事情讲得清清楚楚又有节奏感的。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://onepagelove.com/`。",
      "页面 `<title>`：`One Page Love — One Page Website Inspiration and Templates`。",
      "页面 meta description：`One Page Love is a One Page website design gallery showcasing the best Single Page websites, templates and resources.`。"
    ],
    "slug": "064-onepagelove-com",
    "md": "../doctrinale/style-cases/064-onepagelove-com.md",
    "html": "cases/064-onepagelove-com.html"
  },
  {
    "num": 66,
    "name": "Dark Mode Design",
    "url": "https://www.darkmodedesign.com",
    "section": "网页灵感",
    "key": "web",
    "desc": "全网只收「深色模式」网页的图库。很多人做黑底网页容易要么漆黑一片分不清主次，要么发光特效加太多显得廉价。去这儿翻翻成熟案例，看看纯黑、深灰怎么拉开卡片层级，文字和细线边框该把透明度压到多少才不刺眼。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.darkmodedesign.com/`。",
      "页面 `<title>`：`Dark Mode Design 🌘 Handpicked website inspiration`。",
      "页面 meta description：`Dark Mode Design is a showcase of beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy.`。"
    ],
    "slug": "066-darkmodedesign-com",
    "md": "../doctrinale/style-cases/066-darkmodedesign-com.md",
    "html": "cases/066-darkmodedesign-com.html"
  },
  {
    "num": 67,
    "name": "Hoverstat.es",
    "url": "https://www.hoverstat.es",
    "section": "网页灵感",
    "key": "web",
    "desc": "Hoverstat.es专门收录「怪网站」的地方。里面基本看不到正经的商业公司官网，全是独立艺术家、先锋设计工作室、地下乐队或者实验建筑师的主页。导航栏藏在奇怪的地方、鼠标滑过去满屏乱飞——当你觉得现在的网页全都长一个样、看腻了套路的时候，去这儿逛逛会非常解闷。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.hoverstat.es/`。",
      "页面 `<title>`：`HOVERSTAT.ES | The home of alternative web-design.`。",
      "页面 meta description：`The home of alternative design, code and content on the world wide web.`。"
    ],
    "slug": "067-hoverstat-es",
    "md": "../doctrinale/style-cases/067-hoverstat-es.md",
    "html": "cases/067-hoverstat-es.html"
  },
  {
    "num": 68,
    "name": "Web Design Museum",
    "url": "https://www.webdesignmuseum.org",
    "section": "网页灵感",
    "key": "web",
    "desc": "一个正儿八经的「网页设计历史博物馆」。站长把 1991 年到 2006 年之间几千个古早网站的截图全存了下来——你能看到 1997 年的苹果官网长什么样、千禧年前后的雅虎门户排得有多密，以及当年红极一时的拟物化按钮和 Flash 酷站。除了怀旧，现在很多潮牌爱玩的千禧年复古风（Y2K），来这儿直接就能翻到最纯正的一手史料。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到「Web Design Museum – Discover old websites, apps, software & Flash Games」。"
    ],
    "slug": "068-webdesignmuseum-org",
    "md": "../doctrinale/style-cases/068-webdesignmuseum-org.md",
    "html": "cases/068-webdesignmuseum-org.html"
  },
  {
    "num": 69,
    "name": "Codrops",
    "url": "https://tympanus.net/codrops",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "做创意前端的人必存的宝地。这个站常年分享各种能在 Awwwards 上拿奖的前端特效教程：WebGL 图片扭曲、丝滑的页面无刷新过渡、跟着滚动条变形的文字网格。最良心的是每一篇文章不仅把实现思路一步步讲清楚，还直接附上在线 Demo 和 GitHub 源码仓库。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://tympanus.net/codrops/`。",
      "页面 `<title>`：`Codrops | Fueling web creativity since 2009`。",
      "页面 meta description：`Explore the latest web design and frontend development trends with tutorials, demos, and creative coding resources.`。"
    ],
    "slug": "069-tympanus-net",
    "md": "../doctrinale/style-cases/069-tympanus-net.md",
    "html": "cases/069-tympanus-net.html"
  },
  {
    "num": 70,
    "name": "CodePen Spark",
    "url": "https://codepen.io/spark",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "CodePen 编辑部每周整理一次的创意代码合集。里面全是世界各地的前端用几百行 CSS、SVG 或 Canvas 写出来的小玩具。看中哪个效果，点进去左边就是 HTML/CSS/JS 源码框，随手改两个数字，右边画面当场就跟着变，拿来练手再好不过。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "站点特定搜索返回 CodePen Spark /310、/492、/453 等站点自身页面内容；本机 curl 为 403，按站点自身页面证据保留。"
    ],
    "slug": "070-codepen-io",
    "md": "../doctrinale/style-cases/070-codepen-io.md",
    "html": "cases/070-codepen-io.html"
  },
  {
    "num": 71,
    "name": "GSAP 官方 Demo 库",
    "url": "https://demos.gsap.com",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "网页动画老大哥 GSAP（GreenSock）的官方示例库，一百多个效果按滚动、文字、悬停、鼠标跟随、轮播分好了类，每个都附 CodePen 源码。以前 GSAP 很多最好用的高级插件（比如做滚动绑定的 ScrollTrigger、拆字动画的 SplitText）是要掏钱买会员的，被 Webflow 收购之后，现在连带所有商业插件全部免费开放了。看中哪个效果，把源码直接丢给 AI 改，非常香。",
    "access": "免费可看",
    "free_basis": "原文写「现在连带所有商业插件全部免费开放了」。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://demos.gsap.com/`。",
      "页面 `<title>`：`GSAP Demo Hub`。",
      "页面 meta description：`A growing collection of interactive demos and examples. Learn, explore, and see what’s possible with GSAP.`。"
    ],
    "slug": "071-demos-gsap-com",
    "md": "../doctrinale/style-cases/071-demos-gsap-com.md",
    "html": "cases/071-demos-gsap-com.html"
  },
  {
    "num": 72,
    "name": "Three.js 官方示例",
    "url": "https://threejs.org/examples",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "想在浏览器里做 3D 效果，基本绕不开 Three.js。不用到处找野路子教程，先把官方这几百个在线 Demo 挨个点开看一遍——小到加载一个带骨骼动画的模型，大到海洋水面反射、物理碰撞、后期辉光通道，所有效果右下角都有个「源码」按钮，点开就是最标准的官方写法。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://threejs.org/examples/`。",
      "页面 `<title>`：`three.js examples`。"
    ],
    "slug": "072-threejs-org",
    "md": "../doctrinale/style-cases/072-threejs-org.md",
    "html": "cases/072-threejs-org.html"
  },
  {
    "num": 73,
    "name": "Shadertoy",
    "url": "https://www.shadertoy.com",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "图形学大神炫技的地方。这个网站里的所有酷炫画面——不管是翻滚的体积云、逼真的水波折射，还是一整座霓虹闪烁的立体城市，全都不靠导入外部图片或 3D 模型，纯粹是用几百行数学公式（GLSL 着色器代码）在显卡里实时算出来的。网页右边直接放着源码，虽然满屏三角函数看着头大，但想做流体背景或研究图形学的人绝对绕不开。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "站点特定搜索返回 Shadertoy /browse、/results、/terms、/view 等站点自身页面内容；本机 curl 为 403，按站点自身页面证据保留。"
    ],
    "slug": "073-shadertoy-com",
    "md": "../doctrinale/style-cases/073-shadertoy-com.md",
    "html": "cases/073-shadertoy-com.html"
  },
  {
    "num": 74,
    "name": "The Book of Shaders",
    "url": "https://thebookofshaders.com",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "如果你点开上面的 Shadertoy 觉得像在看天书，那就先来读这本免费的在线互动教程（自带中文版）。作者把枯燥的片元着色器（Fragment Shaders）掰碎了，从怎么用一条数学公式画出一条线、一个圆、再到生成噪波纹理，每一段代码都可以直接在文章里边改数字边看图案变化，是公认最好的 Shader 启蒙书。",
    "access": "免费可看",
    "free_basis": "原文明确写免费或完全免费开源。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://thebookofshaders.com/`。",
      "页面 `<title>`：`The Book of Shaders`。",
      "页面 meta description：`Gentle step-by-step guide through the abstract and complex universe of Fragment Shaders.`。"
    ],
    "slug": "074-thebookofshaders-com",
    "md": "../doctrinale/style-cases/074-thebookofshaders-com.md",
    "html": "cases/074-thebookofshaders-com.html"
  },
  {
    "num": 75,
    "name": "Bruno Simon",
    "url": "https://bruno-simon.com",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "法国开发者 Bruno Simon 的个人主页。别人的简历是一页 PDF，他的简历是让你在浏览器里直接开着一辆玩具车，在 3D 沙盘里横冲直撞，撞倒路牌就能看他的工作经历和项目。他写的《Three.js Journey》也是目前把 Web 3D 讲得最透彻的课程之一。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://bruno-simon.com/`。",
      "页面 `<title>`：`Bruno's`。",
      "页面 meta description：`Bruno Simon`。"
    ],
    "slug": "075-bruno-simon-com",
    "md": "../doctrinale/style-cases/075-bruno-simon-com.md",
    "html": "cases/075-bruno-simon-com.html"
  },
  {
    "num": 76,
    "name": "Lusion",
    "url": "https://lusion.co",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "英国一家专门接高定创意开发的工作室。他们自己的官网本身就是目前 WebGL 网页交互的天花板之一——从页面加载、滚轮阻尼、三维粒子转场到音效配合，没有一帧是卡顿或多余的，值得每个前端打开慢慢观摩。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://lusion.co/`。",
      "页面 `<title>`：`Lusion - Award Winning 3D and Interactive Web Studio`。",
      "页面 meta description：`We design and produce 3D visual storytelling, immersive websites, and interactive digital experiences that help brands stand out online.`。"
    ],
    "slug": "076-lusion-co",
    "md": "../doctrinale/style-cases/076-lusion-co.md",
    "html": "cases/076-lusion-co.html"
  },
  {
    "num": 77,
    "name": "Active Theory",
    "url": "https://activetheory.net",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "美国顶尖的数字互动工作室。像好几届 Google I/O 大会的线上互动体验、早几年 Spotify 年度听歌报告（Wrapped）的互动页，很多大厂刷屏级的技术营销项目背后都是他们在写代码。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://activetheory.net/`。",
      "页面 `<title>`：`Active Theory · Creative Digital Experiences`。",
      "页面 meta description：`Founded in 2012. We blend story, art & technology as an in-house team of passionate makers. Our industry-leading web toolset consistently delivers award-winning work through quality & performance.`。"
    ],
    "slug": "077-activetheory-net",
    "md": "../doctrinale/style-cases/077-activetheory-net.md",
    "html": "cases/077-activetheory-net.html"
  },
  {
    "num": 78,
    "name": "Framer Gallery",
    "url": "https://www.framer.com/gallery",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "Framer 官方挑出来的优秀网站合集。Framer 的操作界面跟 Figma 几乎一模一样，但画完点一下发布就是个带真实代码的响应式网站。去这个画廊逛一圈，你就能知道现在一个不懂代码的设计师，单靠拖拽和自带组件能把网站动效做到什么程度。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.framer.com/community/gallery/`。",
      "页面 `<title>`：`Framer Gallery: Explore the best websites built with Framer`。",
      "页面 meta description：`Get inspired by the best website design on the internet, then build your own with Framer's agent, directly on the canvas, and submit it to the Framer Website Design Gallery.`。"
    ],
    "slug": "078-framer-com",
    "md": "../doctrinale/style-cases/078-framer-com.md",
    "html": "cases/078-framer-com.html"
  },
  {
    "num": 80,
    "name": "React Bits",
    "url": "https://reactbits.dev",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "一个完全免费开源的 React 动画组件小超市。里面全是现成封装好的视觉小零件：文字乱码浮现、鼠标磁性吸附按钮、流光卡片边框、动态流体背景。左边调好速度、颜色参数，右边直接复制代码贴进自己项目里，五分钟就能让干巴巴的页面活起来。",
    "access": "免费可看",
    "free_basis": "原文明确写免费或完全免费开源。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://reactbits.dev/`。",
      "页面 `<title>`：`React Bits — Free Animated React Components`。",
      "页面 meta description：`Free, open source React components for animated text, backgrounds, interactive cards and micro interactions. Explore live demos and copy the source.`。"
    ],
    "slug": "080-reactbits-dev",
    "md": "../doctrinale/style-cases/080-reactbits-dev.md",
    "html": "cases/080-reactbits-dev.html"
  },
  {
    "num": 81,
    "name": "coss ui",
    "url": "https://coss.com/ui",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "开源日程工具Cal.com自家的设计系统，前身是不少人收藏过的 Origin UI。基于 Tailwind 写的，五十多个基础组件加五百多个现成的小模块，MIT 协议随便用。它的风格很克制，看着就像一个认真打磨过的真实产品，而不是又一个「深色背景 + 发光边框 + 光束特效」的 AI 创业公司官网。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://coss.com/ui`。",
      "页面 `<title>`：`A modern React UI component library – coss ui`。",
      "页面 meta description：`Accessible React components we use to build Cal.com, powered by Base UI and styled with Tailwind CSS. Designed for developers and AI, with source code you can make your own.`。"
    ],
    "slug": "081-coss-com",
    "md": "../doctrinale/style-cases/081-coss-com.md",
    "html": "cases/081-coss-com.html"
  },
  {
    "num": 82,
    "name": "Josh W. Comeau",
    "url": "https://www.joshwcomeau.com",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "前端开发者 Josh Comeau 的博客。他讲 CSS 布局、弹簧动画、SVG 路径，不是干巴巴地贴代码，而是在文章里塞满能拖、能调参数的交互小图解，拖一下滑块你就明白为什么这条曲线看着更舒服。文章免费，进阶课程收费。原理看懂了，再让 AI 写动效时你才知道该提什么要求。",
    "access": "免费可看",
    "free_basis": "原文写「文章免费，进阶课程收费」；文章可免费阅读。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.joshwcomeau.com/`。",
      "页面 `<title>`：`Josh W. Comeau`。",
      "页面 meta description：`Friendly articles and tutorials for front-end web developers. ❤️`。"
    ],
    "slug": "082-joshwcomeau-com",
    "md": "../doctrinale/style-cases/082-joshwcomeau-com.md",
    "html": "cases/082-joshwcomeau-com.html"
  },
  {
    "num": 83,
    "name": "Rauno Freiberg",
    "url": "https://rauno.me",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "目前在 Vercel 担任设计工程师的 Rauno 的个人网站。强烈建议把他站里那篇《Invisible Details of Interaction Design》（交互设计中看不见的细节）从头到尾读一遍。他用十几个可以亲手点按的交互小组件，把「为什么苹果系统的滑动停下来那么自然」「下拉菜单怎么根据鼠标移动斜率防误触」这种藏在水面下的工程细节讲得明明白白。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://rauno.me/`。",
      "页面 `<title>`：`Rauno Freiberg`。"
    ],
    "slug": "083-rauno-me",
    "md": "../doctrinale/style-cases/083-rauno-me.md",
    "html": "cases/083-rauno-me.html"
  },
  {
    "num": 84,
    "name": "Emil Kowalski",
    "url": "https://emilkowal.ski",
    "section": "前端与交互",
    "key": "frontend",
    "desc": "很多前端都在用的开源提示框组件 Sonner 和抽屉组件 Vaul 的作者，之前在 Linear 做设计工程师。他的博客文章篇幅都不长，但全在死磕一个问题：怎么让界面动画显得「克制又跟手」。比如弹窗到底该用多少毫秒、什么情况下绝对不要加动画，读完能改掉不少乱加动效的坏毛病。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://emilkowal.ski/`。",
      "页面 `<title>`：`Emil Kowalski`。",
      "页面 meta description：`Design engineer working at Linear.`。"
    ],
    "slug": "084-emilkowal-ski",
    "md": "../doctrinale/style-cases/084-emilkowal-ski.md",
    "html": "cases/084-emilkowal-ski.html"
  },
  {
    "num": 85,
    "name": "Typewolf",
    "url": "https://www.typewolf.com",
    "section": "字体与配色",
    "key": "type",
    "desc": "海外排版圈公认最靠谱的字体指南网站。站长是个对字体极度挑剔的设计师，以前每天推荐一个把字体用得极好看的真实网站，并标出它主标题和正文分别用了什么字（2025 年底之后就没再更新了，但攒下的案例和榜单照样能翻）。此外，网站里整理的「十佳无衬线体」「Google Fonts 最佳搭配方案」含金量极高，做英文或中西混排页面拿不准用什么字体时，去翻它的榜单绝对不会出错。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.typewolf.com/`。",
      "页面 `<title>`：`What’s Trending in Type · Typewolf`。",
      "页面 meta description：`Typewolf helps designers choose the perfect font combination for their next design project—features web fonts in the wild, font recommendations and learning resources.`。"
    ],
    "slug": "085-typewolf-com",
    "md": "../doctrinale/style-cases/085-typewolf-com.md",
    "html": "cases/085-typewolf-com.html"
  },
  {
    "num": 86,
    "name": "Fonts In Use",
    "url": "https://fontsinuse.com",
    "section": "字体与配色",
    "key": "type",
    "desc": "一个靠全球设计师共同维护的「字体实战档案馆」。它不卖字库，专门收集现实世界里的海报、书籍封面、唱片封套、路牌、网页截图，然后像法医一样把里面用到的每一款字体名字全扒出来标在旁边。你想知道某款字体印在纸上或排在网页上到底是什么气质，搜一下它里面的真实案例就清楚了。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://fontsinuse.com/`。",
      "页面 `<title>`：`Fonts In Use - Fonts In Use`。",
      "页面 meta description：`A searchable archive of typographic design, indexed by typeface, format, and topic.`。"
    ],
    "slug": "086-fontsinuse-com",
    "md": "../doctrinale/style-cases/086-fontsinuse-com.md",
    "html": "cases/086-fontsinuse-com.html"
  },
  {
    "num": 88,
    "name": "Fontshare",
    "url": "https://www.fontshare.com",
    "section": "字体与配色",
    "key": "type",
    "desc": "印度知名字体大厂 ITF 办的免费字库网站。上面的字体虽然数量没有 Google Fonts 那么夸张，但款款都是精品，而且承诺 100% 免费供个人和商业项目使用。像这两年在海外独立网页和科技圈出镜率极高的几何无衬线体 Satoshi、标题字 Clash Display、General Sans，全是从这儿免费流出来的。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.fontshare.com/`。",
      "页面 `<title>`：`Fontshare: Quality Fonts. Free.`。",
      "页面 meta description：`Fontshare is a free fonts service from the Indian Type Foundry (ITF), making quality fonts accessible to all.`。"
    ],
    "slug": "088-fontshare-com",
    "md": "../doctrinale/style-cases/088-fontshare-com.md",
    "html": "cases/088-fontshare-com.html"
  },
  {
    "num": 89,
    "name": "Butterick's Practical Typography",
    "url": "https://practicaltypography.com",
    "section": "字体与配色",
    "key": "type",
    "desc": "一本写得极其痛快的免费在线排版小书。作者既写过代码又当过职业字体设计师，书里没有任何故弄玄虚的艺术理论，上来就用「10 分钟掌握排版核心」一章直接给你划硬指标：正文一行控制在多少个字母最舒服、行高设多少倍、为什么绝对不要随便拉宽字间距。哪怕只读完这第一章，你排出来的文档和网页都会立马顺眼一大截。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到「Butterick’s Practical Typography」。"
    ],
    "slug": "089-practicaltypography-com",
    "md": "../doctrinale/style-cases/089-practicaltypography-com.md",
    "html": "cases/089-practicaltypography-com.html"
  },
  {
    "num": 90,
    "name": "Utopia",
    "url": "https://utopia.fyi",
    "section": "字体与配色",
    "key": "type",
    "desc": "很多新手画页面时，大标题设 32px、小标题设 22px、正文设 14px，全是拍脑袋瞎填的，最后页面看着毫无秩序。这个小工具就是帮你按「数学比例」定字号的：分别填好手机和电脑上的正文字号，再选一个缩放倍率（比如大三度 1.250），它自动算出一整套会随屏幕宽度平滑缩放的字号变量，间距也能一起算。免费、不用注册，生成的 CSS 复制下来就能用，也可以直接丢给 AI 当排版规范。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://utopia.fyi/`。",
      "页面 `<title>`：`Fluid Responsive Design | Utopia`。",
      "页面 meta description：`Fluid responsive design`。"
    ],
    "slug": "090-utopia-fyi",
    "md": "../doctrinale/style-cases/090-utopia-fyi.md",
    "html": "cases/090-utopia-fyi.html"
  },
  {
    "num": 91,
    "name": "Coolors",
    "url": "https://coolors.co",
    "section": "字体与配色",
    "key": "type",
    "desc": "最好用的傻瓜式配色工具。打开网页什么都不用设置，直接敲键盘空格键，屏幕上就会随机刷出一组五色卡；看到顺眼的颜色点一下锁头把它锁死，再继续敲空格，算法就会自动围绕你锁住的颜色去配剩下的颜色。支持一键模拟色盲用户眼里的画面，还能直接把色卡导出成图片或代码。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到「Coolors - The super fast color palettes generator!」。"
    ],
    "slug": "091-coolors-co",
    "md": "../doctrinale/style-cases/091-coolors-co.md",
    "html": "cases/091-coolors-co.html"
  },
  {
    "num": 92,
    "name": "Realtime Colors",
    "url": "https://www.realtimecolors.com",
    "section": "字体与配色",
    "key": "type",
    "desc": "存了一堆好看的五色卡，真到画页面时还是抓瞎——不知道哪个色填背景、哪个色涂按钮、哪个色写正文。这个工具解决的就是这个痛点：你可以在底部工具栏自己挑（或者随机摇出）文字色、背景色、主色、次色和强调色，上面的标准落地页和后台图表会实时跟着变色，还能随时点一下太阳/月亮图标看这套颜色切到深色模式会不会翻车。调好之后能直接导出 Tailwind 配置、CSS 变量，或者用它的同名插件一键同步进 Figma。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.realtimecolors.com/`。",
      "页面 `<title>`：`Realtime Colors`。",
      "页面 meta description：`Visualize your colors and fonts on a real website.`。"
    ],
    "slug": "092-realtimecolors-com",
    "md": "../doctrinale/style-cases/092-realtimecolors-com.md",
    "html": "cases/092-realtimecolors-com.html"
  },
  {
    "num": 93,
    "name": "Radix Colors",
    "url": "https://www.radix-ui.com/colors",
    "section": "字体与配色",
    "key": "type",
    "desc": "开源组件库 Radix 配套的一整套界面配色。它给的不是几组好看的色卡，而是把每种颜色拆成 12 级，并且规定好了每一级干什么用：哪几级当背景、哪几级给按钮悬停、哪几级画边框、哪几级写文字，深色模式也一并配好了。照着这套规矩用色，页面很难乱；跟 AI 说一句「颜色按 Radix 的 12 级来用」，也比说「配色高级一点」管用。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.radix-ui.com/colors`。",
      "页面 `<title>`：`Radix Colors`。",
      "页面 meta description：`An open-source color system for designing beautiful, accessible websites and apps.`。"
    ],
    "slug": "093-radix-ui-com",
    "md": "../doctrinale/style-cases/093-radix-ui-com.md",
    "html": "cases/093-radix-ui-com.html"
  },
  {
    "num": 94,
    "name": "tweakcn",
    "url": "https://tweakcn.com",
    "section": "字体与配色",
    "key": "type",
    "desc": "现在用 AI 写前端，很多人用的都是 shadcn/ui 这套组件，结果就是满大街的网站长得一模一样——这也是作者做它的原因。tweakcn 是给 shadcn 换皮的可视化编辑器：颜色、字体、圆角、阴影在左边调，右边的卡片、表单、仪表盘实时变样，还有一堆预设主题可以直接套，调满意了导出主题代码贴进项目就行。免费开源。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://tweakcn.com/`。",
      "页面 `<title>`：`Beautiful themes for shadcn/ui — tweakcn | Theme Editor & Generator`。",
      "页面 meta description：`Customize theme for shadcn/ui with tweakcn's interactive editor. Supports Tailwind CSS v4, Shadcn UI, and custom styles. Modify properties, preview changes, and get the code in real time.`。"
    ],
    "slug": "094-tweakcn-com",
    "md": "../doctrinale/style-cases/094-tweakcn-com.md",
    "html": "cases/094-tweakcn-com.html"
  },
  {
    "num": 96,
    "name": "Are.na",
    "url": "https://www.are.na",
    "section": "日常收集灵感",
    "key": "daily",
    "desc": "Are.na设计圈里很多极客、建筑师和独立撰稿人偏爱的资料收集工具。它长得非常素，没有广告、没有算法信息流、甚至连「点赞数」都没有。你可以建不同的频道（Channel），把图片、PDF 文献、网页链接、随手记的一段话塞进去，还能把自己的频道跟全世界其他人的公开频道串联起来。很适合安安静静攒某个特定课题的研究资料。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.are.na/`。",
      "页面 `<title>`：`Are.na`。",
      "页面 meta description：`Are.na is a platform for connecting ideas and building knowledge.`。"
    ],
    "slug": "096-are-na",
    "md": "../doctrinale/style-cases/096-are-na.md",
    "html": "cases/096-are-na.html"
  },
  {
    "num": 97,
    "name": "Cosmos",
    "url": "https://www.cosmos.so",
    "section": "日常收集灵感",
    "key": "daily",
    "desc": "这两年在海外设计师圈子里蹿红的新一代灵感收藏夹。装上它的浏览器插件，平时在推特或任何网站上看到好图、好视频，右键一下就能收进自己的空间。它的界面排版极其干净，而且因为早期用户大多是审美在线的创意人，直接在它的发现页（Discover）里逛别人公开的收藏夹，图片质量非常高。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://www.cosmos.so/`。",
      "页面 `<title>`：`Cosmos`。",
      "页面 meta description：`Your space for inspiration`。"
    ],
    "slug": "097-cosmos-so",
    "md": "../doctrinale/style-cases/097-cosmos-so.md",
    "html": "cases/097-cosmos-so.html"
  },
  {
    "num": 98,
    "name": "Savee",
    "url": "https://savee.com",
    "section": "日常收集灵感",
    "key": "daily",
    "desc": "专门做给视觉设计师看的极简图片社区。打开网站连多余的文字标题都没有，满屏就是干干净净的高清大图瀑布流。上面沉淀的内容非常纯粹，基本集中在平面排版、品牌包装、先锋摄影、字体设计和工业造型，想找高级感平面参考时，来这儿刷比去综合平台效率高得多。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "本机 curl：HTTP 200，最终地址 `https://savee.com/`。",
      "页面 `<title>`：`Savee`。",
      "页面 meta description：`Savee is a curated place for visual inspiration. Discover references chosen by designers, collect what matters, and build a sharper eye without ads or clutter.`。"
    ],
    "slug": "098-savee-com",
    "md": "../doctrinale/style-cases/098-savee-com.md",
    "html": "cases/098-savee-com.html"
  },
  {
    "num": 99,
    "name": "It's Nice That",
    "url": "https://www.itsnicethat.com",
    "section": "日常收集灵感",
    "key": "daily",
    "desc": "伦敦办了很多年的创意文化媒体。每天更新几篇短文章，聊全球各地最新的插画、平面、动画、摄影项目。它好看的地方在于不光贴图，编辑很会挖创作者背后的好玩故事——比如这个奇怪的字体是怎么因为一次印刷失误弄出来的、那支荒诞的短片导演当时在想什么。很适合当午饭时的电子榨菜。",
    "access": "免费可看",
    "free_basis": "原文未标注付费；按清单中免费可看案例收录。",
    "verification": [
      "FetchURL 读到「It’s Nice That」及「Ones to Watch 2026」。"
    ],
    "slug": "099-itsnicethat-com",
    "md": "../doctrinale/style-cases/099-itsnicethat-com.md",
    "html": "cases/099-itsnicethat-com.html"
  }
];
