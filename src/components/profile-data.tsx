import ExtLink from './ext-link'
import React from 'react'

// define the profile types
type ProfileValue = string | React.ReactNode | any[]
class MultiLang {
  en: ProfileValue
  ja: ProfileValue
}
export type Profile = MultiLang | ProfileValue
export const isMultiLang = (arg: unknown): arg is MultiLang =>
  typeof arg === 'object' && arg !== null && 'en' in arg && 'ja' in arg

export const summary: MultiLang = {
  en:
    "I'm a research scientist in the NLP team at CyberAgent's AI Lab, Tokyo. " +
    "I'm working on ad-text generation with NLP, machine learning, and other deep learning technologies. " +
    'My main responsibility is to contribute to both industry and academia; such as incorporating methods from numerous studies that fit our business strategy, implementing prototypes and verify the performance, and writing papers on new ideas or practices that emerge from our products.\n' +
    'Previously, I majored in NLP when I was a student in the Komachi Lab at Tokyo Metropolitan University. ' +
    'After I graduated, I worked as a Machine Learning Engineer at Yahoo! Japan. \n' +
    'For more detailed information, please check below or feel free to contact me.',
  ja:
    '私は AI Lab の自然言語処理チームに所属しているリサーチサイエンティストです。' +
    '現在は、自然言語処理や機械学習などの技術を使って広告文の自動生成に取り組んでいます。' +
    '私の主なミッションは産業界と学術界の両方に貢献することで、例えば数ある研究から我々の戦略に適した手法を取り入れたり、プロトタイプを実装して効果を検証したり、プロダクトから生まれた新しいアイデアや手法で論文を書いたりすることです。' +
    '\n以前は東京都立大学の小町研究室で自然言語処理を専攻していました。修了後、ヤフー株式会社に機械学習エンジニアとして入社しました。' +
    '\nより詳細な情報については、以下の項目を見ていただくか、直接ご連絡ください。',
}

export const interests: { title: Profile; body: Profile }[] = [
  {
    title: { en: 'Design', ja: 'デザイン' },
    body: {
      en:
        'Design is everywhere, and it continues to influence people. ' +
        'I am very fond of all kinds of things that can be called "design", such as typography, logo design, photography, literary expression, room coordination, and so on. ' +
        'I designed this portfolio and blog from scratch. ' +
        "It was a lot of work because I don't usually use front-end technology, but it was also very enjoyable.",
      ja:
        'デザインはどこにでも存在し、人々に意識的にしろ潜在的にしろ影響を与え続けています。' +
        '私は「デザイン」と呼べるものすべてに興味があります。それはタイポグラフィだったりロゴ設計だったり写真術だったり文学表現だったり部屋のコーディネートだったりします。' +
        'このポートフォリオとブログもゼロから私自らデザインしました。' +
        'フロントエンド技術に明るくなかったため、それなりに苦労しましたが、あれこれ悩んで実装していく時間はとても楽しかったです。',
    },
  },
  {
    title: { en: 'Photography', ja: '写真撮影' },
    body: {
      en:
        'I feel that there is something special about photographs and videos. ' +
        'Thanks to recent advances in technology, high-performance photographic equipment is now relatively easy to obtain, even for individuals. ' +
        'I also have a DSLR camera, and I like to wander off to unfamiliar places and take pictures while strolling around. ' +
        'Most of my photos are landscapes, but I also enjoy taking portraits.',
      ja:
        '私は写真や動画といったメディアになにか特別なものを感じています。' +
        '最近は技術の進歩も手伝って、高性能な撮影機器が個人レベルでも比較的簡単に入手できるようになってきました。' +
        '私もミラーレス一眼カメラを持っていて、知らない土地にふらっと行って、散策しながら写真を撮るのが好きです。' +
        '撮影対象は風景が多いのですが、人物の写真を撮るのも楽しいです。',
    },
  },
  {
    title: { en: 'Football', ja: 'サッカー・フットサル' },
    body: {
      en:
        'I was a member of a football club when I was in my childhood, and I like to actually play football, watch games, and play football video games. ' +
        'I sometimes join futsal games on my days off. ' +
        'My favorite football team is Inter Milan, and my favorite player is Ronaldinho.',
      ja:
        '小さい頃にサッカー部に所属していたこともあり、実際にサッカーをやるのも試合を見るのもサッカーゲームを遊ぶのも好きです。' +
        '休みの日にフットサルに参加することもあります。' +
        '好きなサッカーチームはインテル・ミラノで、好きな選手はロナウジーニョです。',
    },
  },
  {
    title: { en: 'Game', ja: 'ゲーム' },
    body: {
      en:
        'I am a big gamer. ' +
        "I've played numerous types of games, including action, FPS/TPS, shooting, simulation, sports, strategy, puzzle, and racing. " +
        "Recently, I've been addicted to action games like Bloodborne, Sekiro, and Dark Souls made by From Software. " +
        'There are many other games I enjoy and I would love to talk about more of them, but this margin is too narrow to contain.',
      ja:
        '私は大のゲーム好きです。' +
        'アクション、FPS/TPS、シューティング、シミュレーション、スポーツ、ストラテジー、パズル、レーシングなどとそれなりの種類のゲームを遊んできました。' +
        '最近ではフロム・ソフトウェアが作る Bloodborne や Sekiro、Dark Souls といったアクションゲームにハマっています。' +
        '他にも好きなゲームが多く、まだまだ語り足りないけど、この余白はそれを書くには狭すぎるので割愛します。',
    },
  },
]

