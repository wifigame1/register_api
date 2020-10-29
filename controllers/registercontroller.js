const model = require("../models/index")

exports.index = (req, res, next) => {
    res.send('register');
  }
 
  exports.show = async (req, res, next) => {
 
        const data = await model.register.findAll()

        res.status(200).json({
            data: data
        })
 
  }

  exports.insert = async (req, res, next) => {
 
    const { firstname,lastname } = req.body;

    const check = await model.register.create({
        firstname, lastname })
    res.status(201).json({
        message: check
    });
}

exports.destroy = async (req, res, next) => {
 
    const { id } = req.params;

    const check = await model.register.destroy({

            where: {
                id: id
            }

    }) 
    res.status(200).json({
        message: check
    });
}

exports.update = async (req, res, next) => {
 
    const { id, firstname, lastname } = req.body;

    const check = await model.register.update({
      id,  firstname, lastname
    },
    {
        where: {
            id: id
        }
    })

    res.status(201).json({
        message: check
    });
}