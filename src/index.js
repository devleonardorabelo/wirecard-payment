const express = require('express')
const app = express()
const routes = require('./routes')
const moip = require('moip-sdk-node').default({
    accessToken: '40f0eb67b05a49dfa576713c9becb371_v2',
    production: false
})

app.post('/', (req, res) => {
      
      moip.account.create({
          email: {
              address: "leonardomrabelo@gmail.com"
          },
          person: {
              name: "Leonardo",
              lastName: "Rabelo",
              taxDocument: {
                  type: "CPF",
                  number: "052.083.261-24"
              },
              identityDocument: {
                  type : "RG",
                  number: "3182055",
                  issuer: "SSP",
                  issueDate: "2000-12-12"
              },
              birthDate: "1995-06-04",
              phone: {
                  countryCode: "55",
                  areaCode: "61",
                  number: "996792937"
              },
              address: {
                  street: "CL 204",
                  streetNumber: "1",
                  district: "Avenida Alagados",
                  zipCode: "72504-220",
                  city: "Santa Maria",
                  state: "DF",
                  country: "BRA"
              }
          },
          type: "MERCHANT",
          transparentAccount: true
      }).then((response) => {
          res.json({response})
      }).catch((err) => {
          res.json({err})
      })
})

app.use(routes)

app.listen(21068, () => console.log('ok'))