const urls = [
    // 'https://goaxil.com/collections/ear-buds/products/gs-electronic.js',
    // 'https://therollingstonesshop.com/products/americana-tongue-unisex-black-t-shirt.js',
    // 'https://offhours.co/collections/shop-all/products/affogato-1.js',
    // 'https://www.danskin.com/products/calming-slip-on-sneaker.js',
    'https://www.url.fail/expected-error.js',
    ];

const fetchApi = async (apiUrl) => {
    try {
        let response = await fetch(apiUrl)
        console.log(response)
        if(response.ok) {
            let result = await response.json()
            return result
        } else {
            throw new Error('La petición a fallado')
        }
    } catch(e) {
        console.log('Error: ', e) 
    }
}

let resultado = {}
let customData = urls.forEach(async (url) => {
    let data = await fetchApi(url)

    let {id, groupId, title, brand, price, images} = data
    resultado[url] = {
        id,
        groupId,
        title,
        brand,
        price,
        images
    }
})
console.log(resultado) 





