const express = require('express'); 
const path = require('path');
const app = express();
if(process.env.NODE_ENV==='production'){
	app.use(express.sataic(path.join(_dirname,'/build')));
app.get('',(req,res)=>{
res.sendFile(path.join(_dirname+'/build/index.html'))
});
}
const PORT=process.env.PORT||3001;
app.listen(POET,()=>{
	console.log('port',PORT)
})