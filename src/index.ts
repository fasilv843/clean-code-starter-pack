import { createServer } from "./4. Infrastructure/config/app";
import { mongoConnect } from "./4. Infrastructure/config/db";


const app = createServer()
mongoConnect()
.then(
    () => app?.listen(3000, () => console.log('listening to PORT 3000'))
)
.catch((err) => console.log('error while connecting to database\n', err))