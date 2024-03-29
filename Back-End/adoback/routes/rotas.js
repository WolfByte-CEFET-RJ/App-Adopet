const express = require('express')
const routes = express.Router()

const geolocation = require('geolocation-utils')
const {celebrate, Segments, Joi} = require('celebrate')

const newUserController = require('../controllers/newUserController')
const passwordController = require('../controllers/passwordController')
const petController = require('./../controllers/petController')
const authController = require('./../controllers/authController')
const profileController = require('./../controllers/ProfileController')
const adoptionsController = require('./../controllers/adoptionsController')

const { uploadProfile, uploadPet } = require('./middleware/multerConfig') //é middleware multer para o upload de imagens
const authMiddleware = require('./middleware/authToken') // é um middleware que autentica o token 

//Rotas do usuario
routes.post('/api/user/register', uploadProfile, newUserController.create) //nova conta de usuario
routes.post('/api/user/login', authController.login)
routes.post('/api/user/forgetpassword', passwordController.forgot_password) //rota que cria o token de reset de senha

routes.get('/api/user/profile', authMiddleware, profileController.profile) 

routes.put('/api/user/resetpassword', passwordController.reset_password) //reseta as senha de um usuario ou ong
routes.put('/api/user/updateProfile', authMiddleware, profileController.updateProfile) //atualiza informações do profile

//Rotas dos pets
routes.post('/api/pets/create', uploadPet, authMiddleware, petController.create) //cria um post para anuncio de um pet
routes.post('/api/pets/requestpet', authMiddleware, adoptionsController.adopt) //criar uma solicitação de pet

routes.get('/api/pets/index', celebrate({ [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()}
)}),authMiddleware, petController.index) //mostras todos os pets para doação
routes.get('/api/pets/myadopts', authMiddleware, adoptionsController.myAdopts) //mostra todos os animais que a pessoa mostrou interesse 
routes.get('/api/pets/mydonationsnotifications', authMiddleware, adoptionsController.myDonationsNotifications) //mostra todos os animais que tem alguem interessado para adotar

routes.put('/api/pets/adopted', authMiddleware, adoptionsController.adoptionAproved) //rota de confirmação de adoção, é feita pelo doador 

routes.delete('/api/pets/deleterequestpet', authMiddleware, adoptionsController.deleteAdopt) //deleta uma solicitação de pet
routes.delete('/api/pets/delete', authMiddleware, petController.delete) //deleta um pet do bd

//teste
routes.post('/teste', async (req, res) => { 
    const locations = [
        {latitude: 51.03, longitude: 4.05},
        {latitude: 52.03, longitude: 4.05},
        {latitude: 51.03, longitude: 3.05}
    ]

    if(geolocation.insideCircle(locations, {longitude: 4, latitude: 51}, 10000))
        console.log('dentro da area')
    else 
        console.log('fora da area')

        res.send('ok')
})

module.exports = routes