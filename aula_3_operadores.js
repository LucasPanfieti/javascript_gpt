/*
    1. Operadores Matemáticos (Aritméticos)

    | Operador | Descrição        | Exemplo  |
    | -------- | ---------------- | -------- |
    |   +      | Soma             | `10 + 5` |
    |   -      | Subtração        | `10 - 5` |
    |   *      | Multiplicação    | `10 * 5` |
    |   /      | Divisão          | `10 / 5` |
    |   %      | Resto da divisão | `10 % 3` |
    |   **     | Potência         | `2 ** 3` |
*/


/*
    2. Operadores de Atribuição

    | Operador | Significado          | Exemplo  | Equivalente a... |
    | -------- | -------------------- | -------- | ---------------- |
    |   =      | Atribuição direta    | `x = 5`  |                  |
    |   +=     | Soma e atribui       | `x += 2` | `x = x + 2`      |
    |   -=     | Subtrai e atribui    | `x -= 1` | `x = x - 1`      |
    |   *=     | Multiplica e atribui | `x *= 3` | `x = x * 3`      |
    |   /=     | Divide e atribui     | `x /= 2` | `x = x / 2`      |
*/


/*
    3. Operadores de Comparação

    | Operador | Significado                       | Exemplo           |
    | -------- | --------------------------------- | ----------------  |
    |   ==     | Igual (valor)                     | `5 == "5"` → ✅  |
    |   ===    | Estritamente igual (valor + tipo) | `5 === "5"` → ❌ |
    |   !=     | Diferente (valor)                 | `5 != 4` → ✅    |
    |   !==    | Diferente (valor ou tipo)         | `5 !== "5"` → ✅ |
    |   >      | Maior que                         | `10 > 5` → ✅    |
    |   <      | Menor que                         | `5 < 10` → ✅    |
    |   >=     | Maior ou igual                    | `10 >= 10` → ✅  |
    |   <=     | Menor ou igual                    | `5 <= 7` → ✅    |
*/


/*
    4. Operadores Lógicos

    | Operador | Nome      | Exemplo         | Resultado |
    | -------- | --------- | --------------- | --------- |
    |   &&     | E (AND)   | `true && false` | `false`   |
    |   ||     | OU (OR)   | `true || false` | `true`    |
    |   !      | NÃO (NOT) | `!true`         | `false`   |

*/

let a = 10;
let b = 5;

console.log("Soma:", a + b);
console.log("É maior que 8?", a > 8);
console.log("a e b são iguais?", a === b);
console.log("a é par?", a % 2 === 0);
