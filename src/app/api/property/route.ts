import { makePropertiesController } from '@/modules/property-api/main/factories/properties-controller-factory';

export async function POST(req: Request) {
  if (req.method !== 'POST') return new Response(JSON.stringify({ message: 'Método não permitido' }), { status: 405 });

  const filters = await req.json();

  const {
    city,
    state,
    type,
    priceMin,
    priceMax,
    capacity,
    bedrooms,
    amenities,
    available
  } = filters

  const hasFilters = Object.values({
    city,
    state,
    type,
    priceMin,
    priceMax,
    capacity,
    bedrooms,
    amenities: amenities?.length ? amenities : null,
    available
  }).some((v) => v !== undefined && v !== null && v !== '' && v !== false);

  try {
    const controller = makePropertiesController()
    
    const response = await controller.handle({hasFilters, filters})

    return new Response(JSON.stringify(response))
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return new Response(JSON.stringify({ message: 'Erro interno do servidor' }), { status: 500 });
  }
}