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
    'Background: During my undergraduate studies, I specialized in Natural Language Processing (NLP). After starting my career as a machine learning engineer, I now work as a researcher, engineer, and manager. My current focus is on (1) applying NLP and machine learning technologies to the advertising domain, and (2) maximizing the performance of my team.\n\nWork: As an active contributor, I integrate methods from national and international research papers that align with our business strategies, implement prototypes, and validate their effectiveness. I also work to publish and present new ideas and methods that emerge from this process at conferences, bridging the gap between industry and academia. Recently, my responsibilities have expanded to include management tasks, where I focus on maximizing team performance.\n\nAchievements: I led a research project aimed at automatically generating effective advertising texts, which culminated in the launch of a product centered around this capability, called KiwamiTD. I also transformed product challenges into research topics, resulting in papers submitted to and accepted at prestigious international conferences such as ACL, NAACL, and EMNLP, which are among the top tier conferences in the NLP field. For more detailed information, please check below or feel free to contact me.',
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
        'I believe there is something special about photographs and videos. Thanks to recent technological advances, high-performance photographic equipment is now relatively easy for individuals to obtain. I also have a DSLR camera, and I enjoy wandering off to unfamiliar places and taking pictures while strolling around. Most of my photos are landscapes, but I also enjoy taking portraits.',
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
        'I was a member of a football club during my childhood, and I enjoy playing football, watching matches, and playing football video games. I sometimes join futsal games on my days off. My favorite football team is Inter Milan, and my favorite player is Ronaldinho.',
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
        "I'm an avid gamer. I've played numerous types of games, including action, FPS/TPS, shooting, simulation, sports, strategy, puzzle, and racing. Recently, I've been hooked on action games like Bloodborne, Sekiro, and Dark Souls by From Software. There are many other games I enjoy and would love to discuss, but this margin is too narrow to contain.",
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
    subtitle: {
      en: 'Senior Research Scientist',
      ja: 'リサーチサイエンティスト',
    },
    period_from: '2018/06',
    period_to: { en: 'Present', ja: '現在' },
    body: {
      en: (
        <>
          I'm a Research Scientist at{' '}
          <ExtLink
            href={'https://cyberagent.ai/ailab/'}
            ga-category={'Experience'}
          >
            CyberAgent AI Lab
          </ExtLink>
          , working on ad generation and predicting ad performance. I utilize a
          wide range of NLP/ML technologies, particularly natural language
          generation, including machine translation and summarization, as well
          as few-/zero-shot learning, pre-trained language models, and
          reinforcement learning.
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
    subtitle: { en: 'Machine Learning Engineer', ja: '機械学習エンジニア' },
    period_from: '2016/04',
    period_to: '2018/04',
    body: {
      en: (
        <>
          I joined Yahoo! Japan as an machine learning engineer after
          graduating. On the push notification team, I implemented a
          personalization feature using NLP/ML and Hadoop technology for over
          ten million users and deployed it as an in-house application.
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
    period_from: '2014/08',
    period_to: '2014/09',
    body: {
      en: (
        <>
          I interned at Honda Research Institute (HRI) Japan for two months,
          working on the following two projects: (1) classification of speech
          acts and (2) developing a language model for speech recognition using
          the Nested Pitman-Yor Language Model (NPYLM).
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
    period_from: '2014/04',
    period_to: '2016/03',
    body: {
      en: (
        <>
          I worked on sentiment analysis for my Master's research. Our paper,
          "Japanese Sentiment Classification with Stacked Denoising Auto-Encoder
          using Distributed Word Representation," was accepted at PACLIC 2015
          and demonstrated state-of-the-art performance on Japanese datasets at
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
    period_from: '2010/04',
    period_to: '2014/03',
    body: {
      en: (
        <>
          In my junior year of university, I met {''}
          <ExtLink
            href={'http://cl.sd.tmu.ac.jp/~komachi/'}
            ga-category={'Education'}
          >
            Professor Komachi
          </ExtLink>
          , who would greatly influence my later life. I was assigned to{' '}
          <ExtLink href={'http://cl.sd.tmu.ac.jp/'} ga-category={'Education'}>
            Komachi Lab
          </ExtLink>{' '}
          as a first-generation student and was fascinated by NLP and other AI
          technologies. During my time in the lab, I became interested in making
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
    period_from: '2007/04',
    period_to: '2010/03',
    body: {
      en: (
        <>
          I moved from Hiroshima Prefecture to Tokyo after graduating from
          junior high school and enrolled in Kaijo High School, one of the top
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
  conf_comment: Profile
  tags: Profile
}[] = [
  {
    title:
      'AdParaphrase v2.0: Generating Attractive Ad Texts Using a Preference-Annotated Paraphrase Dataset',
    link: '',
    authors: (
      <div>
        Murakami Soichiro,{' '}
        <u>
          <b>Peinan Zhang</b>
        </u>
        , Hidetaka Kamigaito, Hiroya Takamura, and Manabu Okumura
      </div>
    ),
    conf: 'ACL 2025 Findings',
    conf_comment: '(To Appear)',
    tags: {
      en: ['Conference Paper', 'Refereed'],
      ja: ['国際発表', '査読あり'],
    },
  },
  {
    title:
      'AdTEC: A Unified Benchmark for Evaluating Text Quality in Search Engine Advertising',
    link: 'https://arxiv.org/abs/2408.05906',
    authors: (
      <div>
        <u>
          <b>Peinan Zhang</b>
        </u>
        , Yusuke Sakai, Masato Mita, Hiroki Ouchi, and Taro Watanabe
      </div>
    ),
    conf: 'NAACL 2025',
    conf_comment: '',
    tags: {
      en: ['Conference Paper', 'Refereed'],
      ja: ['国際発表', '査読あり'],
    },
  },
  {
    title:
      'AdParaphrase: Paraphrase Dataset for Analyzing Linguistic Features toward Generating Attractive Ad Texts',
    link: 'https://arxiv.org/abs/2502.04674',
    authors: (
      <div>
        Soichiro Murakami,{' '}
        <u>
          <b>Peinan Zhang</b>
        </u>
        , Hidetaka Kamigaito, Hiroya Takamura, and Manabu Okumura
      </div>
    ),
    conf: 'NAACL 2025 Findings',
    conf_comment: '',
    tags: {
      en: ['Conference Paper', 'Refereed'],
      ja: ['国際発表', '査読あり'],
    },
  },
  {
    title:
      'Not Eliminate but Aggregate: Post-Hoc Control over Mixture-of-Experts to Address Shortcut Shifts in Natural Language Understanding',
    link: 'https://aclanthology.org/2024.tacl-1.70/',
    authors: (
      <div>
        Ukyo Honda, Tatsushi Oka,{' '}
        <u>
          <b>Peinan Zhang</b>
        </u>
        , and Masato Mita
      </div>
    ),
    conf: 'TACL',
    conf_comment: '(Presented in EMNLP 2024)',
    tags: {
      en: ['Journal Paper', 'Refereed'],
      ja: ['国際発表', '査読あり'],
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
    title:
      '戦いは数だよ兄貴！Google Cloud Batch による並列化入門 〜LLMの前処理を例に〜',
    link: 'https://zenn.dev/peinan/articles/721a908599dcf7',
    desc: {
      en: (
        <>
          <u>
            <b>An article</b>
          </u>{' '}
          I wrote introduces the basics of parallelization with Google Cloud
          Batch highlighting practical applications and benefits for handling
          big data
        </>
      ),
      ja: <></>,
    },
    media: 'Zenn.dev',
    date: '2024/12/09',
  },
  {
    title:
      'AI Lab、計算言語学・自然言語処理分野に関する主要ジャーナル「Transactions of the Association for Computational Linguistics」にて論文採択 ―短絡的な予測への依存を抑制する手法を提案―',
    link: 'https://www.cyberagent.co.jp/news/detail/id=30555',
    desc: {
      en: (
        <>
          <u>
            <b>A press release</b>
          </u>{' '}
          announcing that our paper has been accepted to TACL.
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2024/07/30',
  },
  {
    title:
      'AI Lab、自然言語処理分野のトップカンファレンス「ACL 2024」にて3本の論文採択',
    link: 'https://www.cyberagent.co.jp/news/detail/id=30532',
    desc: {
      en: (
        <>
          <u>
            <b>A press release</b>
          </u>{' '}
          announcing that our paper has been accepted to ACL 2024.
        </>
      ),
      ja: <></>,
    },
    media: 'CyberAgent Press Releases',
    date: '2024/07/24',
  },
]
