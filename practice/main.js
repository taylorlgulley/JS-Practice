// Example
// const ChickFilA = Object.create({}, {
//     business: {
//         value: "Chick-Fil-A"
//     },
//     employmentStart: {
//         value: "01-01-2009"
//     },
//     employmentEnd: {
//         value: "01-01-2010"
//     }
// })


const starPT = Object.create({}, {
    business: {
        value: "Star Physical Therapy"
    },
    employmentStart: {
        value: "01-01-2014"
    },
    employmentEnd: {
        value: "01-01-2015"
    },
    title: { 
        value: "Intern" 
    }
})

console.log(starPT);

const jobMaker = (x, y, z, t) => {
    let job = Object.create({}, {
        business: {
            value: x
        },
        employmentStart: {
            value: y
        },
        employmentEnd: {
            value: z
        },
        title: {
            value: t
        }
    })
    return job;
}

console.log(jobMaker("D&B", "01-01-2018", "01-01-2019", "Assistant"));

// const taylorJobs = [starPT, job] Do later after the advanced one

// Book 3 Advanced Object.Create

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments

const advisorInfo = Object.create({}, {
    company: {
        value: "TG & Co.",
        writable: true,
        enumberable: true,
    },
    specialty: {
        value: "stocks",
        writable: true,
        enumerable: true,
    },
    name: {
        value: "Taylor Gulley",
        writable: true,
        enumerable: true,
    },
    portfolio: {
        value: [],
        enumerable: false,
    },
    worth: {
        value: netWorth = function () {
        },
        enumerable: false,
    },
    purchase: {
        value: function (symbol, quantity, price) {
            let purchasedStock = {
                company: symbol,
                quantity: quantity,
                price: price,
            }
            advisorInfo.portfolio.push(purchasedStock);
        },
        enumerable: false,
    },
    sell: {
        value: function (symbol, quantity, price) {
            let portfolio = advisor.portfolio;
            for(let i = 0; i < portfolio.length; i++){
                if(portfolio[i].company === symbol){
                    portfolio.splice(i,1);
                }
            }
        },
        enumerable: false,
    }
})

advisorInfo.purchase("SBUX", 100, 50);
adviserInfo.purchase("APPL",200, 100);
adviserInfo.sell("SBUX", 100, 50);
console.log(advisorInfo);

//CLass explanation
```let advisor = Object.create({}, {
    company: {
        value:"Kao Jai LLC",
        enumerable: true,
        writable: true
    },
    specialty: {
        value:"coffee loans",
        enumerable: true,
        writable: true
    },
    name: {
        value:"Meg Ducharme",
        enumerable: true,
        writable: true
    },
    portfolio: {
        value:[],
        enumerable: false
    },
    purchase: {
        value: function(symbol, quantity, price){
            let purchasedStock = {
                company: symbol,
                quantity: quantity,
                price:price
            };
            this.portfolio.push(purchasedStock);
        },
        enumerable: false
    },
    sell: {
        value: function(symbol, quantity, price){
            let portfolio = this.portfolio;
            for(let i = 0; i < portfolio.length; i++){
                if(portfolio[i].company === symbol && portfolio[i].quantity === quantity && portfolio[i].price === price){
                    portfolio.splice(i, 1);
                }
            }
        }
    },
    worth: {
        value: function(){
            let total = 0;
            for(let i = 0; i < this.portfolio.length; i++){
                let stockValue = this.portfolio[i].quantity * this.portfolio[i].price;
                total += stockValue;
            }
            return total;
        }
    }
});


advisor.purchase("SBUX", 1000, 300);
advisor.purchase("AAPL", 2000, 400);
console.log(advisor);
advisor.sell("SBUX", 1000, 300);
console.log(advisor);

console.log(advisor.worth());```

```let advisor = Object.create({}, {
    company: {
        value:"Kao Jai LLC",
        enumerable: true,
        writable: true
    },
    specialty: {
        value:"coffee loans",
        enumerable: true,
        writable: true
    },
    name: {
        value:"Meg Ducharme",
        enumerable: true,
        writable: true
    },
    portfolio: {
        value:[],
        enumerable: false
    },
    worth: {
        value:function(){
            let worth = this.portfolio.reduce((accumulator, stock) => {
                return accumulator + (stock.price * stock.quantity);
            }, 0);
            return worth;
        },
        enumerable: false
    },
    purchase: {
        value: function(symbol, quantity, price){
            let newPurchase = {
                symbol: symbol,
                quantity: quantity,
                price: price,
                sold: false
            };
            this.portfolio.push(newPurchase);
        },
        enumerable: true
    },
    sell: {
        value: function(symbol, quantity, price){

            let findStock = this.portfolio.find(stock => {
                return stock.symbol === symbol && stock.sold === false;
            })
            
            if(findStock.quantity < quantity){
                alert(`You do not have that much stock in ${symbol}!`);
            }else{
                let index = this.portfolio.indexOf(findStock);
    
                this.portfolio.splice(index, 1);
    
                let soldStock = {
                    symbol: symbol,
                    quantity: quantity,
                    price: price,
                    sold: true
                }
    
                let updatedStock = {
                    symbol: findStock.symbol,
                    quantity: findStock.quantity - soldStock.quantity,
                    price: soldStock.price,
                    sold: false
                }
    
                this.portfolio.push(soldStock, updatedStock);
            }

        },
        enumerable: false
    }
});

advisor.purchase("AAPL", 534, 3636);
advisor.purchase("AMZN", 346, 3399);
advisor.purchase("SBUX", 324, 9987);
advisor.sell("AAPL", 555, 3109);
console.log(advisor);```