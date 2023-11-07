# Zoológico Manager 🐾

![Alt Text](https://github.com/SamuelSfeir/zoo-functions/blob/dd11d276b2b74fa2d6a1548b73cac1120e97490f/Samuel%20Sfeir%20Zoo%20Functions%20Project.png)

## Estrutura de Pastas

- **src**: Implementações das funções.
- **test**: Arquivos de testes unitários.
- **evaluator**: Funções prontas para os quais você implementará testes para cobertura de código.
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
