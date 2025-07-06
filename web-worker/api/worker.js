self.onmessage =  async (e) => {
  console.log(e.data.message)//come from fetch html
  let result = await fetch('https://jsonplaceholder.typicode.com/photos')
  let final = await result.json()
  postMessage({result:final, message:'Loop is done.'})//send to fetch html
}