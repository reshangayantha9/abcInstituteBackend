const mongoose=require('mongoose');
const URL=process.env.DATABASE;

mongoose.connect(URL)
.then(() => console.log("DB Connected"))
.catch(() => console.log("DB Connect faild"))