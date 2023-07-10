const path = require('path')

const caminho = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

console.log(path.extname(caminho))
console.log(path.dirname(caminho))
console.log(path.basename(caminho))
console.log(path.parse(caminho))


