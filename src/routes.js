const express = require('express')
const routes = express.Router()

const moip = require('moip-sdk-node').default({
    token: '9YSYH9IAPPNCB2QNXV9E3PMDG4NT7TOS',
    key: 'ZJFMPZNNQJC8MFTFQ9XTJBL02B2YHQXW7TSIWH7B'
})

/*
const moip = require('moip-sdk-node').default({
    accessToken: '40f0eb67b05a49dfa576713c9becb371_v2',
    production: false
})

routes.post('/create/customer', (req, res) => {
    
    moip.customer.create({
        ownId: '28948594891',
        fullname: 'Leonardo Rabelo',
        email: 'leonardo@email.com',
        birthDate: '1988-12-30',
        taxDocument: {
            type: 'CPF',
            number: '00026859624'
        },
        phone: {
            countryCode: '55',
            areaCode: '11',
            number: '55552266'
        },
        shippingAddress: {
            city: 'Sao Paulo',
            complement: '10',
            district: 'Itaim Bibi',
            street: 'Avenida Faria Lima',
            streetNumber: '500',
            zipCode: '01234000',
            state: 'SP',
            country: 'BRA'
        }
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })
})

routes.post('/create/payment', (req, res) => {

moip.customer.createCreditCard('CUS-U1GEG7X4Z6C0', {

    method: "CREDIT_CARD",
    creditCard: {
        expirationMonth: "06",
        expirationYear: "22",
        number: "4012001037141112",
        cvc: "123",
        holder: {
            fullname: "LEONARDO RABELO",
            birthdate: "1995-06-04",
            taxDocument: {
                type: "CPF",
                number: "05208326124"
            },
            phone: {
                countryCode: "55",
                areaCode: "61",
                number: "996792937"
            }
        }
    }
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })

})

routes.post('/create/order', (req, res) => {
    moip.order.create({
        ownId: 'ORD-12346',
        amount: {
            currency: 'BRL',
            subtotals: {
                shipping: 100
            }
        },
        items: [{
            product: 'Descrição do pedido',
            quantity: 1,
            detail: 'Mais info...',
            price: 100
        }],
      
        customer: {
            id: 'CUS-U1GEG7X4Z6C0'
        }
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })
})

routes.post('/create/pay', (req, res) => {
    moip.payment.create('ORD-E7MYSCM7WWIW', {
        installmentCount: 1,
        fundingInstrument: {
            method: 'CREDIT_CARD',
            creditCard: {        
                hash: 'X/XZB0ZbRiD+mfwoOqZHPHqfVzV+IQgr1/+lq/C9f16Sgw/eNSTi8Ry3J7QZE/jmcyZDChvjehAfFT+fz5WLSKTrG9dlx+xbPMyF3TIrb2hypKMLqk4zHgk0OhWN0j0dRSWVLP6AMl35AnJev80Z1saf2RQOJ7aUWuhRGCdiYaCkdH79G76d5mEH5/oTJKAd/NsHZ8bpXEAHi7evaV6kHLqOKf+HWvl7c92p4rVuW7VJ/dM6UccBMoLQxVWGEK70a+NrJLc6STktnz8nnsHpAdceuPOcG35aP0+u7hwn9AW7eDDQF0TG/23Kk1SiWz0cpJS/LN2A5Tmxvk04BJbV3g==',
                holder: {
                    fullname: 'Leonardo Rabelo',
                    birthdate: '1995-06-04',
                    taxDocument: {
                        type: 'CPF',
                        number: '05208326124'
                    },
                    phone: {
                        countryCode: '55',
                        areaCode: '61',
                        number: '996792937'
                    }
                }
            }
        }
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })
})*/

