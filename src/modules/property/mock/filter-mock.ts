export type StateSingle = 'SC' | 'RS' | 'PR' | 'SP' | 'RJ'

export const citiesMock: Record<StateSingle, string[]> = {
  'SC': ['Florianópolis', 'Joinville', 'Blumenau'],
  'RS': ['Porto Alegre', 'Caxias do Sul', 'Gramado'],
  'PR': ['Curitiba', 'Londrina', 'Maringá'],
  'SP': ['São Paulo', 'Campinas', 'Campos do Jordão'],
  'RJ': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
}

export const statesMock = ['SC', 'RS', 'SP', 'PR', 'RJ']

export const typePropertyMock = ['Apartamento', 'Casa', 'Chalé', 'Cabana', 'Flat']

export const capacityMock = ['2', '3', '4', '5']

export const bedroomsMock = ['1', '2', '3', '4']

export const amenitiesMock = ['Wi-Fi', 'Ar-condicionado', 'Cozinha', 'Cozinha equipada', 'Cozinha compacta', 'Estacionamento', 'Churrasqueira', 'Piscina', 'Aquecedor', 'Lareira', 'Hidromassagem']