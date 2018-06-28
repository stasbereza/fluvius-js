//1. Есть массив [10, 20, 30].
//Поменяйте местами 0 и 1 элементы, чтобы получилось [20, 10, 30]

const list = [10, 20, 30];

function changeElements(list) {
  list.forEach(num => {
    if (num === 20) {
    list[0] = num;
    list.splice(1, 1, 10);
    }
  })
}
changeElements(list);

console.log(list); // [20, 10, 30];

// 2. Есть массив [30, -5, 0, 10, 5].
// Напишите функцию сортировки от наименьшего к наибольшему, результат [-5, 0, 5, 10, 30] . Не используйте стандартную функцию sort.

// const list = [30, -5, 0, 10, 5];

// function mySort(list) {
//   const arrLength = list.length;
//   for (let i = 0; i < arrLength - 1; i += 1) {
//     for (let j = 0; j < arrLength - 1 - i; j += 1) {
//       if (list[j + 1] < list[j]) {
//         let num = list[j + 1]; 
//         list[j + 1] = list[j];
//         list[j] = num;
//       }
//     }
//   }
//   return list;
// }

// mySort(list);

// console.log(list); // [-5, 0, 5, 10, 30]

//3. Напишите свою реализацию bind.
var func1 = function(message) {
	this(message);
}

var func2 = func1.bind(alert);
func2('Test'); // alert 'Test'

function myBind(func, context) {
  return func.bind(context);
}

var func3 = myBind(func1, alert);
func3('Test'); // alert 'Test'