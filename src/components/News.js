import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "William Brederode",
      title:
        "When buying puppies online, beware: Organised crime groups are robbing South Africans blind",
      description:
        "South Africans are being robbed blind by online puppy scams. These scams are allegedly often operated by international organised crime groups.",
      url: "https://www.news24.com/news24/tech-and-trends/news/when-buying-puppies-online-beware-organised-crime-groups-are-robbing-south-africans-blind-20230526",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/2744/e7fc5b7822b3464e95c0f33f84df994c.jpg",
      publishedAt: "2023-05-26T07:27:28+00:00",
      content:
        "<ul><li>South Africans are being swindled en masse by online puppy scams.</li><li>The average victim losses R17 000 by the end of the scam. One person lost R375 000 when trying to buy a Golden Retrie… [+9476 chars]",
    },
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Herman Mostert",
      title:
        "Rassie warns Boks should not underestimate Scotland at Rugby World Cup",
      description:
        "SA Rugby's director of rugby, Rassie Erasmus, has warned that Scotland should not be underestimated as the Springboks plot to defend their World Cup title in France later this year.",
      url: "https://www.news24.com/sport/rugby/springboks/rassie-warns-boks-should-not-underestimate-scotland-at-rugby-world-cup-20230526",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/203/6879ba9b55b44d9dbb673edb49be16af.jpg",
      publishedAt: "2023-05-26T07:27:18+00:00",
      content:
        "<ul><li>Rassie Erasmus has stressed the importance of the Scotland Test for the Springboks at the Rugby World Cup in France.</li><li>Erasmus feels too much emphasis is being placed on South Africa's … [+4048 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "Tom Richardson",
      title: "Shares post first gain in five sessions, technology jumps",
      description:
        "Tech shares added 1.55 per cent on Friday as investors bet on software businesses related to hype around artificial intelligence.",
      url: "http://www.afr.com/markets/equity-markets/shares-post-first-gain-in-five-sessions-technology-jumps-20230525-p5dbdc",
      urlToImage:
        "https://static.ffx.io/images/$zoom_0.2326%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_41%2C$y_159/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/4da5ccc99a48dd0022fbb1fe895ccd0e8cab22fb",
      publishedAt: "2023-05-26T06:35:32Z",
      content:
        "Shares finished Friday up 0.23 per cent, or 16.6 points to 7154.8 points for their first gain in five trading sessions to end a week punctuated by worries over US debt ceiling negotiations down 1.9 p… [+964 chars]",
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "Thomas Gautier",
      title:
        "Chaos mit Marabu in München: Polizei muss Abflug-Gate schützen | Regional",
      description:
        "Passagiere der Chaos-Airline „Marabu“ warteten 15 Stunden, dann war ihr Flieger überbucht. Die Folge: Chaos am Flughafen München.",
      url: "https://www.bild.de/regional/muenchen/muenchen-aktuell/chaos-mit-marabu-in-muenchen-polizei-muss-abflug-gate-schuetzen-84069622.bild.html",
      urlToImage:
        "https://images.bild.de/647041aae6924c377c327883/359d94988d9ba32ab017fd61991dc481,c681a5f9?w=1280",
      publishedAt: "2023-05-26T06:34:16Z",
      content:
        "München  Unglaubliche Vorgänge am Gate A23 des Flughafen München!\r\nAm Donnerstagabend musste die Bundespolizei dort Mitarbeiter vor wütenden Fluggästen schützen. Gegen 21.30 Uhr rückten Beamte beim B… [+2018 chars]",
    },
    {
      source: {
        id: "handelsblatt",
        name: "Handelsblatt",
      },
      author: "Handelsblatt",
      title: "Epidemiologe: 40 Millionen Infektionen wöchentlich in China",
      description:
        "Biontech erwartet saisonalen Corona-Booster bis Sommerende +++ Soldaten müssen sich weiter gegen Corona impfen lassen +++ Erste Ergebnisse mit Long-Covid-Mittel BC007 Anfang 2024 erwartet +++Der Newsblog.",
      url: "https://www.handelsblatt.com/politik/deutschland/corona-news-epidemiologe-40-millionen-infektionen-woechentlich-in-china-bund-kann-corona-impfstofflieferungen-reduzieren/25471608.html",
      urlToImage:
        "https://www.handelsblatt.com/images/china/29170914/2-format2003.jpg",
      publishedAt: "2023-05-26T06:21:54+00:00",
      content:
        "<li>Herr Max Heck31.03.2023, 11:25 Uhr\r\nHeute hat keiner gearbeitet!\r\nZumindest nicht hier in Hessen. \r\nPünktlich zu Ferienbeginn wurden jetzt schon, zwischen 10.00 und 11.00 Uhr, die Kinder aus den … [+5992 chars]",
    },
    {
      source: {
        id: "handelsblatt",
        name: "Handelsblatt",
      },
      author: "Silke Kersting, Klaus Stratmann",
      title:
        "Wärmepumpe: Wie lange Sie auf das Geld der Bafa-Förderung warten müssen",
      description:
        "Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (Bafa) muss zahlreiche Anträge bewältigen. Die Behörde sagt zu, innerhalb weniger Tage über die grundsätzliche Förderung zu entscheiden.",
      url: "https://www.handelsblatt.com/politik/deutschland/waermepumpe-wie-lange-sie-auf-das-geld-der-bafa-foerderung-warten-muessen/29163686.html",
      urlToImage:
        "https://www.handelsblatt.com/images/waermepumpe/29163834/3-format2003.jpg",
      publishedAt: "2023-05-26T06:06:24+00:00",
      content:
        "WärmepumpeDas Bafa reagiert mit der Zusage, die Antragsbearbeitung zu beschleunigen, auf Kritik der vergangenen Wochen.\r\n(Foto: dpa)\r\nBerlin Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (Bafa) s… [+1326 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "CBS News",
      title:
        "Oath Keepers founder Stewart Rhodes gets longest Jan. 6 sentence to date",
      description:
        "Stewart Rhodes, founder of the far-right militia group Oath Keepers, was sentenced to 18 years for seditious conspiracy. Prosecutors say he orchestrated a violent attempt to stop the peaceful transfer of power during the Jan. 6 attack on the Capitol. CBS News…",
      url: "https://www.cbsnews.com/video/oath-keepers-founder-stewart-rhodes-gets-longest-jan-6-sentence-to-date/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/05/26/51638cd6-4163-430a-8949-f3526feb5eef/thumbnail/1200x630/64349aff413e6b7b7945477049bd433b/stewart-rhodes-1999637-640x360.jpg",
      publishedAt: "2023-05-26T06:01:07+00:00",
      content:
        "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "CBS News",
      title: "5/25: Prime Time with John Dickerson",
      description:
        "John Dickerson reports on the 18-year prison sentence for Oath Keepers founder Stewart Rhodes, the Supreme Court's decision to weaken the EPA's power over wetlands, and how airlines are expected to handle the Memorial Day weekend rush.",
      url: "https://www.cbsnews.com/video/052523-cbs-news-prime-time/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/05/26/a2342be1-7e17-4974-aadb-6190fbe481c2/thumbnail/1200x630/6f406f02f02f55c08dd6fbc2f753d6c4/0525-7pm-full-1999723-640x360.jpg",
      publishedAt: "2023-05-26T06:01:06+00:00",
      content:
        "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
    },
    {
      source: {
        id: "gruenderszene",
        name: "Gruenderszene",
      },
      author: null,
      title:
        "Diese 18 Folien zeigen, warum das Möbel-Startup Cocoli bei Investoren gefragt ist",
      description:
        "Investoren stecken im Rahmen einer Seedrunde drei Millionen in das Gebrauchtmöbelstartups. Wir zeigen Euch exklusiv ihr Pitchdeck.",
      url: "https://www.businessinsider.de/gruenderszene/business/aus-dem-stand-siebenstellig-pitchdeck-cocoli-l/",
      urlToImage:
        "https://cdn.businessinsider.de/wp-content/uploads/2022/12/Aufmacher-Cocoli.jpg?ver=1685029209",
      publishedAt: "2023-05-26T06:00:00+00:00",
      content:
        "Die Gründer des Interior-Design-Startups: Julien Callede, Co-Founder und Non-Executive, Greta Schindler, Co-founder und CMO (vorne v.l.), sowie Stefano Uliari, Co- Founder und CTO, Frank Stehle, Co-F… [+1235 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: null,
      title:
        "Deutscher Weterdienst: Sonniges Pfingstwochenende in Bayern erwartet",
      description: null,
      url: "https://www.zeit.de/news/2023-05/26/sonniges-pfingstwochenende-in-bayern-erwartet",
      urlToImage: null,
      publishedAt: "2023-05-26T05:45:00+00:00",
      content:
        "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+821 chars]",
    },
    {
      source: {
        id: "wirtschafts-woche",
        name: "Wirtschafts Woche",
      },
      author: "Wirtschaftswoche",
      title: "Dax-Kurs aktuell: Dax zum Start höher erwartet",
      description:
        "Lesen Sie hier aktuelle News und die neuesten Nachrichten von heute zum Dax. Index-Entwicklung und Realtime-Kurs auf einen Blick.",
      url: "https://www.wiwo.de/finanzen/boerse/dax-kurs-aktuell-dax-zum-start-hoeher-erwartet/29094198.html",
      urlToImage:
        "https://www.wiwo.de/images/imago0063329472h/29094292/2-format11240.jpg",
      publishedAt: "2023-05-26T05:30:09+00:00",
      content:
        "Am Freitag wird der Dax Berechnungen von Banken und Brokerhäusern zufolge höher starten. Am Donnerstag hatte er 0,3 Prozent schwächer bei 15.793,80 Punkten geschlossen. An der Wall Street gingen die … [+30385 chars]",
    },
    {
      source: {
        id: "nhl-news",
        name: "NHL News",
      },
      author: "Tracey Myers",
      title: "'Ageless' Pavelski saves Stars in Game 4 of West Final",
      description:
        "At 38 years, 318 days, Dallas Stars forward Joe Pavelski became the oldest player to score an overtime goal in an elimination game to keep the Dallas Stars alive with a 3-2 win against the Vegas Golden Knights in Game 4 of the Western Conference Final at Amer…",
      url: "https://www.nhl.com/news/joe-pavelski-oldest-player-to-score-overtime-goal-in-elimination-game/c-344598098",
      urlToImage:
        "https://cms.nhl.bamgrid.com/images/photos/344598726/1024x576/cut.jpg",
      publishedAt: "2023-05-26T05:14:56Z",
      content:
        "DALLAS -- Time doesn't seem to be catching up with Joe Pavelski.At 38 years, 318 days, the forward became the oldest player to score an overtime goal in an elimination game to keep the Dallas Stars a… [+2479 chars]",
    },
    {
      source: {
        id: "focus",
        name: "Focus",
      },
      author: "Markus Voss",
      title:
        "Dax-Einbruch um bis zu 20 Prozent - Commerzbank-Chefanleger warnt",
      description:
        "Trotz anhaltender Rezessions-Stimmung erreichte der Dax Mitte Mai ein Allzeithoch. Wie kann das sein? Was stützt die Börsen? Und welche Gefahren lauern womöglich im Herbst? Das diskutierte Markus Voss „René will Rendite“mit Thorsten Weinelt, Chefanleger der C…",
      url: "https://www.focus.de/finanzen/boerse/rene_will_rendite/steigende-dax-kurse-commerzbank-chefanleger-warnt-vor-einbruch-um-bis-zu-20-prozent_id_194775933.html",
      urlToImage:
        "https://p6.focus.de/img/fotos/id_194775616/thumb-weinelt.jpg?im=Crop%3D%280%2C40%2C1280%2C640%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=9c8f54ef63c5591734dc32f313a2445845abecabf816667f0f9572d682b0ae8b",
      publishedAt: "2023-05-26T05:10:13Z",
      content:
        "Trotz anhaltender Rezessions-Stimmung erreichte der Dax Mitte Mai ein Allzeithoch. Wie kann das sein? Was stützt die Börsen? Und welche Gefahren lauern womöglich im Herbst? Das diskutierte Markus Vos… [+1496 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Adam Taylor, Anastacia Galouchka",
      title:
        "Sunny weather in southern Ukraine suggests new fighting season has begun",
      description:
        "With Ukrainian soldiers wearing warm-weather uniforms, a much-anticipated counterattack against occupying Russian forces seems imminent.",
      url: "https://www.washingtonpost.com/world/2023/05/26/sunny-weather-southern-ukraine-suggests-new-fighting-season-has-begun/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/37V7UAOVXENKER5XTI34Z3J7BU_size-normalized.jpg&w=1440",
      publishedAt: "2023-05-26T05:00:29Z",
      content:
        "Comment on this story\r\nComment\r\nZAPORIZHZHIA REGION, Ukraine The armored vehicle, an old Soviet-designed 2S1 self-propelled howitzer, swung loudly around the corner. Atop sat four Ukrainian soldiers … [+12774 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "China could hack US ‘critical infrastructure’, State Dept warns",
      description:
        "Department accused Chinese state-sponsored hacking group, Volt Typhoon, of carrying out cyber-espionage on US targets.",
      url: "http://www.aljazeera.com/news/2023/5/26/china-could-hack-us-critical-infrastructure-state-dept-warns",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/05/AP22067494068144-1685073614.jpg?resize=1200%2C675",
      publishedAt: "2023-05-26T04:30:48Z",
      content:
        "The US State Department has warned that China is capable of launching cyberattacks against critical United States infrastructure, including oil and gas pipelines as well as rail systems, after resear… [+3279 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Arpan Rai",
      title:
        "Ukraine-Russia news – live: Putin’s ally says war could last ‘decades’",
      description: "Ukraine Russia war: latest news and live updates",
      url: "http://www.independent.co.uk/news/world/europe/russian-ukraine-war-bakhmut-putin-latest-b2346205.html",
      urlToImage:
        "https://static.independent.co.uk/2023/05/26/05/GettyImages-874491266.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-05-26T04:23:45Z",
      content:
        "Ukraine secures release of 106 'hero' soldiers in swap with Russia - Kyiv\r\nUkrainian Prime Minister Denys Shmyhal, head of Ukraine's Presidential Office Andriy Yermak and Ukrainian Parliament Speaker… [+1134 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Mengqi Sun",
      title:
        "Record $279 Million Whistleblower Award Went to a Tipster on Ericsson",
      description:
        "The largest-ever award in the SEC’s cash-for-tips program was related to Ericsson’s bribery case",
      url: "https://www.wsj.com/articles/record-279-million-whistleblower-award-went-to-a-tipster-on-ericsson-5af40b98?mod=hp_lead_pos5",
      urlToImage: "https://images.wsj.net/im-789153/social",
      publishedAt: "2023-05-26T04:03:00Z",
      content: null,
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Yuka Hayashi, Richard Rubin",
      title:
        "Chip Companies, Wary of Break With China, Seek Looser Limits on Federal Cash",
      description:
        "Companies warn that regulations undermine U.S. attempt to revive semiconductor industry",
      url: "https://www.wsj.com/articles/chip-companies-wary-of-break-with-china-seek-looser-limits-on-federal-cash-cea2067e?mod=hp_lead_pos3",
      urlToImage: "https://images.wsj.net/im-789199/social",
      publishedAt: "2023-05-26T04:01:00Z",
      content: null,
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Asa Fitch",
      title: "How AI Is Catapulting Nvidia Toward the $1 Trillion Club",
      description:
        "Company’s chips are leaders in processing the complex calculations driving latest internet revolution",
      url: "https://www.wsj.com/articles/how-ai-is-catapulting-nvidia-toward-the-1-trillion-club-14f42380?mod=hp_lead_pos7",
      urlToImage: "https://images.wsj.net/im-788824/social",
      publishedAt: "2023-05-26T04:01:00Z",
      content: null,
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Joanna Stern",
      title: "Reality Is Broken. We Have AI Photos to Blame.",
      description:
        "Adobe Firefly, Midjourney, FaceApp and Try It On are leading AI’s crazy photo-software revolution",
      url: "https://www.wsj.com/articles/reality-is-broken-we-have-ai-photos-to-blame-de00b23?mod=hp_lead_pos9",
      urlToImage: "https://images.wsj.net/im-789063/social",
      publishedAt: "2023-05-26T04:01:00Z",
      content: null,
    },
  ];
  constructor() {
    super();
    console.log("i am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>This is a news component</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3">
            <NewsItem
              key={element.url}
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
        })}
        
          
        </div>
      </div>
    );
  }
}
