import React from 'react'
import { Page } from '../@layout/Page'
import { Button, Heading, useBreakpointValue, VStack } from '@chakra-ui/react'
import { Section } from '../@elements/Section'
import { Paragraph } from '../@elements/Paragraph'
import { LinkButton } from '../@elements/LinkButton'
import { Testimonials } from '../../content/Testimonials'
import { TestimonialCard } from '../@elements/TestimonialCard'

export const MainPage: React.FC = () => {
  return (
    <Page>
      <Heading as="h1" size={useBreakpointValue({ base: '2xl', sm: '3xl' })}>
        Üdvözlünk a{' '}
        <Heading as="span" color="theme.500" size={useBreakpointValue({ base: '2xl', sm: '3xl' })}>
          Seniorképzés
        </Heading>{' '}
        portálon
      </Heading>
      <Paragraph fontSize={25} color="gray.600" textAlign="center" mt={20}>
        Ismerd meg a képzést, olvass tapasztalatokat és jelentkezz!
      </Paragraph>
      <VStack justifyContent="center" mt={20} alignItems="center">
        <ApplicationButton />
        <Button as="a" href="#tapasztalatok" colorScheme="theme" size="lg" variant="ghost">
          Tapasztalatok
        </Button>
      </VStack>
      <Section title="Miért jelentkezz képzésre?">
        <Paragraph>
          A legőszintébb válaszunk erre a kérdésre az, hogy fogalmunk sincs. Noha nem azért, mert mi magunk sem tudjuk, mivel is
          foglalkozunk és miért csináljuk ezt akár egy, akár öt év távlatából. Nem, sokkal inkább az a helyzet a kérdés megválaszolását
          illetően, hogy nem ismerünk téged, aki épp ezeket a sorokat olvassa. Legalábbis még… :)
        </Paragraph>
        <Paragraph>
          Nem tudjuk, miben szeretnél fejlődni emberként. Hogy milyen feladatokban szeretnéd kipróbálni magad. Milyen pillanatok jelentik
          számodra azokat az élményeket, amikre évek múltán is nosztalgikusan emlékszel majd vissza.
        </Paragraph>
      </Section>
      <Section title="Mit tudunk akkor mi nyújtani?">
        <Paragraph>
          Na, ezzel a kérdéssel kapcsolatban viszont már egészen más a helyzet! Emberekkel való foglalkozást, az egyén szintjétől kezdve
          akár több száz fős társaságokig. Rengeteg különböző szituációban ismerkedhetsz más egyetemistákkal, akikkel persze több fronton
          együtt is dolgozhatsz. Az évek során olyan szociális skill-ekre tehetsz szert, amik később, az egyetemet követően bizony a
          hasznodra válhatnak és behozhatatlan előnnyel ruháznak fel.
        </Paragraph>
      </Section>
      <Section title="Félénk vagy kiállni emberek elé beszélni?">
        <Paragraph>
          Tölts el itt akár egy kis időt is, és az önlab/diplomaterv beszámolón le fogod nyűgözni a hallgatóságot. Persze csak ha dolgoztál
          is a félévben a témáddal ;) Egy kicsit zárkózott voltál eddig, de szeretnél rajta változtatni, fejlődni? Kommunikálj a
          legkülönfélébb emberekkel és a leendő munkahelyeden már első héten tudni fogod, milyen típusú munkatársakkal vagy körülvéve és
          hogyan tudsz velük majd hatékonyan együtt dolgozni.
        </Paragraph>
      </Section>
      <Section title="Szeretnél segíteni a többieken?">
        <Paragraph>
          Például a leendő gólyáknak, hogy egy kicsit könnyebben vehessék az Egyetem akadályait? Menj le hozzájuk ősszel, a képzés sikeres
          elvégzése után akár csak egy fél órát beszélgetni, könnyen lehet, hogy megspórolsz nekik több órányi kínlódást egy programkóddal
          vagy egy matekpéldával. Vagy szimplán csak te mutatod meg nekik a leendő kedvenc kajáldájukat, ahol még ki tudja, hányszor fognak
          jól lakni.
        </Paragraph>
      </Section>
      <Section title="Rendezvények">
        <Paragraph>
          Rendezvényszervezési tapasztalatokat szerezhetsz a BME egyik legnagyobb öntevékeny hallgatói szervezetében. És gondolunk itt kis
          embertömeget megmozgató rekreációs programoktól kezdve az óriásrendezvényekig, mint egy Gólyatábor, Gólyahét, Gólyabál, Egyetemi
          Nyílt Nap. Mind a résztvevők számát, a rendezői csapat méretét és az esemény típusát tekintve széles és színes az a bizonyos
          paletta. Közben pedig kipróbálhatsz bármilyen feladatot.
        </Paragraph>
      </Section>
      <Section title="Legyél te is hős!">
        <Paragraph>
          Például hogy milyen egy-egy rendezvény után, amikor már mindenki álomra hajtotta a fejét, láthatatlan hősként elpakolni és
          kitakarítani az egész helyszínt, mintha mi sem történt volna, vagy órákkal előtte öltönyben, báli ruhában egy híres zenekarral
          kontaktolni fellépés előtt.
        </Paragraph>
      </Section>
      <Section title="Motiválj másokat!">
        <Paragraph>
          Esetleg honlapokra cikkeket, motiváló sorokat és visszaemlékezéseket írni. Amik idővel reméled, hogy a megannyi társad közül akár
          csak pár emberhez is ugyan, de eljutnak. S közben pedig elindítanak egy olyan folyamatot, ami egyfajta pillangóhatásként évek
          múltán szebbé, jobbá és többé teszi az életet. És ez csak 3 “apró” példa volt a számtalan lehetőség közül.
        </Paragraph>
      </Section>
      <Section title="Kapcsolati tőke">
        <Paragraph>
          És persze, ami talán a legfontosabb - köztünk “teljesértékű” egyetemista lehetsz a tanulmányaid mellett. Új ismerősöket, barátokat
          szerezhetsz, akár egy életre is, valamint olyan élményeket, amik mellett nemcsak a vizsgaidőszakok kínszenvedéseire és az
          elfogyasztott energiaital- vagy kávétengerekre emlékszel majd vissza.
        </Paragraph>
      </Section>
      <Section title="Rajtad múlik!">
        <Paragraph>
          Egy kérdés, a legelső maradt már tehát csak megválaszolatlan - ám ahogy írtuk, ez a feladat bizony Rád vár. Mi csak az utat,
          illetve a megannyi lehetséges elágazást mutatjuk meg a számodra, amelynek a végén remélhetőleg megtalálod majd a válaszodat.
          Elindulni, megtenni rajta az első lépéseket Neked kell!
        </Paragraph>
      </Section>
      <VStack justifyContent="center" marginTop={10} alignItems="center">
        <ApplicationButton />
      </VStack>
      <Heading as="h2" size="2xl" id="tapasztalatok" textAlign="center">
        Seniorok tapasztalatai
      </Heading>
      <VStack spacing={20} my={14}>
        {Testimonials.map((t, index) => (
          <TestimonialCard key={index} name={t.name} role={t.role} content={t.content} avatar={t.avatar} />
        ))}
      </VStack>
      <VStack justifyContent="center" alignItems="center">
        <ApplicationButton />
      </VStack>
    </Page>
  )
}

const ApplicationButton: React.FC = () => {
  return (
    <LinkButton href="/jelentkezes" colorScheme="theme" size="lg">
      Jelentkezz most!
    </LinkButton>
  )
}
