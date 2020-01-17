let log4js = require('log4js');
let logger = log4js.getLogger('Candidate Controller');
logger.level = 'debug';
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const app = express();
let rawdata = fs.readFileSync('candidate.json');
let candidate = JSON.parse(rawdata);




/** Get Candidates informations */
 function getCandidateRoute(req, res){
      logger.info('Getting candidates information');
      res.status(200).send('Basically from pune!');
 } 



 /** Candidates Login  */
 function candidatelogin(req, res){
     logger.info('Candidate login');
      if(candidate.find(el => el.name == "chetan" && el.password == 'nopassword')){
          req.session.name = 'chetan';
          res.status(200).send('logged in successfully!');
        }else{
          res.status(200).send('Failed to logged in Dashboard');
     }
 }




/** Candidates Dashboard  */
function Dashboard(req, res){
      if(req.session.name){
       res.status(200).send('Welcome to Candidates portals'); 
      } else{
      res.status(401).send('failed to logged in');      
      }
}



 /** exporting functions */
module.exports.getCandidateRoute = getCandidateRoute;
module.exports.candidatelogin = candidatelogin;
module.exports.Dashboard = Dashboard;