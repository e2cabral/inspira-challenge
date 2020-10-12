import faker from 'faker';

export const mockMoedas = () => {
  let moedas = [];
  for (let i = 0; i <= 10; i++) {
    moedas.push({
      simbolo: faker.finance.currencyCode(),
      nomeFormatado: faker.name.firstName(),
      tipoMoeda: faker.name.prefix(),
    });
  }

  return moedas;
}
