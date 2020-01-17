const Router = require('router');
const router = Router();
const CandidateRoute = require('../controller/controller');
let log4js = require('log4js');
let logger = log4js.getLogger('routes');
logger.level = 'debug';


router.post('/login', CandidateRoute.candidatelogin);
router.get('/dashboard', CandidateRoute.Dashboard);
router.get('/candidateinfo', CandidateRoute.getCandidateRoute);
router.get('/getnotification',CandidateRoute.getCandidateRoute);



/**exports routes*/
module.exports = router;