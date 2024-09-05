import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { db ,storage} from '../firebase'; // Import the Firestore database instance

const hackathonCollection = collection(db, 'hackathons');




// Create a new hackathon and upload an image
export async function createHackathonWithImage(hackathon, imageFile) {
  try {
    // First, create the hackathon document in Firestore
    const docRef = await addDoc(hackathonCollection, hackathon);
    const hackathonId = docRef.id;

    if (imageFile) {
      // If an image is provided, upload the image to Firebase Storage
      const storageRef = ref(storage, `hackathon_images/${hackathonId}`);
      const snapshot = await uploadBytes(storageRef, imageFile);

      // Get the image's URL from Firebase Storage
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Update the hackathon document with the image URL
      await updateDoc(doc(db, 'hackathons', hackathonId), {
        imageUrl
      });
    }

    console.log('Hackathon created with ID: ', hackathonId);
    return hackathonId; // Return the document ID if needed
  } catch (error) {
    console.error('Error creating hackathon: ', error);
    throw new Error('Unable to create hackathon');
  }
}

// Read all hackathons
export async function fetchHackathons() {
  try {
    const querySnapshot = await getDocs(hackathonCollection);
    const hackathons = [];
    querySnapshot.forEach((doc) => {
      hackathons.push({ id: doc.id, ...doc.data() });
    });
    return hackathons;
  } catch (error) {
    console.error('Error fetching hackathons: ', error);
    throw new Error('Unable to fetch hackathons');
  }
}


// Update an existing hackathon
export async function updateHackathon(id, updatedData) {
  try {
    const hackathonRef = doc(db, 'hackathons', id);
    await updateDoc(hackathonRef, updatedData);
    console.log('Hackathon updated with ID: ', id);
  } catch (error) {
    console.error('Error updating hackathon: ', error);
    throw new Error('Unable to update hackathon');
  }
}


// Delete a hackathon
export async function deleteHackathon(id) {
  try {
    const hackathonRef = doc(db, 'hackathons', id);
    await deleteDoc(hackathonRef);
    console.log('Hackathon deleted with ID: ', id);
  } catch (error) {
    console.error('Error deleting hackathon: ', error);
    throw new Error('Unable to delete hackathon');
  }
}
