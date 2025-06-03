//Isso fé uma API que me fornece uma citação aleatória, mas ainda não está funcionando.
interface QuoteData {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

// Função assíncrona para buscar a citação
async function getQuote(): Promise<QuoteData | null> {
  try {
    const response = await fetch('https://api.quotable.io/random', {
      cache: 'no-store', // Para sempre buscar uma nova citação ao carregar a página/componente
    });
    if (!response.ok) {
      // Se a resposta não for OK, lança um erro (ou retorna null)
      console.error("Failed to fetch quote:", response.status, response.statusText);
      return null;
    }
    const data: QuoteData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return null; 
  }
}

// Este é um Server Component (por padrão no App Router se não tiver "use client")
export default async function QuoteDisplay() {
  const quote = await getQuote(); // Busca a citação no servidor durante a renderização

  if (!quote) {
    // Se não conseguir buscar a citação, pode mostrar uma mensagem ou nada
    return <p className="text-center text-gray-500 italic">Não foi possível carregar a citação.</p>;
  }

  return (
    <div className="my-8 p-6 bg-[var(--section-background)] text-[var(--section-foreground)] rounded-lg shadow-lg max-w-2xl mx-auto text-center">
      <blockquote className="text-xl md:text-2xl italic mb-4">
        {quote.content}
      </blockquote>
      <cite className="block text-md md:text-lg text-[var(--accent-purple)] font-semibold">
        - {quote.author}
      </cite>
    </div>
  );
}