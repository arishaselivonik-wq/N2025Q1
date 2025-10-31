 const fruits = [
    'avocado', 'avocado', 'avocado', 'peach', 'peach',
    'avocado', 'peach', 'avocado', 'avocado', 'peach',
    'peach', 'avocado', 'peach', 'peach', 'avocado',
    'avocado', 'peach', 'avocado', 'peach', 'avocado',
    'avocado', 'peach', 'peach', 'peach', 'avocado',
    'peach', 'avocado', 'avocado', 'peach', 'peach',
    'avocado', 'avocado', 'peach', 'avocado', 'peach',
    'avocado', 'peach', 'peach', 'peach', 'avocado',
    'peach', 'avocado', 'peach', 'peach', 'avocado',
    'avocado', 'peach', 'avocado', 'peach', 'avocado',
    'peach', 'avocado', 'peach', 'avocado', 'peach',
    'avocado', 'peach', 'peach', 'avocado', 'avocado',
    'peach', 'avocado', 'peach', 'avocado', 'peach',
    'peach', 'avocado', 'avocado', 'avocado', 'peach',
    'peach', 'avocado', 'avocado', 'avocado', 'peach',
    'avocado', 'peach', 'peach', 'avocado', 'peach',
    'avocado', 'peach', 'avocado', 'avocado', 'peach',
];
console.log(fruits.length)
const peach = fruits.filter(elementArrayFruits => elementArrayFruits==='peach').length

console.log('общее кол-во фруктов на прилавке ' +fruits.length+' фруктов , персиков ' +peach+ 'штук, а авокадо ' + (fruits.length-peach)
)
