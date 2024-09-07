import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Gerar Título',
      template: `Seu papel é gerar três títulos para um vídeo do YouTube.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

Os títulos devem ter no máximo 60 caracteres.
Os títulos devem ser chamativos e atrativos para maximizar os cliques.

Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
'''
- Título 1
- Título 2
- Título 3
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Gerar Descrição',
      template: `Seu papel é gerar uma descrição sucinta para um vídeo do YouTube.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.

Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

O retorno deve seguir o seguinte formato:
'''
Descrição.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Gerar Tópicos (Resumo)',
      template: `Seu papel é gerar uma lista de tópicos principais discutidos no vídeo.
  
Abaixo você receberá uma transcrição desse vídeo. Use essa transcrição para gerar uma lista com os principais tópicos abordados.

Os tópicos devem ser diretos e resumidos em no máximo 80 palavras.

O retorno deve seguir o seguinte formato:
'''
- Tópico 1
  Resumo do tópico 1.
- Tópico 2
  Resumo do tópico 2.
- Tópico 3
  Resumo do tópico 3.
...
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Gerar Perguntas',
      template: `Seu papel é gerar uma lista de perguntas baseadas nos principais pontos discutidos no vídeo.
  
Abaixo você receberá uma transcrição desse vídeo. Use essa transcrição para criar perguntas relacionadas ao conteúdo apresentado.

As perguntas devem ser curtas e baseadas nas informações mais importantes do vídeo.

As perguntas devem ser limitadas entre 3 a 10 perguntas.

O retorno deve seguir o seguinte formato:
'''
- Pergunta 1
- Pergunta 2
- Pergunta 3
...
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Ideias para Shorts',
      template: `Seu papel é gerar três ideias criativas para vídeos curtos (Shorts) com base no conteúdo do vídeo.
  
Abaixo você receberá uma transcrição desse vídeo. 

Use essa transcrição para criar entre três a cinco ideias atraentes para vídeos curtos, destacando os momentos mais impactantes.

As perguntas devem ser curtas e baseadas nas informações mais importantes do vídeo.

O retorno deve seguir o seguinte formato:
'''
- Ideia 1
- Ideia 2
- Ideia 3
...
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Sugestões de Melhoria',
      template: `Seu papel é gerar sugestões de melhorias para o conteúdo do vídeo.
  
Abaixo você receberá uma transcrição desse vídeo. 

Use essa transcrição para sugerir até três melhorias que poderiam tornar o vídeo mais envolvente ou informativo.

O retorno deve seguir o seguinte formato:
'''
- Sugestão 1
- Sugestão 2
- Sugestão 3
...
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })