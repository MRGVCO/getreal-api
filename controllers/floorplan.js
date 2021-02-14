const floorplanDao = require('../dao/floorplan');

var floorplanController = {
    getByBusinessId: getByBusinessId,
    addFloorplan : addFloorplan,
    updateFloorplan : updateFloorplan,
    deleteFloorplan : deleteFloorplan,
    getByApartmentId : getByApartmentId
}



function getByBusinessId(req, res) {
  floorplanDao.getByBusinessId(req.params.businessId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function getByApartmentId(req, res) {
      console.log('this is params', req.params);

    floorplanDao.getByBusinessId(req.params.businessId).then(data => {
    let allFloorplans = [];
    data.map(floorplan => {
      if(floorplan.dataValues){
        if(floorplan.dataValues.type){
          if(floorplan.dataValues.type.length){        
              floorplan.dataValues.type.map(f => {
                if(f.key === req.params.apartmentId){
                  allFloorplans.push(floorplan)      
                }          
              })
          }
        }
      }   
    })
    res.send(allFloorplans);
  })
  
}

function floorplanCheck(name){
  return floorplanDao.floorplanCheck(name).
      then((data) => {
          return data;
      })
      .catch((error) => {
          console.log(error);
      }); 
}


function addFloorplan(req, res) {

  const floorplan = {
    business_id: req.body.business_id,
    type: req.body.type,
    firebaseName: req.body.name,
    url : req.body.url,
  }

   floorplanDao.addFloorplan(floorplan).
    then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function updateFloorplan(req, res) {

  let floorplan = {
      type: req.body.type,
      name: req.body.name,
      description: req.body.description,
      order: req.body.order,
      modified: (new Date()).toISOString()
   }

    floorplanDao.updateFloorplan(floorplan, req.params.floorplanId).
      then((data) => {
          res.status(200).json({
              message: "Floorplan updated successfully",
              floorplan: floorplan
          })
      })
      .catch((error) => {
          console.log(error);
      });
   
}

function deleteFloorplan(req, res){
  floorplanDao.deleteFloorplan(req.params.floorplanId).
        then((data) => {
            res.status(200).json({
                message: "Floorplan deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = floorplanController;
