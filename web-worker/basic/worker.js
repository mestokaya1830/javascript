self.onmessage = e => {
  console.log(e.data.message)//come from fetch html
  let num = 0
  for (let i = 0; i < 5000000000; i++) {
    num += i
  }
  postMessage({result:num, message:'Loop is done.'})//send to fetch html
}