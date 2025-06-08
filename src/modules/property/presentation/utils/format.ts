export const formatPrice = (valor: number): string => {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export const formatStateName = (state: string): string => {
  if (state === 'SC') return 'Santa Catarina'
  if (state === 'RS') return 'Rio Grande do Sul'
  if (state === 'PR') return 'Paraná'
  if (state === 'SP') return 'São Paulo'
  if (state === 'RJ') return 'Rio de Janeiro'
  return state
} 