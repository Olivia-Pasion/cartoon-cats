const { Router } = require('express');
const { cats } = require('../../data/cats');
const router = Router();

module.exports = router;

router
  .get('/:id', (req, res) => {
    const catDetail = cats.find((catDetail) => catDetail.id === req.params.id);
    res.json(catDetail);
  })

  .get('/', (req, res) => {
    const cat = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cat);
  });

 
