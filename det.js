
let recettesDB = [
    {
      id: 1,
      name: "Foul Modammas",
      category: "Petit déjeuner",
      country: "Egypte",
      duration: "30 minutes",
      ingredients: [
        "1 boîte de 400 g de fèves .<br><br>",
        "1/2 tasse d'eau..<br><br>",
        "1/4 tasse d'huile d'olive.<br><br>",
        "2 gousses d'ail, finement hachées.<br><br>",
        "2 cuillères à soupe de jus de citron frais.<br><br>",
        "1 cuillère à café de sel.<br><br>",
        "1/4 cuillère à café de cumin moulu.<br><br>",
        "1/4 tasse de persil frais haché",
        "1/4 tasse de tomates fraîches, coupées en dés.<br><br>",
        "1/4 tasse de concombre frais, coupé en dés.<br><br>",
        "1/4 tasse d'oignon rouge frais, coupé en dés.<br><br>",
      ],
      instructions: [
        "Égoutter les fèves et les rincer sous l'eau froide.<br><br>",
        "Mélanger les fèves, l'eau, l'huile d'olive, l'ail, le jus de citron, le sel et le cumin dans une casserole moyenne.<br><br>",
        "Chauffer le mélange de fèves à feu moyen, en remuant de temps en temps, jusqu'à ce qu'il soit chaud et que les saveurs soient mélangées (environ 5 minutes).<br><br>",
        "Transférer les fèves dans un plat de service peu profond et saupoudrer de persil, de tomates, de concombre et d'oignon rouge.<br><br>",
      ],
      comments: [
        {
          user: "Ahmed",
          rating: 4.5,
          content: "J'adore cette recette, c'est mon petit déjeuner préféré !",
        },
        {
          user: "Sophie",
          rating: 4.0,
          content: "Facile à préparer et délicieux, merci pour la recette !",
        },
      ],
    },
    {
      id: 2,
      name: "Mansaf",
      category: "Déjeuner",
      country: "Jordanie",
      duration: "2 heures",
      ingredients: [
        "1,5 kg de viande d'agneau.<br><br>",
        "1 kg de riz à grain long.<br><br>",
        "500 g de yaourt nature.<br><br>",
        "2 litres d'eau.<br><br>",
        "3 oignons.<br><br>",
        "2 gousses d'ail.<br><br>",
        "1 cuillère à café de cumin.<br><br>",
        "1 cuillère à soupe de beurre clarifié (samneh).<br><br>",
        "1/2 tasse de noix de pin.<br><br>",
        "1/2 tasse de persil plat haché.<br><br>",
        "sel",
        "poivre noir",
      ],
      instructions: [
        "Rincer le riz dans l'eau froide jusqu'à ce que l'eau soit claire.<br><br>",
        "Placer le riz dans une grande casserole, ajouter 2 litres d'eau et porter à ébullition.<br><br>",
        "Baisser le feu, couvrir la casserole et laisser cuire pendant environ 25 minutes, jusqu'à ce que le riz soit cuit.<br><br>",
        "Retirer la casserole du feu et égoutter le riz.<br><br>",
        "Mélanger le yaourt avec une tasse d'eau tiède.<br><br>",
        "Couper la viande d'agneau en morceaux de taille égale et les faire revenir dans une grande casserole avec le beurre clarifié, jusqu'à ce qu'ils soient dorés.<br><br>",
        "Hacher finement les oignons et les faire revenir avec la viande jusqu'à ce qu'ils soient tendres.",
        "Ajouter 2 litres d'eau, le sel et le poivre, et laisser mijoter pendant environ 2 heures, jusqu'à ce que la viande soit tendre.<br><br>",
        "Ajouter le mélange de yaourt et remuer jusqu'à ce que la sauce soit homogène. Laisser mijoter pendant environ 15 minutes.<br><br>",
        "Servir le riz sur un grand plateau, garni de la viande et de la sauce de yaourt.<br><br>",
        "Garnir le plat de noix de pin grillées et de persil haché.<br><br>",
      ],
      comments: [
        {
          user: "Youssef",
          rating: 4.8,
          content:
            "Le mansaf est un plat traditionnel jordanien et cette recette est parfaite !",
        },
        {
          user: "Alice",
          rating: 4.5,
          content:
            "J'ai préparé ce plat pour un dîner et tout le monde a adoré, merci !",
        },
      ],
    },
    {
      id: 3,
      name: "Makaroni bel Bechamel",
      category: "Dîner",
      country: "Liban",
      duration: "45 minutes",
      ingredients: [
        "500 g de macaroni.<br><br>",
        "2 litres d'eau.<br><br>",
        "1 cuillère à soupe d'huile d'olive.<br><br>",
        "1 oignon, finement haché.<br><br>",
        "500 g de viande hachée.<br><br>",
        "2 cuillères à soupe de concentré de tomate.<br><br>",
        "2 cuillères à soupe de beurre.<br><br>",
        "2 cuillères à soupe de farine.<br><br>",
        "1 litre de lait",
        "sel.<br><br>",
        "poivre.<br><br>",
        "noix de muscade.<br><br>",
      ],
      instructions: [
        "Préchauffez le four à 180°C.<br><br>",
        "Dans une grande casserole, faites bouillir l'eau salée. Ajoutez les macaronis et laissez cuire pendant 10-12 minutes. Égouttez-les et réservez.<br><br>",
        "Dans une autre casserole, faites chauffer l'huile d'olive et faites revenir l'oignon haché jusqu'à ce qu'il soit tendre.<br><br>",
        "Ajoutez la viande hachée et faites-la cuire jusqu'à ce qu'elle soit dorée.<br><br>",
        "Ajoutez le concentré de tomate et mélangez bien.<br><br>",
        "Salez et poivrez selon votre goût, et ajoutez une pincée de noix de muscade. Réservez.<br><br>",
        "Dans une troisième casserole, faites fondre le beurre et ajoutez la farine. Mélangez bien jusqu'à ce que le mélange devienne doré.<br><br>",
        "Ajoutez le lait en remuant constamment pour éviter la formation de grumeaux.<br><br>",
        "Salez et poivrez selon votre goût, et ajoutez une pincée de noix de muscade.<br><br>",
        "Laissez cuire à feu doux jusqu'à ce que la béchamel épaississe.<br><br>",
        "Dans un grand plat allant au four, disposez les macaronis, puis versez la sauce de viande hachée sur le dessus.<br><br>",
        "Enfin, versez la béchamel sur le dessus et enfournez pendant 20-25 minutes, ou jusqu'à ce que le dessus soit doré et croustillant.<br><br>",
        "Retirez du four et servez chaud.<br><br>",
      ],
      comments: [
        {
          user: "Samir",
          rating: 4.2,
          content:
            "Le makaroni bel bechamel est un classique libanais et cette recette est facile à suivre !",
        },
        {
          user: "Julie",
          rating: 4.5,
          content:
            "J'ai ajouté du poulet grillé à cette recette et c'était délicieux, merci !",
        },
      ],
    },
    {
      id: 4,
      name: "Kabsa au poulet",
      category: "Déjeuner",
      country: "Arabie Saoudite",
      duration: "1 heure",
      ingredients: [
        "1 poulet entier, coupé en morceaux.<br><br>",
        "3 tasses de riz basmati.<br><br>",
        "3 tomates.<br><br>",
        "2 oignons.<br><br>",
        "2 gousses d'ail.<br><br>",
        "1 poivron vert.<br><br>",
        "1 cuillère à soupe de concentré de tomate.<br><br>",
        "4 cuillères à soupe d'huile d'olive.<br><br>",
        "2 cuillères à soupe de mélange d'épices kabsa (cumin, coriandre, cannelle, poivre noir).<br><br>",
        "2 bâtons de cannelle.<br><br>",
        "2 feuilles de laurier.<br><br>",
        "sel.<br><br>",
        "poivre.<br><br>",
        "4 tasses d'eau.<br><br>",
      ],
      instructions: [
        "Dans une grande casserole, faites chauffer l'huile d'olive, puis ajoutez les morceaux de poulet et faites-les dorer pendant 5 minutes de chaque côté.<br><br>",
        "Retirez le poulet de la casserole et mettez-le de côté.<br><br>",
        "Dans la même casserole, ajoutez les oignons hachés et l'ail écrasé et faites-les revenir jusqu'à ce qu'ils soient tendre.<br><br>",
        "Ajoutez les tomates coupées en dés, le poivron coupé en petits morceaux et le concentré de tomate. Mélangez bien.<br><br>",
        "Ajoutez le mélange d'épices kabsa, les bâtons de cannelle, les feuilles de laurier, ainsi que du sel et du poivre selon votre goût.<br><br>",
        "Remettez le poulet dans la casserole et ajoutez 4 tasses d'eau. Couvrez la casserole et laissez mijoter pendant environ 30 minutes, en remuant de temps en temps.<br><br>",
        "Retirez le poulet de la casserole et mettez-le de côté.<br><br>",
        "Ajoutez le riz dans la casserole avec le bouillon restant, puis remettez les morceaux de poulet sur le dessus.<br><br>",
        "Couvrez la casserole et laissez mijoter à feu doux pendant environ 30 minutes, ou jusqu'à ce que le riz soit cuit et que tout le liquide soit absorbé.<br><br>",
        "Retirez les bâtons de cannelle et les feuilles de laurier, puis servez chaud.<br><br>",
      ],
      comments: [
        {
          user: "Fatima",
          rating: 4.6,
          content:
            "Le kabsa est un plat délicieux et cette recette est facile à suivre, merci !",
        },
        {
          user: "Antoine",
          rating: 4.0,
          content:
            "J'ai remplacé le poulet par des crevettes et c'était tout aussi bon, merci pour l'inspiration !",
        },
      ],
    },
    {
      id: 5,
      name: "Makloubeh",
      category: "Dîner",
      country: "Palestine",
      duration: "2 heures",
      ingredients: [
        "2 tasses de riz basmati.<br><br>",
        "1 gros oignon.<br><br>",
        "3 aubergines.<br><br>",
        "3 petites tomates.<br><br>",
        "1 cuillère à soupe de tomate concentrée.<br><br>",
        "3 cuillères à soupe d'huile d'olive.<br><br>",
        "1 cuillère à café de curcuma.<br><br>",
        "1 cuillère à café de paprika.<br><br>",
        "1 cuillère à café de cumin.<br><br>",
        "sel.<br><br>",
        "poivre.<br><br>",
        "2 tasses d'eau.<br><br>",
      ],
      instructions: [
        "Tout d'abord, lavez le riz plusieurs fois jusqu'à ce que l'eau soit claire, puis laissez-le tremper dans de l'eau froide pendant 30 minutes.<br><br>",
        "Dans une grande casserole, faites chauffer 2 cuillères à soupe d'huile d'olive, puis ajoutez l'oignon haché et laissez-le revenir pendant 2 minutes.<br><br>",
        "Ajoutez ensuite les aubergines coupées en tranches épaisses et les tomates coupées en petits dés.<br><br>",
        "Ajoutez le curcuma, le paprika et le cumin, ainsi que du sel et du poivre selon votre goût.<br><br>",
        "Laissez mijoter pendant environ 15 minutes, en remuant de temps en temps.<br><br>",
        "Dans une autre casserole, faites bouillir 2 tasses d'eau salée, puis ajoutez le riz et laissez-le cuire à feu doux jusqu'à ce que l'eau soit absorbée.<br><br>",
        "Dans un grand plat allant au four, disposez les tranches d'aubergine en formant une couche au fond, puis ajoutez une couche de riz par-dessus.<br><br>",
        "Ajoutez ensuite une couche du mélange d'aubergines et de tomates, puis une autre couche de riz. Répétez l'opération jusqu'à épuisement des ingrédients.<br><br>",
        "Mélangez la cuillère à soupe de tomate concentrée avec un peu d'eau chaude, puis versez-la sur le dessus du plat.<br><br>",
        "Couvrez le plat avec un couvercle ou du papier d'aluminium et laissez-le cuire au four à 180 degrés Celsius pendant environ 45 minutes.<br><br>",
        "Retirez le couvercle et laissez-le cuire encore 10 minutes pour faire dorer le dessus.<br><br>",
        "Retirez le plat du four et laissez-le reposer pendant 10 minutes avant de le servir.<br><br>",
      ],
      comments: [
        {
          user: "Rami",
          rating: 4.8,
          content:
            "Le makloubeh est un plat délicieux et cette recette est très réussie, bravo !",
        },
        {
          user: "Nina",
          rating: 4.2,
          content:
            "J'ai ajouté des aubergines grillées à cette recette et c'était parfait, merci !",
        },
      ],
    },
    {
      id: 6,
      name: "Couscous aux légumes",
      category: "Plat principal",
      country: "Algérie",
      duration: "2 heures",
      ingredients: [
        "500g de semoule de couscous.<br><br>",
        "4 carottes.<br><br>",
        "2 navets.<br><br>",
        "2 courgettes.<br><br>",
        "1 poivron.<br><br>",
        "2 oignons.<br><br>",
        "4 tomates.<br><br>",
        "1 bouquet de coriandre.<br><br>",
        "1 bouquet de persil.<br><br>",
        "3 gousses d'ail.<br><br>",
        "1 c. à soupe de concentré de tomates.<br><br>",
        "1 c. à soupe d'huile d'olive.<br><br>",
        "sel.<br><br>",
        "poivre.<br><br>",
      ],
      instructions: [
        "Faire chauffer de l'eau dans une couscoussière.<br><br>",
        "Dans un grand saladier, mélanger la semoule avec 1 c. à soupe d'huile d'olive, du sel et de l'eau tiède. Bien mélanger et laisser reposer 10 minutes.<br><br>",
        "Placer la semoule dans le panier de la couscoussière et laisser cuire à la vapeur pendant 20 minutes.<br><br>",
        "Pendant ce temps, couper les légumes en morceaux et les faire revenir dans une cocotte avec de l'huile d'olive.<br><br>",
        "Ajouter les tomates, le concentré de tomates, l'ail haché, le bouquet de coriandre et de persil, du sel et du poivre.<br><br>",
        "Couvrir d'eau et laisser mijoter 1 heure.<br><br>",
        "Retirer la semoule de la couscoussière et la verser dans le saladier. Ajouter un peu d'eau, mélanger et remettre dans la couscoussière pour cuire encore 20 minutes.<br><br>",
        "Servir le couscous avec les légumes et la sauce.<br><br>",
      ],
      comments: [
        {
          user: "Samia",
          rating: 4.8,
          content:
            "Cette recette de couscous est excellente, les légumes sont bien cuits et parfumés. Merci pour cette recette traditionnelle.",
        },
        {
          user: "Yassin",
          rating: 4.5,
          content:
            "Je suis algérien et je dois dire que ce couscous est l'un des meilleurs que j'ai jamais mangé. Bravo pour la recette !",
        },
      ],
    },
    {
      id: 7,
      name: "Tajine de poulet aux olives",
      category: "Déjeuner",
      country: "Maroc",
      duration: "1 heure",
      ingredients: [
        "4 cuisses de poulet.<br><br>",
        "1 oignon, émincé.<br><br>",
        "3 gousses d'ail, émincées.<br><br>",
        "2 tomates, coupées en dés.<br><br>",
        "1/2 tasse d'olives vertes dénoyautées.<br><br>",
        "2 cuillères à soupe d'huile d'olive.<br><br>",
        "1 cuillère à soupe de paprika.<br><br>",
        "1 cuillère à soupe de cumin.<br><br>",
        "1/2 cuillère à café de gingembre moulu.<br><br>",
        "1/2 cuillère à café de curcuma.<br><br>",
        "1/2 cuillère à café de cannelle.<br><br>",
        "1/2 cuillère à café de poivre noir.<br><br>",
        "1/2 tasse d'eau.<br><br>",
        "Coriandre fraîche pour garnir.<br><br>",
      ],
      instructions: [
        "Dans un grand tajine ou une casserole, faire chauffer l'huile d'olive à feu moyen.<br><br>",
        "Ajouter l'oignon et l'ail, et faire revenir jusqu'à ce qu'ils soient tendres et dorés.<br><br>",
        "Ajouter le poulet et faire dorer de tous les côtés.<br><br>",
        "Ajouter les tomates, les olives, le paprika, le cumin, le gingembre, le curcuma, la cannelle et le poivre noir.<br><br>",
        "Verser l'eau et mélanger.<br><br>",
        "Couvrir le tajine ou la casserole et laisser mijoter à feu doux pendant environ 1 heure et 30 minutes, ou jusqu'à ce que le poulet soit tendre.<br><br>",
        "Garnir de coriandre fraîche avant de servir.<br><br>",
      ],
      comments: [
        {
          user: "Khalid",
          rating: 4.6,
          content:
            "Le tajine de poulet aux olives est un classique marocain et cette recette est facile à suivre, merci !",
        },
        {
          user: "Amélie",
          rating: 4.5,
          content:
            "J'ai ajouté des citrons confits à cette recette et c'était délicieux, merci pour l'inspiration !",
        },
      ],
    },
    {
      id: 8,
      name: "Chorba Frik",
      category: "Entrée",
      country: "Algérie",
      duration: "45 minutes",
      ingredients: [
        "500g de viande d'agneau ou de boeuf, coupée en petits morceaux.<br><br>",
        "2 oignons, hachés.<br><br>",
        "2 gousses d'ail, hachées.<br><br>",
        "1/2 tasse de frik.<br><br>",
        "2 tomates, coupées en dés.<br><br>",
        "1/2 tasse de pois chiches, trempés dans l'eau la veille.<br><br>",
        "1/4 tasse de concentré de tomate.<br><br>",
        "2 cuillères à soupe d'huile d'olive.<br><br>",
        "1 cuillère à café de paprika.<br><br>",
        "1 cuillère à café de cumin.<br><br>",
        "1/2 cuillère à café de curcuma.<br><br>",
        "1/2 cuillère à café de gingembre moulu.<br><br>",
        "1/2 cuillère à café de poivre noir.<br><br>",
        "1 bouquet de coriandre fraîche, hachée.<br><br>",
        "Sel.<br><br>",
        "Eau.<br><br>",
      ],
      instructions: [
        "Dans une marmite, faire chauffer l'huile d'olive à feu moyen.<br><br>",
        "Ajouter les oignons et l'ail, et faire revenir jusqu'à ce qu'ils soient tendres et dorés.<br><br>",
        "Ajouter la viande et faire dorer de tous les côtés.<br><br>",
        "Ajouter les tomates, le concentré de tomate, le paprika, le cumin, le curcuma, le gingembre, le poivre noir et la coriandre hachée. Saler et bien mélanger.<br><br>",
        "Ajouter les pois chiches et couvrir d'eau.<br><br>",
        "Porter à ébullition, puis baisser le feu et laisser mijoter à couvert pendant 30 minutes.<br><br>",
        "Ajouter le frik et continuer de mijoter pendant encore 20 minutes, en remuant de temps en temps.<br><br>",
        "Ajouter de l'eau si nécessaire pour obtenir la consistance désirée.<br><br>",
        "Servir chaud avec du pain.<br><br>",
      ],
      comments: [
        {
          user: "Fatiha",
          rating: 4.3,
          content:
            "La chorba frik est une soupe algérienne traditionnelle et cette recette est très réussie, merci !",
        },
        {
          user: "Vincent",
          rating: 4.0,
          content:
            "J'ai ajouté des pois chiches à cette recette et c'était délicieux, merci pour l'idée !",
        },
      ],
    },
    {
      id: 9,
      name: "Koushari",
      category: "Déjeuner",
      country: "Egypte",
      duration: "1 heure",
      ingredients: [
        "2 tasses de riz.<br><br>",
        "1 tasse de lentilles.<br><br>",
        "1 tasse de macaronis.<br><br>",
        "1/2 tasse de pois chiches.<br><br>",
        "1 oignon.<br><br>",
        "4 gousses d'ail.<br><br>",
        "1 cuillère à soupe de vinaigre.<br><br>",
        "1 cuillère à soupe de sel.<br><br>",
        "1 cuillère à soupe de poivre noir.<br><br>",
        "1 cuillère à soupe de cumin.<br><br>",
        "1 cuillère à soupe de coriandre.<br><br>",
        "1/2 tasse d'huile végétale.<br><br>",
        "Sauce tomate :.<br><br>",
        "4 tomates pelées et coupées en petits dés.<br><br>",
        "1/4 tasse d'huile végétale.<br><br>",
        "1/2 cuillère à soupe de vinaigre.<br><br>",
        "1/2 cuillère à soupe de sel.<br><br>",
        "1/2 cuillère à soupe de poivre noir.<br><br>",
      ],
      instructions: [
        "Rincer le riz et le mettre dans une casserole avec 4 tasses d'eau salée. Porter à ébullition, puis réduire le feu et laisser mijoter pendant 20 minutes.<br><br>",
        "Rincer les lentilles et les pois chiches, puis les mettre dans une casserole avec 4 tasses d'eau salée. Porter à ébullition, puis réduire le feu et laisser mijoter pendant 20 minutes.<br><br>",
        "Faire cuire les macaronis selon les instructions sur l'emballage.<br><br>",
        "Dans une poêle, faire chauffer l'huile végétale et faire revenir l'oignon et l'ail jusqu'à ce qu'ils soient dorés.<br><br>",
        "Ajouter le vinaigre, le sel, le poivre, le cumin et la coriandre, puis retirer du feu.<br><br>",
        "Dans une autre poêle, faire chauffer 1/4 tasse d'huile végétale et faire revenir les tomates jusqu'à ce qu'elles soient tendres.<br><br>",
        "Ajouter le vinaigre, le sel et le poivre, puis retirer du feu.<br><br>",
        "Pour servir, disposer le riz, les lentilles, les macaronis et les pois chiches dans un grand plat. Verser la sauce tomate sur le dessus, puis ajouter le mélange d'oignons et d'ail.<br><br>",
        "Mélanger le tout et servir chaud.<br><br>",
      ],
      comments: [
        {
          user: "Yara",
          rating: 4.5,
          content:
            "Le koushari est un plat égyptien délicieux et cette recette est facile à suivre, merci !",
        },
        {
          user: "Salim",
          rating: 5,
          content:
            "Je suis égyptienne et je peux confirmer que cette recette est très authentique et délicieuse. Merci de l'avoir partagée!",
        },
        {
          user: "Pierre",
          rating: 4.0,
          content:
            "J'ai ajouté des oignons frits à cette recette et c'était délicieux, merci pour l'idée !",
        },
      ],
    },
    {
      id: 10,
      name: "Köfte",
      category: "Plat",
      country: "Turquie",
      duration: "1h",
      ingredients: [
        "Viande hachée (500g)",
        "Oignon (1 pièce, finement haché)",
        "Ail (2 gousses, écrasé)",
        "Persil frais (1/2 tasse, haché)",
        "Paprika (1 cuillère à soupe)",
        "Cumin (1 cuillère à soupe)",
        "Sel (1 cuillère à café)",
        "Poivre noir (1/2 cuillère à café)",
        "Huile d'olive (3 cuillères à soupe)",
      ],
      instructions: [
        "Mélanger la viande hachée, l'oignon, l'ail, le persil, le paprika, le cumin, le sel et le poivre noir dans un grand bol.",
        "Malaxer le mélange avec vos mains jusqu'à ce qu'il soit bien mélangé et uniforme.",
        "Prendre une petite quantité de mélange de viande et façonner en petites boules.",
        "Faire chauffer l'huile d'olive dans une poêle à feu moyen-élevé.",
        "Ajouter les boulettes de viande dans la poêle et faire frire jusqu'à ce qu'elles soient bien dorées de tous les côtés et cuites à l'intérieur, environ 10 minutes.",
        "Servir chaud avec du riz, de la salade ou du pain pita.",
      ],
      comments: [
        {
          user: "Aicha",
          rating: 4,
          content: "Très bonne recette, mais un peu épicée pour moi.",
        },
        {
          user: "Yassin",
          rating: 5,
          content: "Délicieux ! Je recommande vivement.",
        },
      ],
    },
  ];
  