routes.post('/customers', (req, res) => {
      
    moip.customer.create({
        ownId: 'CUS-001549',
        fullname: 'Jose Silva',
        email: 'jose_silva0@email.com',
        birthDate: '1988-12-30',
        taxDocument: {
            type: 'CPF',
            number: '22222222222'
        },
        phone: {
            countryCode: '55',
            areaCode: '11',
            number: '66778899'
        },
        shippingAddress: {
            city: 'Sao Paulo',
            complement: '8',
            district: 'Itaim',
            street: 'Avenida Faria Lima',
            streetNumber: '2927',
            zipCode: '01234000',
            state: 'SP',
            country: 'BRA'
        },
        fundingInstrument:{  
            method:"CREDIT_CARD",
            creditCard:{  
                expirationMonth:"06",
                expirationYear:"22",
                number:"6362970000457013",
                cvc:"123",
                holder:{  
                fullname:"Maria Oliveira",
                birthdate:"1980-05-10",
                taxDocument:{  
                    type:"CPF",
                    number:"10013390023"
                },
                billingAddress:{  
                    city:"Rio de Janeiro",
                    district:"Copacabana",
                    street:"Rua Raimundo Corrêa",
                    streetNumber:"1200",
                    zipCode:"05246200",
                    state:"RJ",
                    country:"BRA"
                },
                phone:{  
                    countryCode:"55",
                    areaCode:"11",
                    number:"22226842"
                }
                }
            }
        }
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })
})
routes.post('/orders', (req, res) => {

    moip.order.create({
        ownId: 'ORD-4119',
        amount: {
            currency: 'BRL',
            subtotals: {
                shipping: 1000000
            }
        },
        items: [{
            product: 'Descrição do pedido',
            quantity: 1,
            detail: 'Mais info...',
            price: 1000000
        }],
        customer: {
            id: 'CUS-4H94YHL5TLAS'
        }
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })
})

routes.post('/orders/payments', (req, res) => { //https://dev.wirecard.com.br/reference#criar-pagamento

    moip.payment.create('ORD-SGX6PIEICNTV', {
        installmentCount: 1,
        statementDescriptor: 'Zapeez',
        fundingInstrument: {
            method: 'CREDIT_CARD',
            creditCard: {        
                hash: 'ZZiC6R9NnVPFLFcd6BfxqO7MizUMOb6+rMJqeeVWbOdOtmwMey2Kxm97ldgPPhd3LusGnprD2LyEgYx1MPVOL1bjfkAOpBkjBwyudH/CrtqbTX+tOsR368wRIJsn+B/nRj2wauijkG84j23nqyPwVkFxfxUFPL+qhbPoa22kuU+wPXv7y5mizYE8FCRHAQZD8gtMJq/Cq05E5vbJRjxOJysX3GhwR9h0J9Wlg3jnwQLYmpE6V6bbMb4Wp6oQsvRFkuc/ESgU3SUJxxZui40Yd+A+SzITL4+nn4oozSd5ho0Jcd6hUhxLpsPBYICfiER87Sm/A/wvlkBn0thlo2BPEA==',
                holder: {
                    fullname: 'Jose Santos',
                    birthdate: '1980-01-02',
                    taxDocument: {
                        type: 'CPF',
                        number: '12345679891'
                    },
                    phone: {
                        countryCode: '55',
                        areaCode: '11',
                        number: '25112511'
                    }
                }
            }
        }
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })

})

routes.post('/plans', (req, res) => {
    moip.plan.create({
        code: "plan101",
        name: "Plano Especial",
        description: "Descrição do Plano Especial",
        amount: 990,
        max_qty: 1,
        interval: {
          length: 1,
          unit: "MONTH"
        },
        billing_cycles: 12,
        trial: {
          days: 30,
          enabled: true,
          hold_setup_fee: true
        },
        payment_method: "CREDIT_CARD"
    }).then((response) => {
        res.json({response})
    }).catch((err) => {
        res.json({err})
    })   
})

//https://dev.wirecard.com.br/v1.5/reference#criar-assinatura <- to subscribe

module.exports = routes