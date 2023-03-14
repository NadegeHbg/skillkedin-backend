import skillkedin_model from "./createTables.mjs";
   
const getCategoryTypes = async (req, res,next) => {
  const data = await skillkedin_model.find({});
  let categoryArray =[]
  data.forEach(value =>{
    categoryArray = [...categoryArray,value.category]

  })
  // res.render('users/index')
  res.status(200).send(categoryArray)
}

export default getCategoryTypes;