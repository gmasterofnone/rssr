import express from 'express'
import htmlStream from './htmlStream'

const port = process.env.port || 3000
const app = express()
app.use(express.static('dist/clientBuild'))

app.get('/', (req, res) => htmlStream(res))

app.listen(port, () => console.info(`Application running at http://localhost:${port}`))