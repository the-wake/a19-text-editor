import { openDB } from 'idb';

const initdb = async () =>
  openDB('jateDB', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // console.log(content); // content ends up being just the data, not the whole object.
  const jateDb = await openDB('jateDB', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, data: content });
  const result = await request;
  console.log('🚀 - data saved to the database');
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jateDB', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  // This whole thing seems like complete jank and I can't tell why I have to do it or how IDB works.
  console.log('Result from reloat getDb:', result);
  if (!result[0]) {
    console.log('No data found.');
  } else {
    console.log('Data found:', result[0].data);
    return result[0].data;
  }
};

initdb();
