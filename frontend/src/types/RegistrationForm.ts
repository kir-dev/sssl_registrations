interface RegistrationForm {
  name: string // név
  nickname: string // becenév
  email: string // email
  tel: string // telefon
  year: string // évfolyam
  university: string // Egyetem
  group: string // Gárda
  room_number: string // szobaszám
  other: string //egyéb megjegyzés
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  eula: boolean //elfogadja a feltételeket
}

export default RegistrationForm
