// script.js

// Définition des descriptions et événements historiques pour chaque siècle
const centuries = {
    1: {
        description: 'Le 1er siècle est marqué par des événements historiques majeurs comme la naissance du christianisme avec la vie de Jésus-Christ, la fondation de l\'Église chrétienne et l\'expansion de l\'Empire romain.',
        events: [
            'Vie de Jésus-Christ',
            'Fondation de l\'Église chrétienne',
            'Expansion de l\'Empire romain'
        ]
    },
    2: {
        description: 'Le 2e siècle, connu comme la Pax Romana (la paix romaine), a été une période de relative stabilité et de prospérité dans l\'Empire romain, marquée par l\'avènement des Antonins (Trajan, Hadrien, Antonin le Pieux) et le développement de la littérature, de l\'art et de la philosophie.',
        events: [
            'Avènement des Antonins',
            'Développement de la littérature romaine',
            'Floraison de la philosophie stoïcienne'
        ]
    },
    3: {
        description: 'Le 3e siècle a été marqué par des événements comme les crises du 3e siècle dans l\'Empire romain, caractérisées par des troubles politiques, économiques et militaires. C\'est une période de changements dynastiques fréquents, de guerres civiles et d\'invasions barbares. Sur le plan intellectuel, des philosophes comme Plotin ont influencé la pensée néoplatonicienne.',
        events: [
            'Crises du 3e siècle dans l\'Empire romain',
            'Invasions barbares',
            'Développement de la pensée néoplatonicienne'
        ]
    },
    4: {
        description: 'Le 4e siècle a été une période de transition pour l\'Empire romain, marqué par l\'édit de Milan en 313 sous l\'empereur Constantin, qui a légalisé le christianisme, marquant une étape majeure dans l\'histoire du christianisme. La fondation de Constantinople par Constantin a consolidé l\'Empire romain d\'Orient.',
        events: [
            'Édit de Milan (313)',
            'Fondation de Constantinople',
            'Début du christianisme comme religion d\'État'
        ]
    },
    5: {
        description: 'Le 5e siècle a vu le déclin de l\'Empire romain d\'Occident avec des événements comme la sac de Rome par les Wisigoths en 410 et la chute finale de l\'Empire romain d\'Occident en 476. C\'est également une période de mouvements migratoires des peuples germaniques.',
        events: [
            'Saccage de Rome par les Wisigoths (410)',
            'Chute de l\'Empire romain d\'Occident (476)',
            'Migrations des peuples germaniques'
        ]
    },
    6: {
        description: 'Le 6e siècle a été une période de renaissance culturelle dans l\'Empire byzantin sous l\'empereur Justinien, connu pour son Code de lois et la construction de la basilique Sainte-Sophie à Constantinople. Sur le plan religieux, le schisme entre l\'Église orthodoxe et l\'Église catholique a commencé à se développer.',
        events: [
            'Règne de l\'empereur Justinien',
            'Construction de la basilique Sainte-Sophie',
            'Développement du droit romain'
        ]
    },
    7: {
        description: 'Le 7e siècle a été marqué par l\'expansion rapide de l\'Islam sous le prophète Mahomet et les Califes bien guidés. Les conquêtes islamiques ont eu un impact significatif sur le Moyen-Orient, l\'Afrique du Nord et l\'Espagne. Sur le plan culturel, des avancées significatives ont été réalisées dans les sciences, les mathématiques et l\'architecture islamique.',
        events: [
            'Expansion de l\'Islam sous Mahomet et les Califes',
            'Conquête de l\'Espagne',
            'Développement de la science et de l\'astronomie'
        ]
    },
    8: {
        description: 'Le 8e siècle a vu l\'essor de l\'Empire carolingien en Europe occidentale sous Charlemagne, qui a consolidé une grande partie de l\'Europe occidentale sous un seul empire chrétien. Cette période a été marquée par des avancées significatives dans l\'art, la littérature et l\'éducation.',
        events: [
            'Couronnement de Charlemagne (800)',
            'Renaissance carolingienne',
            'Établissement des écoles monastiques'
        ]
    },
    9: {
        description: 'Le 9e siècle a été une période de troubles politiques en Europe avec les invasions vikings et la montée des royaumes européens. Cependant, c\'est aussi une période de renouveau culturel avec le développement de l\'art carolingien et des premières universités européennes.',
        events: [
            'Invasions vikings en Europe',
            'Développement de l\'art carolingien',
            'Fondation des premières universités européennes'
        ]
    },
    10: {
        description: 'Le 10e siècle a été une période de consolidation des royaumes européens et de progrès dans l\'architecture romane. C\'est également une période de renouveau économique avec l\'expansion du commerce et des villes.',
        events: [
            'Établissement des royaumes européens',
            'Développement de l\'architecture romane',
            'Expansion du commerce en Europe'
        ]
    },
    11: {
        description: 'Le 11e siècle a été marqué par l\'essor des croisades, des expéditions militaires chrétiennes visant à reprendre Jérusalem et la Terre sainte aux musulmans. C\'est également une période de progrès dans la technologie, l\'architecture romane et l\'art gothique.',
        events: [
            'Première croisade (1096-1099)',
            'Développement de l\'architecture gothique',
            'Progrès dans la métallurgie et l\'armement'
        ]
    },
    12: {
        description: 'Le 12e siècle a été une période de prospérité et d\'innovation en Europe, avec des développements dans la philosophie, la théologie et l\'architecture gothique. C\'est également une période de croissance démographique et d\'expansion économique.',
        events: [
            'Apogée de la philosophie scolastique',
            'Construction des premières cathédrales gothiques',
            'Renouveau de la pensée juridique'
        ]
    },
    13: {
        description: 'Le 13e siècle a été une période de transformations sociales et économiques en Europe, marquée par des conflits militaires comme les Croisades et l\'essor des villes et du commerce. Sur le plan culturel, c\'est une période de développement de la littérature, de l\'art et de l\'architecture gothique.',
        events: [
            'Quatrième croisade (1202-1204)',
            'Inquisition médiévale',
            'Règne de Frédéric II du Saint-Empire (1212-1250)',
            'Mongol Invasion de l\'Europe de l\'Est (1237-1242)'
        ]
    },
    14: {
        description: 'Le 14e siècle a été une période de crises en Europe, incluant la Peste Noire qui a décimé une grande partie de la population européenne et des conflits comme la Guerre de Cent Ans. Malgré ces défis, c\'est également une période de renouveau culturel avec le développement de la Renaissance tardive et de l\'humanisme.',
        events: [
            'Peste Noire (1347-1351)',
            'Début de la Guerre de Cent Ans (1337)',
            'Développement de la Renaissance tardive'
        ]
    },
    15: {
        description: 'Le 15e siècle a été une période de renouveau culturel et artistique en Europe, avec la Renaissance italienne qui a vu l\'éclosion de grands artistes comme Leonardo da Vinci, Michel-Ange et Raphaël. C\'est également une période de Grandes découvertes avec les explorations de nouveaux territoires par les Européens.',
        events: [
            'Renaissance italienne',
            'Grandes découvertes',
            'Invention de l\'imprimerie par Johannes Gutenberg (1450)'
        ]
    },
    16: {
        description: 'Le 16e siècle a été marqué par des réformes religieuses comme la Réforme protestante initiée par Martin Luther, qui a conduit à la division de l\'Église chrétienne en catholique et protestante. C\'est également une période de grandes découvertes scientifiques et de progrès dans les arts et les sciences.',
        events: [
            'Réforme protestante (1517)',
            'Premières explorations européennes en Amérique',
            'Révolution copernicienne en astronomie'
        ]
    },
    17: {
        description: 'Le 17e siècle a été une période de conflits comme la Guerre de Trente Ans en Europe, marquée par des luttes religieuses et politiques. C\'est également une période de développements significatifs dans les sciences et la philosophie avec des figures comme Galilée, Descartes et Newton.',
        events: [
            'Guerre de Trente Ans (1618-1648)',
            'Révolution scientifique',
            'Développement du calcul infinitésimal'
        ]
    },
    18: {
        description: 'Le 18e siècle, connu comme le Siècle des Lumières, a été marqué par des avancées dans la pensée philosophique avec des penseurs comme Voltaire, Rousseau et Montesquieu. C\'est également une période de révolutions politiques comme la Révolution américaine et la Révolution française.',
        events: [
            'Révolution américaine (1775-1783)',
            'Révolution française (1789)',
            'Déclaration des Droits de l\'Homme et du Citoyen (1789)'
        ]
    },
    19: {
        description: 'Le 19e siècle a été une période de bouleversements politiques et sociaux majeurs en Europe, incluant la Révolution industrielle qui a transformé les modes de production et de vie. C\'est également une période de nationalisme croissant et de mouvements pour les droits civils et politiques.',
        events: [
            'Révolution industrielle',
            'Printemps des Peuples (1848)',
            'Unification de l\'Italie et de l\'Allemagne'
        ]
    },
    20: {
        description: 'Le 20e siècle a été marqué par des guerres mondiales dévastatrices qui ont redéfini la politique mondiale et les relations internationales. C\'est également une période de révolutions technologiques majeures avec l\'avènement de l\'aviation, de l\'énergie nucléaire et de l\'informatique.',
        events: [
            'Première Guerre mondiale (1914-1918)',
            'Seconde Guerre mondiale (1939-1945)',
            'Révolution informatique et technologique'
        ]
    },
    21: {
        description: 'Le 21e siècle a débuté avec des défis mondiaux comme le terrorisme international, les changements climatiques et des avancées technologiques rapides dans les domaines de l\'information et de la communication. C\'est une période de mondialisation croissante et de transformations sociales à l\'échelle mondiale.',
        events: [
            'Attentats du 11 septembre 2001',
            'Révolution numérique',
            'Accords de Paris sur le climat (2015)'
        ]
    },
    0: {
        description: 'Le 0e siècle, également connu sous le nom d\'Ère Commune, marque la période allant de l\'an 1 avant J.-C. à l\'an 1 après J.-C., selon le calendrier grégorien. C\'est une période de transition dans l\'histoire ancienne marquée par l\'avènement du christianisme et l\'expansion de l\'Empire romain.',
        events: [
            'Naissance de Jésus-Christ',
            'Expansion de l\'Empire romain',
            'Début du christianisme comme mouvement religieux'
        ]
    }
};

