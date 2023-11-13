const {spawn } = require("child_process")
const path = require("path")


 

exports.indexPage = function(req,res,next) {
    console.log()
    res.render("index", {})
}

exports.loginPage = async function(req,res,next) {
    const result1 = await delay(8000);
    res.status(200).json({result1})
}


const delay = (milliseconds) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Waited for ${milliseconds} milliseconds`);
      }, milliseconds);
    });
  };

exports.tester = async function(req,res,next) {
    const testId = req.params.testName
    console.log(testId)
    const pythonPath = path.join(__dirname,`./../uploads/${testId}.py` )
    const pythonProcess = spawn("py", [pythonPath])
    const msg = {}
    
    pythonProcess.stdout.on("data", (data) => {

        msg.data = data.toString().replace(/(\r\n|\n|\r)/gm, "")
    })

    pythonProcess.stderr.on('data', (data) => {
        msg.error = data.toString().replace(/(\r\n|\n|\r)/gm, "")
      });
      
      // Handle process exit
    pythonProcess.on('close', (code) => {

        msg.code = code.toString().replace(/(\r\n|\n|\r)/gm, "")
        res.send("running code: "+testId+ "   " + msg.code + " <br>" + msg.error+ "<br>"+ msg.data)
        //res.redirect(200, "/help"+"?err="+msg.error+"&code="+msg.code)
    });



}
