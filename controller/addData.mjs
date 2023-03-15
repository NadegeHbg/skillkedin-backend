//  @Desc     Create Category
//  @Route    POST /api/tudu/user

import skillkedin_model from "./createTables.mjs";
import * as fs from 'fs';

const create_questions = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('./questions.json', 'utf-8'))
        // console.log(data)
        await skillkedin_model.create(data)

        // const saved_questions = await question.save();
        res.status(201).send('questions saved in the DB');
    } catch (err) {
        console.log(err);
    }
};

export default create_questions;
