const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

// =====================================
// RATEIOS
// =====================================

const rateios = {};
const clientesBoasVindas = {};

// =====================================
// TABELA PRODUTOS
// =====================================

const tabelaValores = {

  // plantas
  'colombia gold g3': {
    valorKg: 9500,
    frete: 300
  },

  'kunk gold a++': {
    valorKg: 11000,
    frete: 300
  },

  'gold boliviano': {
    valorKg: 7500,
    frete: 300
  },

  'silver haze': {
    valorKg: 11500,
    frete: 300
  },

  'wolf premium': {
    valorKg: 13000,
    frete: 300
  },

  'haze bolivian a++': {
    valorKg: 11000,
    frete: 300
 },

  // balas
  'audi rs 200mg mdma': {
    valorKg: 5500,
    frete: 250
  },

  'mdma coca cola': {
    valorKg: 4000,
    frete: 250
  },

  'abacaxi 350mg mda': {
    valorKg: 4500,
    frete: 300
  },

  'breaking bad 300mg mda': {
    valorKg: 6750,
    frete: 300
  },

  'allien & love 200mg mda + meta': {
    valorKg: 7500,
    frete: 300
  },

  'mda nacional': {
    valorKg: 9000,
    frete: 300
  },

  'pizza hut 330mg mda': {
    valorKg: 6500,
    frete: 250
  }

};

// =====================================
// CLIENT
// =====================================

const client = new Client({

  authStrategy: new LocalAuth(),

  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  }

});

// =====================================
// FUNÇÕES
// =====================================

function barra(porcentagem) {

  const total = 10;

  const preenchido =
    Math.round((porcentagem / 100) * total);

  return (
    '█'.repeat(preenchido) +
    '░'.repeat(total - preenchido)
  );

}

function dinheiro(valor) {

  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

}

async function enviar(chatId, texto) {

  await client.sendMessage(chatId, texto);

}

// =====================================
// QR CODE
// =====================================

client.on("qr", async (qr) => {

  console.log("📲 Gerando QR Code...");

  await QRCode.toFile("qrcode.png", qr);

  console.log("✅ QR salvo em qrcode.png");

});

// =====================================
// READY
// =====================================

client.on("ready", () => {

  console.log("🟢 GHOST MARKET ONLINE");

});

// =====================================
// MESSAGE
// =====================================

