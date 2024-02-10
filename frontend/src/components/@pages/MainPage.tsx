import { Alert, AlertIcon, Heading, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { useAvailability } from '../../utils/useAvailability'
import { LinkButton } from '../@elements/LinkButton'
import { Paragraph } from '../@elements/Paragraph'
import { Section } from '../@elements/Section'
import { StyledAlert } from '../@elements/StyledAlert'
import { Page } from '../@layout/Page'

export const MainPage: React.FC = () => {
  const { available, loading, error } = useAvailability()
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
        Ismerd meg a képzést{available && ' és jelentkezz'}!
      </Paragraph>
      {error && (
        <Alert status="error" mt={5} borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <VStack justifyContent="center" mt={20} alignItems="center">
        {available && <StyledAlert w="fit-content">Jelentkezési határidő: március 4. 23:59</StyledAlert>}
        <ApplicationButton show={available} loading={loading} />
        {!available && !loading && !error && (
          <StyledAlert status="error" w="fit-content">
            Jelenleg nincs jelentkezés.
          </StyledAlert>
        )}
        {/*<Button as="a" href="#tapasztalatok" colorScheme="theme" size="lg" variant="ghost">*/}
        {/*  Tapasztalatok*/}
        {/*</Button>*/}
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
          Ezzel a kérdéssel kapcsolatban viszont már egészen más a helyzet! Emberekkel való foglalkozást, az egyén szintjétől kezdve akár
          több száz fős társaságokig. Rengeteg különböző szituációban ismerkedhetsz más egyetemistákkal, akikkel persze több fronton együtt
          is dolgozhatsz. Az évek során olyan szociális skill-ekre tehetsz szert, amik később, az egyetemet követően bizony a hasznodra
          válhatnak és behozhatatlan előnnyel ruháznak fel.
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
      <Section title="Kipróbálnád milyen egy rendezvény megszervezése?">
        <Paragraph>
          Rendezvényszervezési tapasztalatokat szerezhetsz a BME egyik legnagyobb öntevékeny hallgatói szervezetében. És gondolunk itt kis
          embertömeget megmozgató rekreációs programoktól kezdve az óriásrendezvényekig, mint egy Gólyatábor, Gólyahét, Gólyabál, Egyetemi
          Nyílt Nap. A résztvevők számát, mind a rendezői csapat méretét és az esemény típusát tekintve széles és színes az a bizonyos
          paletta. Közben pedig kipróbálhatsz bármilyen feladatot.
        </Paragraph>
        <Paragraph>
          Például hogy milyen egy-egy rendezvény után, mikor már mindenki álomra hajtotta a fejét, ekkor láthatatlan hősként elpakolni és
          kitakarítani az egész helyszínt, mintha mi sem történt volna, vagy órákkal előtte öltönyben, báli ruhában egy híres zenekarral
          kontaktolni a fellépésük előtt.
        </Paragraph>
      </Section>
      <Section title="Motiválj másokat!">
        <Paragraph>
          Megtanulhatsz honlapokra cikkeket, motiváló sorokat és visszaemlékezéseket írni. Amik idővel reméled, hogy a megannyi társad közül
          akár csak pár emberhez is ugyan, de eljutnak. S közben pedig elindítanak egy olyan folyamatot, ami egyfajta pillangóhatásként évek
          múltán szebbé, jobbá és többé teszi az életet.
        </Paragraph>
      </Section>
      <Section title="Kapcsolati tőke">
        <Paragraph>
          És persze, ami talán a legfontosabb - köztünk nem csak a tanulmányaiddal leszel elfoglalva az egyetemi féléveid alatt, hanem a
          közösségi életbe is betekintést nyerhetsz.
        </Paragraph>
        <Paragraph>
          Új ismerősöket, barátokat szerezhetsz, akár egy életre is, valamint olyan élményeket, amik mellett nemcsak a vizsgaidőszakok
          kínszenvedéseire és az elfogyasztott energiaital- vagy kávétengerekre emlékszel majd vissza.
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
        <ApplicationButton show={available} loading={loading} />
      </VStack>
      {/*<Heading as="h2" size="2xl" id="tapasztalatok" textAlign="center">*/}
      {/*  Seniorok tapasztalatai*/}
      {/*</Heading>*/}
      {/*<VStack spacing={20} my={14}>*/}
      {/*  {Testimonials.map((t, index) => (*/}
      {/*    <TestimonialCard key={index} name={t.name} content={t.content} avatar={t.avatar} />*/}
      {/*  ))}*/}
      {/*</VStack>*/}
      <VStack justifyContent="center" alignItems="center">
        <ApplicationButton show={available} loading={loading} />
      </VStack>
    </Page>
  )
}

type ApplicationButtonProps = {
  show: boolean
  loading: boolean
}

const ApplicationButton: React.FC<ApplicationButtonProps> = ({ show, loading }) => {
  if (!show && !loading) return null
  return (
    <LinkButton href="/jelentkezes" colorScheme="theme" size="lg" isLoading={loading}>
      Jelentkezz most!
    </LinkButton>
  )
}