export const experience: {
  title: Profile
  url: string
  subtitle: Profile
  period_from: string
  period_to: Profile
  body: Profile
}[] = [
  {
    title: { en: 'CyberAgent, Inc.', ja: '株式会社サイバーエージェント' },
    url: 'https://www.cyberagent.co.jp/',
    subtitle: { en: 'Research Scientist', ja: 'リサーチサイエンティスト' },
    period_from: '2018-06',
    period_to: { en: 'Present', ja: '現在' },
    body: {
      en: (
        <>
          I'm a Research Scientist at CyberAgent's{' '}
          <ExtLink
            href={'https://cyberagent.ai/ailab/'}
            ga-category={'Experience'}
          >
            AI Lab
          </ExtLink>
          , working on ad generation and predicting ad effects. I use a broad
          NLP/ML technologies, especially natural language generation including
          machine translation and summarization, few-/zero-shot learning,
          pre-trained language model, and reinforcement learning.
        </>
      ),
      ja: (
        <>
          私はサイバーエージェントの{' '}
          <ExtLink
            href={'https://cyberagent.ai/ailab/'}
            ga-category={'Experience'}
          >
            AI Lab
          </ExtLink>{' '}
          に所属しているリサーチサイエンティストです。現在は NLP
          や機械学習技術を使って、広告の自動生成や効果予測に取り組んでいます。機械翻訳や自動要約を含むテキスト生成、少ないデータのドメインへの転移学習、大規模な事前学習モデル、
          NLP への強化学習の応用などに興味関心があります。
        </>
      ),
    },
  },
  {
    title: { en: 'Yahoo! Japan, Inc.', ja: 'ヤフー株式会社' },
    url: 'https://about.yahoo.co.jp/',
    subtitle: { en: 'ML Engineer', ja: '機械学習エンジニア' },
    period_from: '2016-04',
    period_to: '2018-04',
    body: {
      en: (
        <>
          I joined Yahoo! Japan as an ML engineer after graduating. In the push
          notification team, I implemented a personalization feature using
          NLP/ML and Hadoop technology for over ten millions of users, and
          deployed it as an in-house application.
        </>
      ),
      ja: (
        <>
          私は新卒で機械学習エンジニアとしてヤフー株式会社に入社しました。当時はプッシュ通知のチームに配属され、Hadoop
          / Hive
          といった大規模処理基盤上で自然言語処理や機械学習技術を使い、数千万単位のユーザに対して通知をパーソナライズする機能を、社内サービスとして実装したりしました。
        </>
      ),
    },
  },
  {
    title: 'HRI Japan',
    url: 'https://www.jp.honda-ri.com/index.html',
    subtitle: { en: 'Internship', ja: 'インターンシップ' },
    period_from: '2014-08',
    period_to: '2014-09',
    body: {
      en: (
        <>
          I interned at Honda Research Institute (HRI) Japan for two months
          working on the two themes described below: (1) classification of
          speech acts and (2) creating a language model for speech recognition
          using Nested Pitman-Yor Language Model (NPYLM).
        </>
      ),
      ja: (
        <>
          私は修士 1 年の夏に HRI で約 2
          ヶ月のインターンシップを経験しました。そこでは主に (1)
          自然言語処理・機械学習を使った発話行為の認識と、(2) Nested Pitman-Yor
          Language Model (NPYLM)
          という教師なし学習手法を使った音声認識システムの言語モデルの作成に取り組んでいました。
        </>
      ),
    },
  },
]

