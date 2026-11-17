const QUESTIONS = [
  {
    "number": 1,
    "prompt": "Dans quelle série tous les mots sont-ils formés par préfixation ?",
    "options": [
      {
        "label": "A",
        "text": "Relecture, impossible, désaccord"
      },
      {
        "label": "B",
        "text": "Chanteur, rapidement, national"
      },
      {
        "label": "C",
        "text": "Beauté, courageux, formation"
      },
      {
        "label": "D",
        "text": "Lisible, nettoyage, douceur"
      }
    ],
    "answer": "A"
  },
  {
    "number": 2,
    "prompt": "Quelle transformation illustre un changement de catégorie grammaticale grâce à la suffixation ?",
    "options": [
      {
        "label": "A",
        "text": "Heureux → malheureux"
      },
      {
        "label": "B",
        "text": "Lire → relire"
      },
      {
        "label": "C",
        "text": "Nation → national"
      },
      {
        "label": "D",
        "text": "Possible → impossible"
      }
    ],
    "answer": "C"
  },
  {
    "number": 3,
    "prompt": "Quelle affirmation est correcte concernant le préfixe et le suffixe ?",
    "options": [
      {
        "label": "A",
        "text": "Le préfixe se place à la fin du mot."
      },
      {
        "label": "B",
        "text": "Le suffixe se place au début du mot."
      },
      {
        "label": "C",
        "text": "Le préfixe se place avant la racine et le suffixe après la racine."
      },
      {
        "label": "D",
        "text": "Les deux se placent uniquement au début du mot."
      }
    ],
    "answer": "C"
  },
  {
    "number": 4,
    "prompt": "Dans quel mot trouve-t-on un suffixe exprimant une possibilité ?",
    "options": [
      {
        "label": "A",
        "text": "Acceptable"
      },
      {
        "label": "B",
        "text": "Refaire"
      },
      {
        "label": "C",
        "text": "Impossible"
      },
      {
        "label": "D",
        "text": "Antivol"
      }
    ],
    "answer": "A"
  },
  {
    "number": 5,
    "prompt": "Quel suffixe permet de former un adverbe à partir de l'adjectif « rapide » ?",
    "options": [
      {
        "label": "A",
        "text": "-eur"
      },
      {
        "label": "B",
        "text": "-tion"
      },
      {
        "label": "C",
        "text": "-ment"
      },
      {
        "label": "D",
        "text": "-isme"
      }
    ],
    "answer": "C"
  },
  {
    "number": 6,
    "prompt": "Complétez la phrase :\nC'est un chercheur ___ les travaux ont été récompensés par l'Académie française.",
    "options": [
      {
        "label": "A",
        "text": "que"
      },
      {
        "label": "B",
        "text": "dont"
      },
      {
        "label": "C",
        "text": "quand"
      },
      {
        "label": "D",
        "text": "car"
      }
    ],
    "answer": "B"
  },
  {
    "number": 7,
    "prompt": "Dans quelle phrase « que » exerce-t-il la fonction de COD ?",
    "options": [
      {
        "label": "A",
        "text": "Je pense que tu as raison."
      },
      {
        "label": "B",
        "text": "Il est évident que cette méthode fonctionne."
      },
      {
        "label": "C",
        "text": "Le roman que j'ai lu a remporté un prix."
      },
      {
        "label": "D",
        "text": "Je sais que tu viens demain."
      }
    ],
    "answer": "C"
  },
  {
    "number": 8,
    "prompt": "Complétez la phrase :\n___ les résultats ont été publiés, les chercheurs ont organisé une conférence.",
    "options": [
      {
        "label": "A",
        "text": "Dont"
      },
      {
        "label": "B",
        "text": "Car"
      },
      {
        "label": "C",
        "text": "Quand"
      },
      {
        "label": "D",
        "text": "Que"
      }
    ],
    "answer": "C"
  },
  {
    "number": 9,
    "prompt": "Quelle phrase exprime correctement une relation de cause avec « car » ?",
    "options": [
      {
        "label": "A",
        "text": "Je pense car il viendra demain."
      },
      {
        "label": "B",
        "text": "Il a réussi, car il a beaucoup travaillé."
      },
      {
        "label": "C",
        "text": "Car il pleut, nous restons à la maison."
      },
      {
        "label": "D",
        "text": "Je sais car tu es compétent."
      }
    ],
    "answer": "B"
  },
  {
    "number": 10,
    "prompt": "Identifiez la phrase dans laquelle « dont » remplace correctement un complément introduit par « de ».",
    "options": [
      {
        "label": "A",
        "text": "C'est le sujet dont nous avons discuté."
      },
      {
        "label": "B",
        "text": "C'est le sujet dont nous avons choisi."
      },
      {
        "label": "C",
        "text": "C'est le sujet dont nous avons regardé."
      },
      {
        "label": "D",
        "text": "C'est le sujet dont nous avons compris."
      }
    ],
    "answer": "A"
  },
  {
    "number": 11,
    "prompt": "Complétez la phrase :\nLe professeur ___ j'ai rencontré hier enseigne le français depuis vingt ans.",
    "options": [
      {
        "label": "A",
        "text": "dont"
      },
      {
        "label": "B",
        "text": "quand"
      },
      {
        "label": "C",
        "text": "que"
      },
      {
        "label": "D",
        "text": "car"
      }
    ],
    "answer": "C"
  },
  {
    "number": 12,
    "prompt": "Dans quelle phrase observe-t-on une liaison obligatoire ?",
    "options": [
      {
        "label": "A",
        "text": "Les enfants jouent dans le jardin."
      },
      {
        "label": "B",
        "text": "Les héros arrivent demain."
      },
      {
        "label": "C",
        "text": "Et eux aussi participent."
      },
      {
        "label": "D",
        "text": "Un grand garçon court."
      }
    ],
    "answer": "A"
  },
  {
    "number": 13,
    "prompt": "Dans quelle expression observe-t-on un enchaînement consonantique et non une liaison ?",
    "options": [
      {
        "label": "A",
        "text": "Vous avez"
      },
      {
        "label": "B",
        "text": "Les amis"
      },
      {
        "label": "C",
        "text": "Avec elle"
      },
      {
        "label": "D",
        "text": "Un homme"
      }
    ],
    "answer": "C"
  },
  {
    "number": 14,
    "prompt": "Dans quelle phrase la liaison est-elle interdite ?",
    "options": [
      {
        "label": "A",
        "text": "Nous avons compris."
      },
      {
        "label": "B",
        "text": "Les enfants arrivent."
      },
      {
        "label": "C",
        "text": "Et ils sont partis."
      },
      {
        "label": "D",
        "text": "Vous êtes prêts."
      }
    ],
    "answer": "C"
  },
  {
    "number": 15,
    "prompt": "Quelle phrase contient une liaison après un adjectif placé avant le nom ?",
    "options": [
      {
        "label": "A",
        "text": "Des enfants intelligents."
      },
      {
        "label": "B",
        "text": "Un petit appartement."
      },
      {
        "label": "C",
        "text": "Un repas excellent."
      },
      {
        "label": "D",
        "text": "Un étudiant arrive."
      }
    ],
    "answer": "B"
  },
  {
    "number": 16,
    "prompt": "Complétez correctement la phrase :\nNe t'inquiète pas pour ce projet, je vais m'en ___ personnellement.",
    "options": [
      {
        "label": "A",
        "text": "décharger"
      },
      {
        "label": "B",
        "text": "charger"
      },
      {
        "label": "C",
        "text": "décharger de"
      },
      {
        "label": "D",
        "text": "charger de"
      }
    ],
    "answer": "B"
  },
  {
    "number": 17,
    "prompt": "Dans quelle phrase le verbe « se charger de » signifie-t-il « prendre la responsabilité de quelque chose » ?",
    "options": [
      {
        "label": "A",
        "text": "Le camion se charge rapidement."
      },
      {
        "label": "B",
        "text": "Elle se charge de l'organisation du séminaire."
      },
      {
        "label": "C",
        "text": "Le téléphone se charge pendant la nuit."
      },
      {
        "label": "D",
        "text": "Le coffre se charge de bagages."
      }
    ],
    "answer": "B"
  },
  {
    "number": 18,
    "prompt": "Complétez la phrase :\nAprès avoir livré les marchandises, les ouvriers ont commencé à ___ le camion.",
    "options": [
      {
        "label": "A",
        "text": "charger"
      },
      {
        "label": "B",
        "text": "décharger"
      },
      {
        "label": "C",
        "text": "se charger"
      },
      {
        "label": "D",
        "text": "se décharger"
      }
    ],
    "answer": "B"
  },
  {
    "number": 19,
    "prompt": "Complétez la phrase au passé composé :\nElle ___ de préparer tous les documents nécessaires à la réunion.",
    "options": [
      {
        "label": "A",
        "text": "a chargé"
      },
      {
        "label": "B",
        "text": "s'est chargée"
      },
      {
        "label": "C",
        "text": "s'est déchargé"
      },
      {
        "label": "D",
        "text": "a déchargée"
      }
    ],
    "answer": "B"
  },
  {
    "number": 20,
    "prompt": "Identifiez la construction qui correspond à la structure « verbe pronominal + préposition DE + complément » :",
    "options": [
      {
        "label": "A",
        "text": "Décharger un camion."
      },
      {
        "label": "B",
        "text": "Charger les bagages."
      },
      {
        "label": "C",
        "text": "Se charger d'un dossier."
      },
      {
        "label": "D",
        "text": "Charger son téléphone."
      }
    ],
    "answer": "C"
  },
  {
    "number": 21,
    "prompt": "C'est un projet ___ je participe depuis deux ans.",
    "options": [
      {
        "label": "A",
        "text": "duquel"
      },
      {
        "label": "B",
        "text": "auquel"
      },
      {
        "label": "C",
        "text": "dont"
      },
      {
        "label": "D",
        "text": "lequel"
      }
    ],
    "answer": "B"
  },
  {
    "number": 22,
    "prompt": "Voici la conférence ___ nous avons assisté hier.",
    "options": [
      {
        "label": "A",
        "text": "auquel"
      },
      {
        "label": "B",
        "text": "dont"
      },
      {
        "label": "C",
        "text": "à laquelle"
      },
      {
        "label": "D",
        "text": "laquelle"
      }
    ],
    "answer": "C"
  },
  {
    "number": 23,
    "prompt": "C'est une situation à cause ___ il a quitté son travail.",
    "options": [
      {
        "label": "A",
        "text": "laquelle"
      },
      {
        "label": "B",
        "text": "dont"
      },
      {
        "label": "C",
        "text": "de laquelle"
      },
      {
        "label": "D",
        "text": "à laquelle"
      }
    ],
    "answer": "C"
  },
  {
    "number": 24,
    "prompt": "Les questions ___ tu fais référence sont difficiles.",
    "options": [
      {
        "label": "A",
        "text": "auxquelles"
      },
      {
        "label": "B",
        "text": "dont"
      },
      {
        "label": "C",
        "text": "lesquelles"
      },
      {
        "label": "D",
        "text": "auxquels"
      }
    ],
    "answer": "A"
  },
  {
    "number": 25,
    "prompt": "Le bâtiment en face ___ se trouve la mairie est ancien.",
    "options": [
      {
        "label": "A",
        "text": "auquel"
      },
      {
        "label": "B",
        "text": "duquel"
      },
      {
        "label": "C",
        "text": "dont"
      },
      {
        "label": "D",
        "text": "lequel"
      }
    ],
    "answer": "B"
  },
  {
    "number": 26,
    "prompt": "Choisissez la bonne réponse.\n1. Il a affirmé : « Je terminerai ce travail demain. »",
    "options": [
      {
        "label": "A",
        "text": "Il a affirmé qu'il terminera ce travail demain."
      },
      {
        "label": "B",
        "text": "Il a affirmé qu'il terminerait ce travail le lendemain."
      },
      {
        "label": "C",
        "text": "Il a affirmé qu'il avait terminé ce travail la veille."
      },
      {
        "label": "D",
        "text": "Il a affirmé qu'il terminerait ce travail hier."
      }
    ],
    "answer": "B"
  },
  {
    "number": 27,
    "prompt": "Elle a expliqué : « J'ai déjà envoyé le document. »",
    "options": [
      {
        "label": "A",
        "text": "Elle a expliqué qu'elle a déjà envoyé le document."
      },
      {
        "label": "B",
        "text": "Elle a expliqué qu'elle avait déjà envoyé le document."
      },
      {
        "label": "C",
        "text": "Elle a expliqué qu'elle envoyait déjà le document."
      },
      {
        "label": "D",
        "text": "Elle a expliqué qu'elle aurait déjà envoyé le document."
      }
    ],
    "answer": "B"
  },
  {
    "number": 28,
    "prompt": "Elle a promis : « J'aurai terminé avant midi. »",
    "options": [
      {
        "label": "A",
        "text": "Elle a promis qu'elle aura terminé avant midi."
      },
      {
        "label": "B",
        "text": "Elle a promis qu'elle aurait terminé avant midi."
      },
      {
        "label": "C",
        "text": "Elle a promis qu'elle avait terminé avant midi."
      },
      {
        "label": "D",
        "text": "Elle a promis qu'elle terminait avant midi."
      }
    ],
    "answer": "B"
  },
  {
    "number": 29,
    "prompt": "Elle m'a demandé : « Viendras-tu demain ? »",
    "options": [
      {
        "label": "A",
        "text": "Elle m'a demandé si je viendrai demain."
      },
      {
        "label": "B",
        "text": "Elle m'a demandé si je viendrais le lendemain."
      },
      {
        "label": "C",
        "text": "Elle m'a demandé que je viendrais le lendemain."
      },
      {
        "label": "D",
        "text": "Elle m'a demandé si j'étais venu la veille."
      }
    ],
    "answer": "B"
  },
  {
    "number": 30,
    "prompt": "Elle a annoncé : « Nous partirons la semaine prochaine. »",
    "options": [
      {
        "label": "A",
        "text": "Elle a annoncé qu'ils partiraient la semaine suivante."
      },
      {
        "label": "B",
        "text": "Elle a annoncé qu'ils partiront la semaine dernière."
      },
      {
        "label": "C",
        "text": "Elle a annoncé qu'ils étaient partis la semaine prochaine."
      },
      {
        "label": "D",
        "text": "Elle a annoncé qu'ils auraient parti la semaine suivante"
      }
    ],
    "answer": "A"
  },
  {
    "number": 31,
    "prompt": "Complétez correctement la phrase :\nSi les enseignants avaient davantage de temps, ils ___ des activités plus variées.",
    "options": [
      {
        "label": "A",
        "text": "organisent"
      },
      {
        "label": "B",
        "text": "organiseront"
      },
      {
        "label": "C",
        "text": "organiseraient"
      },
      {
        "label": "D",
        "text": "auraient organisé"
      }
    ],
    "answer": "C"
  },
  {
    "number": 32,
    "prompt": "Choisissez la phrase grammaticalement correcte :",
    "options": [
      {
        "label": "A",
        "text": "Si j'aurais su la vérité, je ne serais pas venu."
      },
      {
        "label": "B",
        "text": "Si j'avais su la vérité, je ne serais pas venu."
      },
      {
        "label": "C",
        "text": "Si je saurais la vérité, je ne serais pas venu."
      },
      {
        "label": "D",
        "text": "Si j'avais su la vérité, je ne viendrais pas hier."
      }
    ],
    "answer": "B"
  },
  {
    "number": 33,
    "prompt": "Complétez la phrase :\nSi tu ___ régulièrement, tu obtiendras de meilleurs résultats.",
    "options": [
      {
        "label": "A",
        "text": "travaillerais"
      },
      {
        "label": "B",
        "text": "travaillais"
      },
      {
        "label": "C",
        "text": "travailles"
      },
      {
        "label": "D",
        "text": "avais travaillé"
      }
    ],
    "answer": "C"
  },
  {
    "number": 34,
    "prompt": "Complétez correctement :\nSi elle était plus attentive, elle ne ___ pas autant d'erreurs.",
    "options": [
      {
        "label": "A",
        "text": "ferait"
      },
      {
        "label": "B",
        "text": "aura fait"
      },
      {
        "label": "C",
        "text": "aurait fait"
      },
      {
        "label": "D",
        "text": "fait"
      }
    ],
    "answer": "A"
  },
  {
    "number": 35,
    "prompt": "Complétez la phrase :\nSi vous ___ les instructions, vous n'auriez pas commis cette erreur.",
    "options": [
      {
        "label": "A",
        "text": "suivez"
      },
      {
        "label": "B",
        "text": "suiviez"
      },
      {
        "label": "C",
        "text": "aviez suivi"
      },
      {
        "label": "D",
        "text": "suivrez"
      }
    ],
    "answer": "C"
  },
  {
    "number": 36,
    "prompt": "Dans quelle phrase « quand » introduit-il une interrogation indirecte ?",
    "options": [
      {
        "label": "A",
        "text": "Quand il pleut, je reste chez moi."
      },
      {
        "label": "B",
        "text": "Quand viendras-tu ?"
      },
      {
        "label": "C",
        "text": "Je voudrais savoir quand il reviendra."
      },
      {
        "label": "D",
        "text": "Quand j'étais jeune, je voyageais beaucoup."
      }
    ],
    "answer": "C"
  },
  {
    "number": 37,
    "prompt": "Choisissez la phrase grammaticalement correcte :",
    "options": [
      {
        "label": "A",
        "text": "Quand je serai arrivé, je t'appellerai."
      },
      {
        "label": "B",
        "text": "Quand je serais arrivé, je t'appellerai."
      },
      {
        "label": "C",
        "text": "Quand je serais arrivé, je t'aurais appelé demain."
      },
      {
        "label": "D",
        "text": "Quand je suis arrivé demain, je t'appellerai."
      }
    ],
    "answer": "A"
  },
  {
    "number": 38,
    "prompt": "Complétez correctement :\nQuand tu ___ ton travail, tu pourras sortir.",
    "options": [
      {
        "label": "A",
        "text": "termineras"
      },
      {
        "label": "B",
        "text": "auras terminé"
      },
      {
        "label": "C",
        "text": "terminais"
      },
      {
        "label": "D",
        "text": "aurais terminé"
      }
    ],
    "answer": "B"
  },
  {
    "number": 39,
    "prompt": "Complétez correctement :\nQuand bien même il ___ très riche, il ne serait pas heureux sans sa famille.",
    "options": [
      {
        "label": "A",
        "text": "est"
      },
      {
        "label": "B",
        "text": "sera"
      },
      {
        "label": "C",
        "text": "serait"
      },
      {
        "label": "D",
        "text": "ait été"
      }
    ],
    "answer": "C"
  },
  {
    "number": 40,
    "prompt": "Dans quelle phrase « quand même » exprime-t-il l'opposition ou la concession ?",
    "options": [
      {
        "label": "A",
        "text": "Quand même viendras-tu ?"
      },
      {
        "label": "B",
        "text": "Il était très fatigué, mais il a quand même terminé son travail."
      },
      {
        "label": "C",
        "text": "Je ne sais pas quand même il viendra."
      },
      {
        "label": "D",
        "text": "Quand même tu travailles, tu réussiras."
      }
    ],
    "answer": "B"
  },
  {
    "number": 41,
    "prompt": "l a échoué ___ il n'avait pas suffisamment préparé son examen.",
    "options": [
      {
        "label": "A",
        "text": "donc"
      },
      {
        "label": "B",
        "text": "parce que"
      },
      {
        "label": "C",
        "text": "à condition que"
      },
      {
        "label": "D",
        "text": "si bien que"
      }
    ],
    "answer": "B"
  },
  {
    "number": 42,
    "prompt": "Il a tellement travaillé ___ il est tombé malade.",
    "options": [
      {
        "label": "A",
        "text": "parce que"
      },
      {
        "label": "B",
        "text": "pourvu que"
      },
      {
        "label": "C",
        "text": "qu'au point"
      },
      {
        "label": "D",
        "text": "si bien que"
      }
    ],
    "answer": "D"
  },
  {
    "number": 43,
    "prompt": "Tu peux participer au concours ___ tu remplisses toutes les conditions.",
    "options": [
      {
        "label": "A",
        "text": "à condition que"
      },
      {
        "label": "B",
        "text": "donc"
      },
      {
        "label": "C",
        "text": "car"
      },
      {
        "label": "D",
        "text": "si bien que"
      }
    ],
    "answer": "A"
  },
  {
    "number": 44,
    "prompt": "Quelle phrase exprime une concession à l’aide d’un connecteur logique ?",
    "options": [
      {
        "label": "A",
        "text": "Il pleut, donc nous restons à la maison."
      },
      {
        "label": "B",
        "text": "Bien qu’il soit fatigué, il continue à travailler."
      },
      {
        "label": "C",
        "text": "Il travaille parce qu’il veut réussir."
      },
      {
        "label": "D",
        "text": "Il révise afin de réussir son examen."
      }
    ],
    "answer": "B"
  },
  {
    "number": 45,
    "prompt": "___ il était malade, il est allé travailler.",
    "options": [
      {
        "label": "A",
        "text": "Donc"
      },
      {
        "label": "B",
        "text": "Comme"
      },
      {
        "label": "C",
        "text": "À condition que"
      },
      {
        "label": "D",
        "text": "Si bien que"
      }
    ],
    "answer": "B"
  },
  {
    "number": 46,
    "prompt": "Il n'a pas révisé, ___ il a échoué à l'examen.",
    "options": [
      {
        "label": "A",
        "text": "parce que"
      },
      {
        "label": "B",
        "text": "à moins que"
      },
      {
        "label": "C",
        "text": "par consequent"
      },
      {
        "label": "D",
        "text": "pourvu que"
      }
    ],
    "answer": "C"
  },
  {
    "number": 47,
    "prompt": "Il a réussi ___ ses efforts.",
    "options": [
      {
        "label": "A",
        "text": "grâce à"
      },
      {
        "label": "B",
        "text": "donc"
      },
      {
        "label": "C",
        "text": "si"
      },
      {
        "label": "D",
        "text": "bien que"
      }
    ],
    "answer": "A"
  },
  {
    "number": 48,
    "prompt": "Elle est ___ intelligente qu'elle comprend tout immédiatement.",
    "options": [
      {
        "label": "A",
        "text": "tellement"
      },
      {
        "label": "B",
        "text": "à condition que"
      },
      {
        "label": "C",
        "text": "parce que"
      },
      {
        "label": "D",
        "text": "donc"
      }
    ],
    "answer": "A"
  },
  {
    "number": 49,
    "prompt": "__ tu fais attention, tu éviteras les erreurs.",
    "options": [
      {
        "label": "A",
        "text": "Parce que"
      },
      {
        "label": "B",
        "text": "Si"
      },
      {
        "label": "C",
        "text": "Donc"
      },
      {
        "label": "D",
        "text": "Puisque"
      }
    ],
    "answer": "B"
  },
  {
    "number": 50,
    "prompt": "Il pleuvait beaucoup, ___ le match a été annulé.",
    "options": [
      {
        "label": "A",
        "text": "à condition que"
      },
      {
        "label": "B",
        "text": "bien que"
      },
      {
        "label": "C",
        "text": "c'est pourquoi"
      },
      {
        "label": "D",
        "text": "pourvu que"
      }
    ],
    "answer": "C"
  },
  {
    "number": 51,
    "prompt": "Complétez correctement la phrase :\n___ il ait obtenu d'excellents résultats, il reste insatisfait de son travail.",
    "options": [
      {
        "label": "A",
        "text": "Malgré"
      },
      {
        "label": "B",
        "text": "Bien qu'"
      },
      {
        "label": "C",
        "text": "Même si"
      },
      {
        "label": "D",
        "text": "Puisqu'"
      }
    ],
    "answer": "B"
  },
  {
    "number": 52,
    "prompt": "Complétez avec la forme verbale correcte :\nElle parle lentement afin que tous les étudiants ___ ses explications.",
    "options": [
      {
        "label": "A",
        "text": "comprennent"
      },
      {
        "label": "B",
        "text": "comprendront"
      },
      {
        "label": "C",
        "text": "comprendraient"
      },
      {
        "label": "D",
        "text": "comprenaient"
      }
    ],
    "answer": "A"
  },
  {
    "number": 53,
    "prompt": "Complétez correctement :\nIl a beaucoup plu pendant la nuit, ___ les routes sont devenues impraticables.",
    "options": [
      {
        "label": "A",
        "text": "En revanche"
      },
      {
        "label": "B",
        "text": "Par conséquent"
      },
      {
        "label": "C",
        "text": "À condition que"
      },
      {
        "label": "D",
        "text": "Bien que"
      }
    ],
    "answer": "B"
  },
  {
    "number": 54,
    "prompt": "Complétez avec le connecteur approprié :\nTous les candidats ont réussi, ___ deux participants qui n'avaient pas terminé l'épreuve.",
    "options": [
      {
        "label": "A",
        "text": "Sauf"
      },
      {
        "label": "B",
        "text": "Donc"
      },
      {
        "label": "C",
        "text": "Afin de"
      },
      {
        "label": "D",
        "text": "Par conséquent"
      }
    ],
    "answer": "A"
  },
  {
    "number": 55,
    "prompt": "Choisissez le connecteur qui exprime l'opposition :\n___ les nouvelles technologies facilitent l'apprentissage, elles ne remplacent pas entièrement le rôle de l'enseignant.",
    "options": [
      {
        "label": "A",
        "text": "Puisque"
      },
      {
        "label": "B",
        "text": "Bien que"
      },
      {
        "label": "C",
        "text": "Alors que"
      },
      {
        "label": "D",
        "text": "Pour que"
      }
    ],
    "answer": "C"
  },
  {
    "number": 56,
    "prompt": "Choisissez la forme correcte :\nLes élèves ___ dans la salle informatique doivent terminer leur exercice.",
    "options": [
      {
        "label": "A",
        "text": "travaillés"
      },
      {
        "label": "B",
        "text": "travaillant"
      },
      {
        "label": "C",
        "text": "en travaillant"
      },
      {
        "label": "D",
        "text": "travaillants"
      }
    ],
    "answer": "B"
  },
  {
    "number": 57,
    "prompt": "Quelle phrase contient un participe passé correctement accordé ?",
    "options": [
      {
        "label": "A",
        "text": "Les lettres que j'ai écrit."
      },
      {
        "label": "B",
        "text": "Les lettres que j'ai écrites."
      },
      {
        "label": "C",
        "text": "Les lettres que j'ai écrite."
      },
      {
        "label": "D",
        "text": "Les lettres que j'ai écrits."
      }
    ],
    "answer": "B"
  },
  {
    "number": 58,
    "prompt": "Complétez correctement :\nLes documents ___ par le directeur seront envoyés aux enseignants.",
    "options": [
      {
        "label": "A",
        "text": "rédigeant"
      },
      {
        "label": "B",
        "text": "en rédigeant"
      },
      {
        "label": "C",
        "text": "rédigés"
      },
      {
        "label": "D",
        "text": "rédiger"
      }
    ],
    "answer": "C"
  },
  {
    "number": 59,
    "prompt": "Identifiez la phrase grammaticalement correcte.",
    "options": [
      {
        "label": "A",
        "text": "En étant arrivé en retard, il a manqué le début du cours."
      },
      {
        "label": "B",
        "text": "Sachant la réponse, elle a levé la main."
      },
      {
        "label": "C",
        "text": "Les exercices en faisant par les élèves sont difficiles."
      },
      {
        "label": "D",
        "text": "Les lettres écrivant par Marie sont sur la table."
      }
    ],
    "answer": "B"
  },
  {
    "number": 60,
    "prompt": "Transformez correctement au discours indirect :\nElle a dit : « J'ai rencontré mon professeur hier. »",
    "options": [
      {
        "label": "A",
        "text": "Elle a dit qu'elle avait rencontré son professeur la veille."
      },
      {
        "label": "B",
        "text": "Elle a dit qu'elle a rencontré son professeur demain."
      },
      {
        "label": "C",
        "text": "Elle a dit qu'elle rencontrerait son professeur hier."
      },
      {
        "label": "D",
        "text": "Elle a dit qu'elle avait rencontré son professeur le lendemain."
      }
    ],
    "answer": "A"
  }
];
