module.exports = function(req,res, next){
    res.header('Access-control-Allow-Origin','*');// qualquer origen pode consumir a api
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
    next()
}
