import { Contacts } from '../../api/contacts/contacts.js';
import {} from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Tim',
    last: 'Byers',
    address: 'Holmes Hall 250 2540 Dole Street, Honolulu, HI',
    telephone: '808-123-4567',
    email: 'byerst@hawaii.edu'
  },
  {
    first: 'John',
    last: 'James',
    address: 'Holmes Hall 250 2540 Dole Street, Honolulu, HI',
    telephone: '808-123-4567',
    email: 'jjames@hawaii.edu'
  },
  {
    first: 'Robert',
    last: 'Michael',
    address: 'Holmes Hall 250 2540 Dole Street, Honolulu, HI',
    telephone: '808-123-4567',
    email: 'rmichael@hawaii.edu'
  },
];

/**
 * Initialize the Contact collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
