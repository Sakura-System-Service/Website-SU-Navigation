const profile = [
  ["Company name", "SU NAVIGATION PTE. LTD."], ["Established", "November 1st, 2004"], ["Capital", "S$ 6,000,000"], ["Representative", "Naemura Takashi"],
  ["Head office", "200 Cantonment Road #14-04 Southpoint, Singapore 089763"], ["Tokyo liaison office", "14-1, Kyobashi, 2-Chome, Chuo-ku, Tokyo, 104-0031, Japan (the same office as Shokuyu Tanker Co., Ltd.)"],
  ["Business area", "Marine Transportation Business"], ["Shareholder", "Shokuyu Tanker Co., Ltd. 100%"],
];

const history = [
  ["1967 · January", "Established Shokuyu Tanker Co., Ltd."], ["2004 · November", "Established SU Navigation Pte. Ltd. with S$2,000,000 in capital as a joint venture."],
  ["2009 · January", "SU head office relocated to its present address."], ["2010 · March", "Became wholly owned by Shokuyu Tanker Co., Ltd."],
  ["2019 · April", "Increased capital to S$6,000,000."], ["2019 · June", "Became a ship owner for the first time since establishment by purchasing M/T Sun Diana."],
  ["2022 · March", "Takashi Naemura appointed Managing Director."], ["2022 · April", "Signed the construction contract for a 12,500 DWT SUS chemical tanker."],
  ["2022 · June", "Sold M/T Sun Diana to a European company."], ["2023 · June", "M/T Sun Mercury joined the fleet as the first Singapore-flagged vessel."],
];

export default function AboutPage() {
  return <main className="subpage"><header className="subpage-header"><a href="/Website-SU-Navigation/" className="subpage-brand">SU NAVIGATION</a><nav><a href="/Website-SU-Navigation/about">About</a><a href="/Website-SU-Navigation/services">Services &amp; safety</a><a href="/Website-SU-Navigation/fleet">Fleet</a><a href="/Website-SU-Navigation/contact">Contact</a></nav></header>
    <section className="subpage-hero"><p>About SU Navigation</p><h1>Regional expertise,<br/><em>built over decades.</em></h1><a href="https://www.sunavigation.com/about/index.html" target="_blank" rel="noreferrer">View the original SU Navigation information ↗</a></section>
    <section className="subpage-section mission"><h2>Group mission</h2><p className="subpage-lead">Active contribution to and promotion of the chemical and oil industry through reliable and safe marine transportation services.</p><ol><li>Put customer satisfaction first for mutual benefit and coexistence.</li><li>Build trust through safe and reliable transportation services.</li><li>Improve performance while fostering employee capability and happiness.</li><li>Deepen knowledge of vessels, operations, shipping and cargoes.</li><li>Encourage the open exchange of ideas to improve operational efficiency.</li><li>Make prompt, correct decisions while preserving the strengths of a private holding company.</li></ol></section>
    <section className="subpage-section profile"><h2>Company profile</h2><dl>{profile.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl><div className="profile-columns"><div><h3>Directors</h3><p>Director, Chairman: Toyama Naoto<br/>CEO &amp; Managing Director: Naemura Takashi<br/>Senior Executive Director: Sakurai Masahiro<br/>Director: Kinoshita Kenzo<br/>Chief Operating Officer: Araki Yuichi</p></div><div><h3>Group companies</h3><p><a href="https://www.shokuyu.com/" target="_blank" rel="noreferrer">Shokuyu Tanker Co., Ltd. (Japan) ↗</a><br/>Shokuyu Navigation S.A. (Panama)<br/>Sun Navigation Co., S.A. (Panama)<br/><a href="https://sun-technomarine.com/" target="_blank" rel="noreferrer">Sun Technomarine Co., Ltd. (Japan) ↗</a><br/>ST Marine Co., Ltd. (Korea)</p></div><div><h3>Major banks</h3><p>MUFG Bank, Ltd.<br/>Mizuho Bank, Ltd.<br/>The Iyo Bank, Ltd.</p></div></div></section>
    <section className="subpage-section history"><h2>Brief history</h2><div className="timeline">{history.map(([date, event]) => <article key={date}><time>{date}</time><p>{event}</p></article>)}</div></section>
  </main>;
}