export const education: {
  title: Profile
  url: string
  subtitle: Profile
  period_from: string
  period_to: Profile
  body: Profile
}[] = [
  {
    title: { en: 'Tokyo Metropolitan Univ.', ja: '東京都立大学大学院' },
    url: 'https://cs.sd.tmu.ac.jp/',
    subtitle: { en: 'Master of Engineering', ja: '修士（工学）' },
    period_from: '2014-04',
    period_to: '2016-03',
    body: {
      en: (
        <>
          I worked on sentiment analysis as my Master's research. Our paper
          "Japanese Sentiment Classification with Stacked Denoising Auto-Encoder
          using Distributed Word Representation" was accepted to PACLIC 2015,
          which demonstrated state-of-the-art performance on Japanese dataset at
          the time.
        </>
      ),
      ja: (
        <>
          修士研究では感情極性分類について取り組んでいました。PACLIC 2015
          に採択された我々の論文「単語分散表現を用いた多層 Denoising
          Auto-Encoder
          による評価極性分類」は、日本語データセットにおいて当時の最高精度を達成しました。また、修士
          1 年の夏に HRI Japan で約 2
          ヶ月の対話・談話処理、音声認識に関するインターンシップも経験しました。
        </>
      ),
    },
  },
  {
    title: { en: 'Tokyo Metropolitan Univ.', ja: '東京都立大学' },
    url: 'https://www.tmu.ac.jp/',
    subtitle: { en: 'Bachelor of Engineering', ja: '学士（工学）' },
    period_from: '2010-04',
    period_to: '2014-03',
    body: {
      en: (
        <>
          When I in my junior year of university, I met{' '}
          <ExtLink
            href={'http://cl.sd.tmu.ac.jp/~komachi/'}
            ga-category={'Education'}
          >
            Professor Komachi
          </ExtLink>
          , who would have a great influence on my later life. I was assigned to{' '}
          <ExtLink href={'http://cl.sd.tmu.ac.jp/'} ga-category={'Education'}>
            Komachi Lab
          </ExtLink>{' '}
          as the first generation student and was fascinated by NLP and other AI
          technologies. During my time in the lab, I was interested in making
          computers more human-like.
        </>
      ),
      ja: (
        <>
          学部三年生のときに、のちの人生に多大な影響を受けることになる
          <ExtLink
            href={'http://cl.sd.tmu.ac.jp/~komachi/'}
            ga-category={'Education'}
          >
            小町先生
          </ExtLink>
          と出会いました。
          <ExtLink href={'http://cl.sd.tmu.ac.jp/'} ga-category={'Education'}>
            小町研究室
          </ExtLink>
          の第一期生として配属され、自然言語処理やその他の人工知能技術を知ることができ、深く魅了されていきました。研究室時代は、無機質な機械やプログラムをいかに人間らしくできるか、ということを追い求めていました。
        </>
      ),
    },
  },
  {
    title: { en: 'Kaijo High School', ja: '海城高等学校' },
    url: 'https://www.kaijo.ed.jp/',
    subtitle: { en: 'High School Diploma', ja: '高校卒業' },
    period_from: '2007-04',
    period_to: '2010-03',
    body: {
      en: (
        <>
          I moved from Hiroshima Prefecture to Tokyo after graduating from
          junior high school, and entered Kaijo High School, one of the best
          private schools in Tokyo.
        </>
      ),
      ja: (
        <>
          私は元々広島に住んでおり、高校から東京に引っ越してきました。海城高等学校という都内でも屈指の進学校にはなんとか受かったのですが、高校受験で燃え尽きてしまい、高校での勉強は中々身が入りませんでした。
        </>
      ),
    },
  },
]

