import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

import ExtLink from '../components/ext-link'
import { contacts } from '../lib/blog-helpers'

import contactStyles from '../styles/contact.module.css'

const summary =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare massa eget egestas purus viverra. Interdum varius sit amet mattis vulputate enim nulla aliquet. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Maecenas volutpat blandit aliquam etiam. Nisl pretium fusce id velit. Ultrices vitae auctor eu augue ut lectus arcu. Dictum sit amet justo donec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Risus feugiat in ante metus. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Rhoncus urna neque viverra justo. Nullam ac tortor vitae purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. At imperdiet dui accumsan sit amet nulla. A pellentesque sit amet porttitor eget. Convallis a cras semper auctor neque vitae tempus. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.'
const interests = [
  {
    title: 'Design',
    body: '',
  },
  {
    title: 'Photography',
    body: '',
  },
  {
    title: 'Football',
    body: '',
  },
  {
    title: 'Game',
    body: '',
  },
  {
    title: 'Music',
    body: '',
  },
]
const experience = [
  {
    title: 'CyberAgent, Inc.',
    url: 'https://www.cyberagent.co.jp/',
    subtitle: 'Research Scientist',
    period_from: '2018-06',
    period_to: 'present',
    body: (
      <>
        I'm a Research Scientist at CyberAgent's{' '}
        <a href={'https://cyberagent.ai/ailab/'}>AI Lab</a>, working on ad
        generation and predicting ad effects. I use a wide range of NLP/ML
        technologies, especially language generation including machine
        translation and summarization, few-/zero-shot learning, and pre-trained
        language model.
      </>
    ),
  },
  {
    title: 'Yahoo! Japan, Inc.',
    url: 'https://about.yahoo.co.jp/',
    subtitle: 'ML Engineer',
    period_from: '2016-04',
    period_to: '2018-04',
    body: (
      <>
        I joined Yahoo! Japan as an ML engineer after graduating. In the push
        notification team, I implemented a personalization feature using NLP/ML
        and Hadoop for over ten millions of users, and deployed it as an
        in-house application.
      </>
    ),
  },
  {
    title: 'HRI Japan',
    url: 'https://www.jp.honda-ri.com/index.html',
    subtitle: 'Internship',
    period_from: '2014-08',
    period_to: '2014-09',
    body: (
      <>
        I interned at Honda Research Institute (HRI) Japan for about two months
        during my M1 year. There were two themes: (1) classification of speech
        acts and (2) creation of a spoken language model using Nested Pitman-Yor
        Language Model (NPYLM).
      </>
    ),
  },
]
const education = [
  {
    title: 'Tokyo Metropolitan Univ.',
    url: 'https://cs.sd.tmu.ac.jp/',
    subtitle: "Master's Course",
    period_from: '2014-04',
    period_to: '2016-03',
    body: (
      <>
        When I was in B3, I met{' '}
        <a href={'http://cl.sd.tmu.ac.jp/~komachi/'}>Prof. Komachi</a>, who
        would have a great influence on my later life. As one of the first
        students, I was assigned to{' '}
        <a href={'http://cl.sd.tmu.ac.jp/'}>Komachi lab</a> and was fascinated
        by NLP and other AI technologies.
      </>
    ),
  },
  {
    title: 'Tokyo Metropolitan Univ.',
    url: 'https://www.tmu.ac.jp/',
    subtitle: 'Undergraduate Course',
    period_from: '2010-04',
    period_to: '2014-03',
    body: (
      <>
        Since my high school was a private school and the tuition was very
        expensive, I could only go to a national or public school due to my
        financial situation. However, I failed my first choice national
        university in the first exam and somehow succeeded in passing TMU in the
        second exam.
      </>
    ),
  },
  {
    title: 'Kaijo High School',
    url: 'https://www.kaijo.ed.jp/',
    subtitle: 'General Course',
    period_from: '2007-04',
    period_to: '2010-03',
    body: (
      <>
        I moved to Tokyo from Hiroshima when I entered high school. Kaijo High
        School is one of the best private preparatory schools in Tokyo, but I
        was so burnt out from the entrance examinations that I did not study
        very hard.
      </>
    ),
  },
]
const publications = [
  {
    title:
      'An Empirical Study of Generating Texts for Search-Engine Advertising',
    link: null,
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
  },
  {
    title: 'インターネット広告におけるキーワードに基づく広告文の自動生成',
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_4Rin170/_article/-char/ja',
    authors: (
      <div>
        脇本 宏平、川本 峻頌、
        <u>
          <b>張 培楠</b>
        </u>
      </div>
    ),
    conf: '人工知能学会 2020',
  },
  {
    title: '自動生成された広告文の人手評価における評価指標と支援ツールの提案',
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_3Rin480/_article/-char/ja',
    authors: (
      <div>
        澤井 悠、
        <u>
          <b>張 培楠</b>
        </u>
        、吉本 暁文
      </div>
    ),
    conf: '人工知能学会 2020',
  },
  {
    title: 'スタイル制御を考慮した多様な広告文生成',
    link:
      'https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/P6-14.pdf',
    authors: (
      <div>
        川本 峻頌、
        <u>
          <b>張 培楠</b>
        </u>
      </div>
    ),
    conf: '言語処理学会 2020',
  },
  {
    title: '広告効果を報酬とした強化学習に基づく広告文の自動生成',
    link: 'https://ci.nii.ac.jp/naid/170000150667/',
    authors: (
      <div>
        上垣外 英剛*、
        <u>
          <b>張 培楠</b>
        </u>
        *、高村 大也、奥村 学
      </div>
    ),
    conf: 'WebDB Forum 2019',
  },
  {
    title: 'ECサイトにおける商品タイトルからの商品名抽出',
    link:
      'https://www.jstage.jst.go.jp/article/pjsai/JSAI2019/0/JSAI2019_4Rin123/_article/-char/ja',
    authors: (
      <div>
        <u>
          <b>張 培楠</b>
        </u>
      </div>
    ),
    conf: '人工知能学会 2019',
  },
  {
    title:
      'Japanese Sentiment Classification with Stacked Denoising Auto-Encoder using Distributed Word Representation',
    link: null,
    authors: (
      <div>
        <u>
          <b>Peinan Zhang</b>
        </u>
      </div>
    ),
    conf: 'Master Thesis 2016',
  },
  {
    title: 'Sentiment Classification with Higher Order Dependency Structure',
    link: null,
    authors: (
      <div>
        <u>
          <b>Peinan Zhang</b>
        </u>
      </div>
    ),
    conf: 'Bachelor Thesis 2014',
  },
]
const related_materials = [
  {
    title:
      'AI Lab、自然言語処理分野のトップカンファレンス「NAACL-HLT 2021」にて共著論文採択　− 広告効果を考慮した広告文生成手法を提案 −',
    link: 'https://www.cyberagent.co.jp/news/detail/id=26075',
    desc: (
      <div>
        <u>
          <b>A press release</b>
        </u>{' '}
        announcing the acceptance of our paper on generating effective ad-text
        to NAACL-HLT 2021's industry track
      </div>
    ),
    media: 'CyberAgent Press Releases',
    date: '2021-04-14',
  },
  {
    title:
      '効果を出す「AIの共同研究」 東京工業大学 奥村・高村研究室と創る自然言語処理の未来',
    link: 'https://www.cyberagent.co.jp/way/features/list/detail/id=25604',
    desc: (
      <div>
        <u>
          <b>An interview</b>
        </u>{' '}
        about the joint research with the Tokyo Institute of Technology, in
        which I am participating
      </div>
    ),
    media: 'CyberAgent Press Releases',
    date: '2020-12-23',
  },
  {
    title:
      '「効果を出すAI - サイバーエージェントのAI研究とビジネス実装力」-CyberAgent IRチャンネル 第23弾',
    link: 'https://www.youtube.com/watch?v=XuxNcucXSMU',
    desc: (
      <div>
        <u>
          <b>A video</b>
        </u>{' '}
        introducing the AI products developed by CyberAgent, Inc. that I am
        engaged in
      </div>
    ),
    media: 'YouTube',
    date: '2020-12-03',
  },
  {
    title:
      'AI事業本部「極予測AIチーム」のデータサイエンティストによる論文が人工知能学会全国大会(JSAI2020)において優秀賞を受賞',
    link: 'https://www.cyberagent.co.jp/techinfo/news/detail/id=25008',
    desc: (
      <div>
        <u>
          <b>A press release</b>
        </u>{' '}
        announcing that our paper on keyword-based ad-text generation received
        the JSAI Annual Conference Award
      </div>
    ),
    media: 'CyberAgent Press Releases',
    date: '2020-08-05',
  },
  {
    title:
      'AIで数億キーワードの品質スコアを自動で改善　効果の出せる広告テキストを自動生成「極予測TD」の提供を開始',
    link: 'https://www.cyberagent.co.jp/news/detail/id=24670',
    desc: (
      <div>
        <u>
          <b>A press release</b>
        </u>{' '}
        on "KiwamiTD", a product I am engaged in which generates ad-texts using
        NLP technologies
      </div>
    ),
    media: 'CyberAgent Press Releases',
    date: '2020-05-22',
  },
  {
    title: 'ウェブサービス事業者における研究開発インターン',
    link:
      'https://www.ieice.org/~nlc/wiki/wiki.cgi?page=%C2%E815%B2%F3%A5%C6%A5%AD%A5%B9%A5%C8%A5%A2%A5%CA%A5%EA%A5%C6%A5%A3%A5%AF%A5%B9%A1%A6%A5%B7%A5%F3%A5%DD%A5%B8%A5%A6%A5%E0%A1%A7%BB%B2%B2%C3%CA%E7%BD%B8',
    desc: (
      <div>
        <u>
          <b>A talk event</b>
        </u>{' '}
        about research internships at web companies
      </div>
    ),
    media: 'テキストアナリティクス・シンポジウム',
    date: '2019-09-27',
  },
  {
    title: '人工知能学会 2019 参加報告',
    link: 'https://cyberagent.ai/blog/research/2219',
    desc: (
      <div>
        <u>
          <b>An article</b>
        </u>{' '}
        I wrote that reports JSAI 2019
      </div>
    ),
    media: 'CyberAgent Blog',
    date: '2019-06-25',
  },
  {
    title: 'A Deep Reinforced Model for Abstractive Summarization',
    link:
      'https://speakerdeck.com/peinan/a-deep-reinforced-model-for-abstractive-summarization',
    desc: (
      <div>
        <u>
          <b>Presentation slides</b>
        </u>{' '}
        I created that explains a study on summarization
      </div>
    ),
    media: 'Paper Friday',
    date: '2019-03-29',
  },
  {
    title: '木星を継ぐもの 〜JupyterLab よこんにちは〜',
    link: 'https://cyberagent.ai/blog/research/10260',
    desc: (
      <div>
        <u>
          <b>An article</b>
        </u>{' '}
        I wrote that introduces useful features of JupyterLab
      </div>
    ),
    media: 'CyberAgent Blog',
    date: '2019-03-20',
  },
  {
    title: 'Tweet ベースマッチングシステムを支える技術',
    link: 'https://cyberagent.ai/blog/research/10257',
    desc: (
      <div>
        <u>
          <b>An article</b>
        </u>{' '}
        I co-wrote that describing a matching system based on tweets, which used
        in Design Scramble 2018
      </div>
    ),
    media: 'CyberAgent Blog',
    date: '2019-02-05',
  },
  {
    title: 'ACL 参加報告',
    link: 'https://speakerdeck.com/peinan/acl-can-jia-bao-gao',
    desc: (
      <div>
        <u>
          <b>Presentation slides</b>
        </u>{' '}
        I created that reports ACL 2018
      </div>
    ),
    media: 'テキストアナリティクス・シンポジウム',
    date: '2018-09-07',
  },
  {
    title: 'ACL 2018 参加報告',
    link: 'https://cyberagent.ai/blog/research/511',
    desc: (
      <div>
        <u>
          <b>An article</b>
        </u>{' '}
        I wrote that reports ACL 2018
      </div>
    ),
    media: 'CyberAgent Blog',
    date: '2018-08-13',
  },
  {
    title: '人工知能学会 2018 参加報告',
    link: 'https://cyberagent.ai/blog/research/86',
    desc: (
      <div>
        <u>
          <b>An article</b>
        </u>{' '}
        I wrote that reports JSAI 2018
      </div>
    ),
    media: 'CyberAgent Blog',
    date: '2018-06-18',
  },
]

