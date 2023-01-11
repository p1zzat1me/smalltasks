let json = '{"id":2}';

try {

   let user = JSON.parse(json);
   console.log(user);

   if(!user.name){
    throw new Error('There is no name in this data');
   }
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log(`we received error: ${error.name}`);
} finally{
    console.log('Always works')
}
console.log('continue working');