export const publications: {
  title: Profile
  link?: string
  authors: Profile
  conf: Profile
  tags: Profile
}[] = [
  {
    title: 'Aspect-based Analysis of Advertising Appeals for Search Engine Advertising',
    link: 'https://arxiv.org/abs/2204.11445',
    authors: (
      <div>
        Soichiro Murakami,{' '}
        <u><b>Peinan Zhang</b></u>,
        Sho Hoshino,
        Hidetaka Kamigaito,
        Hiroya Takamura,
        Manabu Okumura
      </div>
    ),
    conf: 'NAACL-HLT 2022 Industry Track',
    tags: {
      en: ['International', 'Refereed'],
      ja: ['国際発表', '査読あり'],
    },
  },
  {
    title:
      'FAST: Fast Annotation tool for SmarT devices',
    link: 'https://aclanthology.org/2021.emnlp-demo.41',
    authors: (
      <div>
        Syunyo Kawamoto,
        Yu Sawai*,
        Kohei Wakimoto*,{' '}
        <u>
          <b>Peinan Zhang</b>
        </u>
        *
      </div>
    ),
    conf: 'EMNLP 2021 System Demonstrations',
    tags: {
      en: ['International', 'Refereed', '* Equal Contribution'],
      ja: ['国際発表', '査読あり', '* 共同著者'],
    },
  },
  {
    title:
      'An Empirical Study of Generating Texts for Search-Engine Advertising',
    link: 'https://www.aclweb.org/anthology/2021.naacl-industry.32',
    authors: (
      <div>
        Hidetaka Kamigaito*,{' '}
        <u>
          <b>Peinan Zhang</b>
        </u>
        *, Hiroya Takamura, Manabu Okumura
      </div>
    ),
    conf: 'NAACL-HLT 2021 Industry Track',
    tags: {
      en: ['International', 'Refereed', '* Equal Contribution'],
      ja: ['国際発表', '査読あり', '* 共同著者'],
    },
  },
  {
    title:
      'Japanese Sentiment Classification with Stacked Denoising Auto-Encoder using Distributed Word Representation',
    link: 'https://www.aclweb.org/anthology/Y15-1018',
    authors: (
      <div>
        <u>
          <b>Peinan Zhang</b>
        </u>
        , Mamoru Komachi
      </div>
    ),
    conf: 'PACLIC 2015',
    tags: {
      en: ['International', 'Refereed'],
      ja: ['国際発表', '査読あり'],
    },
  },
  {
    title: {
      en: 'LP-to-Text: Multi-modal Ad-text Generation',
      ja: 'LP-to-Text: マルチモーダル広告文生成',
    },
    link: 'https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/D5-3.pdf',
    authors: {
      en: (
        <>
          Soichiro Murakami,
          Sho Hoshino,{' '}
          <u><b>Peinan Zhang</b></u>,
          Hidetaka Kamigaito,
          Hiroya Takamura,
          Manabu Okumura
        </>
      ),
      ja: (
        <>
          村上 聡一朗、星野 翔、
          <u><b>張 培楠</b></u>、
          上垣外 英剛、高村 大也、奥村 学
        </>
      )
    },
    conf: {
      en: 'ANLP 2022',
      ja: '言語処理学会 2022',
    },
    tags: {
      en: ['In Japanese'],
      ja: ['国内発表'],
    },
  },
  {
    title: {
      en: 'FAST: Fast Annotation tool for SmarT devices',
      ja: 'FAST: スマートデバイス用の高速なアノテーションツール',
    },
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2021/0/JSAI2021_3H2GS9b04/_article/-char/ja/',
    authors: {
      en: (
        <>
          Syunyo Kawamoto,
          Yu Sawai,
          Kohei Wakimoto,{' '}
          <u>
            <b>Peinan Zhang</b>
          </u>
        </>
      ),
      ja: (
        <>
          川本 峻頌、澤井 悠、脇本 宏平、
          <u>
            <b>張 培楠</b>
          </u>
        </>
      ),
    },
    conf: {
      en: 'JSAI 2021',
      ja: '人工知能学会 2021',
    },
    tags: {
      en: ['In Japanese'],
      ja: ['国内発表'],
    },
  },
  {
    title: {
      en: 'Generating keywords-aware advertising texts assets using fine-tuned GPT-2',
      ja: 'GPT-2の転移学習によるキーワードを考慮した広告文生成',
    },
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2021/0/JSAI2021_2D4OS7b03/_article/-char/ja',
    authors: {
      en: (
        <>
          Hiroyuki Osone,{' '}
          <u>
            <b>Peinan Zhang</b>
          </u>
        </>
      ),
      ja: (
        <>
          大曽根 宏幸、
          <u>
            <b>張 培楠</b>
          </u>
        </>
      ),
    },
    conf: {
      en: 'JSAI 2021',
      ja: '人工知能学会 2021',
    },
    tags: {
      en: ['In Japanese'],
      ja: ['国内発表'],
    },
  },
  {
    title: {
      en: 'Keyword-based Text Generation for Internet Advertisement',
      ja: 'インターネット広告におけるキーワードに基づく広告文の自動生成',
    },
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_4Rin170/_article/-char/ja',
    authors: {
      en: (
        <>
          Kohei Wakimoto, Shunyo Kawamoto,{' '}
          <u>
            <b>Peinan Zhang</b>
          </u>
        </>
      ),
      ja: (
        <>
          脇本 宏平、川本 峻頌、
          <u>
            <b>張 培楠</b>
          </u>
        </>
      ),
    },
    conf: {
      en: 'JSAI 2020',
      ja: '人工知能学会 2020',
    },
    tags: {
      en: ['In Japanese', 'Awarded'],
      ja: ['国内発表', '受賞論文'],
    },
  },
  {
    title: {
      en:
        'A Proposal for Evaluation Metrics and Assistant Tools for Automatically Generated Textual Ads',
      ja: '自動生成された広告文の人手評価における評価指標と支援ツールの提案',
    },
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_3Rin480/_article/-char/ja',
    authors: {
      en: (
        <>
          Yu Sawai,{' '}
          <u>
            <b>Peinan Zhang</b>
          </u>
          , Akifumi Yoshimoto
        </>
      ),
      ja: (
        <>
          澤井 悠、
          <u>
            <b>張 培楠</b>
          </u>
          、吉本 暁文
        </>
      ),
    },
    conf: {
      en: 'JSAI 2020',
      ja: '人工知能学会 2020',
    },
    tags: {
      en: ['In Japanese'],
      ja: ['国内発表'],
    },
  },
  {
    title: {
      en: 'POS-VAE: Diverse Ad-text Generation with Style Control',
      ja: 'スタイル制御を考慮した多様な広告文生成',
    },
    link:
      'https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/P6-14.pdf',
    authors: {
      en: (
        <>
          Shunyo Kawamoto,{' '}
          <u>
            <b>Peinan Zhang</b>
          </u>
        </>
      ),
      ja: (
        <>
          川本 峻頌、
          <u>
            <b>張 培楠</b>
          </u>
        </>
      ),
    },
    conf: {
      en: 'ANLP 2020',
      ja: '言語処理学会 2020',
    },
    tags: {
      en: ['In Japanese'],
      ja: ['国内発表'],
    },
  },
  {
    title: {
      en: 'Effect-Rewarded Reinforcement Learning for Ad Text Generation',
      ja: '広告効果を報酬とした強化学習に基づく広告文の自動生成',
    },
    link: 'https://ci.nii.ac.jp/naid/170000150667/',
    authors: {
      en: (
        <>
          Hidetaka Kamigaito*,{' '}
          <u>
            <b>Peinan Zhang</b>
          </u>
          *, Hiroya Takamura, Manabu Okumura
        </>
      ),
      ja: (
        <>
          上垣外 英剛*、
          <u>
            <b>張 培楠</b>
          </u>
          *、高村 大也、奥村 学
        </>
      ),
    },
    conf: 'WebDB Forum 2019',
    tags: {
      en: ['In Japanese', 'Refereed', '* Equal Contribution'],
      ja: ['国内発表', '査読あり', '* 共同著者'],
    },
  },
  {
    title: {
      en:
        'Product Name Extraction from Product Entries on Electronic Commerce Pages',
      ja: 'ECサイトにおける商品タイトルからの商品名抽出',
    },
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2019/0/JSAI2019_4Rin123/_article/-char/ja',
    authors: {
      en: (
        <>
          <u>
            <b>Peinan Zhang</b>
          </u>
        </>
      ),
      ja: (
        <>
          <u>
            <b>張 培楠</b>
          </u>
        </>
      ),
    },
    conf: {
      en: 'JSAI 2019',
      ja: '人工知能学会 2019',
    },
    tags: {
      en: ['In Japanese'],
      ja: ['国内発表'],
    },
  },
  {
    title: {
      en:
        'Japanese Sentiment Classification with Stacked Denoising Auto-Encoder using Distributed Word Representation',
      ja: '単語分散表現を用いた多層 Denoising Auto-Encoder による評価極性分類',
    },
    link: null,
    authors: {
      en: (
        <>
          <u>
            <b>Peinan Zhang</b>
          </u>
        </>
      ),
      ja: (
        <>
          <u>
            <b>張 培楠</b>
          </u>
        </>
      ),
    },
    conf: {
      en: "Master's Thesis 2016",
      ja: '修士論文 2016',
    },
    tags: {
      en: ['In Japanese', 'Thesis'],
      ja: ['国内発表', '学位論文'],
    },
  },
  {
    title: {
      en: 'Sentiment Classification with Higher Order Dependency Structure',
      ja: '高次の係り受け関係を考慮した評価極性分類',
    },
    link: null,
    authors: {
      en: (
        <>
          <u>
            <b>Peinan Zhang</b>
          </u>
        </>
      ),
      ja: (
        <>
          <u>
            <b>張 培楠</b>
          </u>
        </>
      ),
    },
    conf: {
      en: "Bachelor's Thesis 2014",
      ja: '学士論文 2014',
    },
    tags: {
      en: ['In Japanese', 'Thesis'],
      ja: ['国内発表', '学位論文'],
    },
  },
]