function build_interests(data) {
  return data.map(d => (
    <div
      className={sharedStyles.postCard}
      style={{ minWidth: '250px', width: '250px' }}
    >
      <h3>{d.title}</h3>
      <div className={sharedStyles.desc}>{d.body}</div>
    </div>
  ))
}

function build_history_card(data) {
  return data.map(d => (
    <div className={sharedStyles.postCard}>
      <h3>
        <a href={d.url}>{d.title}</a>
      </h3>
      <div className={sharedStyles.lead}>{d.subtitle}</div>
      <div className={sharedStyles.lead}>
        {d.period_from} ~ {d.period_to}
      </div>
      <p className={sharedStyles.desc}>{d.body}</p>
    </div>
  ))
}

function build_publications(data) {
  return data.map(d => (
    <div className={sharedStyles.postListCard}>
      {d.link === null ? (
        <h3>{d.title}</h3>
      ) : (
        <h3>
          <a href={d.link}>{d.title}</a>
        </h3>
      )}
      <div className={sharedStyles.author}>{d.authors}</div>
      <div className={sharedStyles.conference}>{d.conf}</div>
    </div>
  ))
}

function build_related_materials(data) {
  return data.map(d => (
    <div className={sharedStyles.postListCard}>
      {d.link === null ? (
        <h3>{d.title}</h3>
      ) : (
        <h3>
          <a href={d.link}>{d.title}</a>
        </h3>
      )}
      <div className={sharedStyles.author}>{d.desc}</div>
      <div className={sharedStyles.conference}>
        {d.media}
        {', '}
        {d.date}
      </div>
    </div>
  ))
}

