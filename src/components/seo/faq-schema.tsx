export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Czy robicie torty w Tarnowie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, oferujemy torty na zamówienie w Tarnowie i całym powiecie tarnowskim. Nasza cukiernia znajduje się w Rzuchowa (9 km od centrum Tarnowa) i obsługujemy Tarnów, Rzuchowa, Pleśna, Wierzchosławice oraz wszystkie miejscowości w promieniu 25 km od Tarnowa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy dostarczacie torty do Tarnowa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, zapewniamy dostawę tortów na terenie Tarnowa i okolic. Dostawa obejmuje całe miasto Tarnów oraz okoliczne miejscowości: Rzuchowa, Pleśna, Wierzchosławice i cały powiat tarnowski. Szczegóły dostawy ustalamy przy zamówieniu.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jakie torty można zamówić w Tarnowie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'W naszej cukierni w Tarnowie oferujemy szeroką gamę domowych tortów: torty urodzinowe, torty weselne, torty komunijne, torty chrzcielne, torty okolicznościowe. Każdy tort wykonujemy z naturalnych składników - belgijska czekolada, jajka z wolnego wybiegu, świeże owoce. Wszystkie torty są ręcznie robione na zamówienie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ile kosztuje tort w Tarnowie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceny tortów w Tarnowie zależą od rozmiaru, smaku i dekoracji. Najlepiej skontaktuj się z nami telefonicznie (668 368 596) lub mailowo (a.czuba@onet.pl), aby otrzymać indywidualną wycenę. Oferujemy konkurencyjne ceny przy wysokiej jakości domowych wypieków z naturalnych składników.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jak zamówić tort w Tarnowie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zamówienie tortu w Tarnowie jest proste: skontaktuj się z nami przez telefon (668 368 596), email (a.czuba@onet.pl), Instagram (@torty_agi_) lub Facebook. Powiedz nam jaka okazja, dla ilu osób, preferowane smaki i dekoracje. Zwykle odpowiadamy tego samego dnia. Polecamy składać zamówienia z co najmniej tygodniowym wyprzedzeniem.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy torty są zrobione z naturalnych składników?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, wszystkie nasze torty w Tarnowie wykonujemy wyłącznie z naturalnych składników najwyższej jakości. Używamy belgijskiej czekolady, jajek z wolnego wybiegu, prawdziwej śmietany, świeżych owoców. Nie stosujemy gotowych mieszanek, sztucznych barwników ani konserwantów. Każdy tort jest ręcznie robiony od podstaw.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jak daleko od Tarnowa się znajdujecie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nasza cukiernia znajduje się w Rzuchowa 484 (kod pocztowy 33-114), zaledwie 9 km od centrum Tarnowa. Dojazd z Tarnowa zajmuje około 15 minut samochodem. Obsługujemy cały Tarnów oraz wszystkie okoliczne miejscowości w promieniu 25 km.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy można zamówić tort w ostatniej chwili w Tarnowie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ponieważ każdy tort robimy ręcznie od podstaw z naturalnych składników, zalecamy składanie zamówień z wyprzedzeniem co najmniej 7 dni. W przypadku pilnych zamówień w Tarnowie, skontaktuj się z nami telefonicznie pod numerem 668 368 596 - postaramy się pomóc, jeśli będzie to możliwe.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
