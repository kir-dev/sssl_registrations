interface RegistrationFormDTO {
  name: string // név
  nickname: string // becenév
  tel: string // telefon
  year: number // évfolyam
  university: string // Egyetem
  group: string // Gárda
  room_number: number // szobaszám
  other?: string //egyéb megjegyzés
  schedule: {
    //mikor ér rá
    monday?: boolean
    tuesday?: boolean
    wednesday?: boolean
    thursday?: boolean
  }
  eula?: boolean //elfogadja a feltételeket
}

export default RegistrationFormDTO
