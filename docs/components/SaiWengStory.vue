<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1>El Abuelo Optimista y Su Caballo</h1>
        <p class="subtitle">塞翁失马 - Cuento Popular Chino</p >

        <button @click="toggleAudio" class="audio-button">
          <span v-if="isPlaying">⏸</span>
          <span v-else>▶</span>
          {{ isPlaying ? 'Pausar Historia' : 'Escuchar Historia (4 min)' }}
        </button>

        <p class="audio-info">Audio en español | Impresión disponible abajo ↓</p >
      </div>

      <!-- Story Content -->
      <div class="story-content">
        <h2>塞翁失馬 焉知非福</h2>

        <p class="first-paragraph">
          En un pequeño pueblo cerca de la frontera vivía un anciano que adoraba criar caballos, conocido por todos como "el Abuelo Optimista".
        </p >

        <p v-for="(paragraph, index) in storyParagraphs" :key="index">
          {{ paragraph }}
        </p >
      </div>

      <!-- Questions Section -->
      <div class="questions-section">
        <h3>💭 Preguntas para Reflexionar (5 min)</h3>
        <ol>
          <li v-for="(question, index) in questions" :key="index">
            {{ question }}
          </li>
        </ol>
      </div>

      <!-- Teacher Pack -->
      <div class="teacher-pack">
        <h3>📄 Materiales para Imprimir</h3>
        <div class="materials-list">
          <div v-for="material in materials" :key="material.id" class="material-item">
            <button class="download-button" @click="downloadMaterial(material.id)">
              📄 {{ material.title }}
            </button>
            <span class="material-desc">{{ material.description }}</span>
          </div>
        </div>
        <p class="note">PDFs optimizados para impresión en blanco y negro • Menos de 500KB cada uno</p >
      </div>

      <!-- Membership -->
      <div class="membership-bar">
        <p>¿Te gustaría recibir 2 cuentos nuevos cada semana?</p >
        <button class="subscribe-button">Suscribirse por 3.5€/mes</button>
      </div>

      <!-- Footer -->
      <footer class="footer">
        <p><strong>Etiquetas:</strong> China • Fábula • 4 minutos • Optimismo • Sabiduría Oriental • SDG 16</p >
        <p><strong>Objetivos de Desarrollo Sostenible:</strong> Este cuento apoya el ODS 16 (Paz, Justicia e Instituciones Sólidas) al fomentar la resiliencia emocional y la paz interior ante los conflictos y cambios de la vida.</p >
        <p><strong>Información técnica:</strong> Audio disponible en español neutro • PDFs < 500KB • Optimizado para dispositivos móviles</p >
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isPlaying = ref(false);

const storyParagraphs = [
  'Un día, su caballo más querido escapó por la montaña y desapareció. Los vecinos, al enterarse, acudieron a consolarlo: "¡Qué mala pata! No te lo tomes tan a pecho". Pero el Abuelo Optimista, con una sonrisa, respondió: "He perdido un caballo, pero ¿quién sabe si esto no acabará siendo algo bueno?". Los vecinos pensaron que el viejo solo intentaba animarse a sí mismo.',

  'Unos días después, ocurrió algo sorprendente. El caballo perdido regresó, y no solo, sino acompañado de un magnífico caballo salvaje, alto y vigoroso, que nadie había visto antes. Los vecinos, llenos de admiración, fueron a felicitarlo: "¡Menuda suerte! ¡Qué visión tuviste, esto es una bendición!". Sin embargo, el Abuelo Optimista no se dejó llevar por la alegría. Con un aire de cautela, dijo: "Que me haya caído un caballo tan bueno sin más no tiene por qué ser una suerte. A veces, estas cosas traen problemas".',

  'El hijo del Abuelo Optimista quedó fascinado con el caballo salvaje, que parecía tan imponente. Todos los días lo montaba para dar un paseo. Pero un día, al galopar con demasiada prisa, se cayó del caballo y se rompió una pierna. Los vecinos volvieron para consolarlo, pero el anciano, sereno como siempre, comentó: "Que mi hijo se haya roto la pierna es una desgracia, pero ¿quién puede asegurar que no será el comienzo de algo bueno?". Los vecinos, una vez más, se quedaron perplejos ante su actitud.',

  'Poco tiempo después, estalló una guerra en el reino, y todos los jóvenes sanos fueron llamados a filas. Gracias a su pierna rota, el hijo del Abuelo Optimista se libró de ir al frente. Cuando la guerra terminó, muchos jóvenes no regresaron, pero el hijo del anciano, por lo que parecía una desgracia, tuvo la fortuna de seguir con vida, sano y salvo en casa.'
];

const questions = [
  '¿Cuántas veces cambia de "malo" a "bueno" el suceso en esta historia?',
  '¿Has perdido algo que luego resultó ser una bendición? Comparte tu experiencia.',
  'Si algo malo te sucede hoy, ¿cómo podrías verlo con los ojos del Abuelo Optimista?',
  '¿Qué nos enseña este cuento sobre juzgar los acontecimientos demasiado rápido?'
];

const materials = [
  { id: 1, title: 'Ficha Educativa A4', description: 'Guía para maestros con actividades' },
  { id: 2, title: 'Comic Ilustrado B/N', description: '4 viñetas para colorear' },
  { id: 3, title: 'Diario de Gratitud', description: '7 días de reflexión' }
];

const toggleAudio = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    alert('Audio pendiente de implementación. Aquí se reproduciría el cuento narrado.');
  }
};

const downloadMaterial = (id) => {
  alert(`Descargando material ${id}...`);
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 1rem;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.hero-section h1 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.audio-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  margin: 1rem 0;
  transition: transform 0.2s;
}

.audio-button:hover {
  transform: scale(1.05);
}

.audio-info {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 1rem;
}

.story-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.story-content h2 {
  font-size: 2rem;
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 400;
}

.story-content p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
  color: #2c3e50;
  font-size: 1.1rem;
}

.first-paragraph::first-letter {
  font-size: 3.5rem;
  float: left;
  line-height: 1;
  margin: 0.1rem 0.5rem 0 0;
  color: #667eea;
  font-weight: bold;
}

.questions-section {
  background: #f8f9fa;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
}

.questions-section h3 {
  font-size: 1.5rem;
  color: #667eea;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.questions-section ol {
  padding-left: 1.5rem;
}

.questions-section li {
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: #2c3e50;
}

.teacher-pack {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.teacher-pack h3 {
  font-size: 1.5rem;
  color: #667eea;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.materials-list {
  margin-bottom: 1rem;
}

.material-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.download-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
}

.download-button:hover {
  background: #764ba2;
}

.material-desc {
  color: #666;
  font-size: 0.9rem;
}

.note {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

.membership-bar {
  background: #ffd93d;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.membership-bar p {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.subscribe-button {
  background: #2c3e50;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.subscribe-button:hover {
  background: #34495e;
}

.footer {
  background: #2c3e50;
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  font-size: 0.9rem;
}

.footer p {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.footer p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 1.8rem;
  }

  .story-content {
    padding: 1.5rem;
  }

  .material-item {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>