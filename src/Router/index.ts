import Express from 'express';

const router = Express.Router()

router.get('/', (req,res)=>{
    return res.render('index', { pageTitle: "Home" });
});

export default router