export default () => (
  <>
    <Header titlePre="Home" />

    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img
          className={contactStyles.icon}
          src="/myicon.jpeg"
          alt="peinan"
          height={60}
        />
      </div>

      <h1 style={{ marginTop: 0 }}>Peinan Zhang</h1>
      <div className={contactStyles.name}>
        NLP Research Scientist @{' '}
        <ExtLink href="https://cyberagent.ai/ailab/">
          AI Lab of CyberAgent, Inc.
        </ExtLink>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>

    <div className={sharedStyles.introOuterBlock}>
      <div className={sharedStyles.introLayout}>
        <div className={sharedStyles.introLayoutSection}>
          <h2>Summary</h2>
          <div className={sharedStyles.summary}>{summary}</div>
        </div>

        <div className={sharedStyles.introLayoutSection}>
          <h2>Interests</h2>
          <div className={sharedStyles.postCard__outer}>
            {build_interests(interests)}
          </div>
        </div>

        <div className={sharedStyles.introLayoutSection}>
          <h2>Experience</h2>
          <div className={sharedStyles.postCard__outer}>
            {build_history_card(experience)}
          </div>
        </div>

        <div className={sharedStyles.introLayoutSection}>
          <h2>Education</h2>
          <div className={sharedStyles.postCard__outer}>
            {build_history_card(education)}
          </div>
        </div>

        <div className={sharedStyles.listLayoutSection}>
          <h2>Publications</h2>
          <div className={sharedStyles.postListCard__outer}>
            {build_publications(publications)}
          </div>
        </div>

        <div className={sharedStyles.listLayoutSection}>
          <h2>Related Materials</h2>
          <div className={sharedStyles.postListCard__outer}>
            {build_related_materials(related_materials)}
          </div>
        </div>
      </div>
    </div>
  </>
)
