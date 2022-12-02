const Expedientes = require('./expedientes')
const Objetos = require('./objetos')

Expedientes.belongsTo(Objetos)
Objetos.hasMany(Expedientes)

/*

Relacion n..n
Post.belongsTo(Categoria,{through:'post_categoria'})
Categoria.belongsTo(Post,{through:'post_categoria'})

{through:'post_categoria'} --> genera la tabla intermedia

*/

module.exports = {
    Expedientes, Objetos
}