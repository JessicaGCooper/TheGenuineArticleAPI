const Items = require('../items/items-model')

const checkForDuplicateColors = async (req, res, next) => {
  const item_id = req.params.item_id
  let duplicate = false
  const currentColors = await Items.findColorsByItemId(item_id)

  if (currentColors.length > 0) {
    const color_ids = currentColors.map((item) => item.color_id)
    let ids_set = new Set(color_ids)
    let incoming = req.body.fields
    for (let i = 0; i < incoming.length; i++) {
      if (ids_set.has(incoming[i].id) === true) {
        duplicate = true
        res.status(400).json({
          message: `Duplicate color. Please remove the color ${incoming[i].color} and try again.`
        })
        break
      }
    }
    if (duplicate === false) {
      next()
    }
  } else {
    next()
  }
}

module.exports = {
  checkForDuplicateColors
}