// Fonction pour afficher les détails d'un siècle donné
function showCentury(century) {
    const centuryDetails = document.getElementById('century-details');
    const description = centuries[century].description;
    const events = centuries[century].events;

    let eventsList = '<ul>';
    events.forEach(event => {
        eventsList += `<li>${event}</li>`;
    });
    eventsList += '</ul>';

    centuryDetails.innerHTML = `
        <h3>${century}e siècle :</h3>
        <p>${description}</p>
        <h4>Événements importants :</h4>
        ${eventsList}
    `;
}

// Fonction pour initialiser l'écouteur d'événement sur le formulaire du quiz
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answer1 = document.querySelector('input[name="question1"]:checked');
    const answer2 = document.querySelector('input[name="question2"]:checked');
    const answer3 = document.querySelector('input[name="question3"]:checked');

    let score = 0;

    // Vérification de la question 1
    if (answer1?.value === 'a') {
        score++;
        answer1.parentElement.classList.add('correct');
    } else {
        answer1.parentElement.classList.add('incorrect');
        document.querySelector('input[value="a"]').parentElement.classList.add('correct');
    }

    // Vérification de la question 2
    if (answer2?.value === 'a') {
        score++;
        answer2.parentElement.classList.add('correct');
    } else {
        answer2.parentElement.classList.add('incorrect');
        document.querySelector('input[value="a"]').parentElement.classList.add('correct');
    }

    // Vérification de la question 3
    if (answer3?.value === 'c') {
        score++;
        answer3.parentElement.classList.add('correct');
    } else {
        answer3.parentElement.classList.add('incorrect');
        document.querySelector('input[value="c"]').parentElement.classList.add('correct');
    }

    // Attribution du texte de résultat en fonction du score obtenu
    let resultText;
    if (score === 3) {
        resultText = 'Félicitations ! Vous avez répondu correctement à toutes les questions.';
    } else if (score === 2) {
        resultText = 'Bien joué ! Vous avez répondu correctement à deux questions sur trois.';
    } else if (score === 1) {
        resultText = 'Pas mal ! Vous avez répondu correctement à une question sur trois.';
    } else {
        resultText = 'Vous pouvez faire mieux. Réessayez !';
    }

    // Affichage du texte de résultat
    document.getElementById('quizResult').textContent = resultText;
});
