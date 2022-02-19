import React, { useState } from 'react'
import { Page } from '../@layout/Page'
import {
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Spinner,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { ArrowBackIcon, EmailIcon, PhoneIcon, WarningIcon } from '@chakra-ui/icons'
import { Requirements } from '../../content/FormContent'
import { FaVirus } from 'react-icons/fa'
import { LinkButton } from '../@elements/LinkButton'
import { useForm } from 'react-hook-form'
import RegistrationFormDTO from '../../types/RegistrationFormDTO'
import RegistrationForm from '../../types/RegistrationForm'
import axios from 'axios'
import { Configuration } from '../../utils/configuration'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAvailability } from '../../utils/useAvailability'
import { StyledAlert } from '../@elements/StyledAlert'

export const FormPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorResponse, setErrorResponse] = useState<string>()
  const navigate = useNavigate()
  const { available, loading, error } = useAvailability()
  // Hook form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationForm>()

  // Submit
  const onSubmit = (values: RegistrationForm) => {
    const { monday, tuesday, wednesday, thursday, room_number, year, ...fields } = values
    const dto: RegistrationFormDTO = {
      ...fields,
      schedule: { monday, tuesday, wednesday, thursday },
      room_number: parseInt(room_number || '0'),
      year: parseInt(year)
    }
    setIsLoading(true)
    axios
      .post<RegistrationFormDTO>(`${Configuration.API_URL}/registrations.json`, dto)
      .then(() => {
        navigate('/siker')
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setErrorResponse(err.response.data.status || 'A jelentkezés nem érvényes, ellenőrizd a mezőket!')
        } else {
          setErrorResponse('Nem sikerült elküldeni az űrlapot.')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  if (loading)
    return (
      <Page>
        <Center mt={10} h="100vh">
          <Spinner color={useColorModeValue('theme.500', 'theme.600')} size="xl" thickness="0.3rem" />
        </Center>
      </Page>
    )
  if (!available || error) return <Navigate to="/" />
  return (
    <Page>
      {/* Back button */}
      <VStack justifyContent="center" alignItems="center" mt={10}>
        <LinkButton href="/" colorScheme="theme" size="lg" variant="ghost" leftIcon={<ArrowBackIcon />}>
          Főoldal
        </LinkButton>
      </VStack>

      {/* Title */}
      <Heading as="h1" size="3xl" mt={10}>
        Jelentkezés a képzésre
      </Heading>

      <StyledAlert w="fit-content" mx="auto" my={10}>
        Jelentkezési határidő: február 28. 23:59
      </StyledAlert>

      {/* Form body */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={10} maxW="xl" mx="auto" bgColor="white" p={10} boxShadow="lg" borderRadius="lg">
          {/* Requirements */}
          <Text textAlign="left" width="full" my={0} fontWeight="bold">
            A jelentkezésnek több feltétele is van, amiket vállalnod kell:
          </Text>
          <List spacing={5}>
            {Requirements.map((req, index) => (
              <ListItem key={index}>
                <HStack>
                  <ListIcon as={WarningIcon} color="yellow.500" />
                  <Text>{req}</Text>
                </HStack>
              </ListItem>
            ))}
            <ListItem>
              <HStack>
                <ListIcon as={FaVirus} color="red.500" />
                <Text>
                  Vírushelyzeti korlátozások esetén a fent említett események és alkalmak online kerülnek megrendezésre. Ebben az esetben
                  biztosítani kell a hang- és videókapcsolatot az alkalmakon.
                </Text>
              </HStack>
            </ListItem>
          </List>
          {/* Fields */}
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Teljes név</FormLabel>
            <Input {...register('name', { required: true })} />
            {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.nickname}>
            <FormLabel htmlFor="nickname">Becenév</FormLabel>
            <Input {...register('nickname', { required: true })} />
            {errors.nickname && <FormErrorMessage>{errors.nickname.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">E-mail cím</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
              <Input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            </InputGroup>
            {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.tel}>
            <FormLabel htmlFor="tel">Telefonszám</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} />
              <Input {...register('tel', { required: true, pattern: /\+?\d{10,11}/ })} placeholder="+36123456789" />
            </InputGroup>
            {errors.tel && <FormErrorMessage>{errors.tel.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.university}>
            <FormLabel htmlFor="university">Szak</FormLabel>
            <Select {...register('university', { required: true })} placeholder="Választás...">
              <option value="mernokinfo">Mérnökinformatikus</option>
              <option value="villamosmernok">Villamosmérnök</option>
              <option value="uzemmernok">Üzemmérnök-informatikus</option>
              <option value="kulsos">Külsős</option>
            </Select>
            {errors.university && <FormErrorMessage>{errors.university.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.year}>
            <FormLabel htmlFor="year">Évfolyam</FormLabel>
            <NumberInput defaultValue={1} min={1} max={10}>
              <NumberInputField {...register('year', { required: true })} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {errors.year && <FormErrorMessage>{errors.year.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.group}>
            <FormLabel htmlFor="group">Gárda</FormLabel>
            <Select {...register('group', { required: true })} placeholder="Választás...">
              <option value="fekete">Fekete</option>
              <option value="feher">Fehér</option>
              <option value="sarga">Sárga</option>
              <option value="piros">Piros</option>
              <option value="kek">Kék</option>
              <option value="nincs">Nincs</option>
            </Select>
            {errors.group && <FormErrorMessage>{errors.group.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.room_number}>
            <FormLabel htmlFor="room_number">Schönherz Szobaszám</FormLabel>
            <NumberInput min={100} max={1820}>
              <NumberInputField {...register('room_number')} />
            </NumberInput>
            <FormHelperText>Ha nem a Schönherz-ben laksz, hagyd üresen!</FormHelperText>
            {errors.room_number && <FormErrorMessage>{errors.room_number.message}</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Ráérés</FormLabel>
            <CheckboxGroup colorScheme="theme" defaultValue={['hetfo', 'kedd']}>
              <Stack spacing={5} direction={['column', 'row']}>
                <Checkbox {...register('monday', { required: false })}>Hétfő</Checkbox>
                <Checkbox {...register('tuesday', { required: false })}>Kedd</Checkbox>
                <Checkbox {...register('wednesday', { required: false })}>Szerda</Checkbox>
                <Checkbox {...register('thursday', { required: false })}>Csütörtök</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <StyledAlert>
            Az alkalmakról hiányozni nem lehet. Ha már most látod, hogy valamelyik alkalmon nem fogsz tudni részt venni, jelezd felénk
            megjegyzésként.
          </StyledAlert>
          <FormControl isInvalid={!!errors.other}>
            <FormLabel htmlFor="other">Megjegyzés (opcionális)</FormLabel>
            <Textarea {...register('other')} placeholder="Egyéb kérés, óhaj, sóhaj..." resize="vertical" />
            {errors.other && <FormErrorMessage>{errors.other.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.eula}>
            <Checkbox {...register('eula', { required: true })} colorScheme="theme">
              Elfogadom a fent leírtakat, adataim helyesek.
            </Checkbox>
            {errors.eula && <FormErrorMessage>{errors.eula.message}</FormErrorMessage>}
          </FormControl>
          <VStack spacing={10}>
            <Button isLoading={isLoading} colorScheme="theme" size="lg" type="submit">
              Jelentkezés!
            </Button>
            {Object.keys(errors).length > 0 && <Text color="red.500">Egy vagy több mező hibás!</Text>}
            {errorResponse && <Text color="red.500">{errorResponse}</Text>}
          </VStack>
        </VStack>
      </form>
    </Page>
  )
}
