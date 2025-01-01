// Navegación entre secciones
const sections = {
  menu: document.querySelector('.main-menu'),
  radioisotopes: document.getElementById('radioisotopesSection'),
  diagnosticSimulator: document.getElementById('diagnosticSimulatorSection'),
  trivia: document.getElementById('triviaSection'),
};

document.getElementById('radioisotopes').addEventListener('click', () => showSection('radioisotopes'));
document.getElementById('diagnosticSimulator').addEventListener('click', () => showSection('diagnosticSimulator'));
document.getElementById('trivia').addEventListener('click', () => showSection('trivia'));
document.getElementById('backToMenu1').addEventListener('click', () => showSection('menu'));
document.getElementById('backToMenu2').addEventListener('click', () => showSection('menu'));
document.getElementById('backToMenu3').addEventListener('click', () => showSection('menu'));

function showSection(section) {
  Object.values(sections).forEach(sec => sec.classList.add('hidden'));
  sections[section].classList.remove('hidden');
}

// Explorador de Radioisótopos
const isotopeButtons = document.querySelectorAll('.isotope-btn');
const isotopeInfo = document.getElementById('isotopeInfo');
const isotopeName = document.getElementById('isotopeName');
const isotopeDescription = document.getElementById('isotopeDescription');
const isotopeApplications = document.getElementById('isotopeApplications');

const isotopeData = {
  tecnecio: {
    name: 'Tecnecio-99m',
    description: 'Usado en el 80% de los estudios de imágenes médicas.',
    applications: ['Diagnóstico de huesos', 'Imágenes cardíacas', 'Visualización de tejidos blandos'],
  },
  yodo: {
    name: 'Yodo-131',
    description: 'Utilizado en tratamientos de tiroides.',
    applications: ['Terapias de hipertiroidismo', 'Tratamiento de cáncer de tiroides'],
  },
  lutecio: {
    name: 'Lutecio-177',
    description: 'Radioisótopo para tratamientos avanzados contra cáncer.',
    applications: ['Terapia dirigida a tumores neuroendocrinos'],
  },
};

isotopeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isotope = button.getAttribute('data-isotope');
    isotopeName.textContent = isotopeData[isotope].name;
    isotopeDescription.textContent = isotopeData[isotope].description;
    isotopeApplications.innerHTML = isotopeData[isotope].applications.map(app => `<li>${app}</li>`).join('');
    isotopeInfo.classList.remove('hidden');
  });
});

document.getElementById('backToRadioisotopes').addEventListener('click', () => {
  isotopeInfo.classList.add('hidden');
});

// Simulador de Diagnóstico
const diagnosticButtons = document.querySelectorAll('.diagnostic-btn');
const diagnosticDetails = document.getElementById('diagnosticDetails');
const procedureTitle = document.getElementById('procedureTitle');
const procedureDescription = document.getElementById('procedureDescription');
const procedureApplications = document.getElementById('procedureApplications');

const diagnosticData = {
  tomografia: {
    title: 'Tomografía computarizada con Tecnecio-99m',
    description: 'El Tecnecio-99m es un radioisótopo ampliamente utilizado en tomografías computarizadas (SPECT).',
    applications: ['Evaluación del flujo sanguíneo cerebral', 'Detección de metástasis óseas', 'Diagnóstico de infecciones y lesiones cardíacas'],
  },
  tiroides: {
    title: 'Terapia de Tiroides con Yodo-131',
    description: 'El Yodo-131 se utiliza para tratar el hipertiroidismo y el cáncer de tiroides.',
    applications: ['Tratamiento de hipertiroidismo', 'Eliminación de restos tiroideos', 'Terapia para cáncer de tiroides avanzado'],
  },
  gammagrafia: {
    title: 'Gammagrafía con Lutecio-177',
    description: 'La gammagrafía con Lutecio-177 permite visualizar tejidos específicos.',
    applications: ['Diagnóstico de tumores neuroendocrinos', 'Monitoreo de metástasis óseas'],
  },
};

diagnosticButtons.forEach(button => {
  button.addEventListener('click', () => {
    const procedure = button.getAttribute('data-procedure');
    const data = diagnosticData[procedure];
    procedureTitle.textContent = data.title;
    procedureDescription.textContent = data.description;
    procedureApplications.innerHTML = data.applications.map(app => `<li>${app}</li>`).join('');
    diagnosticDetails.classList.remove('hidden');
    document.querySelector('.diagnostic-options').classList.add('hidden');
  });
});

document.getElementById('backToProcedures').addEventListener('click', () => {
  diagnosticDetails.classList.add('hidden');
  document.querySelector('.diagnostic-options').classList.remove('hidden');
});

// Trivia
const questions = document.querySelectorAll('.question');
const triviaFeedback = document.getElementById('triviaFeedback');
const finalTriviaFeedback = document.getElementById('finalTriviaFeedback');
let correctAnswers = 0;

questions.forEach((question, index) => {
  const buttons = question.querySelectorAll('.trivia-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const isCorrect = button.getAttribute('data-correct') === 'true';
      triviaFeedback.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo.';
      triviaFeedback.style.color = isCorrect ? 'green' : 'red';

      if (isCorrect) {
        correctAnswers++;
        question.classList.add('hidden');
        if (index < questions.length - 1) {
          questions[index + 1].classList.remove('hidden');
        } else {
          triviaFeedback.classList.add('hidden');
          finalTriviaFeedback.textContent = `¡Trivia completada! Respuestas correctas: ${correctAnswers}/${questions.length}`;
          finalTriviaFeedback.classList.remove('hidden');
        }
      }
    });
  });
});

