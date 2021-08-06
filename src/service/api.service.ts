export async function getTrue(){
    return fetch('https://gettrue.free.beeceptor.com')
    .then((response) => { return response });
}