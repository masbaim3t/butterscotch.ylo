var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function (client) {
  router.get('/', function(req, res, next) {
    const sql = `select * from llu_26`
    client.query(sql,(err,user) => {
      res.render('index', { user: user.rows });
    })
});

  router.post('/', function(req, res, next) {
    const sql = `insert into llu_26 (id,nama,nit) values (${req.body.id}, '${req.body.nama}', '${req.body.nit}')`
    client.query(sql,(err,user) => {
      res.redirect('/');
    })
});

  router.get('/delete/:id', function(req, res, next) {
    const sql = `delete from llu_26 where id = ${req.params.id}`
    client.query(sql,(err,user) => {
      res.redirect('/');
    })
  });

  router.get('/edit/:id', function(req, res, next) {
    const sql = `select * from llu_26 where id = ${req.params.id}`
    client.query(sql,(err,user) => {
      console.log(user.rows[0])
      res.render('edit', {user: user.rows[0]});
    })
  });

  router.post('/edit/:id', function(req, res, next) {
    const sql = `update llu_26 set id = ${req.body.id}, nama = '${req.body.nama}', nit= '${req.body.nit}' where id = ${req.params.id}`
    client.query(sql,(err,user) => {
      res.redirect('/');
    })
  });
return router
}


