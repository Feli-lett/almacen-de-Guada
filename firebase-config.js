// ==============================================================
// CONFIGURACIÓN DE FIREBASE PARA EL ALMACÉN DE GUADA
// ==============================================================
// Para activar la sincronización en vivo entre todos los dispositivos:
// Reemplazá las credenciales de abajo por las de tu proyecto de Firebase.

const firebaseConfig = {
  apiKey: "AIzaSyC_118FReQlI0R-PRzva1R9eu58MUGmw2o",
  authDomain: "almacen-de-guada.firebaseapp.com",
  projectId: "almacen-de-guada",
  storageBucket: "almacen-de-guada.firebasestorage.app",
  messagingSenderId: "759701126849",
  appId: "1:759701126849:web:cd27dbbdc885b464c2de40",
  measurementId: "G-DP3F4LXCV5"
};

// Comprobar si se ingresaron datos reales de Firebase
function isFirebaseConfigured() {
    return firebaseConfig.projectId && 
           !firebaseConfig.projectId.includes("tu-almacen-guada") && 
           !firebaseConfig.apiKey.includes("REEMPLAZAR");
}

// Inicialización de Firebase
if (typeof firebase !== 'undefined') {
    if (isFirebaseConfigured()) {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            window.db = firebase.firestore();
            console.log("🔥 Firebase Firestore conectado correctamente.");
        } catch (e) {
            console.error("Error al conectar Firebase:", e);
        }
    } else {
        console.log("ℹ️ Firebase en espera de credenciales. La tienda funciona en modo local temporal.");
    }
}
