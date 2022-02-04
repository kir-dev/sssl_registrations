# SSSL Reg 

This is a quick registration website for SSSL

## TODO 

Copy frontend from cmsch project

## api documentation

There is only one api endpoint, where you can post form data.
Here is an example interface:

```typescript

export interface RegistrationFormDTO{
    name:string; // név
    nickname:string; // becenév
    tel: string; // telefon
    year: number; // évfolyam
    university: string; // Egyetem
    group: string; // Gárda
    room_number: number; // szobaszám
    other?: string //egyéb megjegyzés
    schedule: { //mikor ér rá
        monday?: boolean;
        tuesday? :boolean;
        wednesday?: boolean;
        thursday?: boolean;
    }
    eula?: boolean; //elfogadja a feltételeket
}

```

And an example api call

```typescript

const api = 'https://sssl-staging.herokuapp.com/api'

const form_response: RegistrationFormDTO = {
    "name": "Teszt Elek",
    "nickname": "Telek",
    "tel": "063332525",
    "year":3,
    "university": "BME",
    "group": "White",
    "room_number": 1319,
    "other": "",
    
    "schedule": {
        "monday": true,
        "tuesday":true
        // ha kihagyod a napot az implicit false értékű lesz backenden
    }
}

axios.post<RegistrationFormDTO>(`${api}/registrations.json`,form_response).then(res => {
    console.log(res.data) // response is the same DTO and status code 201
})
.catch(err =>{
    //rossz form adatok esetén 422
    const response = err.response
    console.log(response.statusCode) //422
    
    console.log(response.data) // egy json a következő formában { <hibás property neve>: ["hibaüzenet1", "hibaüzenet2"], <másik hibás property>   }

    //pl { eula: [ "must be accepted" ] }
    
})

```
