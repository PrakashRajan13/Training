let food_list=[
    {
        restaurant:"KFC",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cdcm31rn6byulh44lnfm",
        offer:"20% off",
        menu:[
            {
                food_name:"Buddy Meal",
                price:455,
                cont:"Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2"
            },
            {
                food_name:"Chicken & Krispers Combo",
                price:550,
                cont:"Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
            },
            {
                food_name:"Ultimate Savings Bucket",
                price:669,
                cont:"Save 35% on our signature bucket of 4pc Hot & crispy chicken, 6 Wings, 4 strips, 2 Dips & a Pepsi PET [serves 2-3 ]",
            },
            {
                food_name:"Hot & Crispy Chicken -8 pcs",
                price:748,
                cont:"Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]",
            },
            {
                food_name:"Peri Peri 10 Leg Pc & 4 Dips",
                price:924,
                cont:"Leg before any wicket! Save 27% on 10 Spicy Peri Peri Leg Pieces & 4 Dips [serves 3-4]",
            },
        ]
    },
    {
        restaurant:"Dominos's Pizza",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xbq9rsvvc0z422y1ksmi",
        offer:"50% off", 
        menu:[
            {
                food_name:"The 4 Cheese Pizza",
                price:676,
                cont:"Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost Pepper flavoured Cheese",
            },
            {
                food_name:"The Cheese Dominator",
                price:676,
                cont:"Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a Classic Large Pizza topped with a generous helping of herb sprinkle",
            },
            {
                food_name:"Corn n Cheese Paratha Pizza",
                price:189,
                cont:"A crazy fusion like never before. A delicious fusion of corn stuffed paratha and cheesy pizza.",
            },
            {
                food_name:"Chicken Keema Paratha Pizza",
                price:269,
                cont:"Flavourful & meaty chicken keema paratha and goodness of cheesy pizza coming together in an epic crossover!",
            },
        ]
    },
    {
        restaurant:"Dindigul Talappakatti",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zf7sbwdhivqxkkz0irs3",
        offer:"50% off",
        menu:[
            {
                food_name:"Sweet Corn Veg Soup",
                price:129,
                cont:"A delicious creamy corn soup made with sweet corn and vegetables",
            },
            {
                food_name:"Sweet Corn Chicken Soup",
                price:140,
                cont:"A delicious creamy corn soup made with sweet corn, vegetables, chicken, herbs & spices",
            },
            {
                food_name:"Hot And Sour Chicken Soup",
                price:139,
                cont:"A spicy and tangy soup which is loaded with vegetables and diced chicken",
            },
            {
                food_name:"Thalappakatti Chicken 65 Biryani",
                price:309,
                cont:"A novel combination of our classic seeraga samba Biryani crowned with succulent chicken 65 chunks - Served With Raita & Salna.",
            },
        ]
    },
    {
        restaurant:"Pizza Hut",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cnpoys9dwcujpvuc78vb",
        offer:"40% off",
        menu:[
            {
                food_name:"Momo Mia Pizza - Veg",
                price:299,
                cont:"Epic combination of signature pan crust, delicious paneer & veg momos topped with spicy Schezwan sauce, onion, capsicum, sweet corn & 100% mozzarella",
            },
            {
                food_name:"Chicken Lovers Fest @674 (Save Upto 46%)",
                price:674,
                cont:"3 of your favorite personal chicken pizzas from Signature and Supreme range.",
            },
            {
                food_name:"Hut Treat Meal for 2 - Veg",
                price:529,
                cont:"1 Medium Veg Pizza up to Signature, 1 Garlic Bread, 1 Pepsi",
            },
            {
                food_name:"My Box (Veg) with Choco Sundae",
                price:259,
                cont:"1 Personal Veg Pizza, 2 Pc Garlic Bread, 1 Pepsi Pet Bottle and 1 Choco Sundae cup (100 ml) (Inclusive of frozen dessert handling charges)",
            },
        ]
    }
]


localStorage.setItem("foodlist",JSON.stringify(food_list))
