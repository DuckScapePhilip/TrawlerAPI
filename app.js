const express = require('express')
const trawler = require('@gftc/trawler')
const app = express()
var port = 3000
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/csv', upload.array(), async function (req, res, next) {

  console.log(req.body);

  const [
    bdhXml,
    epcClassXml,
    locationXml,
    objectEventXmlList,
    transformationEventXmlList,
    aggregationEventXmlList
  ] = await Promise.all([
    trawler.createBusinessDocumentHeaderXml(req.body.businessHeaderCsv),
    trawler.createEpcClassXml(req.body.epcClassCsv),
    trawler.createLocationHeaderXml(req.body.locationCsv),
    trawler.createObjectEventXml(req.body.objectEventCsv),
    trawler.createTransformationEventXml(req.body.transformationEventCsv),
    trawler.createAggregationEventXml(req.body.aggregationEventCsv)
  ])
  
  // Combine the generator's result to create the final EPCIS document 
  const result = trawler.createTrawlerXml({
    bdhXml,
    epcClassXml,
    locationXml,
    xmlList: [
      ...objectEventXmlList,
      ...transformationEventXmlList,
      ...aggregationEventXmlList
    ]
  })

  console.log(result);

  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})