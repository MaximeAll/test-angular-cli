import { Injectable } from "@angular/core";

@Injectable()
export class YoutubersService {
  youtubers = [
    {
      id: 1,
      name: "HugoDécrypte",
      followers: 445000,
      description: "YouTube + l'actualité expliquée = HugoDécrypte"
    },
    {
      id: 2,
      name: "TrashTalkProduction",
      followers: 117000,
      description:
        "Toute l'actualité de la NBA en vidéos et en temps réel sur la chaîne de TrashTalk !"
    },
    {
      id: 3,
      name: "FIRST TEAM SPORTS",
      followers: 42400,
      description:
        "Nouvelle chaine Youtube consacrée aux Sports. Si tu aimes le foot, le rugby, le vélo; tu es au bon endroit !"
    },
    {
      id: 4,
      name: "Une bière et Jivay",
      followers: 124000,
      description: "a bière, comme vous ne l'avez jamais bue."
    },
    {
      id: 5,
      name: "Trxns",
      followers: 21800,
      description: "Pokémon autrement."
    },
    {
      id: 6,
      name: "Dr Nozman",
      followers: 3340000,
      description: "Science & Expérience !"
    },
    {
      id: 7,
      name: "Une chanson, l'addition",
      followers: 76400,
      description:
        "Chaque VENDREDI 15h, le temps d’un café, on vous dit tout sur un des standards de la musique, des 60s à nos jours. "
    },
    {
      id: 8,
      name: "Les Marioles Trotters",
      followers: 54000,
      description:
        "Traverse l'Afrique avec nous ! Depuis 1 an, nous vivons à bord de notre petit van 4x4, nommé Léon."
    },
    {
      id: 9,
      name: "Le Règlement",
      followers: 712000,
      description:
        "Ceux qui respectent le règlement ne le respectent pas correctement."
    }
  ];

  constructor() {}

  getYoutuberList() {
    return this.youtubers;
  }

  addYoutuber(youtuber) {
    youtuber.id = this.youtubers[this.youtubers.length - 1].id + 1;
    this.youtubers.push(youtuber);
  }
}
