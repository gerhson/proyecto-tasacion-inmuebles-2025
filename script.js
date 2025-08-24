// ===============================
// CLAVE GLOBAL
// ===============================
const CLAVE_GLOBAL = "12345"; // 🔑 Cambia esto cuando quieras bloquear usuarios

// Elementos
const gate = document.getElementById('gate');
const app = document.getElementById('app');
const gateMsg = document.getElementById('gateMsg');
const btnLogin = document.getElementById('btnLogin');
const logout = document.getElementById('logout');

// Login simple
btnLogin.onclick = () => {
  const inputClave = document.getElementById('clave').value;
  if (inputClave === CLAVE_GLOBAL) {
    gate.style.display = 'none';
    app.style.display = 'block';
    gateMsg.textContent = "";
  } else {
    gateMsg.textContent = "Clave incorrecta 🚫";
  }
};

// Logout
logout.onclick = () => {
  app.style.display = 'none';
  gate.style.display = 'block';
  document.getElementById('clave').value = "";
};

// ===============================
// Tu código de tasación
// ===============================
const FACTORES_TASACION = {
  antiguedad: { depreciacionAnual: 0.01, depreciacionMaxima: 0.30, premiumNuevo: 0.05 },
  dormitorios: { base: 2, incrementoPorDormitorio: 0.08, decrementoPorDefecto: 0.12, maximoIncremento: 0.25 },
  banos: { base: 2, incrementoPorBano: 0.06, decrementoPorDefecto: 0.15, maximoIncremento: 0.18 },
  areaLibre: { departamento: 0.25, casa: 0.40, terreno: 0.90 },
  tipoInmueble: { departamento: 1.0, casa: 1.12, terreno: 0.80, oficina: 0.95, local: 0.85 },
  eficienciaEnergetica: { A: 1.10, B: 1.05, C: 1.00, D: 0.95, E: 0.90, F: 0.85 },
  estadoConservacion: { excelente: 1.05, bueno: 1.00, regular: 0.90, remodelar: 0.75 }
};

// Funciones de cálculo (aplicarFactorAntiguedad, Dormitorios, Baños, Piso, Eficiencia, EstadoConservacion)
// ... copia todas tus funciones de script original aquí ...

// ===============================
// Ejecución principal
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const distritoSel = document.getElementById("distrito");
  const zonaSel = document.getElementById("zona");
  const tipoSel = document.getElementById("tipo");
  const form = document.getElementById("calc");

  // Cargar distritos
  Object.keys(DATA).forEach(distrito => {
    const option = document.createElement("option");
    option.value = distrito;
    option.textContent = distrito;
    distritoSel.appendChild(option);
  });

  // Cargar zonas según distrito
  distritoSel.addEventListener("change", () => {
    const distrito = distritoSel.value;
    zonaSel.innerHTML = '<option value="">Selecciona una zona</option>';
    if (DATA[distrito]?.zones) {
      Object.keys(DATA[distrito].zones).forEach(zone => {
        const option = document.createElement("option");
        option.value = zone;
        option.textContent = zone;
        zonaSel.appendChild(option);
      });
    }
  });

  // Ocultar campos según tipo de inmueble
  tipoSel.addEventListener("change", () => {
    // tu lógica de mostrar/ocultar campos según tipo
  });

  // Validación y cálculo
  form.addEventListener("submit", e => {
    e.preventDefault();
    calcular(); // función calcular que ya tenías
  });
});
