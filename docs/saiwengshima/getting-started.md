```HTML
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Abuelo Optimista y Su Caballo - Cuento Chino</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.8;
            color: #2c3e50;
            background: #fafafa;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .hero {
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
            margin-bottom: 40px;
        }
        
        .hero h1 {
            font-size: 2em;
            margin-bottom: 20px;
            font-weight: 300;
            letter-spacing: 1px;
        }
        
        .audio-btn {
            background: white;
            color: #667eea;
            border: none;
            padding: 15px 40px;
            font-size: 1.1em;
            border-radius: 30px;
            cursor: pointer;
            margin: 20px 0;
            transition: transform 0.2s;
            font-weight: 600;
        }
        
        .audio-btn:hover {
            transform: scale(1.05);
        }
        
        .hero p {
            font-size: 0.9em;
            opacity: 0.9;
        }
        
        .story {
            background: white;
            padding: 40px;
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .story h2 {
            font-size: 1.8em;
            margin-bottom: 30px;
            color: #667eea;
            font-weight: 400;
            text-align: center;
        }
        
        .story p {
            margin-bottom: 20px;
            text-align: justify;
            font-size: 1.1em;
        }
        
        .story p:first-of-type::first-letter {
            font-size: 3em;
            float: left;
            line-height: 0.9;
            margin: 5px 10px 0 0;
            color: #667eea;
            font-weight: bold;
        }
        
        .questions {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            border-left: 4px solid #667eea;
        }
        
        .questions h3 {
            font-size: 1.4em;
            margin-bottom: 20px;
            color: #667eea;
            font-weight: 400;
        }
        
        .questions ol {
            padding-left: 20px;
        }
        
        .questions li {
            margin-bottom: 15px;
            font-size: 1.05em;
        }
        
        .teacher-pack {
            background: white;
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .teacher-pack h3 {
            font-size: 1.4em;
            margin-bottom: 20px;
            color: #667eea;
            font-weight: 400;
        }
        
        .teacher-pack ul {
            list-style: none;
            margin-bottom: 15px;
        }
        
        .teacher-pack li {
            margin-bottom: 12px;
        }
        
        .btn-pdf {
            display: inline-block;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            transition: background 0.3s;
        }
        
        .btn-pdf:hover {
            background: #764ba2;
        }
        
        .teacher-pack p {
            font-size: 0.9em;
            color: #666;
            font-style: italic;
        }
        
        .member-bar {
            background: #ffd93d;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .member-bar p {
            margin-bottom: 15px;
            font-size: 1.1em;
            font-weight: 600;
        }
        
        .btn-member {
            display: inline-block;
            padding: 12px 30px;
            background: #2c3e50;
            color: white;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 600;
            transition: background 0.3s;
        }
        
        .btn-member:hover {
            background: #34495e;
        }
        
        footer {
            background: #2c3e50;
            color: white;
            padding: 30px;
            border-radius: 12px;
            font-size: 0.9em;
        }
        
        footer p {
            margin-bottom: 10px;
            line-height: 1.6;
        }
        
        footer p:last-child {
            margin-bottom: 0;
        }
        
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            
            .hero h1 {
                font-size: 1.5em;
            }
            
            .story {
                padding: 25px;
            }
            
            .story h2 {
                font-size: 1.4em;
            }
            
            .story p {
                font-size: 1em;
            }
        }
    </style>
</head>
<body>
    <div class="hero">
        <h1>El Abuelo Optimista y Su Caballo</h1>
        <p>塞翁失马 - Cuento Popular Chino</p>
        <button class="audio-btn" onclick="playAudio()">▶ Escuchar Historia (4 min)</button>
        <audio id="storyAudio"></audio>
        <p>Audio en español | Impresión disponible abajo ↓</p>
    </div>

    <div class="story">
        <h2>塞翁失馬 焉知非福</h2>
        
        <p>En un pequeño pueblo cerca de la frontera vivía un anciano que adoraba criar caballos, conocido por todos como "el Abuelo Optimista".</p>
        
        <p>Un día, su caballo más querido escapó por la montaña y desapareció. Los vecinos, al enterarse, acudieron a consolarlo: "¡Qué mala pata! No te lo tomes tan a pecho". Pero el Abuelo Optimista, con una sonrisa, respondió: "He perdido un caballo, pero ¿quién sabe si esto no acabará siendo algo bueno?". Los vecinos pensaron que el viejo solo intentaba animarse a sí mismo.</p>
        
        <p>Unos días después, ocurrió algo sorprendente. El caballo perdido regresó, y no solo, sino acompañado de un magnífico caballo salvaje, alto y vigoroso, que nadie había visto antes. Los vecinos, llenos de admiración, fueron a felicitarlo: "¡Menuda suerte! ¡Qué visión tuviste, esto es una bendición!". Sin embargo, el Abuelo Optimista no se dejó llevar por la alegría. Con un aire de cautela, dijo: "Que me haya caído un caballo tan bueno sin más no tiene por qué ser una suerte. A veces, estas cosas traen problemas".</p>
        
        <p>El hijo del Abuelo Optimista quedó fascinado con el caballo salvaje, que parecía tan imponente. Todos los días lo montaba para dar un paseo. Pero un día, al galopar con demasiada prisa, se cayó del caballo y se rompió una pierna. Los vecinos volvieron para consolarlo, pero el anciano, sereno como siempre, comentó: "Que mi hijo se haya roto la pierna es una desgracia, pero ¿quién puede asegurar que no será el comienzo de algo bueno?". Los vecinos, una vez más, se quedaron perplejos ante su actitud.</p>
        
        <p>Poco tiempo después, estalló una guerra en el reino, y todos los jóvenes sanos fueron llamados a filas. Gracias a su pierna rota, el hijo del Abuelo Optimista se libró de ir al frente. Cuando la guerra terminó, muchos jóvenes no regresaron, pero el hijo del anciano, por lo que parecía una desgracia, tuvo la fortuna de seguir con vida, sano y salvo en casa.</p>
    </div>

    <div class="questions">
        <h3>💭 Preguntas para Reflexionar (5 min)</h3>
        <ol>
            <li>¿Cuántas veces cambia de "malo" a "bueno" el suceso en esta historia?</li>
            <li>¿Has perdido algo que luego resultó ser una bendición? Comparte tu experiencia.</li>
            <li>Si algo malo te sucede hoy, ¿cómo podrías verlo con los ojos del Abuelo Optimista?</li>
            <li>¿Qué nos enseña este cuento sobre juzgar los acontecimientos demasiado rápido?</li>
        </ol>
    </div>

    <div class="teacher-pack">
        <h3>📄 Materiales para Imprimir</h3>
        <ul>
            <li><a href="#" class="btn-pdf">📄 Ficha Educativa A4</a> - Guía para maestros con actividades</li>
            <li><a href="#" class="btn-pdf">📄 Comic Ilustrado B/N</a> - 4 viñetas para colorear</li>
            <li><a href="#" class="btn-pdf">📄 Diario de Gratitud</a> - 7 días de reflexión</li>
        </ul>
        <p>PDFs optimizados para impresión en blanco y negro • Menos de 500KB cada uno</p>
    </div>

    <div class="member-bar">
        <p>¿Te gustaría recibir 2 cuentos nuevos cada semana?</p>
        <a href="#" class="btn-member">Suscribirse por 3.5€/mes</a>
    </div>

    <footer>
        <p><strong>Etiquetas:</strong> China • Fábula • 4 minutos • Optimismo • Sabiduría Oriental • SDG 16</p>
        <p><strong>Objetivos de Desarrollo Sostenible:</strong> Este cuento apoya el ODS 16 (Paz, Justicia e Instituciones Sólidas) al fomentar la resiliencia emocional y la paz interior ante los conflictos y cambios de la vida.</p>
        <p><strong>Información técnica:</strong> Audio disponible en español neutro • PDFs < 500KB • Optimizado para dispositivos móviles</p>
    </footer>

    <script>
        function playAudio() {
            const audio = document.getElementById('storyAudio');
            const btn = document.querySelector('.audio-btn');
            
            if (audio.paused) {
                alert('Audio pendiente de implementación. Aquí se reproduciría el cuento narrado.');
                btn.textContent = '⏸ Pausar';
            } else {
                audio.pause();
                btn.textContent = '▶ Escuchar Historia (4 min)';
            }
        }
    </script>
</body>
</html>
```