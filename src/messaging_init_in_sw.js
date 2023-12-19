import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCCR9VGfOchUKWTcbLBabjeBJ8bJ8JQ9Yg",
  authDomain: "last-12b3a.firebaseapp.com",
  projectId: "last-12b3a",
  storageBucket: "last-12b3a.appspot.com",
  messagingSenderId: "720027948546",
  appId: "1:720027948546:web:f515675c5679f8bc7c791b",
  measurementId: "G-7BT5JLG6R2"
};


const requestPermissions = () => {
  console.log('Requesting User Permissions');
  Notification.requestPermission().then(permission => {
    if (permission == 'granted') {
      console.log('Notification User Permissions Granted ');

      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);

      getToken(messaging, {
        vapidKey: "BNXYMvXO9_4P1obCjJi2YfhQZR1OLyyWw0p5Rlku00iluh6SIbp2d2iHQ_oUdHrKbyq16q79TWfr38soTrTBDzo"
      }).then((currentToken) => {
        if (currentToken) {
          console.log("Client Token :", currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
      
    } else {
      console.log('User Permission Denied');
    }
  })
}

requestPermissions();
