var express = require('express');
var router = express.Router();
var auth = require('../lib/auth');
import { ProductEntry } from '../lib/entity/product-entry';

import { getRepository } from "typeorm";
/* GET products listing. */
router.get('/:productId', auth.isAuthorised,
  async function (req, res, next) {
    let productEntries = await getRepository(ProductEntry).findOne(req.params.productId);
    return res.json(productEntries);
  }
);

import { plainToClass } from "class-transformer";

router.put('/:productId', auth.isAuthorised,
  async function (req, res, next) {
    let productEntry = plainToClass(ProductEntry, req.body);
    await getRepository(ProductEntry).save(productEntry);
    res.send('OK');
  }
);

router.delete('/:productId', auth.isAuthorised,
  async function (req, res, next) {
    if (req.params.productId === undefined) {
      console.log(req.params)
      res.send('No product Id specified in URL path')
      return
    }
    console.log(req.params.productId)
    await getRepository(ProductEntry)
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: req.params.productId })
      .execute();
    res.send('OK');
  }
);

router.post('/', auth.isAuthorised,
  async function (req, res, next) {
    let productEntry = plainToClass(ProductEntry, req.body);
    await getRepository(ProductEntry).save(productEntry);
    res.send('OK');
  }
);
module.exports = router;
