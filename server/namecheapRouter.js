import Router from 'express';
import { nameCheapApi } from './axios/NameCheap/index.js';
import xml2js from 'xml2js';

const router = new Router;

router.get('/change-ns/', (req, res) => {
        const params = new URLSearchParams(req.query);
        console.log(params);
        nameCheapApi.get(`/?${params}`).then(response => {
            let resObj = {};
            const parseRes = xml2js.parseString(response.data, (err, res) => {
                console.log(res);
                if (err) {
                    resObj.status = "error";
                    resObj.error = "Request Error!";
                    console.log("Error");
                    return;
                }
                if (res.ApiResponse.Errors.join('').trim()) {
                    for (const el of res.ApiResponse.Errors) {
                        for (const err of el.Error) {
                            console.log(err._);
                            resObj.status = "error";
                            resObj.error = err._;
                            return;
                        }                   
                    }
                }
                resObj.status = "success";
                resObj.error = null;
            });
            console.log(parseRes);
            return res.status(200).json(resObj); 
        });
    }
)

export default router;