let recetteID=localStorage.getItem('recetteID');

function comments(nbr){
  let string='<ul style="position  :  relative; left :30px">'
    for (let i=0;i<recettesDB[nbr].comments.length;i++){
      string=string+'<li><ul><li>Username :'+recettesDB[nbr].comments[i].user+'</li><li>Content:'+recettesDB[nbr].comments[i].content+'</li><li>Rate:'+recettesDB[nbr].comments[i].rating+'/5</li></ul></li><br>';
    }
    string=string+'</ul>';
return (string)
}

document.getElementById("name").innerHTML="Nom de la Recette: "+recettesDB[recetteID-1].name;
document.getElementById("category").innerHTML="De Category: "+recettesDB[recetteID-1].category;
document.getElementById("country").innerHTML="De Pays: "+recettesDB[recetteID-1].country;
document.getElementById("duration").innerHTML="La Duree: "+recettesDB[recetteID-1].duration;
document.getElementById("ingredient").innerHTML="Voici Les Ingredients: "+'<br>'+recettesDB[recetteID-1].ingredients;
document.getElementById("instruction").innerHTML="Voici Les Instructions: "+'<br>'+recettesDB[recetteID-1].instructions;
document.getElementById("comments").innerHTML="Voici Les Commantaires :"+comments(recetteID-1);
var imgN=2;
document.getElementById("recImg2").innerHTML='<img src="assets/recettes/'+recetteID+'/'+imgN+'.png" class="recImg">';imgN++;
document.getElementById("recImg3").innerHTML='<img src="assets/recettes/'+recetteID+'/'+imgN+'.png" class="recImg">';imgN++;
document.getElementById("recImg4").innerHTML='<img src="assets/recettes/'+recetteID+'/'+imgN+'.png" class="recImg">';