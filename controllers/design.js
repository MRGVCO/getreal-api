const designDao = require('../dao/design');

var designController = {
    getByBusinessId: getByBusinessId,
    addDesign : addDesign,
    updateDesign : updateDesign,
}


function getByBusinessId(req, res) {
  designDao.getByBusinessId(req.params.businessId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}


function addDesign(req, res) {
          let design = {
            business_id: req.body.business_id,
            primary: req.body.primary,
            secondary: req.body.secondary,
            header: req.body.header,
            copy : req.body.copy,
            template: req.body.template,
          };

          
          designDao.addDesign(design).
            then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });     
}

function updateDesign(req, res) {

  let design = {
        primary: req.body.primaryColor,
        secondary: req.body.secondaryColor,
        header: req.body.header,
        copy: req.body.copy,
        template: req.body.template,
     }

    designDao.updateDesign(design, req.params.businessId).
      then((data) => {
          res.status(200).json({
              message: "Design updated successfully",
              design: design
          })
      })
      .catch((error) => {
          console.log(error);
      });
   
}


module.exports = designController;






