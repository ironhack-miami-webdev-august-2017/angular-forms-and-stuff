import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  contacts: any[] = [
    { id: 6, name: 'Irma', phone: '666-666-6666' },
    { id: 13, name: 'Maria', phone: '313-313-1313' },
    { id: 27, name: 'Jose', phone: '727-727-2727' }
  ];

  constructor() { }

  addContact(theContact: any) {
      const lastIndex = this.contacts.length - 1;
      const lastContact = this.contacts[lastIndex];

      theContact.id = lastContact.id + 1;
      this.contacts.push(theContact);
  }

  deleteContact(contactId: number) {
      let contactIndex;

      this.contacts.forEach((oneContact, index) => {
          if (oneContact.id === contactId) {
              contactIndex = index;
          }
      });

      this.contacts.splice(contactIndex, 1);

      // PRO WAY
      // this.contacts =
      //   this.contacts.filter(
      //     oneContact => oneContact.id !== contactId
      //   );
  }
}
