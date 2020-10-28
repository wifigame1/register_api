const model = require("../models/index")

exports.index = (req, res, next) => {
    res.send('regiser');
  }
 
  exports.show = async (req, res, next) => {
 
        const data = await model.regiser.findAll()

        res.status(200).json({
            data: data
        })
 
  }

  exports.insert = async (req, res, next) => {
 
    const { firstname, lastname} = req.body;

    res.status(200).json({
        data: [firstname, lastname]
    });
}

exports.destroy = async (req, res, next) => {
 
    const { id } = req.params;

    const check = await model.regiser.destroy({

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

    const check = await model.regiser.update({
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