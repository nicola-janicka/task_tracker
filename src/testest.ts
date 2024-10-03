import { from } from 'rxjs';

//Pobieranie danych z json-server:
async function getContacts() {
  const response = await fetch('http://localhost:3000/contacts', {
    method: 'GET',
  });
  const jsonContacts = await response.json();
  return jsonContacts; //funkcja zwraca Promise'a
}

export function testMe() {
  // Przypisuję wynik funkcji do zmiennej, która jest moim promisem
  let contacts = getContacts();

  //Zamiana Promise'a w Observable
  const contactsObservable = from(contacts);

  contactsObservable.subscribe((value) => {
    console.log(value);
  });
}
