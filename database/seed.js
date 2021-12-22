const mongoose = require('mongoose');
const {dbInfo, dbInfo2} = require('../config');
mongoose.connect(`mongodb://${dbInfo2}`);
const db = mongoose.connection;

const {Employee, Business, Address, Job, Shift, Day, Week} = require('./schema.js');
let businessObjectId;

const seed = async function () {
  await Business.deleteMany({})
  await Employee.deleteMany({})
  let campiello = new Business(
    {
      businessID: 1,
      businessPassword: '123456',
      businessName: 'Campiello',
      businessLocation: {
        address: '1177 3rd St. S',
        unit: null,
        city: 'Naples',
        state: 'FL'
      },
      phoneNumber: '(239) 435-1166',
      logo: 'no logo',
    }
  )
  try {
    let results = await campiello.save();
    businessObjectId = results._id;
    for (let i = 0; i < sample.length; i++) {
      sample[i].employedAt = businessObjectId;
    }
    await Employee.insertMany(sample)
  }  catch (err) {
      console.error(err);
  }
  console.log('finished seeding')
};



let sample = [{
  employeeID: 101,
  employedAt: businessObjectId,
  employeeUsername: 'nick_knowles',
  employeePassword: '123456',
  employeeFirstName: 'Nick',
  employeeLastName: 'Knowles',
  email: 'big_knowles@hotmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'General Manager'
},
{
  employeeID: 102,
  employedAt: businessObjectId,
  employeeUsername: 'sanders_goodfellow',
  employeePassword: '123456',
  employeeFirstName: 'Sanders',
  employeeLastName: 'Goodfellow',
  email: 'sanders_goodfellow@gmail.com',
  phoneNumber: '803-930-1570',
  employeeType: 'Manager'
},
{
  employeeID: 103,
  employedAt: businessObjectId,
  employeeUsername: 'matt_hedrick',
  employeePassword: '123456',
  employeeFirstName: 'Matt',
  employeeLastName: 'Hedrick',
  email: 'matt_hedrick@gmail.com',
  phoneNumber: '412-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 104,
  employedAt: businessObjectId,
  employeeUsername: 'dave_myers',
  employeePassword: '123456',
  employeeFirstName: 'Dave',
  employeeLastName: 'Myers',
  email: 'dave_myers@gmail.com',
  phoneNumber: '704-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 105,
  employedAt: businessObjectId,
  employeeUsername: 'chris_halstead',
  employeePassword: '123456',
  employeeFirstName: 'Chris',
  employeeLastName: 'Halstead',
  email: 'chris_halstead@hotmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 106,
  employedAt: businessObjectId,
  employeeUsername: 'samir_patel',
  employeePassword: '123456',
  employeeFirstName: 'Samir',
  employeeLastName: 'Patel',
  email: 'samir_patel@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 107,
  employedAt: businessObjectId,
  employeeUsername: 'mike_anderson',
  employeePassword: '123456',
  employeeFirstName: 'Mike',
  employeeLastName: 'Anderson',
  email: 'mike_anderson@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Manager'
},
{
  employeeID: 108,
  employedAt: businessObjectId,
  employeeUsername: 'brad_valdes',
  employeePassword: '123456',
  employeeFirstName: 'Brad',
  employeeLastName: 'Valdes',
  email: 'brad_valdes@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 109,
  employedAt: businessObjectId,
  employeeUsername: 'james_wolf',
  employeePassword: '123456',
  employeeFirstName: 'James',
  employeeLastName: 'Wolf',
  email: 'james_wolf@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Manager'
},
{
  employeeID: 110,
  employedAt: businessObjectId,
  employeeUsername: 'sean_roberts',
  employeePassword: '123456',
  employeeFirstName: 'Sean',
  employeeLastName: 'Roberts',
  email: 'sean_roberts@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 111,
  employedAt: businessObjectId,
  employeeUsername: 'sean_hinson',
  employeePassword: '123456',
  employeeFirstName: 'Sean',
  employeeLastName: 'Hinson',
  email: 'sean_hinson@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 112,
  employedAt: businessObjectId,
  employeeUsername: 'josh_oneill',
  employeePassword: '123456',
  employeeFirstName: 'Josh',
  employeeLastName: 'O\'Neill',
  email: 'josh_oneill@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 113,
  employedAt: businessObjectId,
  employeeUsername: 'matt_hanson',
  employeePassword: '123456',
  employeeFirstName: 'Matt',
  employeeLastName: 'Hanson',
  email: 'matt_hanson@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 114,
  employedAt: businessObjectId,
  employeeUsername: 'zack_bussert',
  employeePassword: '123456',
  employeeFirstName: 'Zack',
  employeeLastName: 'Bussert',
  email: 'zack_bussert@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 115,
  employedAt: businessObjectId,
  employeeUsername: 'mike_lorrick',
  employeePassword: '123456',
  employeeFirstName: 'Mike',
  employeeLastName: 'Lorrick',
  email: 'mike_lorrick@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 116,
  employedAt: businessObjectId,
  employeeUsername: 'greg_royster',
  employeePassword: '123456',
  employeeFirstName: 'Greg',
  employeeLastName: 'Royster',
  email: 'greg_royster@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 117,
  employedAt: businessObjectId,
  employeeUsername: 'carlos_lopez',
  employeePassword: '123456',
  employeeFirstName: 'Carlos',
  employeeLastName: 'Lopez',
  email: 'carlos_lopez@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 118,
  employedAt: businessObjectId,
  employeeUsername: 'caleb_carlsen',
  employeePassword: '123456',
  employeeFirstName: 'Caleb',
  employeeLastName: 'Carlsen',
  email: 'caleb_carlsen@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 119,
  employedAt: businessObjectId,
  employeeUsername: 'justin_terry',
  employeePassword: '123456',
  employeeFirstName: 'Justin',
  employeeLastName: 'Terry',
  email: 'justin_terry@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 120,
  employedAt: businessObjectId,
  employeeUsername: 'jon_diamond',
  employeePassword: '123456',
  employeeFirstName: 'Jon',
  employeeLastName: 'Diamond',
  email: 'jon_diamond@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 121,
  employedAt: businessObjectId,
  employeeUsername: 'dwayne_steppe',
  employeePassword: '123456',
  employeeFirstName: 'Dwayne',
  employeeLastName: 'Steppe',
  email: 'dwayne_steppe@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 122,
  employedAt: businessObjectId,
  employeeUsername: 'brendan_mccourt',
  employeePassword: '123456',
  employeeFirstName: 'Brendan',
  employeeLastName: 'McCourt',
  email: 'brendan_mccourt@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 123,
  employedAt: businessObjectId,
  employeeUsername: 'brian_ruddock',
  employeePassword: '123456',
  employeeFirstName: 'Brian',
  employeeLastName: 'Ruddock',
  email: 'brian_ruddock@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 124,
  employedAt: businessObjectId,
  employeeUsername: 'eric_caraboolad',
  employeePassword: '123456',
  employeeFirstName: 'Eric',
  employeeLastName: 'Caraboolad',
  email: 'eric_caraboolad@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 125,
  employedAt: businessObjectId,
  employeeUsername: 'bryce_therrien',
  employeePassword: '123456',
  employeeFirstName: 'Bryce',
  employeeLastName: 'Therrien',
  email: 'bryce_therrien@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 126,
  employedAt: businessObjectId,
  employeeUsername: 'victor_ixhuatl',
  employeePassword: '123456',
  employeeFirstName: 'Victor',
  employeeLastName: 'Ixhuatl',
  email: 'victor_ixhuatl@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 127,
  employedAt: businessObjectId,
  employeeUsername: 'james_dolman',
  employeePassword: '123456',
  employeeFirstName: 'James',
  employeeLastName: 'Dolman',
  email: 'james_dolman@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 128,
  employedAt: businessObjectId,
  employeeUsername: 'mike_lowery',
  employeePassword: '123456',
  employeeFirstName: 'Mike',
  employeeLastName: 'Lowery',
  email: 'mike_lowery@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 129,
  employedAt: businessObjectId,
  employeeUsername: 'alex_gonzalez',
  employeePassword: '123456',
  employeeFirstName: 'Alex',
  employeeLastName: 'Gonzalez',
  email: 'alex_gonzalez@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 130,
  employedAt: businessObjectId,
  employeeUsername: 'jolene_lally',
  employeePassword: '123456',
  employeeFirstName: 'Jolene',
  employeeLastName: 'Lally',
  email: 'jolene_lally@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 131,
  employedAt: businessObjectId,
  employeeUsername: 'nop_smerasutra',
  employeePassword: '123456',
  employeeFirstName: 'Nop',
  employeeLastName: 'Smerasutra',
  email: 'nop_smerasutra@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 132,
  employedAt: businessObjectId,
  employeeUsername: 'michael_lambrinides',
  employeePassword: '123456',
  employeeFirstName: 'Michael',
  employeeLastName: 'Lambrinides',
  email: 'michael_lambrinides@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 133,
  employedAt: businessObjectId,
  employeeUsername: 'chris_knowles',
  employeePassword: '123456',
  employeeFirstName: 'Chris',
  employeeLastName: 'Knowles',
  email: 'chris_knowles@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 134,
  employedAt: businessObjectId,
  employeeUsername: 'amanda_knowles',
  employeePassword: '123456',
  employeeFirstName: 'Amanda',
  employeeLastName: 'Knowles',
  email: 'amanda_knowles@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 135,
  employedAt: businessObjectId,
  employeeUsername: 'shaun_miller',
  employeePassword: '123456',
  employeeFirstName: 'Shaun',
  employeeLastName: 'Miller',
  email: 'shaun_miller@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 136,
  employedAt: businessObjectId,
  employeeUsername: 'nick_kubr',
  employeePassword: '123456',
  employeeFirstName: 'Nick',
  employeeLastName: 'Kubr',
  email: 'nick_kubr@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 137,
  employedAt: businessObjectId,
  employeeUsername: 'patrick_olsen',
  employeePassword: '123456',
  employeeFirstName: 'Patrick',
  employeeLastName: 'Olsen',
  email: 'patrick_olsen@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 138,
  employedAt: businessObjectId,
  employeeUsername: 'alex_bernstein',
  employeePassword: '123456',
  employeeFirstName: 'Alex',
  employeeLastName: 'Bernstein',
  email: 'alex_bernstein@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 139,
  employedAt: businessObjectId,
  employeeUsername: 'mike_goldbach',
  employeePassword: '123456',
  employeeFirstName: 'Mike',
  employeeLastName: 'Goldbach',
  email: 'mike_goldbach@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 140,
  employedAt: businessObjectId,
  employeeUsername: 'michael_lawler',
  employeePassword: '123456',
  employeeFirstName: 'Michael',
  employeeLastName: 'Lawler',
  email: 'michael_lawler@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 141,
  employedAt: businessObjectId,
  employeeUsername: 'rob_groff',
  employeePassword: '123456',
  employeeFirstName: 'Rob',
  employeeLastName: 'Groff',
  email: 'rob_groff@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 142,
  employedAt: businessObjectId,
  employeeUsername: 'kevin_sexton',
  employeePassword: '123456',
  employeeFirstName: 'Kevin',
  employeeLastName: 'Sexton',
  email: 'kevin_sexton@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 143,
  employedAt: businessObjectId,
  employeeUsername: 'derek_furlong',
  employeePassword: '123456',
  employeeFirstName: 'Derek',
  employeeLastName: 'Furlong',
  email: 'derek_furlong@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 144,
  employedAt: businessObjectId,
  employeeUsername: 'ryan_peterson',
  employeePassword: '123456',
  employeeFirstName: 'Ryan',
  employeeLastName: 'Peterson',
  email: 'ryan_peterson@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 145,
  employedAt: businessObjectId,
  employeeUsername: 'adam_moore',
  employeePassword: '123456',
  employeeFirstName: 'Adam',
  employeeLastName: 'Moore',
  email: 'adam_moore@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 146,
  employedAt: businessObjectId,
  employeeUsername: 'jeff_welliver',
  employeePassword: '123456',
  employeeFirstName: 'Jeff',
  employeeLastName: 'Welliver',
  email: 'jeff_welliver@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 147,
  employedAt: businessObjectId,
  employeeUsername: 'josh_embler',
  employeePassword: '123456',
  employeeFirstName: 'Josh',
  employeeLastName: 'Embler',
  email: 'josh_embler@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 148,
  employedAt: businessObjectId,
  employeeUsername: 'brian_jarrell',
  employeePassword: '123456',
  employeeFirstName: 'Brian',
  employeeLastName: 'Jarrell',
  email: 'brian_jarrell@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
},
{
  employeeID: 149,
  employedAt: businessObjectId,
  employeeUsername: 'brent_collins',
  employeePassword: '123456',
  employeeFirstName: 'Brent',
  employeeLastName: 'Collins',
  email: 'brent_collins@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 150,
  employedAt: businessObjectId,
  employeeUsername: 'alex_szkaradek',
  employeePassword: '123456',
  employeeFirstName: 'Alex',
  employeeLastName: 'Szkaradek',
  email: 'alex_szkaradek.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 151,
  employedAt: businessObjectId,
  employeeUsername: 'jarrod_hileman',
  employeePassword: '123456',
  employeeFirstName: 'Jarrod',
  employeeLastName: 'Hileman',
  email: 'jarrod_hileman@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 152,
  employedAt: businessObjectId,
  employeeUsername: 'jason_bowie',
  employeePassword: '123456',
  employeeFirstName: 'Jason',
  employeeLastName: 'Bowie',
  email: 'jason_bowie@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 153,
  employedAt: businessObjectId,
  employeeUsername: 'gordon_fletcher',
  employeePassword: '123456',
  employeeFirstName: 'Gordon',
  employeeLastName: 'Fletcher',
  email: 'gordon_fletcher@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 154,
  employedAt: businessObjectId,
  employeeUsername: 'matt_simpson',
  employeePassword: '123456',
  employeeFirstName: 'Matt',
  employeeLastName: 'Simpson',
  email: 'matt_simpson@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 155,
  employedAt: businessObjectId,
  employeeUsername: 'mike_aguilar',
  employeePassword: '123456',
  employeeFirstName: 'Mike',
  employeeLastName: 'Aguilar',
  email: 'mike_aguilar@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 156,
  employedAt: businessObjectId,
  employeeUsername: 'mark_hunt',
  employeePassword: '123456',
  employeeFirstName: 'Mark',
  employeeLastName: 'Hunt',
  email: 'mark_hunt@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 157,
  employedAt: businessObjectId,
  employeeUsername: 'derek_hager',
  employeePassword: '123456',
  employeeFirstName: 'Derek',
  employeeLastName: 'Hager',
  email: 'derek_hager@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 158,
  employedAt: businessObjectId,
  employeeUsername: 'tom_talbott',
  employeePassword: '123456',
  employeeFirstName: 'Tom',
  employeeLastName: 'Talbott',
  email: 'tom_talbott@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 159,
  employedAt: businessObjectId,
  employeeUsername: 'jill_johnson',
  employeePassword: '123456',
  employeeFirstName: 'Jill',
  employeeLastName: 'Johnson',
  email: 'jill_johnson@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server-supervisor'
},
{
  employeeID: 160,
  employedAt: businessObjectId,
  employeeUsername: 'steven_swancoat',
  employeePassword: '123456',
  employeeFirstName: 'Steven',
  employeeLastName: 'Swancoat',
  email: 'steven_swancoat@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Server'
},
{
  employeeID: 161,
  employedAt: businessObjectId,
  employeeUsername: 'antonio_cerra',
  employeePassword: '123456',
  employeeFirstName: 'Antonio',
  employeeLastName: 'Cerra',
  email: 'antonio_cerra@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Assistant General Manager'
},
{
  employeeID: 162,
  employedAt: businessObjectId,
  employeeUsername: 'mario_cerra',
  employeePassword: '123456',
  employeeFirstName: 'Mario',
  employeeLastName: 'Cerra',
  email: 'mario_cerra@gmail.com',
  phoneNumber: '917-930-1570',
  employeeType: 'Wait Assistant'
}
];

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
