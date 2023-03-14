import skillkedin_model from "./createTables.mjs";

const getCategory = async (req, res) => {
    const category = req.params.category;
    try{
        const data = await skillkedin_model.find({  category: category });
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(500).send("internal server error");
    }
}
export default getCategory;