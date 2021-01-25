
module.exports = function(err, req, res, next) {
    // set locals, only providing error in development
    console.log("Customized error " , err.code);
    res.status(err.code || 500);
    res.send('error: ',err.code ," -> ",err.name );
  };