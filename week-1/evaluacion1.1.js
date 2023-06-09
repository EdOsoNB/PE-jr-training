const urls = [
  "https://goaxil.com/collections/ear-buds/products/gs-electronic.js",
  "https://therollingstonesshop.com/products/americana-tongue-unisex-black-t-shirt.js",
  "https://offhours.co/collections/shop-all/products/affogato-1.js",
  "https://www.danskin.com/products/calming-slip-on-sneaker.js",
  "https://www.url.fail/expected-error.js",
];

const fetchApi = async (apiUrl) => {
    try {
        const response = await fetch(apiUrl)
        if(!response.ok) throw new Error('La peticion fallo');
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

let response = {}
const fetchData = async (urls) => {
    const data = await Promise.all(urls.map(response => fetchApi(response)))
    urls.map((item, i) => {
        if(!data[i]) {
            response[item] = 'Error'
        } else {
            let {id, groupId, title, price, images, variants} = data[i]
            response[item] = {
                id,
                groupId,
                title,
                price,
                images,
                variants
            }
        }
    })
    console.log(response)
}

fetchData(urls)