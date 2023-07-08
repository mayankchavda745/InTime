const db = require('./connection');
var express = require('express');
var router = express.Router();
const { response } = require('../app');

const getData = () => db.query(`select * from "DemoTable"`);
module.exports={
    getData
}