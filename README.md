# Zoológico Manager 🐾

![README zoo image](https://github.com/SamuelSfeir/zoo-functions/blob/e9701400f9a6b68c33347aa13a8fc706b770bd25/Samuel%20Sfeir.png)

## Seja bem vindo ao repositório deste projeto

- Este projeto foi desenvolvido como parte de uma missão da prefeitura da cidade para organizar e gerenciar informações sobre o zoológico.
- As funções foram construídas com foco nas habilidades de ES6, Higher Order Functions e testes para assegurar a qualidade e confiabilidade do código.
- O objetivo principal deste projeto é oferecer um conjunto de funções que possibilitam a busca de informações sobre os animais do zoológico, como sua espécie e local de origem.
- Além disso, também visa coletar dados sobre as pessoas envolvidas na manutenção e cuidado dos animais.
  
## Estrutura de Pastas

- **src**: Implementações das funções.
- **test**: Arquivos de testes unitários.
- **evaluator**: Funções prontas para os quais tive que implementar testes para cobertura de código.
- **data**: Contém o arquivo `zoo_data.js` com os dados necessários.

## Funcionalidades e Requisitos

### Funções sobre os animais do zoológico:

1. **`getSpeciesByIds`**: Busca espécies dos animais por ID e retorna um array com todos os animais dessa espécie.
2. **`getAnimalsOlderThan`**: Recebe espécie e idade, retorna se todos os animais têm essa idade ou são mais velhos.
3. **`getAnimalMap`**: Mapeamento geográfico dos animais por espécie, com filtros por localização, nome e sexo.

### Funções sobre as pessoas no zoológico:

4. **`getEmployeeByName`**: Busca colaboradores por primeiro ou último nome.
5. **`getRelatedEmployees`**: Verifica se um colaborador é gerente e quem ele lidera.
6. **`countAnimals`**: Contagem de espécies de animais no zoológico.
7. **`calculateEntry`**: Calcula o valor total da entrada de visitantes.
8. **`getSchedule`**: Cronograma de visitas da semana para cada espécie.
9. **`getOldestFromFirstSpecies`**: Encontra o animal mais velho de uma espécie gerenciada por um colaborador.
10. **`getEmployeesCoverage`**: Informações sobre o colaborador e as espécies que ele gerencia.

### Testes com Jest

- Foram implementados testes para funções existentes (`handlerElephants`, `getOpeningHours`) para alcançar cobertura de código definida.

## Metodologia

- Desenvolvido com TDD.
- Utilizou ECMAScript 6 (ES6) e Jest para testes.
