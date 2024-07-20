const about = {
  title: 'Vó Rosa bolos e Sobremesas',
  type: 'Padaria & Conveniência',
  message:
    'Especialista em Bolos caseiros, de aniversário e sobremesas. O melhor café da manhã da região do Matão-Sumaré!',
  address:
    'R. Maria C. de Sá, 22 - Loja A - Parque Progresso (Nova Veneza), Campinas - SP, 13180-180',
  googleMapAdd: 'https://maps.app.goo.gl/icMFVx2t4Q9UkcW29',
  imgHome: 'img/imgAbout.jpg',
  imgAbout: 'img/imgHome.jpg',
  imgMap: 'img/imgMap.jpg',
  contact: '+5519992665596',
  facebook: 'https://www.facebook.com/BolosVoRosa/',
  email: 'bolosvorosa@outlook.com',
  operation: [
    {
      dayWeek: 'Segunda-feira',
      openingHours: '06:30 - 18:00',
    },
    {
      dayWeek: 'Terça-feira',
      openingHours: '06:30 - 18:00',
    },
    {
      dayWeek: 'Quarta-feira',
      openingHours: '06:30 - 18:00',
    },
    {
      dayWeek: 'Quinta-feira',
      openingHours: '06:30 - 18:00',
    },
    {
      dayWeek: 'Sexta-feira',
      openingHours: '06:30 - 18:00',
    },
    {
      dayWeek: 'Sábado',
      openingHours: '07:00 - 18:00',
    },
    {
      dayWeek: 'Domingo',
      openingHours: '06:30 - 12:00',
    },
  ],
  paymentMethods: [
    {
      methods: 'Débito',
      info: 'Visa, MasterCard, Maestro, Elo',
    },
    {
      methods: 'Crédito',
      info: 'Visa, MasterCard, Maestro, Hipercard, Elo',
    },
    {
      methods: 'Vale Refeição',
      info: 'Alelo',
    },
    {
      methods: 'Dinheiro',
      info: 'Pagamento na entrega',
    },
    {
      methods: 'Pix',
      info: 'Pagamento online',
    },
  ],
};

export type Tabout = {
  title: string;
  type: string;
  message: string;
  address: string;
  imgHome: string;
  imgAbout: string;
  imgMap: string;
  contact: string;
  facebook: string;
  email: string;
  operation: {
    dayWeek: string;
    openingHours: string;
  }[];
  paymentMethods: {
    methods: string;
    info: string;
  }[];
};

