let xAxisData=[
    {'name':'Jan' ,'Sale':112_000},
    {'name':'Feb' ,'Sale':99_000},
    {'name':'Mar' ,'Sale':12_090},
    {'name':'Apr' ,'Sale':100_000},
    {'name':'May' ,'Sale':55_000},
    {'name':'Jun' ,'Sale':75_000},
    {'name':'Jul' ,'Sale':122_000},
    {'name':'Agu' ,'Sale':165_000},
    {'name':'Sep' ,'Sale':0},
    {'name':'Oct' ,'Sale':12_000},
    {'name':'Nov' ,'Sale':50_000},
    {'name':'Dev' ,'Sale':44_000},
]

let newMembers=[
   {id:1, userName:'maryam', title:'developer wep' ,img:'logo192.png' },
   {id:2, userName:'mohamad', title:'react' ,img:'jango.png' },
   {id:3, userName:'sara', title:'teacher html' ,img:'logo192.png' },
   {id:4, userName:'nastran', title:'react netive' ,img:'logo192.png' },

]
fetch('https://dashboard-83568-default-rtdb.firebaseio.com/users.json'

, {
    method: 'POST',
    body: JSON.stringify(newMembers)
}).then(response => console.log(response))

//////////////////////////////////////////////////
let transactions=[
    {
        id:1,
        img:'jango.png',
        name:'mohamad ahmady',
        date:'22 Agu 2022',
        amout:250,
        type:'Pending'
    },
    {
        id:2,
        img:'logo192.png',
        name:'aram hosiny',
        date:'20 May 2022',
        amout:120,
        type:'Approved'
    },
    {
        id:3,
        img:'logo192.png',
        name:'maryam askary',
        date:'01 Sep 2022',
        amout:270,
        type:'Declined'
    },
    {
        id:4,
        img:'jango.png',
        name:'hosin musavy',
        date:'22 jun 2022',
        amout:250,
        type:'Approved'
    },
]
   
fetch('https://dashboard-83568-default-rtdb.firebaseio.com/transAction.json'

, {
    method: 'POST',
    body: JSON.stringify(transactions)
}).then(response => console.log(response))

///////////UserList///////////////////////////////////////

let userRows=[
    {id:1,userName:'Maryam Askary',avatar:'jango.png',status:'active',transaction:'&110',email:'askary@gmail.com'},
    {id:2,userName:'Nasrin Panahi',avatar:'logo192.png',status:'active',transaction:'&110',email:'panahi@gmail.com'},
    {id:3,userName:'Farshad Soltany',avatar:'jango.png',status:'non-active',transaction:'&110',email:'soltany@gmail.com'},
    {id:4,userName:'Ackram Ahmady',avatar:'logo192.png',status:'active',transaction:'&110',email:'ahmady@gmail.com'},
    {id:5,userName:'Amir Sharify',avatar:'jango.png',status:'active',transaction:'&110',email:'sharify@gmail.com'},
    {id:6,userName:'Benosh Mohamady',avatar:'jango.png',status:'non-active',transaction:'&110',email:'mohamady@gmail.com'},
]
// fetch('https://dashboard-83568-default-rtdb.firebaseio.com/userRows.json'

// , {
//     method: 'POST',
//     body: JSON.stringify(userRows)
// }).then(response => console.log(response))
////////////////////////PRODUCTS/////////////////////////////////////
let products=[
 {id:1,title:'Asus',avatar:'images/asus.jpeg',price:'22000000'},
 {id:2,title:'Acer',avatar:'images/acer.jpg',price:'35000000'},
 {id:3,title:'Dell',avatar:'images/dell.jpg',price:'45000000'},
 {id:4,title:'Hp',avatar:'images/hp.jpg',price:'15200000'},
]


//////////////////////////////////////////////////////

let productData=[
    {name:'Jan' ,Sale:112_000},
    {name:'Feb' ,Sale:99_000},
    {name:'Mars' ,Sale:150_000},
]
export  {xAxisData ,newMembers ,transactions ,userRows,products ,productData} 