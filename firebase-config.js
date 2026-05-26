const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT.firebaseapp.com",
  projectId: "PROJECT_ID",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

async function requestPermission() {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    console.log("تم السماح بالإشعارات");
  }
}

requestPermission();
