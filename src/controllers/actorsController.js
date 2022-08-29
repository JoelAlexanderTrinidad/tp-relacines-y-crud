const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    'list': (req, res) => {
        db.Actor.findAll({
            include: [
                {
                    association: 'movies',
                    include: [
                        {
                            association: 'genre',
                            attributes: ['id','name'], // para traer algún atributo de género 
                        }
                    ]
                }
                
            ]
        })
            .then(actors => {
                return res.send(actors)
            })
    }
}

module.exports = actorsController;