
const quizQuestions = [
  // Niveau A1
  {
    level: "A1",
    categories: {
      grammaire: [
        { 
          question: "Complétez la phrase : 'Je _____ un livre.'",
          options: [ "lire","lis", "lira", "lu"],
          answer: 1
        },
        { 
          question: "Complétez la phrase : 'Il _____ beaucoup de devoirs.'",
          options: ["est", "ont","a",  "sont"],
          answer: 2
        },
        { 
          question: "Complétez la phrase : 'Nous _____ à l'école.'",
          options: [ "allée", "aller", "irons","allons"],
          answer: 3
        },
        { 
          question: "Complétez la phrase : 'Tu _____ un animal.'",
          options: ["as", "a", "es", "ont"],
          answer: 0
        },
        { 
          question: "Complétez la phrase : 'Elle _____ un livre.'",
          options: ["lie", "lire", "lit", "lis"],
          answer: 2
        },
        { 
          question: "Complétez la phrase : 'Nous _____ du pain.'",
          options: ["mangeons", "mange", "manger", "mangent"],
          answer: 0
        },
        { 
          question: "Complétez la phrase : 'Je _____ au parc.'",
          options: [ "va", "aller", "allé","vais"],
          answer: 3
        },
        { 
          question: "Complétez la phrase : 'Ils _____ dans une grande maison.'",
          options: ["vivente", "vivent", "vivre", "vivraient"],
          answer: 1
        },
        { 
          question: "Complétez la phrase : 'Elle _____ dans le jardin.'",
          options: ["coure", "court", "courir", "cours"],
          answer: 1
        },
        { 
          question: "Complétez la phrase : 'Nous ______ des jeux.'",
          options: ["jouons", "joue", "jouer", "jouerons"],
          answer: 0
        }
      ],
      vocabulaire: [
        { 
          question: "Quel est le contraire de 'grand' ?",
          options: ["petit", "large", "beau", "haut"],
          answer: 0
        },
        { 
          question: "Que signifie 'chien' ?",
          options: ["Un animal", "Un fruit", "Une couleur", "Un vêtement"],
          answer: 0
        },
        { 
          question: "Quel est l'intrus dans cette liste ?",
          options: ["voiture", "bicyclette", "moto", "pomme"],
          answer: 3
        },
        { 
          question: "Que signifie 'soleil' ?",
          options: ["Un fruit", "Un animal", "Un astre", "Un objet"],
          answer: 2
        },
        { 
          question: "Quel est le contraire de 'sombre' ?",
          options: ["Clair", "Vif", "Solide", "Lumineux"],
          answer: 3
        },
        { 
          question: "Que signifie 'chaud' ?",
          options: ["Froid", "Épais", "Température élevée", "Lourd"],
          answer: 2
        },
        { 
          question: "Quel est l'intrus ?",
          options: ["table", "chaise", "livre", "pomme"],
          answer: 3
        },
        { 
          question: "Quel est le contraire de 'bas' ?",
          options: [ "grand","haut", "lourd", "court"],
          answer: 1
        },
        { 
          question: "Complétez : Un _____ a des poils.",
          options: [ "arbre","chien", "soleil", "fleur"],
          answer: 1
        },
        { 
          question: "Quel est l'élément essentiel pour la photosynthèse ?",
          options: ["Soleil", "Lune", "Air", "Feu"],
          answer: 0
        }
      ],
      comprehension: [
        { 
          question: "Qu'est-ce que l'on fait après le déjeuner ?",
          options: [ "Dormir", "Se lever", "Travailler","Manger"],
          answer: 3
        },
        { 
          question: "Que fait-on dans une école ?",
          options: ["Chanter", "Apprendre", "Cuisiner", "Nager"],
          answer: 1
        },
        { 
          question: "Si tu veux boire de l'eau, que fais-tu ?",
          options: ["Manger", "Marcher", "Boire", "Écrire"],
          answer: 2
        },
        { 
          question: "Que met-on sur la tête quand il pleut ?",
          options: ["Chapeau", "Parapluie", "Lunettes", "Sac"],
          answer: 1
        },
        { 
          question: "Que faut-il faire pour cuisiner ?",
          options: ["Lire", "Mélanger", "Chanter", "Marcher"],
          answer: 1
        },
        { 
          question: "Que fait-on quand on est fatigué ?",
          options: ["Dormir", "S'amuser", "Cuisiner", "Marcher"],
          answer: 0
        },
        { 
          question: "Si tu veux lire un livre, tu _____",
          options: ["Chantes", "Vas à l'école", "Lis", "Écris"],
          answer: 2
        },
        { 
          question: "Que fais-tu quand il pleut ?",
          options: ["Nager", "Courir", "Prendre un parapluie", "Manger"],
          answer: 2
        },
        { 
          question: "Quand il fait chaud, on porte des _____",
          options: ["Tongs","Manteaux",  "Gants", "Bottes"],
          answer: 0
        },
        { 
          question: "Que fais-tu avec un livre ?",
          options: ["Lire", "Dormir", "Manger", "Faire du sport"],
          answer: 0
        }
      ]
    }
  },
  // Niveau A2
  {
    level: "A2",
    categories: {
      grammaire:[
        { 
          question: 'Complétez la phrase : "Je _____ souvent au cinéma."',
          options: ['vais', 'allé', 'aller', 'vas'],
          answer: 3
        },
        { 
          question: 'Complétez la phrase : "Elle _____ en France depuis un an."',
          options: ['vit', 'vivent', 'vivait', 'vivra'],
          answer: 2
        },
        { 
          question: 'Complétez la phrase : "Nous _____ à l\'école."',
          options: ['allons', 'allez', 'allée', 'aller'],
          answer: 0
        },
        { 
          question: 'Complétez la phrase : "Ils _____ aller au cinéma demain."',
          options: ['peuvent', 'pouvaient', 'pouvez', 'pouvoir'],
          answer: 1
        },
        { 
          question: 'Complétez la phrase : "Elle _____ au restaurant la semaine dernière."',
          options: ['est allée', 'allée', 'est allé', 'allait'],
          answer: 0
        },
        { 
          question: 'Complétez la phrase : "Je _____ mes devoirs ce soir."',
          options: ['ferai', 'faire', 'fais', 'faisais'],
          answer: 0
        },
        { 
          question: 'Complétez la phrase : "Nous _____ bien travailler ensemble."',
          options: ['pouvons', 'pourrons', 'peuvent', 'pouvoir'],
          answer: 1
        },
        { 
          question: 'Complétez la phrase : "Ils _____ très bien parler anglais."',
          options: ['savent', 'savons', 'savoir', 'savait'],
          answer: 0
        },
        { 
          question: 'Complétez la phrase : "Tu _____ bien manger ici."',
          options: ['peux', 'peut', 'pouvoir', 'pouvez'],
          answer: 2
        },
        { 
          question: 'Complétez la phrase : "Nous _____ de plus en plus heureux."',
          options: ['sommes', 'serons', 'étions', 'être'],
          answer: 0
        }
      ],
      vocabulaire: [
          { 
            question: "Quel est le synonyme de 'rapide' ?",
            options: ["Lent", "Vif", "Fort", "Doux"],
            answer: 1
          },
          { 
            question: "Quel est le contraire de 'ouvert' ?",
            options: ["Fermé", "Solide", "Transparent", "Mou"],
            answer: 0
          },
          { 
            question: "Que signifie 'déménager' ?",
            options: ["Changer de maison", "Vendre", "Acheter", "Cuisiner"],
            answer: 0
          },
          { 
            question: "Quel est l'intrus ?",
            options: ["voiture", "bicyclette", "moto", "pomme"],
            answer: 3
          },
          { 
            question: "Quel est le contraire de 'sombre' ?",
            options: ["Clair", "Vif", "Solide", "Lumineux"],
            answer: 0
          },
          { 
            question: "Que signifie 'pluie' ?",
            options: ["Soleil", "Neige", "Vent", "Gouttes d'eau"],
            answer: 3
          },
          { 
            question: "Quel mot est synonyme de 'préférer' ?",
            options: ["Aimer", "Choisir", "Apprécier", "Détester"],
            answer: 2
          },
          { 
            question: "Quel est l'intrus dans cette liste ?",
            options: ["soleil", "nuage", "lune", "ciel"],
            answer: 3
          },
          { 
            question: "Quel est le contraire de 'ancien' ?",
            options: ["Jeune", "Nouveau", "Vieil", "Moderne"],
            answer: 1
          },
          { 
            question: "Que signifie 'gâteau' ?",
            options: ["Une boisson", "Un fruit", "Un dessert", "Un animal"],
            answer: 2
          }
        ],
        comprehension: [
          { 
            question: "Que fait-on après le dîner ?",
            options: ["Faire la vaisselle", "Lire", "Marcher", "Dormir"],
            answer: 0
          },
          { 
            question: "Que fait-on lorsqu'on a soif ?",
            options: ["Boire", "Manger", "Lire", "Travailler"],
            answer: 0
          },
          { 
            question: "Qu'est-ce qu'un médecin fait ?",
            options: ["Soigne les patients", "Vends des médicaments", "Cuisiner", "Nettoyer"],
            answer: 0
          },
          { 
            question: "Que fait-on quand il fait froid ?",
            options: ["Manger", "Mettre un manteau", "Boire", "Laver"],
            answer: 1
          },
          { 
            question: "Si tu veux aller au cinéma, tu _____",
            options: ["Vas acheter un billet", "Vas à l'école", "Vas à la piscine", "Vas à la bibliothèque"],
            answer: 0
          },
          { 
            question: "Que fais-tu avec une clé ?",
            options: ["Ouvrir une porte", "Écrire", "Lire", "Nager"],
            answer: 0
          },
          { 
            question: "Que faut-il pour faire un gâteau ?",
            options: ["Des légumes", "Des fruits", "De la farine", "Des épices"],
            answer: 2
          },
          { 
            question: "Quel est l'animal qui donne du lait ?",
            options: ["Un mouton", "Un poulet", "Une vache", "Un cochon"],
            answer: 2
          },
          { 
            question: "Si tu veux faire un voyage, que dois-tu faire ?",
            options: ["Acheter un billet", "Faire un gâteau", "Lire un livre", "Travailler"],
            answer: 0
          },
          { 
            question: "Qu'est-ce qu'une bibliothèque ?",
            options: ["Un endroit où l'on mange", "Un endroit où l'on étudie", "Un endroit où l'on danse", "Un endroit où l'on mange des glaces"],
            answer: 1
          }
        ]
      }
    },
  
    // Niveau B1
    {
      level: "B1",
      categories: {
        grammaire: [
          { 
            question: "Complétez la phrase : 'Elle _____ au cinéma demain.'",
            options: ["ira", "allait", "aller", "est allé"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Nous _____ les devoirs après le cours.'",
            options: ["ferons", "faisons", "faisait", "faire"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Si je _____ plus de temps, je partirais en vacances.'",
            options: ["avais", "aurais", "avais eu", "ai"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Elle ne _____ pas son travail.'",
            options: ["finit", "a fini", "finirait", "finie"],
            answer: 1
          },
          { 
            question: "Complétez la phrase : 'Nous _____ allés au cinéma hier.'",
            options: ["sommes", "serons", "seraient", "étaient"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Il _____ courir vite.'",
            options: ["peut", "pourrait", "peut-être", "pouvoir"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Nous _____ des livres chaque semaine.'",
            options: ["lisons", "lisait", "lira", "lire"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Tu _____ me prêter ton livre ?'",
            options: ["peux", "peuvent", "pouvez", "pourra"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Nous _____ tout le temps ensemble.'",
            options: ["vivons", "vivre", "vivent", "vint"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'J'_____ très fatigué hier.'",
            options: ["étais", "serai", "su", "suis"],
            answer: 0
          }
        ],
        vocabulaire: [
          { 
            question: "Quel est le synonyme de 'voler' ?",
            options: ["Rouler", "Planer", "Marcher", "Lancer"],
            answer: 1
          },
          { 
            question: "Que signifie 'subir' ?",
            options: ["Tomber", "Subir", "Supporter", "Lancer"],
            answer: 2
          },
          { 
            question: "Quel est l'intrus dans cette liste ?",
            options: ["Lune", "Soleil", "Étoiles", "Nuage"],
            answer: 3
          },
          { 
            question: "Quel est le synonyme de 'déménager' ?",
            options: ["Changer de maison", "Vendre", "Acheter", "Cuisiner"],
            answer: 0
          },
          { 
            question: "Que signifie 'partir' ?",
            options: ["Arriver", "Rentrer", "Quitter", "Retourner"],
            answer: 2
          },
          { 
            question: "Quel est le contraire de 'facile' ?",
            options: ["Difficile", "Facile", "Simple", "Rapide"],
            answer: 0
          },
          { 
            question: "Que signifie 'rencontrer' ?",
            options: ["Rencontrer", "Voir", "Regarder", "Attendre"],
            answer: 1
          },
          { 
            question: "Quel est le synonyme de 'oublier' ?",
            options: ["Se souvenir", "Se rappeler", "Perdre", "Passer"],
            answer: 2
          },
          { 
            question: "Quel est l'antonyme de 'gros' ?",
            options: ["Petit", "Fort", "Vif", "Chaud"],
            answer: 0
          },
          { 
            question: "Quel est le synonyme de 'avoir faim' ?",
            options: ["Être rassasié", "Être plein", "Être affamé", "Avoir soif"],
            answer: 2
          }
        ],
        comprehension: [
          { 
            question: "Si tu veux partir en vacances, tu dois _____",
            options: ["acheter des billets", "travailler", "étudier", "manger"],
            answer: 0
          },
          { 
            question: "Que faut-il faire pour apprendre une langue ?",
            options: ["Parler", "Écouter", "Étudier", "Toutes les réponses"],
            answer: 3
          },
          { 
            question: "Que peut-on faire si on a une journée libre ?",
            options: ["Lire un livre", "Étudier", "Regarder des films", "Toutes les réponses"],
            answer: 3
          },
          { 
            question: "Que fait-on avant de partir en voyage ?",
            options: ["Faire les bagages", "Manger", "Étudier", "Travailler"],
            answer: 0
          },
          { 
            question: "Si on veut acheter des vêtements, on va _____",
            options: ["Au supermarché", "À la bibliothèque", "À la boutique", "Au parc"],
            answer: 2
          },
          { 
            question: "Que fait-on quand on a faim ?",
            options: ["Manger", "Écouter de la musique", "Dormir", "Faire du sport"],
            answer: 0
          },
          { 
            question: "Si tu veux apprendre à conduire, tu _____",
            options: ["Vas à l'école", "Vas au musée", "Prends des cours de conduite", "Lis un livre"],
            answer: 2
          },
          { 
            question: "Si tu veux téléphoner à un ami, tu _____",
            options: ["Écris un message", "Appelles-le", "Vas chez lui", "Lui envoies un e-mail"],
            answer: 1
          },
          { 
            question: "Quel est le contraire de 'chaud' ?",
            options: ["Froid", "Solide", "Fort", "Lourd"],
            answer: 0
          },
          { 
            question: "Que fait-on pour aller à l'école ?",
            options: ["On prend un vélo", "On dort", "On mange", "On joue"],
            answer: 0
          }
        ]
      }
    },
  
    // Niveau B2
    {
      level: "B2",
      categories: {
        grammaire: [
          { 
            question: "Complétez la phrase : 'Je _____ au travail depuis une heure.'",
            options: ["suis", "ai", "étais", "serai"],
            answer: 1
          },
          { 
            question: "Complétez la phrase : 'Si elle _____ plus de temps, elle voyagerait.'",
            options: ["avait", "aurait", "a", "est"],
            answer: 2
          },
          { 
            question: "Complétez la phrase : 'Quand ils _____ le film, ils sont partis.'",
            options: ["ont vu", "voient", "verront", "voyaient"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Nous _____ déjà mangé avant de partir.'",
            options: ["avions", "avons", "avons eu", "avions eu"],
            answer: 3
          },
          { 
            question: "Complétez la phrase : 'Elle _____ une réunion à 15 heures.'",
            options: ["a", "aura", "avait", "aura eu"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Si nous _____ un peu plus tôt, nous n'aurions pas eu de retard.'",
            options: ["étions partis", "partions", "partirons", "serions partis"],
            answer: 3
          },
          { 
            question: "Complétez la phrase : 'Je n'aurais pas su quoi faire si tu ne _____ pas m'aider.'",
            options: ["avais", "avais eu", "avais pu", "avais aidé"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Les enfants _____ beaucoup à la fête.'",
            options: ["ont joué", "jouent", "jouaient", "joueront"],
            answer: 2
          },
          { 
            question: "Complétez la phrase : 'Quand je _____ plus jeune, j'allais au parc tous les jours.'",
            options: ["étais", "serai", "suis", "étais été"],
            answer: 0
          },
          { 
            question: "Complétez la phrase : 'Je _____ visiter Paris cet été.'",
            options: ["voudrais", "voudrais", "voudra", "voudrez"],
            answer: 2
          }
        ], 
        vocabulaire: [
          { 
            question: "Quel est le synonyme de 'heureux' ?",
            options: ["Triste", "Content", "Fatigué", "En colère"],
            answer: 1
          },
          { 
            question: "Que signifie 'mélanger' ?",
            options: ["Ajouter", "Séparer", "Combiner", "Cuisiner"],
            answer: 2
          },
          { 
            question: "Quel est l'intrus dans cette liste ?",
            options: ["Chiffre", "Nombre", "Lettre", "Calcul"],
            answer: 2
          },
          { 
            question: "Quel est le contraire de 'aujourd'hui' ?",
            options: ["Demain", "Hier", "Maintenant", "Tout à l'heure"],
            answer: 1
          },
          { 
            question: "Quel est le synonyme de 'fort' ?",
            options: ["Puissant", "Doux", "Mou", "Lent"],
            answer: 0
          },
          { 
            question: "Que signifie 'désirer' ?",
            options: ["Aimer", "Vouloir", "Détester", "Savourer"],
            answer: 1
          },
          { 
            question: "Que signifie 'disparaître' ?",
            options: ["Apparaître", "Se cacher", "Partir", "Rester"],
            answer: 1
          },
          { 
            question: "Quel est le contraire de 'monter' ?",
            options: ["Descendre", "Rester", "Volez", "Se lever"],
            answer: 0
          },
          { 
            question: "Quel est l'antonyme de 'lisse' ?",
            options: ["Rugueux", "Dur", "Lent", "Lourd"],
            answer: 0
          },
          { 
            question: "Quel est le synonyme de 'rapidement' ?",
            options: ["Lentement", "Vivement", "Difficilement", "Vite"],
            answer: 3
          }
        ],
        comprehension: [
          { 
            question: "Que dois-tu faire si tu veux recevoir des informations ?",
            options: ["Écrire", "Lire", "Demander", "Attendre"],
            answer: 2
          },
          { 
            question: "Que peut-on faire pour améliorer son niveau de langue ?",
            options: ["Lire des livres", "Écouter de la musique", "Parler avec des locuteurs natifs", "Toutes les réponses"],
            answer: 3
          },
          { 
            question: "Si tu veux visiter un musée, tu _____",
            options: ["Vas au cinéma", "Vas à la bibliothèque", "Vas au musée", "Vas à l'école"],
            answer: 2
          },
          { 
            question: "Que fait-on pour prendre un taxi ?",
            options: ["Appeler un chauffeur", "Attendre à la station", "Marcher", "Monter dans le bus"],
            answer: 1
          },
          { 
            question: "Que faut-il faire avant de partir en vacances ?",
            options: ["Faire les bagages", "Nettoyer la maison", "Aller travailler", "Rien"],
            answer: 0
          },
          { 
            question: "Si tu veux savoir l'heure, tu _____",
            options: ["Regardes ton téléphone", "Vas au cinéma", "Vas à la piscine", "Lis un livre"],
            answer: 0
          },
          { 
            question: "Que peut-on faire si on a faim ?",
            options: ["Lire un livre", "Manger", "Faire du sport", "Se coucher"],
            answer: 1
          },
          { 
            question: "Que fait-on lorsqu'on est malade ?",
            options: ["On va chez le médecin", "On va à l'école", "On mange", "On part en vacances"],
            answer: 0
          },
          { 
            question: "Que fais-tu après une journée de travail ?",
            options: ["Manger", "Aller au cinéma", "Se reposer", "Faire du shopping"],
            answer: 2
          },
          { 
              question: "Que fais-tu après une journée de travail ?",
              options: ["Manger", "Aller au cinéma", "Se reposer", "Faire du shopping"],
              answer: 2
            }
          ]
        }
      },
    
      // Niveau C1
      {
        level: "C1",
        categories: {
          grammaire: [
            { 
              question: "Complétez la phrase : 'Je pense qu'il _____ arrivé en retard.'",
              options: ["est", "a", "soit", "ait"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Si j'avais su, je _____ au lieu de venir ici.'",
              options: ["serais resté", "resterai", "serais restée", "serai resté"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Elle _____ beaucoup de livres pendant ses vacances.'",
              options: ["a lu", "lira", "lisait", "lis"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Je n'aurais pas agi ainsi si je _____ mieux la situation.'",
              options: ["avais", "avais eu", "aurais", "savais"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Il faut que tu _____ ce rapport avant demain.'",
              options: ["fini", "finisse", "fini", "finir"],
              answer: 1
            },
            { 
              question: "Complétez la phrase : 'J'espère qu'il _____ ce problème bientôt.'",
              options: ["résout", "résoudra", "a résolu", "résoutrait"],
              answer: 1
            },
            { 
              question: "Complétez la phrase : 'Si elle _____ d'accord, elle signerait le contrat.'",
              options: ["était", "soit", "a été", "serait"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Ils _____ partis sans prévenir.'",
              options: ["sont", "ont", "étaient", "seraient"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Nous _____ beaucoup de progrès en français.'",
              options: ["faisons", "avons fait", "faisait", "faisons fait"],
              answer: 1
            },
            { 
              question: "Complétez la phrase : 'Je ______ rencontré Marie hier au parc.'",
              options: ["ai", "suis", "serai", "avais"],
              answer: 0
            }
          ],
          vocabulaire: [
            { 
              question: "Quel est le synonyme de 'douteux' ?",
              options: ["Certain", "Incertain", "Précis", "Clair"],
              answer: 1
            },
            { 
              question: "Que signifie 'obstacle' ?",
              options: ["Problème", "Barrière", "Solution", "Conseil"],
              answer: 1
            },
            { 
              question: "Quel est l'antonyme de 'respecter' ?",
              options: ["Ignorer", "Honorer", "Apprécier", "Faire attention"],
              answer: 0
            },
            { 
              question: "Quel est le synonyme de 'courageux' ?",
              options: ["Peureux", "Intrépide", "Lent", "Hésitant"],
              answer: 1
            },
            { 
              question: "Que signifie 'dissiper' ?",
              options: ["Attirer", "Disparaître", "Rendre plus clair", "Disperser"],
              answer: 3
            },
            { 
              question: "Quel est le contraire de 'prudent' ?",
              options: ["Imprudent", "Hésitant", "Maladroit", "Méfiant"],
              answer: 0
            },
            { 
              question: "Quel est l'intrus dans cette liste ?",
              options: ["Lucide", "Vigilant", "Endormi", "Alerte"],
              answer: 2
            },
            { 
              question: "Que signifie 'embellir' ?",
              options: ["Rendre plus beau", "Cacher", "Effacer", "Faire grandir"],
              answer: 0
            },
            { 
              question: "Quel est le contraire de 'flou' ?",
              options: ["Clair", "Noir", "Profond", "Rude"],
              answer: 0
            },
            { 
              question: "Quel est le synonyme de 'insister' ?",
              options: ["Abandonner", "Réfléchir", "Exiger", "Supporter"],
              answer: 2
            }
          ],
          comprehension: [
            { 
              question: "Que faut-il faire pour réussir dans la vie ?",
              options: ["Travailler dur", "Faire des pauses", "Se détendre", "Éviter le travail"],
              answer: 0
            },
            { 
              question: "Que peut-on faire pour résoudre un problème complexe ?",
              options: ["Réfléchir calmement", "Ignorer", "Prendre une pause", "Demander de l'aide"],
              answer: 3
            },
            { 
              question: "Que doit-on faire pour réussir une présentation ?",
              options: ["Prendre la parole avec confiance", "Regarder son téléphone", "Ne pas parler", "Avoir peur"],
              answer: 0
            },
            { 
              question: "Que fait-on avant de prendre une décision importante ?",
              options: ["Analyser les options", "Se précipiter", "Éviter de réfléchir", "Se reposer"],
              answer: 0
            },
            { 
              question: "Que faut-il pour être efficace au travail ?",
              options: ["Être organisé", "Se disperser", "Ne rien faire", "Se perdre"],
              answer: 0
            },
            { 
              question: "Que fait-on lorsqu'on a un désaccord avec quelqu'un ?",
              options: ["Discuter", "Se fâcher", "Ignorer", "Rire"],
              answer: 0
            },
            { 
              question: "Que fait-on lorsqu'on est en retard pour une réunion ?",
              options: ["Excuser", "Ignorer", "Se précipiter", "Demander des excuses"],
              answer: 3
            },
            { 
              question: "Que faut-il faire pour être un bon leader ?",
              options: ["Motiver les autres", "Imposer", "Ne pas écouter", "Faire peur"],
              answer: 0
            },
            { 
              question: "Si tu veux aider quelqu'un à résoudre un problème, tu _____",
              options: ["Écoutes attentivement", "Ignorer", "Prends le problème à sa place", "Parles trop"],
              answer: 0
            },
            { 
              question: "Que faut-il pour réussir dans un environnement compétitif ?",
              options: ["Travailler sur ses compétences", "Abandonner", "Ne pas s'investir", "Ne rien faire"],
              answer: 0
            }
          ]
        }
      },
    
      // Niveau C2
      {
        level: "C2",
        categories: {
          grammaire: [
            { 
              question: "Complétez la phrase : 'Si nous _____ plus tôt, nous aurions pu arriver à l'heure.'",
              options: ["étions partis", "partirons", "partons", "serions partis"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Elle _____ qu'il était trop tard.'",
              options: ["savait", "a su", "saura", "savait qu'il"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Je suis convaincu que nous _____ trouver une solution.'",
              options: ["pouvons", "pourrons", "avons pu", "pourrions"],
              answer: 1
            },
            { 
              question: "Complétez la phrase : 'Je n'ai pas encore _____ mes documents.'",
              options: ["lu", "lire", "liras", "lu"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Elle ne _____ jamais aussi triste.'",
              options: ["était", "serait", "aura été", "est"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Je n'avais pas compris qu'il _____ changé d'avis.'",
              options: ["avait", "ait", "avoir", "a"],
              answer: 0
            },
            { 
              question: "Complétez la phrase : 'Ils _____ se retrouver demain.'",
              options: ["vont", "viennent", "vont", "viendront"],
              answer: 3
            },
            { 
              question: "Complétez la phrase : 'Ils _____ se retrouver demain.'",
              options: ["vont", "viennent", "vont", "viendront"],
              answer: 3
            },
            { 
              question: "Complétez la phrase : 'Il ne faut pas que tu _____ tes études.'",
              options: ["abandonnes", "abandonnais", "abandonné", "abandonne"],
              answer: 0
            }
          ],
          vocabulaire: [
            { 
              question: "Quel est le synonyme de 'subir' ?",
              options: ["Fuir", "Résister", "Accepter", "Endurer"],
              answer: 3
            },
            { 
              question: "Que signifie 'intempéries' ?",
              options: ["Temps calme", "Conditions de vie", "Climats extrêmes", "Heures de travail"],
              answer: 2
            },
            { 
              question: "Quel est l'antonyme de 'dévoué' ?",
              options: ["Indifférent", "Passionné", "Attaché", "Affectueux"],
              answer: 0
            },
            { 
              question: "Que signifie 'volonté' ?",
              options: ["Désir de faire", "Capacité d'agir", "Obligation", "Faiblesse"],
              answer: 0
            },
            { 
              question: "Quel est le synonyme de 'déléguer' ?",
              options: ["Accepter", "Gérer", "Confier", "Résoudre"],
              answer: 2
            },
            { 
              question: "Quel est l'intrus dans cette liste ?",
              options: ["Innovant", "Actif", "Créatif", "Inactif"],
              answer: 3
            },
            { 
              question: "Quel est le contraire de 'abondance' ?",
              options: ["Exubérance", "Plénitude", "Rareté", "Excès"],
              answer: 2
            },
            { 
              question: "Quel est le synonyme de 'éloquence' ?",
              options: ["Expression", "Argumentation", "Récit", "Silence"],
              answer: 0
            },
            { 
              question: "Que signifie 'remords' ?",
              options: ["Indifférence", "Colère", "Regret", "Joie"],
              answer: 2
            },
            { 
              question: "Quel est l'antonyme de 'mystérieux' ?",
              options: ["Évident", "Facile", "Clair", "Compliqué"],
              answer: 0
            }
          ],
          comprehension: [
            { 
              question: "Que fait-on si on veut résoudre un conflit de manière constructive ?",
              options: ["Accuser", "Agir impulsivement", "Écouter activement", "Ignorer"],
              answer: 2
            },
            { 
              question: "Si tu veux améliorer ta situation professionnelle, tu _____",
              options: ["Vas au travail sans objectif", "Suivi des formations", "Prends des pauses régulières", "Délègues tout à ton équipe"],
              answer: 1
            },
            { 
              question: "Comment peux-tu gérer efficacement ton temps ?",
              options: ["Faire tout à la dernière minute", "Oublier de prioriser", "Ne rien planifier", "Organiser une liste de tâches"],
              answer: 3
            },
            { 
              question: "Que fais-tu lorsque tu fais face à un défi majeur ?",
              options: ["Tu attends que cela se règle tout seul", "Tu te décourages", "Tu cherches des solutions innovantes", "Tu fuis"],
              answer: 2
            },
            { 
              question: "Que faut-il faire pour être un bon communicateur ?",
              options: ["Ecouter et répondre clairement", "Répéter constamment", "Éviter de parler", "Parler sans interruption"],
              answer: 0
            },
            { 
              question: "Que faut-il faire pour réussir dans un environnement en constante évolution ?",
              options: ["Ignorer les changements", "Rester rigide", "Être adaptable", "Ne pas apprendre"],
              answer: 2
            },
            { 
              question: "Quel est l'objectif principal de la gestion de projet ?",
              options: ["Éviter les réunions", "Terminer le projet dans les délais et le budget", "Commencer rapidement", "Se concentrer uniquement sur les résultats"],
              answer: 1
            },
            { 
              question: "Que doit-on faire si un projet échoue ?",
              options: ["Recommencer sans changement", "Analyser les erreurs et s'améliorer", "Ne pas prendre de responsabilité", "Ignorer les retours"],
              answer: 1
            },
            { 
              question: "Si tu veux réussir à long terme, tu _____",
              options: ["Vas chercher des solutions rapides", "Abandonner si ce n'est pas facile", "Dois être patient et persévérant", "T'attends à des résultats immédiats"],
              answer: 2
            },
            { 
              question: "Quel est un des aspects essentiels pour maintenir de bonnes relations professionnelles ?",
              options: ["Indifférence", "Respect et confiance", "Critique constante", "Silence"],
              answer: 1
            }
          ]            
        }
      }
    ];

    const quizQuestionsJSON = JSON.stringify(quizQuestions);  

    localStorage.setItem('quizQuestions', quizQuestionsJSON); 
    
    const storedQuizQuestionsJSON = JSON.parse(localStorage.getItem('quizQuestions'));
     
  let timer; // Variable pour le timer 
  let currentQuestionIndex = 0; // Index de la question actuelle
  let score = 0;
    document.querySelectorAll('.niveau-button').forEach(button => {
      button.addEventListener('click', () => {
          const level = button.getAttribute('data-level');
          showCategories(level);
      });
  });

  function showCategories(level) {
    const categoriesSection = document.querySelector('.categories-section');
    const categoriesContainer = categoriesSection.querySelector('.categories-container');
    categoriesContainer.innerHTML = ''; // Clear previous categories

    const levelData = storedQuizQuestionsJSON.find(q => q.level === level);
    if (levelData) {
        Object.keys(levelData.categories).forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');

            const categoryButton = document.createElement('button');
            categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryButton.addEventListener('click', () => showQuiz(level, category));

            categoryDiv.appendChild(categoryButton);
            categoriesContainer.appendChild(categoryDiv);
        });
    }

    // Ajouter un bouton pour revenir au niveau
    const backToLevelsButton = document.createElement('button');
    backToLevelsButton.textContent = 'Retourner aux niveaux';
    backToLevelsButton.addEventListener('click', () => {
        document.querySelector('.niveaux-section').style.display = 'block'; // Afficher la section des niveaux
        categoriesSection.style.display = 'none'; // Masquer la section des catégories
    });

    categoriesContainer.appendChild(backToLevelsButton); // Ajouter le bouton au conteneur des catégories

    // Show categories section and hide niveaux section
    document.querySelector('.niveaux-section').style.display = 'none';
    categoriesSection.style.display = 'block';
}


  function showQuiz(level, category) {
    const levelData = storedQuizQuestionsJSON.find(q => q.level === level);
    const questions = levelData.categories[category];

    currentQuestionIndex = 0; // Réinitialiser l'index à 0 pour chaque nouveau quiz
    score = 0; // Réinitialiser le score à 0

    const quizContainer = document.querySelector('.listquiz');
    quizContainer.innerHTML = ''; // Clear previous quiz

    // Masquer les sections de niveaux et de catégories
    document.querySelector('.niveaux-section').style.display = 'none';
    document.querySelector('.categories-section').style.display = 'none';

    // Ajouter un bouton pour revenir à la catégorie
    const backToCategoriesButton = document.createElement('button');
    backToCategoriesButton.textContent = 'Retourner aux catégories';
    backToCategoriesButton.addEventListener('click', () => {
        document.querySelector('.categories-section').style.display = 'block'; // Afficher la section des catégories
        document.querySelector('.hidden').style.display = 'none'; // Masquer la section du quiz
    });
    
    quizContainer.appendChild(backToCategoriesButton); // Ajouter le bouton au conteneur du quiz

    // Affiche la première question
    displayQuestion(questions, level, category);

    // Show quiz section
    document.querySelector('.hidden').style.display = 'block';
}

function displayQuestion(questions, level, category) {
  const quizContainer = document.querySelector('.listquiz');
  quizContainer.innerHTML = ''; // Clear previous question

  const question = questions[currentQuestionIndex]; // Obtenez la question actuelle

  const questionDiv = document.createElement('div');
  questionDiv.classList.add('qst');
  questionDiv.innerHTML = `<p>${currentQuestionIndex + 1}. ${question.question}</p>`;

  const responsesDiv = document.createElement('div');
  responsesDiv.classList.add('reponses');

  question.options.forEach((option, i) => {
      const responseButton = document.createElement('button');
      responseButton.classList.add('rep');
      responseButton.innerHTML = `<p>${option}</p>`;
      
      // Ajoutez un gestionnaire d'événements pour vérifier la réponse
      responseButton.addEventListener('click', () => {
          checkAnswer(level, category, currentQuestionIndex, i); // Vérifiez la réponse
          disableResponseButtons(responsesDiv); // Désactivez tous les boutons de réponse
      });
      
      responsesDiv.appendChild(responseButton);
  });

  quizContainer.appendChild(questionDiv);
  quizContainer.appendChild(responsesDiv);

  // Timer
  const timerDisplay = document.querySelector('.timer-display');
  let timeLeft = 20; // Durée du timer
  timerDisplay.textContent = `Temps restant : ${timeLeft}s`; // Initialiser le timer

  // Démarrer le timer
  clearInterval(timer); // Assurez-vous de nettoyer l'ancien timer
  timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Temps restant : ${timeLeft}s`;
      
      if (timeLeft <= 0) {
          clearInterval(timer); // Arrêter le timer
          alert('Temps écoulé ! Passons à la question suivante.');
          currentQuestionIndex++; // Passer à la question suivante
          if (currentQuestionIndex < questions.length) {
              displayQuestion(questions, level, category);
          } else {
              showResults(questions.length); // Afficher les résultats si toutes les questions ont été répondues
          }
      }
  }, 1000); // Mettre à jour toutes les secondes

  // Vérifiez si un bouton "Retourner aux catégories" existe déjà
  const existingBackToCategoriesButton = document.querySelector('.back-to-categories-button');
  if (existingBackToCategoriesButton) {
      // Si c'est le cas, supprimez-le
      existingBackToCategoriesButton.remove();
  }

  // Ajouter un bouton pour revenir à la catégorie
  const backToCategoriesButton = document.createElement('button');
  backToCategoriesButton.classList.add('back-to-categories-button');
  backToCategoriesButton.textContent = 'Retourner aux catégories';
  backToCategoriesButton.addEventListener('click', () => {
      document.querySelector('.categories-section').style.display = 'block'; // Afficher la section des catégories
      document.querySelector('.hidden').style.display = 'none'; // Masquer la section du quiz
  });

  quizContainer.appendChild(backToCategoriesButton); // Ajouter le bouton au conteneur du quiz
}

// Fonction pour désactiver tous les boutons de réponse
function disableResponseButtons(responsesDiv) {
  const buttons = responsesDiv.querySelectorAll('.rep');
  buttons.forEach(button => {
      button.disabled = true; // Désactiver chaque bouton
  });
}

function checkAnswer(level, category, questionIndex, selectedOptionIndex) {
  const questions = storedQuizQuestionsJSON.find(q => q.level === level).categories[category];
  const question = questions[questionIndex];

  // Vérifiez si la réponse est correcte
  if (question.answer === question.options[selectedOptionIndex]) {
      score++;
  }

  // Passer à la question suivante
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      displayQuestion(questions, level, category);
  } else {
      showResults(questions.length); // Afficher les résultats si toutes les questions ont été répondues
  }
}

function showResults(totalQuestions) {
  const resultContainer = document.querySelector('.resultat-container');
  resultContainer.innerHTML = ''; // Clear previous results

  // Affiche le score
  const resultMessage = document.createElement('p');
  resultMessage.textContent = `Votre score est ${score} sur ${totalQuestions}.`;
  
  // Vérifie si le score est valide
  if (score === totalQuestions) {
      resultMessage.textContent += " C'est valide !";
  } else {
      resultMessage.textContent += " Ce n'est pas valide.";
  }

  resultContainer.appendChild(resultMessage);

  // Afficher la section des résultats
  resultContainer.style.display = 'block';

  // Bouton pour recommencer le quiz
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Recommencer le quiz';
  restartButton.addEventListener('click', () => {
      // Réinitialiser l'affichage des sections de catégories
      document.querySelector('.categories-section').style.display = 'block';
      
      // Masquer la section du quiz
      document.querySelector('.hidden').style.display = 'none';

      // Réinitialiser la section des résultats
      resultContainer.style.display = 'none';
      resultContainer.innerHTML = '';

      // Réinitialiser les variables pour un nouveau quiz
      currentQuestionIndex = 0;
      score = 0;
  });

  resultContainer.appendChild(restartButton);
}

