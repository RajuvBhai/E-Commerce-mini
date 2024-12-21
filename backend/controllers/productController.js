exports.getProducts = (req, res, next) => {
    res.json({
        success: true,
        message: 'Get products working!'
    })
}

exports.getSingleProducts = (req, res, next) => {
    res.json({
        success: true,
        message: 'Get Single product working!'
    })
}