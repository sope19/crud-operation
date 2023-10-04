const express = require('express');
const fs = require('fs');
require('dotenv').config()


const productAct = {
    createProduct: async (req, res)=> {
        return res.json({msg: 'create product'});
    },

    retrieveProduct: async (req, res)=> {
        return res.json({msg:'delete product'})
    },

    updateProduct: async (req, res)=> {
        return res.json({msg: 'update product'})
    },

    deleteProduct: async (req, res)=> {
        return res.json ({msg: 'delete product'})
    }
};

module.exports = productAct;