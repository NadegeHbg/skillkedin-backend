//  @Desc     Create Category
//  @Route    POST /api/tudu/user

import skillkedin_model from "./createTables.mjs";

const create_questions = async (req, res) => {
    try{
        const {category, questions} = req.body
        console.log("create_questions",req.body)
        const question = new skillkedin_model({ 
            category: category,
            questions: questions,
        })
        const saved_questions = await question.save();
         res.status(201).send('questions saved in the DB');
    }catch(err){
         console.log(err);
    }
};

export default create_questions;