client.on("message", async (message) => {

  const texto =
    message.body.toLowerCase().trim();

  const produtos =
    Object.keys(tabelaValores);

  // =====================================
  // BOAS VINDAS AUTOMÁTICA
  // =====================================

  if (!clientesBoasVindas[message.from]) {

    clientesBoasVindas[message.from] = true;

    await enviar(message.from,

`╔════════════════════╗
      👻 *_GHOST MARKET_*
╚════════════════════╝

🔥 *_Bem-vindo ao sistema oficial_*

📦 _Produtos premium_
👥 _Rateios automáticos_
⚡ _Atendimento rápido_
💳 _Pedidos automáticos_

━━━━━━━━━━━━━━━━━━
📌 *_COMO USAR O BOT_*
━━━━━━━━━━━━━━━━━━

1️⃣ *_VER PRODUTOS_*

*_Digite:_*

🌺 _plantas_
🍬 _balas_

━━━━━━━━━━━━━━━━━━

2️⃣ *_COMPRAR PRODUTO_*

_Digite o nome do produto_

_Exemplo:_

_gold_

*_O bot enviará o formulário
automaticamente_* 📦

━━━━━━━━━━━━━━━━━━

3️⃣ *_PARTICIPAR DE RATEIO_*

_Digite:_

_rateio + produto_

_Exemplo:_

_rateio gold_

━━━━━━━━━━━━━━━━━━

4️⃣ *_ADICIONAR NO RATEIO_*

_Digite:_

_adicionar SEUNOME 200g_

_Exemplo:_

_adicionar ghost 300g_

━━━━━━━━━━━━━━━━━━

5️⃣ *_ALTERAR QUANTIDADE_*

_alterar SEUNOME 400g_

━━━━━━━━━━━━━━━━━━

6️⃣ *_REMOVER DO RATEIO_*

_remover SEUNOME_

━━━━━━━━━━━━━━━━━━

🚚 *_Entrega rápida_*
💎 Qualidade premium

━━━━━━━━━━━━━━━━━━
👻 *_GHOST MARKET • BR_*`
    );

  }

  // =====================================
  // MENU
  // =====================================

  if (
    texto === '/menu' ||
    texto === 'menu'
  ) {

    await enviar(message.from,

`╔════════════════════╗
      👻 *_GHOST MARKET_*
╚════════════════════╝

📦 *_MENU PRINCIPAL_*

━━━━━━━━━━━━━━━━━━

1️⃣ *_Plantas_*
_Digite: plantas_

━━━━━━━━━━━━━━━━━━

2️⃣ *_Balas_*
_Digite: balas_

━━━━━━━━━━━━━━━━━━

📌 *_COMO FUNCIONA_*

🛒 *_Para comprar:_*
_Digite o nome do produto_

👥 *_Para rateio:_*
_rateio + produto_

━━━━━━━━━━━━━━━━━━
👻 *_GHOST MARKET • BR_*`
    );

    return;
  }

  // =====================================
  // PLANTAS
  // =====================================

if (texto === 'plantas') {

  const mensagemPlantas =

`╔══ 🌺 *_TABELA DE PLANTAS_* 🌺  ══╗

🇨🇴 *_Colombia Gold G3_*
💰 _+R$ 9.500,00 - 1Kg_
🚚 _Frete: R$ 300,00_

📸 *_Mídias:_*
https://imgur.com/a/wI6Gor4

━━━━━━━━━━━━━━━━━━

🤯 *_Kunk Gold A++_*
💰 _R$ 10.000,00 - 1Kg_
🚚 _Frete: R$ 300,00_

📸 *_Mídias:_*
https://imgur.com/a/tJJaZ2M

━━━━━━━━━━━━━━━━━━

🇧🇴 *_Gold Boliviano_*
💰 _R$ 7.500,00 - 1Kg_
🚚 Frete: R$ 300,00

📸 *_Mídias:_*
https://imgur.com/a/GfVvioO

━━━━━━━━━━━━━━━━━━

🌺 *_Silver Haze_*
💰 _R$ 11.500,00 - 1Kg_
🚚 _Frete: R$ 300,00_

📸 *_Mídias:_*
https://imgur.com/a/2wa62SG

━━━━━━━━━━━━━━━━━━

🐺 *_Wolf Premium_*
💰 _R$ 13.000,00 - 1Kg_
🚚 _Frete: R$ 300,00_

📸 *_Mídias:_*
https://imgur.com/a/mhQNFb3

━━━━━━━━━━━━━━━━━━

🇧🇴 *_Haze Bolivian A++_*
💰 _R$ 11.000,00 - 1Kg_
🚚 _Frete: R$ 300,00_

📸 *_Mídias:_*
https://imgur.com/a/hhxmhcT

╚══════════════════╝

📩 *_Comprar:_*
_Digite o nome produto_

👥 *_Rateio:_*
_rateio + produto_

👻 *_GHOST MARKET • BR_*`;

  await client.sendMessage(
    message.from,
    mensagemPlantas,
    {
      linkPreview: false
    }
  );

  return;
}

  // =====================================
  // BALAS
  // =====================================

  if (
    texto === 'balas' ||
    texto === 'bala'
  ) {

    const mensagemBalas =

`━━━━━━━━━━━━━━
💎 *_BALAS_* 💎
━━━━━━━━━━━━━━

🚗 *_Audi RS 200mg MDMA_*
💯 _100 uni — R$ 9,50 cada_
📦 _1.000 uni — R$ 5,50 cada_

📸 *_Mídias:_*
https://imgur.com/a/K33PPyr

━━━━━━━━━━━━━━

🥤 *_MDMA Coca Cola_*
🔸 _10g — R$ 850,00_
🔸 _100g — R$ 4.000,00_

📸 *_Mídias:_*
https://imgur.com/a/3dVoUdC

🚚 *_Frete dos dois produtos: R$ 250,00_*

━━━━━━━━━━━━━━
📍 *_LINHA DO RJ LABS_*

🍍 *_Abacaxi 350mg MDA_*
💯 _100 uni — R$ 8,00 cada_
📦 _500 uni — R$ 7,25 cada_
🚛 _1.000 uni — R$ 4,50 cada_

📸 *_Mídias:_*
https://imgur.com/a/Hw7R7XQ

━━━━━━━━━━━━━━

☁️ *_Breaking Bad 300mg MDA_*
💯 _100 uni — R$ 9,50 cada_
📦 _500 uni — R$ 8,50 cada_
🚛 _1.000 uni — R$ 6,75 cada_

📸 *_Mídias:_*
https://imgur.com/a/HaxD6c9

━━━━━━━━━━━━━━

👽💕 *_Allien & Love 200mg MDA + META_*
💯 _100 uni — R$ 10,50 cada_
📦 _500 uni — R$ 9,50 cada_
🚛 _1.000 uni — R$ 7,50 cada_

📸 *_Mídias:_*
https://imgur.com/a/ME0g5wk

━━━━━━━━━━━━━━

💎 *_MDA NACIONAL_*
🔸 _Picado — R$ 26,00 cada g_
🔸 _Meio Kg — R$ 12,00 cada g_
🔸 _1 Kg — R$ 9,00 cada g_

📸 *_Mídias:_*
https://imgur.com/a/KeGERWN

🚚 *_Envio de todas essas do RJ: R$ 300,00_*

━━━━━━━━━━━━━━

🍕 *_Pizza Hut 330mg MDA_*
💯 _100 uni — R$ 9,50 cada_
📦 _500 uni — R$ 8,50 cada_
🚛 _1.000 uni — R$ 6,50 cada_

📸 *_Mídias:_*
https://imgur.com/a/RJaHjp0

🚚 *_Envio: R$ 250,00_*

━━━━━━━━━━━━━━

⚡ *_Qualidade premium_*
📦 *_Entrega rápida_*

━━━━━━━━━━━━━━
👻 *_GHOST MARKET • BR_*`;

    await client.sendMessage(
      message.from,
      mensagemBalas,
      {
        linkPreview: false
      }
    );

    return;
  }

  // =====================================
  // ABRIR RATEIO
  // =====================================

if (texto.startsWith('rateio ')) {

  const produto =
    texto.replace('rateio ', '').trim();

  const produtosRateio = [
    'colombia gold g3',
    'kunk gold a++',
    'gold boliviano',
    'silver haze',
    'wolf premium',
    'haze bolivian a++'
  ];

  if (!produtosRateio.includes(produto)) {

    await enviar(

      message.from,

`❌ *_Rateio disponível apenas
para plantas._*

🍫 *_Produtos disponíveis:_*

• _colombia gold g3_
• _kunk gold a++_
• _gold boliviano_
• _silver haze_
• _wolf premium_
• _haze bolivian a++_`
    );

    return;
  }

  rateios[message.from] = {

    produto,

    valorKg:
      tabelaValores[produto].valorKg,

    frete:
      tabelaValores[produto].frete,

    criadoEm: Date.now(),

    total: 0,

    participantes: []

  };

  await enviar(message.from,

`╔════════════════════╗
      💎 *_RATEIO ONLINE_* 💎
╚════════════════════╝

🍫 ${produto.toUpperCase()}

━━━━━━━━━━━━━━━━━━

🎯 *_META: 1Kg_*
📉 *_MÍNIMO: 100g_*

━━━━━━━━━━━━━━━━━━

📩 *_PARTICIPAR_*

_adicionar VULGO 200g_

🔄 *_ALTERAR_*

_alterar VULGO 300g_

❌ *_REMOVER_*

_remover VULGO_

━━━━━━━━━━━━━━━━━━
👻 *_GHOST MARKET • BR_*`
  );

  return;
}

  // =====================================
  // ADICIONAR RATEIO
  // =====================================

  if (texto.startsWith('adicionar ')) {

    if (!rateios[message.from]) {

      await enviar(
        message.from,
        `❌ Não existe rateio ativo.`
      );

      return;
    }

    const partes = texto.split(' ');

    const vulgo = partes[1];

    const quantidade =
      parseInt(
        partes[2].replace('g', '')
      );

    const rateio =
      rateios[message.from];

    if (
      (rateio.total + quantidade)
      > 1000
    ) {

      await enviar(

        message.from,

`❌ Limite ultrapassado

📉 Disponível:
${1000 - rateio.total}g`
      );

      return;
    }

    const existe =
      rateio.participantes.find(
        p => p.vulgo === vulgo
      );

    if (existe) {

      await enviar(
        message.from,
        `❌ Vulgo já existe.`
      );

      return;
    }

    rateio.participantes.push({
      vulgo,
      quantidade
    });

    rateio.total += quantidade;

    let lista = '';

    rateio.participantes.forEach((p, index) => {

      const valorProduto =
        (rateio.valorKg / 1000)
        * p.quantidade;

      const freteDividido =
        rateio.frete
        / rateio.participantes.length;

      const totalPessoa =
        valorProduto
        + freteDividido;

      lista +=

`${index + 1}️⃣ ${p.vulgo}

📦 ${p.quantidade}g • 💰 R$ ${dinheiro(totalPessoa)}

`;

    });

    const restante =
      1000 - rateio.total;

    const porcentagem =
      (rateio.total / 1000) * 100;

    const progresso =
      barra(porcentagem);

    const minutos =
      Math.floor(
        (Date.now()
        - rateio.criadoEm)
        / 60000
      );

    await enviar(message.from,

`╔════════════════════╗
      💎 *_RATEIO BLACK_* 💎
╚════════════════════╝

🍫 ${rateio.produto.toUpperCase()}

━━━━━━━━━━━━━━━━━━
👥 *_PARTICIPANTES_*
━━━━━━━━━━━━━━━━━━

${lista}

━━━━━━━━━━━━━━━━━━
📊 *_PROGRESSO_*
━━━━━━━━━━━━━━━━━━

${progresso} ${porcentagem.toFixed(0)}%

✔ *_Vendido:_* ${rateio.total}g
❌ *_Restante:_* ${restante}g
👥 *_Participantes:_* ${rateio.participantes.length}

━━━━━━━━━━━━━━━━━━
👻 *_GHOST MARKET • BR_*`
    );

    if (rateio.total >= 1000) {

      await enviar(message.from,

`╔════════════════════╗
      ✅ *_RATEIO FULL_*
╚════════════════════╝

🎯 *_META ATINGIDA_*

📦 *_1Kg Fechado_*

💳 *_Aguarde PIX_*

━━━━━━━━━━━━━━━━━━
👻 *_GHOST MARKET • BR_*`
      );

    }

    return;
  }

  // =====================================
  // ALTERAR RATEIO
  // =====================================

  if (texto.startsWith('alterar ')) {

    if (!rateios[message.from]) {

      await enviar(
        message.from,
        `❌ Não existe rateio ativo.`
      );

      return;
    }

    const partes =
      texto.split(' ');

    const vulgo =
      partes[1];

    const novaQuantidade =
      parseInt(
        partes[2].replace('g', '')
      );

    const rateio =
      rateios[message.from];

    const participante =
      rateio.participantes.find(
        p => p.vulgo === vulgo
      );

    if (!participante) {

      await enviar(
        message.from,
        `❌ Vulgo não encontrado.`
      );

      return;
    }

    const novoTotal =
      rateio.total
      - participante.quantidade
      + novaQuantidade;

    if (novoTotal > 1000) {

      await enviar(
        message.from,
        `❌ Ultrapassa 1KG.`
      );

      return;
    }

    participante.quantidade =
      novaQuantidade;

    rateio.total =
      novoTotal;

    await enviar(

      message.from,

`✅ *_Quantidade alterada._*

📦 ${vulgo}
➡️ ${novaQuantidade}g`
    );

    return;
  }

  // =====================================
  // REMOVER RATEIO
  // =====================================

  if (texto.startsWith('remover ')) {

    if (!rateios[message.from]) {

      await enviar(
        message.from,
        `❌ Não existe rateio ativo.`
      );

      return;
    }

    const partes =
      texto.split(' ');

    const vulgo =
      partes[1];

    const rateio =
      rateios[message.from];

    const participante =
      rateio.participantes.find(
        p => p.vulgo === vulgo
      );

    if (!participante) {

      await enviar(
        message.from,
        `❌ Vulgo não encontrado.`
      );

      return;
    }

    rateio.total -=
      participante.quantidade;

    rateio.participantes =
      rateio.participantes.filter(
        p => p.vulgo !== vulgo
      );

    await enviar(

      message.from,

`✅ ${vulgo} *_removido do rateio._*`
    );

    return;
  }

  // =====================================
  // COMPRA DIRETA
  // =====================================

  if (produtos.includes(texto)) {

    const produto =
      tabelaValores[texto];

    await enviar(message.from,

`╔════════════════════╗
      📦 *_CHECKOUT_*
╚════════════════════╝

🍫 *_Produto:_*
${texto}

💰 *_Valor KG:_*
R$ ${dinheiro(produto.valorKg)}

🚚 *_Frete:_*
R$ ${dinheiro(produto.frete)}

━━━━━━━━━━━━━━━━━━

📝 PREENCHA:

👤 Nome:
🕶️ Vulgo:
🪪 CPF:

📦 Quantidade:

🚚 Envio:
(SEDEX / Transportadora)

🌎 Cidade/Estado:
🏘 Bairro:
🏠 Endereço:
📮 CEP:

📱 Contato:

━━━━━━━━━━━━━━━━━━

⚠️ *_Envie tudo preenchido
em uma única mensagem_*

👻 *_GHOST MARKET • BR_*`
    );

    return;
  }

  // =====================================
  // RECEBER FORMULÁRIO
  // =====================================

  if (
    texto.includes('nome:') &&
    texto.includes('cpf:') &&
    texto.includes('produto:')
  ) {

    const numeroNeurox =
      '557388480568@c.us';

    await enviar(

      numeroNeurox,

`╔════════════════════╗
      🔔 *_NOVO PEDIDO_*
╚════════════════════╝

${message.body}

━━━━━━━━━━━━━━━━━━

📱 *_Cliente:_*
${message.from}

👻 *_GHOST MARKET • BR_*`
    );

    await enviar(

      message.from,

`╔════════════════════╗
      ✅ *_PEDIDO OK_*
╚════════════════════╝

📦 *_Pedido recebido_*

💳 *_Aguarde envio do PIX_*

━━━━━━━━━━━━━━━━━━
👻 *_GHOST MARKET • BR_*`
    );

    return;
  }

});

// =====================================
// INITIALIZE
// =====================================

client.initialize();
