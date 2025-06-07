import { makePropertyController } from '@/modules/property-api/main/factories/property-controller-factory';
import { ParamsT } from '@/shared/types';

export async function GET(req: Request, { params }: ParamsT) {
  const id = (await params).id;

  try {
    const controller = makePropertyController();

    const response = await controller.handle(id);

    return new Response(JSON.stringify(response));
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return new Response(JSON.stringify({ message: 'Erro interno do servidor' }), { status: 500 });
  }
}