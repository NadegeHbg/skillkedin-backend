import skillkedin_model from "./createTables.mjs";

const getQuestions = async (req, res) => {
    try{
        const data = await skillkedin_model.find({});
        res.status(200).send({  data : data });
    }catch(err){
        console.log(err);
        res.status(500).send("internal server error");
    }
};
export default getQuestions;