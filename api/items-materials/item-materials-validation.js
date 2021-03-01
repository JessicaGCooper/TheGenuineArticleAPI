const Materials = require('./items-materials-model');

const checkForDuplicateMaterials = async (req, res, next) => {
	const item_id = req.params.item_id;
	// eslint-disable-next-line prettier/prettier
	const currentMaterials = await Materials.findMaterialsByItemId(item_id);

	if (currentMaterials.length > 0) {
		const material_ids = currentMaterials.map(
			(item) => item.material_id
		);
		let ids_set = new Set(material_ids);
		let incoming = req.body.fields;
		for (let i = 0; i < incoming.length; i++) {
			if (ids_set.has(incoming[i].id) === true) {
				res.status(400).json({
					message: `Duplicate material. Please remove the material ${incoming[i].material} and try again.`
				});
			}
			next();
		}
	} else {
		next();
	}
};

module.exports = {
	checkForDuplicateMaterials
};