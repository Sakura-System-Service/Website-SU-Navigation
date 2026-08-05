const suOffices = [
  ["Tokyo Office", "14-1, Kyobashi, 2-Chome, Chuo-ku, Tokyo, 104-0031, Japan (the same office as Shokuyu Tanker Co., Ltd.)", "(81) 3-5579-5092", "(81) 3-6685-0552"],
  ["Shokuyu Tanker Co., Ltd.", "14-1, Kyobashi, 2-Chome, Chuo-ku, Tokyo, 104-0031, Japan", "(81) 3-5579-5097 (Overseas Tanker Department)", "(81) 3-6685-0552"],
  ["Shanghai Representative Office", "Room 1611, 69 Dongfang Road, Pudong New Area, Shanghai, China 200120", "(86) 21-6860-0023", "(86) 21-5877-8362"],
  ["Sun Technomarine Co., Ltd.", "14-1, Kyobashi, 2-Chome, Chuo-ku, Tokyo, 104-0031, Japan", "(81) 3-5579-5096", "(81) 3-6685-0974"],
  ["ST Marine Co., Ltd.", "Korean Air Lines Building 3F, 146, Jungang-daero, Jung-gu, Busan, 48936, Korea", "(82) 51-462-8121", "(82) 51-462-8123"],
];

const groupDirectory = [
  ["Overseas Tanker Department", "+81 (0)3 5579 5093", ""],
  ["SU Navigation Pte. Ltd. (Tokyo office)", "+81 (0)3 5579 5097", ""],
  ["Domestic Tanker Department", "+81 (0)3 5579 5094", ""],
  ["Ship Management Department", "+81 (0)3 5579 5095", "Fax: +81 (0)3 6685 0435 (Domestic) · +81 (0)3 6685 0974 (Overseas)"],
  ["Sun Technomarine Co., Ltd.", "+81 (0)3 5579 5096", "Fax: +81 (0)3 6685 0974"],
  ["Accounting, General Affairs Department", "+81 (0)3 5579 5092", "Fax: +81 (0)3 6880 4316"],
];

export default function ContactPage() {
  return <main className="subpage"><header className="subpage-header"><a href="/Website-SU-Navigation/" className="subpage-brand">SU NAVIGATION</a><nav><a href="/Website-SU-Navigation/about">About</a><a href="/Website-SU-Navigation/services">Services &amp; safety</a><a href="/Website-SU-Navigation/fleet">Fleet</a><a href="/Website-SU-Navigation/contact">Contact</a></nav></header>
    <section className="subpage-hero"><p>Access &amp; contact</p><h1>Start a<br/><em>conversation.</em></h1><a href="https://www.sunavigation.com/contact.html" target="_blank" rel="noreferrer">View SU Navigation&apos;s official contact page ↗</a></section>
    <section className="subpage-section contact-detail"><div className="singapore-office"><div><img src="/Website-SU-Navigation/icons/flag-singapore.svg" alt="Singapore flag"/><p>Head office · Singapore</p><h2>SU Navigation Pte. Ltd.</h2><address>200 Cantonment Road #14-04 Southpoint<br/>Singapore 089763</address><a href="tel:+6562250800">+65 6225 0800</a><span>Fax: +65 6225 0607</span><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=200+Cantonment+Road+%2314-04+Southpoint%2C+Singapore+089763" target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div><iframe title="SU Navigation Singapore head office map" src="https://www.google.com/maps?q=200%20Cantonment%20Road%20%2314-04%20Southpoint%2C%20Singapore%20089763&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
      <div className="directory-heading"><div><h2>SU Navigation directory</h2><p>Official SU Navigation contact details, including its regional offices and group partners.</p></div><a href="https://www.sunavigation.com/contact.html" target="_blank" rel="noreferrer">Source ↗</a></div>
      <div className="office-directory">{suOffices.map(([name, address, tel, fax]) => <article key={name}><h3>{name}</h3><address>{address}</address><a href={`tel:${tel.replace(/[^+\d]/g, "")}`}>{tel}</a><span>Fax: {fax}</span></article>)}</div>
      <div className="group-directory" id="tokyo-directory"><div className="directory-heading"><div><h2>Tokyo departmental directory</h2><p>Direct telephone lines for the Shokuyu Tanker Group&apos;s Tokyo headquarters. These are kept separate from SU Navigation&apos;s office directory because some group-office contacts differ.</p></div><a href="https://www.shokuyu.com/en/contact.html" target="_blank" rel="noreferrer">Source ↗</a></div><div className="group-directory-table"><div className="group-location"><h3>Tokyo headquarters office</h3><address>14-1, Kyobashi 2-Chome, Chuo-ku, Tokyo 104-0031, Japan</address><p>Choose a department below for its direct telephone number.</p></div>{groupDirectory.map(([department, tel, fax]) => <article key={department}><h3>{department}</h3><a href={`tel:${tel.replace(/[^+\d]/g, "")}`}>{tel}</a>{fax && <span>{fax}</span>}</article>)}</div><div className="group-regions"><article><h3>Busan · ST Marine Co., Ltd.</h3><address>Korean Air Lines BLDG, 3F, 146, Jungang-daero, Jung-gu, Busan, Korea</address><a href="tel:+82514628121">+82 51 462 8121</a><span>Fax: +82 51 462 8123</span></article><article><h3>Shanghai · Representative Office</h3><address>RM 2211, 22F, 69 Dongfang Road, Pudong New Area, Shanghai, China</address><a href="tel:+862168600053">+86 21 6860 0053</a><span>Fax: +86 21 5877 8362</span></article></div></div>
    </section>
  </main>;
}
