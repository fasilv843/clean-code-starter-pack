import { createServer } from "./1. Infrastructure/config/app";
import { mongoConnect } from "./1. Infrastructure/config/db";


const app = createServer()
mongoConnect()
.then(
    () => app?.listen(3000, () => console.log('listening to PORT 3000'))
)
.catch((err) => console.log('error while connecting to database\n', err))