const promoValentinesDay = [
  {
    id: 1,
    title: 'Box: Eu Te Amo',
    Ingredients: [
      '1 lanches (misto frio) com salada',
      '2 pães de queijo',
      '1 suco natural de 300ml',
      '3 brigadeiros artesanais',
      '2 bombons ferrero rocher',
      '1 saquinho de biscoitinhos amanteigados( petit four)',
      'biscoitinhos, te amo',
      'frutas da estação',
      'arranjo de flores secas',
      'coração de pelúcia, Eu Te Amo',
      'Acompanha linda cesta de papel cartão.',
    ],
    imgCard: 'img/boxeuteamocard.jpg',
    imgAbout: 'img/boxeuteamoabout.jpg',
    price: 69,
  },
  {
    id: 4,
    title: 'Cesta Amo Você',
    Ingredients: [
      'Linda caixa de presente em madeira',
      '1 misto frio com salada',
      '2 pães de queijo',
      '1 suco de laranja natural 300ml',
      '1 salgado assado (sabor disponível na loja)',
      '1 kit biscoitinhos amanteigados petit four',
      '2 brigadeiros artesanais',
      '1 bombom ferrero rocher',
      '1 cookie artesanal',
      '1 brownie',
      '1 capucino em pó 100g',
      '1 saquinho de torradas artesanais',
      '1 bolo baby com cobertura (sabor disponível na loja)',
      'biscoitinhos, com a frase Te Amo',
      'frutinhas da estação',
      'coração de pelúcia, Amo Você/ Com Amor',
      'arranjo de flores secas',
      'Você pode enviar 2 fotos ( com antecedência)',
    ],
    imgCard: 'img/cestaamovocecard.jpg',
    imgAbout: 'img/cestaamovoceabout.jpg',
    price: 179,
  },
  {
    id: 2,
    title: 'Cesta: O Presente',
    Ingredients: [
      'serve uma a duas pessoas',
      'Linda caixa de presente em papel cartão',
      '1 misto frio',
      '1 lanche natural (pão australiano, queijo branco , peito de peru e salada)',
      '1 suco de laranja natural 300ml',
      '1 amendoim japonês',
      '1 salgadinho torcida',
      '1 salgado assado',
      '2 pão de queijo',
      'frutinhas da estação',
      '2 brigadeiros artesanais',
      'torrada',
      '2 brownies',
      '1 capucino em pó 100g',
    ],
    imgCard: 'img/cestaopresentcard.jpg',
    imgAbout: 'img/cestaopresentabout.jpg',
    price: 92,
  },
  {
    id: 3,
    title: 'Kit Foundue Salgado',
    Ingredients: [
      'Kit Fondue Completo (serve 2 pessoas)',
      '400g de creme de queijo',
      'pão australiano grande',
      'torradas temperadas',
      'Box fondue salgado:',
      '-azeitonas',
      '-salame',
      '-queijo mussarela',
      '- presunto',
      '- mortadela',
      '3 molhos:',
      '-maionese da casa',
      '-mostarda e mel',
      '-cheeder',
    ],
    imgCard: 'img/kitfounduesalgadocard.png',
    imgAbout: 'img/kitfounduesalgadoabout.jpg',
    price: 115,
  },
  {
    id: 5,
    title: 'Cesta: Loucos por Chocolate',
    Ingredients: [
      'tens da cesta:',
      '1 bolo baby com cobertura de chocolate',
      '(sabor disponível na loja)',
      '1 marmitinha com 6 brigadeiros gourmet',
      '1 saquinho de biscoitinhos amanteigados( petit four)',
      '1 copo da felicidade 250ml (sabor disponível na loja)',
      '1 saquinho de torradas',
      '1 pote de ganache de chocolate 250ml',
      '1 bolo de pote trufado 250ml',
      '1 coxinha de brigadeiro com morango',
      '1 cookie da casa, 2 brownies',
      '1 capucino em pó 100g',
      '1 suco natural de 500ml',
      'biscoitinhos: te amo',
      'coração de pelúcia, Eu Te Amo',
      'frutas da estação, e arranjo de flores secas',
      'Acompanha linda cesta em papel cartão',
    ],
    imgCard: 'img/cestaloucosporchocolatecard.jpg',
    imgAbout: 'img/cestaloucosporchocolateabout.jpg',
    price: 139,
  },
];
export type TpromoValentinesDay = {
  id: number;
  title: string;
  Ingredients: string[];
  imgCard: string;
  imgAbout: string;
  price: number;
}[];

