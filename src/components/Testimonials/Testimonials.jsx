import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { heading, layout } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "swiper";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Paul, 30",
      content:
        "Ich bin richtig froh, dass eine Freundin dich empfohlen hat und ich in deiner Coaching-Session war.  Das hat mein Leben zum Positiven verändert. Erst mit deiner Hilfe, Olga, konnte ich den Kern des Problems erkennen und so wusste ich dann, was eigentlich los ist und begann, Dinge zu verändern. Du hast mich bei diesem Prozess begleitet, warst meine vertraute Bezugsperson, hast mir viele Möglichkeiten aufgezeigt, die mir vorher nie bewusst waren. Und deine Affirmation hat mir einen richtigen und notwendigen Schub während dieser Lebensveränderung gegeben, ich konnte altes Verhalten ablegen und es durch ein neues, sehr positives, lösungsorientiertes Verhalten innerhalb kurzer Zeit ersetzen. Das hat dazu geführt, dass ich eine glückliche Beziehung führen kann, wieder vertrauen kann und vor allem wieder in der Lage bin, Gefühle zu empfinden.  Mein Leben ist insgesamt so viel besser geworden, ich bin glücklich und die Finanzen sind dadurch   auch viel einfacher für mich zu verdienen, alle Lebensbereiche sind um so vielfaches besser geworden, ich kann jetzt mein Traumleben führen und danke dir vom Herzen dafür.",
    },
    {
      id: 2,
      name: "Emil, 49",
      content:
        "Hallo Frau Agovic, ich wollte mich einfach kurz melden und Ihben darüber erzählen, wie es mir jetzt geht. Es ist nun 2 Monate her, dass wir den letzten Coaching Termin hatten und mir geht es total gut. Ich fühle mich sehr stabil, zufrieden mit mir und mit meinem Leben, meine Geschäftspartner respektieren mich mehr und sagen mir viel Gutes über meine neue veränderte Persönlichkeit. Auch mein Gesundheitszustand ist super! Ich fühle mich fit, bin wieder belastbar und kann auch soziale Kontakte gut pflegen, habe für alles wieder Kraft! Sie haben mir geholfen, meine Abhängigkeiten loszuwerden. Das Schlimnste war das Rauchen, Ihre Affirmationen haben 'magische' Wirkung, ich bin kein Raucher mehr! Meine Frau freut sich darüber auch sehr, wir haben keine Konflikte mehr wegen der Raucherei. Als Unternehmer habe ich immer so viel zu tun und so wenig Zeit, aber jetzt habe ich deutlich mehr Energie für alles, ich bin Erfolgreicher, mein Unternehmen expandiert und wächst von Tag zu Tag, ich habe wieder so viele Pläne und Lust zum Leben, bald werde ich meinen 50. feiern und habe jetzt schon Vorfreude,  dort alle zu sehen, die mir wichtig sind und allen von meinem Erfolg zu berichten. Ich danke Ihnen dafür, dass Sie mir neue Perspektiven und auch diese großartige Lebensqualität ermöglicht haben.",
    },
    {
      id: 3,
      name: "Finn, 45",
      content:
        "Vielen Dank dass du mich in einer sehr schwierigen und entscheidenden Phase, in der ich alleine keinen Weg finden konnte, begleitet hast. Obwohl ich ein sehr geschlossener Mensch bin, konnte ich mich mit Hilfe deiner netten und freundlichen Art und Weise vom ersten Tag an öffnen und Reise zu mir selbst und meinem Herzen begeben. Ich denke jeder Mensch müsste mind. einmal in seinem Leben ein Coaching machen, denn so eine Chance einzigartig!",
    },
    {
      id: 4,
      name: "Ekaterina, 23",
      content:
        "Obwohl ich am Anfang von der ganzen nicht wirklich überzeugt war, muss ich zugeben, dass diese Entscheidung eine der besten Entscheidungen war, die ich in den letzten Jahren für mich selbst entschieden habe. Vielen Dank Olga, dass ich durch dich den Weg finden konnte wie ich mich selbst wahrnehmen soll und wie ich meine Selbstliebe und mein Gefühlswert finden kann.",
    },
    {
      id: 5,
      name: "Leon, 30",
      content:
        "PAls ich mit meiner Frau Beziehungsprobleme hatte, habe ich mich an Frau Agovic gewandt. Sie hat mir so vieles klar gemacht und mich dabei unterstützt, zu verstehen, was ich von meiner Ehe erwarte und wir ich leben möchte. Dann ist meine Frau auch mitgekommen, weil sie auch wollte, wieder glücklich zu sein. Da ich geschäftlich sehr viel unterwegs bin, ist es eine besondere Herausforderung für mich, eine gute Beziehung zu führen, genug Zeit für meine Frau zu haben und dass wir wieder Vertrauen zu einander zu haben. In der Geschäftswelt ist Vertrauen auch ein wertvolles Gut, aber auch da habe ich im Laufe der Jahre so viele Rückschläge und Verrat erlebt, sodass es mir schwer gefallen ist, generell Menschen zu vertrauen. Auch meiner Frau. Alle Lebensbereiche waren betroffen. Aber nach dem Coaching habe ich wieder gelernt, zu vertrauen. Frau Agovic arbeitet mit Menschen sehr vertrauensvoll und  diskret. Sie wurde die Bezugsperson für uns. Wir sind so froh, ihr auf unserem Lebensweg begegnet zu sein, meine  Frau und ich sind wieder glücklich zusammen. Wir können es nur jedem Paar, jeder Familie oder auch jedem Menschen, der Beziehungsprobleme jeglicher Art hat, empfehlen, sich an Frau Agovic zu wenden.",
    },
    {
      id: 6,
      name: "Anna, 38",
      content:
        "Ich kam zum Coaching , weil meine Großfamilie echt schwierig ist. Ich habe so darunter gelitten unnd wusste echt nicht mehr, wie ich damit umgehen sollte, ich konnte es mir nicht mehr anschauen. Meine Mutter hat sehr gelitten, weil sie mit einem Narzissten viele Jahre zusammen lebt. Die sind meine Eltern, ich liebe sie beide, aber meine Mama ist schon krank von ihrem Mann. Und es hat Einfluss auf den Rest der Familie- meine Schwester, Tanten, Neffen. Und auf mich natürlich. Die Situation war echt schwierig, zum Einen konnte ich selber keine tragfähige Beziehungen zu Männern aufbauen, keine Familie Gründen. Zum Anderen: ich habe sehr gelitten, weil es meiner Mutter nicht gut geht und ich mich hilflos und hin und her gerissrn gefühlt habe. Dank Frau Agovic habe ich begriffen, wie ich mit der Situation umgehen kann, ich habe so viel gelernt, ich konnte sein, wie ich bin bei ihr, weil sie Menschen so akzeptiert, wie sie sind. Es gab so vieles, was wir aufgearbeitet haben. Ich bin jetzt in einer glücklichen Beziehung, kann mit meiner Stammfamilie für mich gut umgehen, es geht mir gut. Und als Sahnehäubchen dazu hat mich die Arbeit von Frau Agovic so inspiriert, dass ich mich sogar entschlossen habe, mich beruflich weiter zu entwickeln und habe auch meine Selbständigkeit gestartet, was ich schon immer machen wollte und mich vorher nie getraut hatte. Vielen Dank für alles!",
    },
  ];

  const swiperOptions = {
    modules: [Pagination],
    slidesPerView: "auto",
    spaceBetween: 50,
    initialSlide: 2,
    navigation: true,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <section
      id="testimonials"
      className={`${layout.boxContainer} py-6 pb-12 gap-6`}
    >
      <h1 className={`${heading.levelFour} headingLevelFour`}>Testimonials</h1>
      <div className="flex relative">
        <Swiper {...swiperOptions}>
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="hover:border-primary border-2 rounded-2xl h-full transition-colors group duration-300">
                <div className="flex flex-col justify-between gap-6 p-8 h-full">
                  <div className="flex flex-col items-start">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      size="2x"
                      className="text-primary"
                    />
                    <p
                      className={`${heading.paragraph} headingLevelFive italic`}
                    >
                      {testimonial.content}
                    </p>
                  </div>

                  <p className={`${heading.levelOne} headingLevelThree`}>
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination" />
      </div>
    </section>
  );
};

export default Testimonials;