export const related_materials: {
  title: Profile
  link: string
  desc: Profile
  media: Profile
  date: string
}[] = [
  {
    title: 'AI Lab、自然言語処理分野のトップカンファレンス「NAACL-HLT 2022」にて主著論文採択  ― 効果の高い広告訴求を分析 ―',
    link: 'https://www.cyberagent.co.jp/news/detail/id=27559',
    desc: {
      en: (
        <>
          <u><b>A press release</b></u>{' '}
          announcing the acceptance of our paper on analyzing the aspect of advertising appeals to NAACL-HLT 2022 Industry Track.
        </>
      ),
      ja:  <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2022-04-28',
  },
  {
    title: '自然言語処理を用いた効果的な広告テキストの自動生成',
    link: 'https://cadc.cyberagent.co.jp/2022/program/automatically-generate-effective-sales-copy/',
    desc: {
      en: <>
        <u><b>A talk</b></u>{' '}
        introducing our ad-text generation method considering ad effects and something related efforts
      </>,
      ja: <></>,
    },
    media: 'CyberAgent Developer Conference 2022',
    date: '2022-03-24',
  },
  {
    title: 
      '自然言語処理分野のトップカンファレンス「EMNLP 2021」の System Demonstration Track にて論文採択 ― モバイル端末用の効率的なアノテーションツールを提案 ―',
    link: 'https://www.cyberagent.co.jp/news/detail/id=26746',
    desc: {
      en: (
        <>
          <u>
            <b>A press release</b>
          </u>{' '}
          announcing the acceptance of our paper on building an easy-to-use annotation tool
          to EMNLP 2021's System Demonstration Track
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2021-10-12'
  },
  {
    title:
      'AI Lab、自然言語処理分野のトップカンファレンス「NAACL-HLT 2021」にて共著論文採択　− 広告効果を考慮した広告文生成手法を提案 −',
    link: 'https://www.cyberagent.co.jp/news/detail/id=26075',
    desc: {
      en: (
        <>
          <u>
            <b>A press release</b>
          </u>{' '}
          announcing the acceptance of our paper on generating effective ad-text
          to NAACL-HLT 2021's industry track
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2021-04-14',
  },
  {
    title:
      '効果を出す「AIの共同研究」 東京工業大学 奥村・高村研究室と創る自然言語処理の未来',
    link: 'https://www.cyberagent.co.jp/way/features/list/detail/id=25604',
    desc: {
      en: (
        <>
          <u>
            <b>An interview</b>
          </u>{' '}
          about the joint research with the Tokyo Institute of Technology, in
          which I am participating
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2020-12-23',
  },
  {
    title:
      '「効果を出すAI - サイバーエージェントのAI研究とビジネス実装力 -」 CyberAgent IRチャンネル 第23弾',
    link: 'https://www.youtube.com/watch?v=XuxNcucXSMU',
    desc: {
      en: (
        <>
          <u>
            <b>A video</b>
          </u>{' '}
          introducing the AI products developed by CyberAgent, Inc. that I am
          engaged in
        </>
      ),
      ja: <></>,
    },
    media: 'YouTube',
    date: '2020-12-03',
  },
  {
    title:
      'AI事業本部「極予測AIチーム」のデータサイエンティストによる論文が人工知能学会全国大会(JSAI2020)において優秀賞を受賞',
    link: 'https://www.cyberagent.co.jp/techinfo/news/detail/id=25008',
    desc: {
      en: (
        <>
          <u>
            <b>A press release</b>
          </u>{' '}
          announcing that our paper on keyword-based ad-text generation received
          the JSAI Annual Conference Award
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2020-08-05',
  },
  {
    title:
      'AIで数億キーワードの品質スコアを自動で改善　効果の出せる広告テキストを自動生成「極予測TD」の提供を開始',
    link: 'https://www.cyberagent.co.jp/news/detail/id=24670',
    desc: {
      en: (
        <>
          <u>
            <b>A press release</b>
          </u>{' '}
          on "KiwamiTD", a product I am engaged in which generates ad-texts
          using NLP technologies
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2020-05-22',
  },
  {
    title: 'ウェブサービス事業者における研究開発インターン',
    link:
      'https://www.ieice.org/~nlc/wiki/wiki.cgi?page=%C2%E815%B2%F3%A5%C6%A5%AD%A5%B9%A5%C8%A5%A2%A5%CA%A5%EA%A5%C6%A5%A3%A5%AF%A5%B9%A1%A6%A5%B7%A5%F3%A5%DD%A5%B8%A5%A6%A5%E0%A1%A7%BB%B2%B2%C3%CA%E7%BD%B8',
    desc: {
      en: (
        <>
          <u>
            <b>A talk event</b>
          </u>{' '}
          about research internships at web companies
        </>
      ),
      ja: <></>,
    },
    media: 'テキストアナリティクス・シンポジウム',
    date: '2019-09-27',
  },
  {
    title: '人工知能学会 2019 参加報告',
    link: 'https://cyberagent.ai/blog/research/2219',
    desc: {
      en: (
        <>
          <u>
            <b>An article</b>
          </u>{' '}
          I wrote that reports JSAI 2019
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent AI Lab Blog',
    date: '2019-06-25',
  },
  {
    title: 'A Deep Reinforced Model for Abstractive Summarization',
    link:
      'https://speakerdeck.com/peinan/a-deep-reinforced-model-for-abstractive-summarization',
    desc: {
      en: (
        <>
          <u>
            <b>Presentation slides</b>
          </u>{' '}
          I created that explains a study on summarization
        </>
      ),
      ja: <></>,
    },
    media: 'Speakerdeck',
    date: '2019-03-29',
  },
  {
    title: '木星を継ぐもの 〜JupyterLab よこんにちは〜',
    link: 'https://cyberagent.ai/blog/research/10260',
    desc: {
      en: (
        <>
          <u>
            <b>An article</b>
          </u>{' '}
          I wrote that introduces useful features of JupyterLab
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent AI Lab Blog',
    date: '2019-03-20',
  },
  {
    title: 'Tweet ベースマッチングシステムを支える技術',
    link: 'https://cyberagent.ai/blog/research/10257',
    desc: {
      en: (
        <>
          <u>
            <b>An article</b>
          </u>{' '}
          I co-wrote that describing a matching system based on tweets, which
          used in Design Scramble 2018
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent AI Lab Blog',
    date: '2019-02-05',
  },
  {
    title: 'ACL 参加報告',
    link: 'https://speakerdeck.com/peinan/acl-can-jia-bao-gao',
    desc: {
      en: (
        <>
          <u>
            <b>Presentation slides</b>
          </u>{' '}
          I created that reports ACL 2018
        </>
      ),
      ja: <></>,
    },
    media: 'テキストアナリティクス・シンポジウム',
    date: '2018-09-07',
  },
  {
    title: 'ACL 2018 参加報告',
    link: 'https://cyberagent.ai/blog/research/511',
    desc: {
      en: (
        <>
          <u>
            <b>An article</b>
          </u>{' '}
          I wrote that reports ACL 2018
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent AI Lab Blog',
    date: '2018-08-13',
  },
  {
    title: '人工知能学会 2018 参加報告',
    link: 'https://cyberagent.ai/blog/research/86',
    desc: {
      en: (
        <>
          <u>
            <b>An article</b>
          </u>{' '}
          I wrote that reports JSAI 2018
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent AI Lab Blog',
    date: '2018-06-18',
  },
]
