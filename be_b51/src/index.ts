import { AppDataSource } from "./data-source"
import * as express from "express"
import router from "./route/provinceRoutes"

AppDataSource.initialize()
    .then(async () => {
        const app = express()
        
        app.use(express.json())
        app.use("/api/v1", router)
        
        app.listen(2000, () => console.log("server running"))
    })
    .catch(error => console.log(error))