const options = [
  {
    options: 'promoValentinesDay',
    id: 30,
    itens: [
      {
        id: 1,
        title: 'Box: Eu Te Amo',
        Ingredients: [
          '1 lanches (misto frio) com salada',
          '2 pães de queijo',
          '1 suco natural de 300ml',
          '3 brigadeiros artesanais',
          '2 bombons ferrero rocher',
          '1 saquinho de biscoitinhos amanteigados( petit four)',
          'biscoitinhos, te amo',
          'frutas da estação',
          'arranjo de flores secas',
          'coração de pelúcia, Eu Te Amo',
          'Acompanha linda cesta de papel cartão.',
        ],
        imgCard: 'img/boxeuteamocard.jpg',
        imgAbout: 'img/boxeuteamoabout.jpg',
        price: 69,
      },
      {
        id: 4,
        title: 'Cesta Amo Você',
        Ingredients: [
          'Linda caixa de presente em madeira',
          '1 misto frio com salada',
          '2 pães de queijo',
          '1 suco de laranja natural 300ml',
          '1 salgado assado (sabor disponível na loja)',
          '1 kit biscoitinhos amanteigados petit four',
          '2 brigadeiros artesanais',
          '1 bombom ferrero rocher',
          '1 cookie artesanal',
          '1 brownie',
          '1 capucino em pó 100g',
          '1 saquinho de torradas artesanais',
          '1 bolo baby com cobertura (sabor disponível na loja)',
          'biscoitinhos, com a frase Te Amo',
          'frutinhas da estação',
          'coração de pelúcia, Amo Você/ Com Amor',
          'arranjo de flores secas',
          'Você pode enviar 2 fotos ( com antecedência)',
        ],
        imgCard: 'img/cestaamovocecard.jpg',
        imgAbout: 'img/cestaamovoceabout.jpg',
        price: 179,
      },
      {
        id: 2,
        title: 'Cesta: O Presente',
        Ingredients: [
          'serve uma a duas pessoas',
          'Linda caixa de presente em papel cartão',
          '1 misto frio',
          '1 lanche natural (pão australiano, queijo branco , peito de peru e salada)',
          '1 suco de laranja natural 300ml',
          '1 amendoim japonês',
          '1 salgadinho torcida',
          '1 salgado assado',
          '2 pão de queijo',
          'frutinhas da estação',
          '2 brigadeiros artesanais',
          'torrada',
          '2 brownies',
          '1 capucino em pó 100g',
        ],
        imgCard: 'img/cestaopresentcard.jpg',
        imgAbout: 'img/cestaopresentabout.jpg',
        price: 92,
      },
      {
        id: 3,
        title: 'Kit Foundue Salgado',
        Ingredients: [
          'Kit Fondue Completo (serve 2 pessoas)',
          '400g de creme de queijo',
          'pão australiano grande',
          'torradas temperadas',
          'Box fondue salgado:',
          '-azeitonas',
          '-salame',
          '-queijo mussarela',
          '- presunto',
          '- mortadela',
          '3 molhos:',
          '-maionese da casa',
          '-mostarda e mel',
          '-cheeder',
        ],
        imgCard: 'img/kitfounduesalgadocard.png',
        imgAbout: 'img/kitfounduesalgadoabout.jpg',
        price: 115,
      },
      {
        id: 5,
        title: 'Cesta: Loucos por Chocolate',
        Ingredients: [
          'tens da cesta:',
          '1 bolo baby com cobertura de chocolate',
          '(sabor disponível na loja)',
          '1 marmitinha com 6 brigadeiros gourmet',
          '1 saquinho de biscoitinhos amanteigados( petit four)',
          '1 copo da felicidade 250ml (sabor disponível na loja)',
          '1 saquinho de torradas',
          '1 pote de ganache de chocolate 250ml',
          '1 bolo de pote trufado 250ml',
          '1 coxinha de brigadeiro com morango',
          '1 cookie da casa, 2 brownies',
          '1 capucino em pó 100g',
          '1 suco natural de 500ml',
          'biscoitinhos: te amo',
          'coração de pelúcia, Eu Te Amo',
          'frutas da estação, e arranjo de flores secas',
          'Acompanha linda cesta em papel cartão',
        ],
        imgCard: 'img/cestaloucosporchocolatecard',
        imgAbout: 'img/cestaloucosporchocolateabout.jpg',
        price: 139,
      },
    ],
  },
  {
    options: 'Os mais Baratos',
    id: 6,
    itens: [
      {
        id: 7,
        title: 'Bombom Morango do Nordeste no Pote',
        Ingredients: [
          'Muito morango, um creme saboroso e chocolate, a sobremesa perfeita!',
        ],
        imgCard: 'img/bombommorangocard.jpg',
        imgAbout: 'img/bombommorangoabout.jpg',
        price: 5,
      },
      {
        id: 8,
        title: 'Bolo Coco Gelado',
        Ingredients: [
          'legitima receitinha de Vó. bolo de coco gelado molhadinho',
        ],
        imgCard: 'img/bolocococard.png',
        imgAbout: 'img/bolococoabout.jpg',
        price: 6,
      },
      {
        id: 9,
        title: 'Bolo no pote Ninho Trufado 250g',
        Ingredients: [
          'Bolo no pote Ninho trufado: massa de Ninho com massa de chocolate, com recheio de creme de Ninho trufado com chocolate.',
        ],
        imgCard: 'img/bolopoteninhotrufadocard.jpg',
        imgAbout: 'img/bolopoteninhotrufadoabout.jpg',
        price: 10,
      },
      {
        id: 10,
        title: 'Bolo no pote de Ninho 250g',
        Ingredients: [
          'Bolo no pote de Ninho: massa de Ninho molhadinho, com um delicioso recheio de creme de Ninho.',
        ],
        imgCard: 'img/bolopoteninhoabout.jpg',
        imgAbout: 'img/bolopoteninhocard.jpg',
        price: 10,
      },
    ],
  },
  {
    options: 'Os Famosos - Bolos vulcão',
    id: 11,
    itens: [
      {
        id: 12,
        title: 'Bolo Pistache Grande',
        Ingredients: [
          'Delicioso bolo de chocolate, com uma super cobertura de pistache.',
          'De 12 a 16 fatias',
        ],
        imgCard: 'img/bolopistachecard.jpg',
        imgAbout: 'img/bolopistacheabout.jpg',
        price: 45,
      },
      {
        id: 13,
        title: 'Bolo de Chocolate Vulcão Nutella c/Morangos. Grande',
        Ingredients: [
          'Bolo de Chocolate, com o furo do bolo cheio de chocolate (vulcão) cheio de Nutella e cobertura de Nutella, com morangos.',
          'Serve 16 fatias.',
        ],
        imgCard: 'img/bolovulcaocard.jpg',
        imgAbout: 'img/bolovulcaoabout.jpg',
        price: 50,
      },
      {
        id: 14,
        title: 'Bolo de chocolate c/ 2 coberturas ( dois amores) Grande',
        Ingredients: [
          'Bolo super chocolatudo.',
          'Cobertura ganache de chocolate e creme de Ninho !!! 1,6 kg aprox.',
        ],
        imgCard: 'img/bolodoisamorescard.jpg',
        imgAbout: 'img/bolodoisamoresabout.jpg',
        price: 45,
      },
    ],
  },
  {
    options: 'Lanches na chapa',
    id: 16,
    itens: [
      {
        id: 17,
        title: 'PAO COM OVO',
        Ingredients: ['Pão com manteiga na chapa e ovo frito'],
        imgCard: 'img/paocomovocard.jpg',
        imgAbout: 'img/paocomovoabout.jpg',
        price: 8,
      },
      {
        id: 18,
        title: 'PAO COM MORTADELA',
        Ingredients: ['pão Francês /50grmortadela defumada'],
        imgCard: 'img/paocommortadelacard.jpg',
        imgAbout: 'img/paocommortadelaabout.jpg',
        price: 8,
      },
      {
        id: 19,
        title: 'Misto quente c/mortadela',
        Ingredients: ['Pão com manteiga na chapa, mortadela e mussarela'],
        imgCard: 'img/mistoquentecard.jpg',
        imgAbout: 'img/mistoquenteabout.jpg',
        price: 12,
      },
    ],
  },
  {
    options: 'Tortas e baguetes recheados',
    id: 21,
    itens: [
      {
        id: 22,
        title: 'Baguete de frango com requeijão',
        Ingredients: ['Baguete recheada de frango com requeijão'],
        imgCard: 'img/baquetefrangocard.jpg',
        imgAbout: 'img/baquetefrangoabout.jpg',
        price: 15,
      },
      {
        id: 23,
        title: 'Baguete 3 queijos',
        Ingredients: [
          'Baguete ( 400gr) Requeijão cremoso',
          'Queijo mussarela',
          'Cream cheasse',
        ],
        imgCard: 'img/baguete3queijocard.jpg',
        imgAbout: 'img/baguete3queijoabout.jpg',
        price: 10,
      },
      {
        id: 24,
        title: 'Baguete de calabresa',
        Ingredients: ['Baguete Recheada', 'recheio calabresa com azeitonas.'],
        imgCard: 'img/baguetecalabresacard.jpg',
        imgAbout: 'img/baguetecalabresaabout.png',
        price: 15,
      },
    ],
  },
];

export type Toptions = {
  options: string;
  id: number;
  itens: {
    id: number;
    title: string;
    Ingredients: string[];
    imgCard: string;
    imgAbout: string;
    price: number;
  }[];
}[];

export { about, options, promoValentinesDay };
